import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def mybusiness_accounts_create(self, request: operations.MybusinessAccountsCreateRequest) -> operations.MybusinessAccountsCreateResponse:
        r"""Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/accounts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def mybusiness_accounts_generate_account_number(self, request: operations.MybusinessAccountsGenerateAccountNumberRequest) -> operations.MybusinessAccountsGenerateAccountNumberResponse:
        r"""Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:generateAccountNumber", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsGenerateAccountNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def mybusiness_accounts_invitations_accept(self, request: operations.MybusinessAccountsInvitationsAcceptRequest) -> operations.MybusinessAccountsInvitationsAcceptResponse:
        r"""Accepts the specified invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsInvitationsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_invitations_decline(self, request: operations.MybusinessAccountsInvitationsDeclineRequest) -> operations.MybusinessAccountsInvitationsDeclineResponse:
        r"""Declines the specified invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:decline", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsInvitationsDeclineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_invitations_list(self, request: operations.MybusinessAccountsInvitationsListRequest) -> operations.MybusinessAccountsInvitationsListResponse:
        r"""Lists pending invitations for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/invitations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsInvitationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInvitationsResponse])
                res.list_invitations_response = out

        return res

    
    def mybusiness_accounts_list(self, request: operations.MybusinessAccountsListRequest) -> operations.MybusinessAccountsListResponse:
        r"""Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountsResponse])
                res.list_accounts_response = out

        return res

    
    def mybusiness_accounts_list_recommend_google_locations(self, request: operations.MybusinessAccountsListRecommendGoogleLocationsRequest) -> operations.MybusinessAccountsListRecommendGoogleLocationsResponse:
        r"""List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:recommendGoogleLocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsListRecommendGoogleLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRecommendedGoogleLocationsResponse])
                res.list_recommended_google_locations_response = out

        return res

    
    def mybusiness_accounts_locations_admins_create(self, request: operations.MybusinessAccountsLocationsAdminsCreateRequest) -> operations.MybusinessAccountsLocationsAdminsCreateResponse:
        r"""Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/admins", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsAdminsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Admin])
                res.admin = out

        return res

    
    def mybusiness_accounts_locations_admins_list(self, request: operations.MybusinessAccountsLocationsAdminsListRequest) -> operations.MybusinessAccountsLocationsAdminsListResponse:
        r"""Lists all of the admins for the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/admins", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsAdminsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationAdminsResponse])
                res.list_location_admins_response = out

        return res

    
    def mybusiness_accounts_locations_associate(self, request: operations.MybusinessAccountsLocationsAssociateRequest) -> operations.MybusinessAccountsLocationsAssociateResponse:
        r"""Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:associate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsAssociateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_locations_batch_get(self, request: operations.MybusinessAccountsLocationsBatchGetRequest) -> operations.MybusinessAccountsLocationsBatchGetResponse:
        r"""Gets all of the specified locations in the given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}/locations:batchGet", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetLocationsResponse])
                res.batch_get_locations_response = out

        return res

    
    def mybusiness_accounts_locations_batch_get_reviews(self, request: operations.MybusinessAccountsLocationsBatchGetReviewsRequest) -> operations.MybusinessAccountsLocationsBatchGetReviewsResponse:
        r"""Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}/locations:batchGetReviews", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsBatchGetReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetReviewsResponse])
                res.batch_get_reviews_response = out

        return res

    
    def mybusiness_accounts_locations_clear_association(self, request: operations.MybusinessAccountsLocationsClearAssociationRequest) -> operations.MybusinessAccountsLocationsClearAssociationResponse:
        r"""Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:clearAssociation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsClearAssociationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_locations_create(self, request: operations.MybusinessAccountsLocationsCreateRequest) -> operations.MybusinessAccountsLocationsCreateResponse:
        r"""Creates a new location owned by the specified account, and returns it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/locations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out

        return res

    
    def mybusiness_accounts_locations_fetch_verification_options(self, request: operations.MybusinessAccountsLocationsFetchVerificationOptionsRequest) -> operations.MybusinessAccountsLocationsFetchVerificationOptionsResponse:
        r"""Reports all eligible verification options for a location in a specific language.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:fetchVerificationOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsFetchVerificationOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchVerificationOptionsResponse])
                res.fetch_verification_options_response = out

        return res

    
    def mybusiness_accounts_locations_find_matches(self, request: operations.MybusinessAccountsLocationsFindMatchesRequest) -> operations.MybusinessAccountsLocationsFindMatchesResponse:
        r"""Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:findMatches", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsFindMatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FindMatchingLocationsResponse])
                res.find_matching_locations_response = out

        return res

    
    def mybusiness_accounts_locations_get_google_updated(self, request: operations.MybusinessAccountsLocationsGetGoogleUpdatedRequest) -> operations.MybusinessAccountsLocationsGetGoogleUpdatedResponse:
        r"""Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:googleUpdated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsGetGoogleUpdatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleUpdatedLocation])
                res.google_updated_location = out

        return res

    
    def mybusiness_accounts_locations_insurance_networks_list(self, request: operations.MybusinessAccountsLocationsInsuranceNetworksListRequest) -> operations.MybusinessAccountsLocationsInsuranceNetworksListResponse:
        r"""Returns a list of all insurance networks supported by Google.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/insuranceNetworks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsInsuranceNetworksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInsuranceNetworksResponse])
                res.list_insurance_networks_response = out

        return res

    
    def mybusiness_accounts_locations_list(self, request: operations.MybusinessAccountsLocationsListRequest) -> operations.MybusinessAccountsLocationsListResponse:
        r"""Lists the locations for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def mybusiness_accounts_locations_local_posts_create(self, request: operations.MybusinessAccountsLocationsLocalPostsCreateRequest) -> operations.MybusinessAccountsLocationsLocalPostsCreateResponse:
        r"""Creates a new local post associated with the specified location, and returns it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/localPosts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsLocalPostsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocalPost])
                res.local_post = out

        return res

    
    def mybusiness_accounts_locations_local_posts_list(self, request: operations.MybusinessAccountsLocationsLocalPostsListRequest) -> operations.MybusinessAccountsLocationsLocalPostsListResponse:
        r"""Returns a list of local posts associated with a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/localPosts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsLocalPostsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocalPostsResponse])
                res.list_local_posts_response = out

        return res

    
    def mybusiness_accounts_locations_local_posts_report_insights(self, request: operations.MybusinessAccountsLocationsLocalPostsReportInsightsRequest) -> operations.MybusinessAccountsLocationsLocalPostsReportInsightsResponse:
        r"""Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}/localPosts:reportInsights", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsLocalPostsReportInsightsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportLocalPostInsightsResponse])
                res.report_local_post_insights_response = out

        return res

    
    def mybusiness_accounts_locations_lodging_get_google_updated(self, request: operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedRequest) -> operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedResponse:
        r"""Returns the Google updated Lodging of a specific location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:getGoogleUpdated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsLodgingGetGoogleUpdatedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetGoogleUpdatedLodgingResponse])
                res.get_google_updated_lodging_response = out

        return res

    
    def mybusiness_accounts_locations_media_create(self, request: operations.MybusinessAccountsLocationsMediaCreateRequest) -> operations.MybusinessAccountsLocationsMediaCreateResponse:
        r"""Creates a new media item for the location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/media", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsMediaCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaItem])
                res.media_item = out

        return res

    
    def mybusiness_accounts_locations_media_customers_list(self, request: operations.MybusinessAccountsLocationsMediaCustomersListRequest) -> operations.MybusinessAccountsLocationsMediaCustomersListResponse:
        r"""Returns a list of media items associated with a location that have been contributed by customers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/media/customers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsMediaCustomersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomerMediaItemsResponse])
                res.list_customer_media_items_response = out

        return res

    
    def mybusiness_accounts_locations_media_list(self, request: operations.MybusinessAccountsLocationsMediaListRequest) -> operations.MybusinessAccountsLocationsMediaListResponse:
        r"""Returns a list of media items associated with a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsMediaListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMediaItemsResponse])
                res.list_media_items_response = out

        return res

    
    def mybusiness_accounts_locations_media_start_upload(self, request: operations.MybusinessAccountsLocationsMediaStartUploadRequest) -> operations.MybusinessAccountsLocationsMediaStartUploadResponse:
        r"""Generates a `MediaItemDataRef` for media item uploading.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/media:startUpload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsMediaStartUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MediaItemDataRef])
                res.media_item_data_ref = out

        return res

    
    def mybusiness_accounts_locations_questions_answers_delete(self, request: operations.MybusinessAccountsLocationsQuestionsAnswersDeleteRequest) -> operations.MybusinessAccountsLocationsQuestionsAnswersDeleteResponse:
        r"""Deletes the answer written by the current user to a question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/answers:delete", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsAnswersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_locations_questions_answers_list(self, request: operations.MybusinessAccountsLocationsQuestionsAnswersListRequest) -> operations.MybusinessAccountsLocationsQuestionsAnswersListResponse:
        r"""Returns the paginated list of answers for a specified question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsAnswersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAnswersResponse])
                res.list_answers_response = out

        return res

    
    def mybusiness_accounts_locations_questions_answers_upsert(self, request: operations.MybusinessAccountsLocationsQuestionsAnswersUpsertRequest) -> operations.MybusinessAccountsLocationsQuestionsAnswersUpsertResponse:
        r"""Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/answers:upsert", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsAnswersUpsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Answer])
                res.answer = out

        return res

    
    def mybusiness_accounts_locations_questions_create(self, request: operations.MybusinessAccountsLocationsQuestionsCreateRequest) -> operations.MybusinessAccountsLocationsQuestionsCreateResponse:
        r"""Adds a question for the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/questions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Question])
                res.question = out

        return res

    
    def mybusiness_accounts_locations_questions_delete(self, request: operations.MybusinessAccountsLocationsQuestionsDeleteRequest) -> operations.MybusinessAccountsLocationsQuestionsDeleteResponse:
        r"""Deletes a specific question written by the current user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_locations_questions_list(self, request: operations.MybusinessAccountsLocationsQuestionsListRequest) -> operations.MybusinessAccountsLocationsQuestionsListResponse:
        r"""Returns the paginated list of questions and some of its answers for a specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/questions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListQuestionsResponse])
                res.list_questions_response = out

        return res

    
    def mybusiness_accounts_locations_questions_patch(self, request: operations.MybusinessAccountsLocationsQuestionsPatchRequest) -> operations.MybusinessAccountsLocationsQuestionsPatchResponse:
        r"""Updates a specific question written by the current user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsQuestionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Question])
                res.question = out

        return res

    
    def mybusiness_accounts_locations_report_insights(self, request: operations.MybusinessAccountsLocationsReportInsightsRequest) -> operations.MybusinessAccountsLocationsReportInsightsResponse:
        r"""Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}/locations:reportInsights", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsReportInsightsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportLocationInsightsResponse])
                res.report_location_insights_response = out

        return res

    
    def mybusiness_accounts_locations_reviews_delete_reply(self, request: operations.MybusinessAccountsLocationsReviewsDeleteReplyRequest) -> operations.MybusinessAccountsLocationsReviewsDeleteReplyResponse:
        r"""Deletes the response to the specified review. This operation is only valid if the specified location is verified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}/reply", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsReviewsDeleteReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusiness_accounts_locations_reviews_list(self, request: operations.MybusinessAccountsLocationsReviewsListRequest) -> operations.MybusinessAccountsLocationsReviewsListResponse:
        r"""Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsReviewsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReviewsResponse])
                res.list_reviews_response = out

        return res

    
    def mybusiness_accounts_locations_reviews_update_reply(self, request: operations.MybusinessAccountsLocationsReviewsUpdateReplyRequest) -> operations.MybusinessAccountsLocationsReviewsUpdateReplyResponse:
        r"""Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}/reply", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsReviewsUpdateReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReviewReply])
                res.review_reply = out

        return res

    
    def mybusiness_accounts_locations_transfer(self, request: operations.MybusinessAccountsLocationsTransferRequest) -> operations.MybusinessAccountsLocationsTransferResponse:
        r"""Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:transfer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out

        return res

    
    def mybusiness_accounts_locations_verifications_complete(self, request: operations.MybusinessAccountsLocationsVerificationsCompleteRequest) -> operations.MybusinessAccountsLocationsVerificationsCompleteResponse:
        r"""Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:complete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsVerificationsCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteVerificationResponse])
                res.complete_verification_response = out

        return res

    
    def mybusiness_accounts_locations_verifications_list(self, request: operations.MybusinessAccountsLocationsVerificationsListRequest) -> operations.MybusinessAccountsLocationsVerificationsListResponse:
        r"""List verifications of a location, ordered by create time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{parent}/verifications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsVerificationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVerificationsResponse])
                res.list_verifications_response = out

        return res

    
    def mybusiness_accounts_locations_verify(self, request: operations.MybusinessAccountsLocationsVerifyRequest) -> operations.MybusinessAccountsLocationsVerifyResponse:
        r"""Starts the verification process for a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}:verify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsLocationsVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyLocationResponse])
                res.verify_location_response = out

        return res

    
    def mybusiness_accounts_update_notifications(self, request: operations.MybusinessAccountsUpdateNotificationsRequest) -> operations.MybusinessAccountsUpdateNotificationsResponse:
        r"""Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessAccountsUpdateNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Notifications])
                res.notifications = out

        return res

    