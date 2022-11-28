

import requests
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://market.openchannel.io/v2",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_apps_app_id_(self, request: operations.DeleteAppsAppIDRequest) -> operations.DeleteAppsAppIDResponse:
        r"""Removes app and all versions
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 404:
            pass

        return res

    
    def delete_apps_app_id_versions_version_(self, request: operations.DeleteAppsAppIDVersionsVersionRequest) -> operations.DeleteAppsAppIDVersionsVersionResponse:
        r"""Removes AppVersion
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/versions/{version}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAppsAppIDVersionsVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 404:
            pass

        return res

    
    def delete_developer_accounts_developer_account_id_(self, request: operations.DeleteDeveloperAccountsDeveloperAccountIDRequest) -> operations.DeleteDeveloperAccountsDeveloperAccountIDResponse:
        r"""Removes the developer account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            pass

        return res

    
    def delete_developers_developer_id_(self, request: operations.DeleteDevelopersDeveloperIDRequest) -> operations.DeleteDevelopersDeveloperIDResponse:
        r"""Removes a single developer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            pass

        return res

    
    def delete_permission_apps_app_id_(self, request: operations.DeletePermissionAppsAppIDRequest) -> operations.DeletePermissionAppsAppIDResponse:
        r"""Removes permission that allows the app to access this user's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permission/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePermissionAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_reviews_review_id_(self, request: operations.DeleteReviewsReviewIDRequest) -> operations.DeleteReviewsReviewIDResponse:
        r"""Remove a review
        - Only the review author is able to remove their review
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def delete_stripe_gateway_developer_developer_id_accounts_stripe_id_(self, request: operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest) -> operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse:
        r"""Disconnects a developer's Stripe account
        
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/developer/{developerId}/accounts/{stripeId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def delete_stripe_gateway_user_user_id_cards_card_id_(self, request: operations.DeleteStripeGatewayUserUserIDCardsCardIDRequest) -> operations.DeleteStripeGatewayUserUserIDCardsCardIDResponse:
        r"""Removes a credit card for a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards/{cardId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStripeGatewayUserUserIDCardsCardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def delete_transactions_transaction_id_(self, request: operations.DeleteTransactionsTransactionIDRequest) -> operations.DeleteTransactionsTransactionIDResponse:
        r"""Deleted a transaction
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def delete_user_accounts_user_account_id_(self, request: operations.DeleteUserAccountsUserAccountIDRequest) -> operations.DeleteUserAccountsUserAccountIDResponse:
        r"""Removes the user account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            pass

        return res

    
    def delete_users_user_id_(self, request: operations.DeleteUsersUserIDRequest) -> operations.DeleteUsersUserIDResponse:
        r"""Removes a single user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            pass

        return res

    
    def get_apps(self, request: operations.GetAppsRequest) -> operations.GetAppsResponse:
        r"""Returns a paginated list of APPROVED or SUSPENDED apps
        - Results are paginated and the default is value is 1000 if no limit is provided
        - If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_apps_app_id_(self, request: operations.GetAppsAppIDRequest) -> operations.GetAppsAppIDResponse:
        r"""Returns a single APPROVED or SUSPENDED app
        - A 'view' event is recorded when trackViews is set to true
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_apps_app_id_versions_version_(self, request: operations.GetAppsAppIDVersionsVersionRequest) -> operations.GetAppsAppIDVersionsVersionResponse:
        r"""Returns a single AppVersion
        - Only returns AppVersions owned by this developer
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/versions/{version}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsAppIDVersionsVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_apps_by_safe_name_safe_name_(self, request: operations.GetAppsBySafeNameSafeNameRequest) -> operations.GetAppsBySafeNameSafeNameResponse:
        r"""Returns a single APPROVED or SUSPENDED app
        - A 'view' event is recorded when trackViews is set to true
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/bySafeName/{safeName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsBySafeNameSafeNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_apps_text_search(self, request: operations.GetAppsTextSearchRequest) -> operations.GetAppsTextSearchResponse:
        r"""Searches through the text of fields to find APPROVED or SUSPENDED apps
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/textSearch"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsTextSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_apps_versions(self, request: operations.GetAppsVersionsRequest) -> operations.GetAppsVersionsResponse:
        r"""Returns a paginated list of AppVersions
        - Results are paginated when limit is set, otherwise all results are returned
        - If no query is specified, returns all AppVersions within the marketplace
        - Only returns AppVersions owned by this developer
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/versions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAppsVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_developer_accounts(self, request: operations.GetDeveloperAccountsRequest) -> operations.GetDeveloperAccountsResponse:
        r"""Returns a paginated list of developerAccounts
        - Results are paginated and the default is value is 1000 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/developerAccounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeveloperAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_developer_accounts_developer_account_id_(self, request: operations.GetDeveloperAccountsDeveloperAccountIDRequest) -> operations.GetDeveloperAccountsDeveloperAccountIDResponse:
        r"""Returns a single developer account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_developers(self, request: operations.GetDevelopersRequest) -> operations.GetDevelopersResponse:
        r"""Returns a paginated list of developers
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/developers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevelopersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_developers_developer_id_(self, request: operations.GetDevelopersDeveloperIDRequest) -> operations.GetDevelopersDeveloperIDResponse:
        r"""Returns a single developer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_events_event_id_(self, request: operations.GetEventsEventIDRequest) -> operations.GetEventsEventIDResponse:
        r"""Returns an event
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/events/{eventId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsEventIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files(self, request: operations.GetFilesRequest) -> operations.GetFilesResponse:
        r"""Returns a paginated list of files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_by_id_or_url(self, request: operations.GetFilesByIDOrURLRequest) -> operations.GetFilesByIDOrURLResponse:
        r"""Get the details for a file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/byIdOrUrl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesByIDOrURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_files_download(self, request: operations.GetFilesDownloadRequest) -> operations.GetFilesDownloadResponse:
        r"""A signed URL for downloading a private file can be returned by providing the fileId.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/download"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_markets_this(self) -> operations.GetMarketsThisResponse:
        r"""Returns the current marketplace
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/markets/this"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarketsThisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_ownership(self, request: operations.GetOwnershipRequest) -> operations.GetOwnershipResponse:
        r"""Returns a paginated list of app licenses
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ownership"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_ownership_ownership_id_(self, request: operations.GetOwnershipOwnershipIDRequest) -> operations.GetOwnershipOwnershipIDResponse:
        r"""Returns an ownership record
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/{ownershipId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnershipOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_permission_apps_app_id_(self, request: operations.GetPermissionAppsAppIDRequest) -> operations.GetPermissionAppsAppIDResponse:
        r"""Returns permission that allows the app to access this user's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permission/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPermissionAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_reviews(self, request: operations.GetReviewsRequest) -> operations.GetReviewsResponse:
        r"""Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reviews"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_reviews_review_id_(self, request: operations.GetReviewsReviewIDRequest) -> operations.GetReviewsReviewIDResponse:
        r"""Find a Review within a particular App and marketplace
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stats_series_period_fields_(self, request: operations.GetStatsSeriesPeriodFieldsRequest) -> operations.GetStatsSeriesPeriodFieldsResponse:
        r"""Return a timeseries for a particular field
        Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/series/{period}/{fields}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsSeriesPeriodFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stats_total(self, request: operations.GetStatsTotalRequest) -> operations.GetStatsTotalResponse:
        r"""Returns the total number of events for a particular field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/total"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsTotalResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stripe_gateway_developer_developer_id_accounts(self, request: operations.GetStripeGatewayDeveloperDeveloperIDAccountsRequest) -> operations.GetStripeGatewayDeveloperDeveloperIDAccountsResponse:
        r"""Returns a developers connected Stripe accounts
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/developer/{developerId}/accounts", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStripeGatewayDeveloperDeveloperIDAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_stripe_gateway_user_user_id_cards(self, request: operations.GetStripeGatewayUserUserIDCardsRequest) -> operations.GetStripeGatewayUserUserIDCardsResponse:
        r"""Returns credit cards for this user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStripeGatewayUserUserIDCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_transactions(self, request: operations.GetTransactionsRequest) -> operations.GetTransactionsResponse:
        r"""Returns a paginated list of transactions
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/transactions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_transactions_transaction_id_(self, request: operations.GetTransactionsTransactionIDRequest) -> operations.GetTransactionsTransactionIDResponse:
        r"""Returns a transaction
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass

        return res

    
    def get_user_accounts(self, request: operations.GetUserAccountsRequest) -> operations.GetUserAccountsResponse:
        r"""Returns a paginated list of userAccounts
        - Results are paginated and the default is value is 1000 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/userAccounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_user_accounts_user_account_id_(self, request: operations.GetUserAccountsUserAccountIDRequest) -> operations.GetUserAccountsUserAccountIDResponse:
        r"""Returns a single user account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_users(self, request: operations.GetUsersRequest) -> operations.GetUsersResponse:
        r"""Returns a paginated list of users
        - Results are paginated and the default is value is 100 if no limit is provided
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_users_user_id_(self, request: operations.GetUsersUserIDRequest) -> operations.GetUsersUserIDResponse:
        r"""Return a single user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_apps_app_id_versions_version_(self, request: operations.PatchAppsAppIDVersionsVersionRequest) -> operations.PatchAppsAppIDVersionsVersionResponse:
        r"""Updates the app fields or creates a new version
        - This method is called on behalf of a developer.
        - Price and is required if the model is 'single' or 'recurring'
        - Returns the newly updated app
        - This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/versions/{version}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAppsAppIDVersionsVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_developer_accounts_developer_account_id_(self, request: operations.PatchDeveloperAccountsDeveloperAccountIDRequest) -> operations.PatchDeveloperAccountsDeveloperAccountIDResponse:
        r"""Updates the developer account fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_developers_developer_id_(self, request: operations.PatchDevelopersDeveloperIDRequest) -> operations.PatchDevelopersDeveloperIDResponse:
        r"""Updates the developer fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_ownership_ownership_id_(self, request: operations.PatchOwnershipOwnershipIDRequest) -> operations.PatchOwnershipOwnershipIDResponse:
        r"""Updates ownership fields
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchOwnershipOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_reviews_review_id_(self, request: operations.PatchReviewsReviewIDRequest) -> operations.PatchReviewsReviewIDResponse:
        r"""Update a review fields
        - Only the review author is able to update their review
        - Returns the newly updated review
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_user_accounts_user_account_id_(self, request: operations.PatchUserAccountsUserAccountIDRequest) -> operations.PatchUserAccountsUserAccountIDResponse:
        r"""Updates the user account fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def patch_users_user_id_(self, request: operations.PatchUsersUserIDRequest) -> operations.PatchUsersUserIDResponse:
        r"""Updates user fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_apps(self, request: operations.PostAppsRequest) -> operations.PostAppsResponse:
        r"""Adds a new app for this developer
        - This method is called on behalf of a developer.
        - Price is required if the model is 'single' or 'recurring'
        - Returns the newly created app
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAppsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_apps_app_id_live(self, request: operations.PostAppsAppIDLiveRequest) -> operations.PostAppsAppIDLiveResponse:
        r"""Change the live app to another, previously approved version
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/live", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAppsAppIDLiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_apps_app_id_publish(self, request: operations.PostAppsAppIDPublishRequest) -> operations.PostAppsAppIDPublishResponse:
        r"""Publishes the current working version of the app to the marketplace
        - This method is called on behalf of a developer. 
        - Only effects the current working version of the app.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/publish", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAppsAppIDPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def post_apps_app_id_versions_version_(self, request: operations.PostAppsAppIDVersionsVersionRequest) -> operations.PostAppsAppIDVersionsVersionResponse:
        r"""Updates the app or creates a new version
        - This method is called on behalf of a developer.
        - Price and is required if the model is 'single' or 'recurring'
        - Returns the newly updated app
        - This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/versions/{version}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAppsAppIDVersionsVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_apps_app_id_versions_version_status(self, request: operations.PostAppsAppIDVersionsVersionStatusRequest) -> operations.PostAppsAppIDVersionsVersionStatusResponse:
        r"""Allows a developer or administrator to change the status of apps
        Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/{appId}/versions/{version}/status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAppsAppIDVersionsVersionStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 412:
            pass

        return res

    
    def post_custom_gateway_payment_ownership_id_(self, request: operations.PostCustomGatewayPaymentOwnershipIDRequest) -> operations.PostCustomGatewayPaymentOwnershipIDResponse:
        r"""Adds a payment for an app on behalf of a user
        - Results are returned for the market provided within the basic authentication credentials 
        - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom-gateway/payment/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomGatewayPaymentOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_custom_gateway_refund_ownership_id_(self, request: operations.PostCustomGatewayRefundOwnershipIDRequest) -> operations.PostCustomGatewayRefundOwnershipIDResponse:
        r"""Fully or partially refund payment for an app on behalf of a user
        - Results are returned for the market provided within the basic authentication credentials
        - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom-gateway/refund/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomGatewayRefundOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_developer_accounts_developer_account_id_(self, request: operations.PostDeveloperAccountsDeveloperAccountIDRequest) -> operations.PostDeveloperAccountsDeveloperAccountIDResponse:
        r"""Updates the developer account or adds the developer account if it doesn't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developerAccounts/{developerAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeveloperAccountsDeveloperAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_developers_developer_id_(self, request: operations.PostDevelopersDeveloperIDRequest) -> operations.PostDevelopersDeveloperIDResponse:
        r"""Updates the developer record or adds the developer if it doesn't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/developers/{developerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDevelopersDeveloperIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files(self, request: operations.PostFilesRequest) -> operations.PostFilesResponse:
        r"""Uploads a file.
        - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_files_url(self, request: operations.PostFilesURLRequest) -> operations.PostFilesURLResponse:
        r"""Uploads a file from a URL
        - WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
        - This method is called on behalf of a developer.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/files/url"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFilesURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_ownership_install(self, request: operations.PostOwnershipInstallRequest) -> operations.PostOwnershipInstallResponse:
        r"""Aquires an app license for a user (installs app)
         - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ownership/install"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOwnershipInstallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_ownership_ownership_id_(self, request: operations.PostOwnershipOwnershipIDRequest) -> operations.PostOwnershipOwnershipIDResponse:
        r"""Updates an ownership record
         - Results are returned for the market provided within the basic authentication credentials 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOwnershipOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_ownership_uninstall_ownership_id_(self, request: operations.PostOwnershipUninstallOwnershipIDRequest) -> operations.PostOwnershipUninstallOwnershipIDResponse:
        r"""Uninstalls a license for a particular user and app (uninstalls app)
         - This method is called on behalf of a user - User data and statistics are recorded when this method is called 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ownership/uninstall/{ownershipId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOwnershipUninstallOwnershipIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_permission_apps_app_id_(self, request: operations.PostPermissionAppsAppIDRequest) -> operations.PostPermissionAppsAppIDResponse:
        r"""Adds permission to allow the app to access this user's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permission/apps/{appId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPermissionAppsAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_reviews(self, request: operations.PostReviewsRequest) -> operations.PostReviewsResponse:
        r"""Post a review from a User and returns the new post
        - Only authenticated users are able to post reviews
        - Returns the newly created review
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reviews"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 409:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_reviews_review_id_(self, request: operations.PostReviewsReviewIDRequest) -> operations.PostReviewsReviewIDResponse:
        r"""Update a review from a User and returns the new post
        - Only the review author is able to update their review
        - Returns the newly updated review
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews/{reviewId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReviewsReviewIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stats_increment_field_(self, request: operations.PostStatsIncrementFieldRequest) -> operations.PostStatsIncrementFieldResponse:
        r"""Increments a statistics field
        increment a statistics field
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/increment/{field}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStatsIncrementFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_stripe_gateway_developer_developer_id_accounts(self, request: operations.PostStripeGatewayDeveloperDeveloperIDAccountsRequest) -> operations.PostStripeGatewayDeveloperDeveloperIDAccountsResponse:
        r"""Generate a temporary URL to allow a developer to connect their Stripe account
        - Results are returned for the market provided within the basic authentication credentials 
        - The URL generated by this method is only valid for 48 hours.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/developer/{developerId}/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStripeGatewayDeveloperDeveloperIDAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stripe_gateway_user_user_id_cards(self, request: operations.PostStripeGatewayUserUserIDCardsRequest) -> operations.PostStripeGatewayUserUserIDCardsResponse:
        r"""Adds credit card for this user
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStripeGatewayUserUserIDCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_stripe_gateway_user_user_id_cards_card_id_(self, request: operations.PostStripeGatewayUserUserIDCardsCardIDRequest) -> operations.PostStripeGatewayUserUserIDCardsCardIDResponse:
        r"""Updates a credit card for this user
        
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stripe-gateway/user/{userId}/cards/{cardId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStripeGatewayUserUserIDCardsCardIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 412:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_transactions_transaction_id_(self, request: operations.PostTransactionsTransactionIDRequest) -> operations.PostTransactionsTransactionIDResponse:
        r"""Updates a transaction
        - Results are returned for the market provided within the basic authentication credentials
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/transactions/{transactionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTransactionsTransactionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_user_accounts_user_account_id_(self, request: operations.PostUserAccountsUserAccountIDRequest) -> operations.PostUserAccountsUserAccountIDResponse:
        r"""Updates the user account or adds the user account if it doesn't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userAccounts/{userAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserAccountsUserAccountIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_users_user_id_(self, request: operations.PostUsersUserIDRequest) -> operations.PostUsersUserIDResponse:
        r"""Updates a single user or adds the user if they don't exist
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    