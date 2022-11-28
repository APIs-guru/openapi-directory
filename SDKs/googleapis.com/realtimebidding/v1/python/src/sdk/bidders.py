import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Bidders:
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

    
    def realtimebidding_bidders_creatives_watch(self, request: operations.RealtimebiddingBiddersCreativesWatchRequest) -> operations.RealtimebiddingBiddersCreativesWatchResponse:
        r"""Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/creatives:watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersCreativesWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WatchCreativesResponse])
                res.watch_creatives_response = out

        return res

    
    def realtimebidding_bidders_endpoints_list(self, request: operations.RealtimebiddingBiddersEndpointsListRequest) -> operations.RealtimebiddingBiddersEndpointsListResponse:
        r"""Lists all the bidder's endpoints.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/endpoints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersEndpointsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEndpointsResponse])
                res.list_endpoints_response = out

        return res

    
    def realtimebidding_bidders_list(self, request: operations.RealtimebiddingBiddersListRequest) -> operations.RealtimebiddingBiddersListResponse:
        r"""Lists all the bidder accounts that belong to the caller.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/bidders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBiddersResponse])
                res.list_bidders_response = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_activate(self, request: operations.RealtimebiddingBiddersPretargetingConfigsActivateRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse:
        r"""Activates a pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_add_targeted_apps(self, request: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse:
        r"""Adds targeted apps to the pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{pretargetingConfig}:addTargetedApps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_add_targeted_publishers(self, request: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse:
        r"""Adds targeted publishers to the pretargeting config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{pretargetingConfig}:addTargetedPublishers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_add_targeted_sites(self, request: operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse:
        r"""Adds targeted sites to the pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{pretargetingConfig}:addTargetedSites", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_create(self, request: operations.RealtimebiddingBiddersPretargetingConfigsCreateRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse:
        r"""Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/pretargetingConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_delete(self, request: operations.RealtimebiddingBiddersPretargetingConfigsDeleteRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse:
        r"""Deletes a pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_list(self, request: operations.RealtimebiddingBiddersPretargetingConfigsListRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsListResponse:
        r"""Lists all pretargeting configurations for a single bidder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/pretargetingConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPretargetingConfigsResponse])
                res.list_pretargeting_configs_response = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_remove_targeted_apps(self, request: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse:
        r"""Removes targeted apps from the pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{pretargetingConfig}:removeTargetedApps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_remove_targeted_publishers(self, request: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse:
        r"""Removes targeted publishers from the pretargeting config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{pretargetingConfig}:removeTargetedPublishers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_remove_targeted_sites(self, request: operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse:
        r"""Removes targeted sites from the pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{pretargetingConfig}:removeTargetedSites", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_pretargeting_configs_suspend(self, request: operations.RealtimebiddingBiddersPretargetingConfigsSuspendRequest) -> operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse:
        r"""Suspends a pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:suspend", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def realtimebidding_bidders_publisher_connections_batch_approve(self, request: operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest) -> operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse:
        r"""Batch approves multiple publisher connections.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/publisherConnections:batchApprove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchApprovePublisherConnectionsResponse])
                res.batch_approve_publisher_connections_response = out

        return res

    
    def realtimebidding_bidders_publisher_connections_batch_reject(self, request: operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest) -> operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse:
        r"""Batch rejects multiple publisher connections.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/publisherConnections:batchReject", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchRejectPublisherConnectionsResponse])
                res.batch_reject_publisher_connections_response = out

        return res

    
    def realtimebidding_bidders_publisher_connections_list(self, request: operations.RealtimebiddingBiddersPublisherConnectionsListRequest) -> operations.RealtimebiddingBiddersPublisherConnectionsListResponse:
        r"""Lists publisher connections for a given bidder.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/publisherConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersPublisherConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPublisherConnectionsResponse])
                res.list_publisher_connections_response = out

        return res

    