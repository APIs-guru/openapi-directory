

import requests
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://jellyfin.local",
	"http://localhost",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def activate(self, request: operations.ActivateRequest) -> operations.ActivateResponse:
        r"""Temporarily activates quick connect for five minutes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Activate"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def add_listing_provider(self, request: operations.AddListingProviderRequest) -> operations.AddListingProviderResponse:
        r"""Adds a listings provider.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ListingProviders"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddListingProviderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsProviderInfo])
                res.listings_provider_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsProviderInfo])
                res.listings_provider_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsProviderInfo])
                res.listings_provider_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def add_media_path(self, request: operations.AddMediaPathRequest) -> operations.AddMediaPathResponse:
        r"""Add a media path to a library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders/Paths"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddMediaPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def add_to_collection(self, request: operations.AddToCollectionRequest) -> operations.AddToCollectionResponse:
        r"""Adds items to a collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Collections/{collectionId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AddToCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def add_to_playlist(self, request: operations.AddToPlaylistRequest) -> operations.AddToPlaylistResponse:
        r"""Adds items to a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Playlists/{playlistId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AddToPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def add_tuner_host(self, request: operations.AddTunerHostRequest) -> operations.AddTunerHostResponse:
        r"""Adds a tuner host.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/TunerHosts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTunerHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TunerHostInfo])
                res.tuner_host_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TunerHostInfo])
                res.tuner_host_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TunerHostInfo])
                res.tuner_host_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def add_user_to_session(self, request: operations.AddUserToSessionRequest) -> operations.AddUserToSessionResponse:
        r"""Adds an additional user to a session.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/User/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddUserToSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def add_virtual_folder(self, request: operations.AddVirtualFolderRequest) -> operations.AddVirtualFolderResponse:
        r"""Adds a virtual folder.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVirtualFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def apply_search_criteria(self, request: operations.ApplySearchCriteriaRequest) -> operations.ApplySearchCriteriaResponse:
        r"""Applies search criteria to an item and refreshes metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/RemoteSearch/Apply/{itemId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplySearchCriteriaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def authenticate_user(self, request: operations.AuthenticateUserRequest) -> operations.AuthenticateUserResponse:
        r"""Authenticates a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Authenticate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def authenticate_user_by_name(self, request: operations.AuthenticateUserByNameRequest) -> operations.AuthenticateUserByNameResponse:
        r"""Authenticates a user by name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/AuthenticateByName"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticateUserByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out

        return res

    
    def authenticate_with_quick_connect(self, request: operations.AuthenticateWithQuickConnectRequest) -> operations.AuthenticateWithQuickConnectResponse:
        r"""Authenticates a user with quick connect.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/AuthenticateWithQuickConnect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticateWithQuickConnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationResult])
                res.authentication_result = out
        elif r.status_code == 400:
            pass

        return res

    
    def authorize(self, request: operations.AuthorizeRequest) -> operations.AuthorizeResponse:
        r"""Authorizes a pending quick connect request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Authorize"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.authorize_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.authorize_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.authorize_200_application_json_boolean = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def available(self, request: operations.AvailableRequest) -> operations.AvailableResponse:
        r"""Enables or disables quick connect.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Available"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvailableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def cancel_package_installation(self, request: operations.CancelPackageInstallationRequest) -> operations.CancelPackageInstallationResponse:
        r"""Cancels a package installation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Packages/Installing/{packageId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelPackageInstallationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def cancel_series_timer(self, request: operations.CancelSeriesTimerRequest) -> operations.CancelSeriesTimerResponse:
        r"""Cancels a live tv series timer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/SeriesTimers/{timerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelSeriesTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def cancel_timer(self, request: operations.CancelTimerRequest) -> operations.CancelTimerResponse:
        r"""Cancels a live tv timer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Timers/{timerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def close_live_stream(self, request: operations.CloseLiveStreamRequest) -> operations.CloseLiveStreamResponse:
        r"""Closes a media source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveStreams/Close"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloseLiveStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def complete_wizard(self, request: operations.CompleteWizardRequest) -> operations.CompleteWizardResponse:
        r"""Completes the startup wizard.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/Complete"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompleteWizardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def connect(self, request: operations.ConnectRequest) -> operations.ConnectResponse:
        r"""Attempts to retrieve authentication information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Connect"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectResult])
                res.quick_connect_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectResult])
                res.quick_connect_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectResult])
                res.quick_connect_result = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def create_admin_notification(self, request: operations.CreateAdminNotificationRequest) -> operations.CreateAdminNotificationResponse:
        r"""Sends a notification to all admins.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Notifications/Admin"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAdminNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_collection(self, request: operations.CreateCollectionRequest) -> operations.CreateCollectionResponse:
        r"""Creates a new collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Collections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionCreationResult])
                res.collection_creation_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionCreationResult])
                res.collection_creation_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.CollectionCreationResult])
                res.collection_creation_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_key(self, request: operations.CreateKeyRequest) -> operations.CreateKeyResponse:
        r"""Create a new api key.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Auth/Keys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_playlist(self, request: operations.CreatePlaylistRequest) -> operations.CreatePlaylistResponse:
        r"""Creates a new playlist.
        For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Playlists"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistCreationResult])
                res.playlist_creation_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistCreationResult])
                res.playlist_creation_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistCreationResult])
                res.playlist_creation_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_profile(self, request: operations.CreateProfileRequest) -> operations.CreateProfileResponse:
        r"""Creates a profile.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Dlna/Profiles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_series_timer(self, request: operations.CreateSeriesTimerRequest) -> operations.CreateSeriesTimerResponse:
        r"""Creates a live tv series timer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/SeriesTimers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSeriesTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_timer(self, request: operations.CreateTimerRequest) -> operations.CreateTimerResponse:
        r"""Creates a live tv timer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Timers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def create_user_by_name(self, request: operations.CreateUserByNameRequest) -> operations.CreateUserByNameResponse:
        r"""Creates a user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/New"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUserByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def deauthorize(self, request: operations.DeauthorizeRequest) -> operations.DeauthorizeResponse:
        r"""Deauthorize all quick connect devices for the current user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Deauthorize"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeauthorizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.deauthorize_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.deauthorize_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.deauthorize_200_application_json_int32_integer = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def delete_alternate_sources(self, request: operations.DeleteAlternateSourcesRequest) -> operations.DeleteAlternateSourcesResponse:
        r"""Removes alternate video sources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/AlternateSources", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAlternateSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_device(self, request: operations.DeleteDeviceRequest) -> operations.DeleteDeviceResponse:
        r"""Deletes a device.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Devices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_item(self, request: operations.DeleteItemRequest) -> operations.DeleteItemResponse:
        r"""Deletes an item from the library and filesystem.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            pass

        return res

    
    def delete_item_image(self, request: operations.DeleteItemImageRequest) -> operations.DeleteItemImageResponse:
        r"""Delete an item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_item_image_by_index(self, request: operations.DeleteItemImageByIndexRequest) -> operations.DeleteItemImageByIndexResponse:
        r"""Delete an item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_items(self, request: operations.DeleteItemsRequest) -> operations.DeleteItemsResponse:
        r"""Deletes items from the library and filesystem.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 403:
            pass

        return res

    
    def delete_listing_provider(self, request: operations.DeleteListingProviderRequest) -> operations.DeleteListingProviderResponse:
        r"""Delete listing provider.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ListingProviders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteListingProviderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def delete_profile(self, request: operations.DeleteProfileRequest) -> operations.DeleteProfileResponse:
        r"""Deletes a profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/Profiles/{profileId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_recording(self, request: operations.DeleteRecordingRequest) -> operations.DeleteRecordingResponse:
        r"""Deletes a live tv recording.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Recordings/{recordingId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_subtitle(self, request: operations.DeleteSubtitleRequest) -> operations.DeleteSubtitleResponse:
        r"""Deletes an external subtitle file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/Subtitles/{index}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubtitleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_tuner_host(self, request: operations.DeleteTunerHostRequest) -> operations.DeleteTunerHostResponse:
        r"""Deletes a tuner host.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/TunerHosts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTunerHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        r"""Deletes a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_user_image(self, request: operations.DeleteUserImageRequest) -> operations.DeleteUserImageResponse:
        r"""Delete the user's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_user_image_by_index(self, request: operations.DeleteUserImageByIndexRequest) -> operations.DeleteUserImageByIndexResponse:
        r"""Delete the user's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}/{index}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def delete_user_item_rating(self, request: operations.DeleteUserItemRatingRequest) -> operations.DeleteUserItemRatingResponse:
        r"""Deletes a user's saved personal rating for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/{itemId}/Rating", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserItemRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def disable_plugin(self, request: operations.DisablePluginRequest) -> operations.DisablePluginResponse:
        r"""Disable a plugin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/{version}/Disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisablePluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def discover_tuners(self, request: operations.DiscoverTunersRequest) -> operations.DiscoverTunersResponse:
        r"""Discover tuners.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Tuners/Discover"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoverTunersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TunerHostInfo]])
                res.tuner_host_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TunerHostInfo]])
                res.tuner_host_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TunerHostInfo]])
                res.tuner_host_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def discvover_tuners(self, request: operations.DiscvoverTunersRequest) -> operations.DiscvoverTunersResponse:
        r"""Discover tuners.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Tuners/Discvover"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscvoverTunersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TunerHostInfo]])
                res.tuner_host_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TunerHostInfo]])
                res.tuner_host_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TunerHostInfo]])
                res.tuner_host_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def display_content(self, request: operations.DisplayContentRequest) -> operations.DisplayContentResponse:
        r"""Instructs a session to browse to an item or view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/Viewing", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def download_remote_image(self, request: operations.DownloadRemoteImageRequest) -> operations.DownloadRemoteImageResponse:
        r"""Downloads a remote image for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/RemoteImages/Download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadRemoteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def download_remote_subtitles(self, request: operations.DownloadRemoteSubtitlesRequest) -> operations.DownloadRemoteSubtitlesResponse:
        r"""Downloads a remote subtitle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/RemoteSearch/Subtitles/{subtitleId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadRemoteSubtitlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def enable_plugin(self, request: operations.EnablePluginRequest) -> operations.EnablePluginResponse:
        r"""Enables a disabled plugin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/{version}/Enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnablePluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def forgot_password(self, request: operations.ForgotPasswordRequest) -> operations.ForgotPasswordResponse:
        r"""Initiates the forgot password process for a local user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/ForgotPassword"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForgotPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForgotPasswordResult])
                res.forgot_password_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ForgotPasswordResult])
                res.forgot_password_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ForgotPasswordResult])
                res.forgot_password_result = out

        return res

    
    def forgot_password_pin(self, request: operations.ForgotPasswordPinRequest) -> operations.ForgotPasswordPinResponse:
        r"""Redeems a forgot password pin.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/ForgotPassword/Pin"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForgotPasswordPinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PinRedeemResult])
                res.pin_redeem_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PinRedeemResult])
                res.pin_redeem_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PinRedeemResult])
                res.pin_redeem_result = out

        return res

    
    def get(self, request: operations.GetRequest) -> operations.GetResponse:
        r"""Gets the search hint result.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Search/Hints"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchHintResult])
                res.search_hint_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchHintResult])
                res.search_hint_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchHintResult])
                res.search_hint_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_additional_part(self, request: operations.GetAdditionalPartRequest) -> operations.GetAdditionalPartResponse:
        r"""Gets additional parts for a video.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/AdditionalParts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdditionalPartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_album_artists(self, request: operations.GetAlbumArtistsRequest) -> operations.GetAlbumArtistsResponse:
        r"""Gets all album artists from a given item, folder, or the entire library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Artists/AlbumArtists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAlbumArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_all_channel_features(self, request: operations.GetAllChannelFeaturesRequest) -> operations.GetAllChannelFeaturesResponse:
        r"""Get all channel features.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Channels/Features"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllChannelFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ChannelFeatures]])
                res.channel_features = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ChannelFeatures]])
                res.channel_features = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ChannelFeatures]])
                res.channel_features = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_ancestors(self, request: operations.GetAncestorsRequest) -> operations.GetAncestorsResponse:
        r"""Gets all parents of an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Ancestors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAncestorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_artist_by_name(self, request: operations.GetArtistByNameRequest) -> operations.GetArtistByNameResponse:
        r"""Gets an artist by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Artists/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtistByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_artist_image(self, request: operations.GetArtistImageRequest) -> operations.GetArtistImageResponse:
        r"""Get artist image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Artists/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtistImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_artist_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_artists(self, request: operations.GetArtistsRequest) -> operations.GetArtistsResponse:
        r"""Gets all artists from a given item, folder, or the entire library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Artists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_attachment(self, request: operations.GetAttachmentRequest) -> operations.GetAttachmentResponse:
        r"""Get video attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{videoId}/{mediaSourceId}/Attachments/{index}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_attachment_200_application_octet_stream_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_audio_stream(self, request: operations.GetAudioStreamRequest) -> operations.GetAudioStreamResponse:
        r"""Gets an audio stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/stream", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAudioStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_audio_stream_200_audio_wildcard_binary_string = r.content

        return res

    
    def get_audio_stream_by_container(self, request: operations.GetAudioStreamByContainerRequest) -> operations.GetAudioStreamByContainerResponse:
        r"""Gets an audio stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/stream.{container}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAudioStreamByContainerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_audio_stream_by_container_200_audio_wildcard_binary_string = r.content

        return res

    
    def get_auth_providers(self, request: operations.GetAuthProvidersRequest) -> operations.GetAuthProvidersResponse:
        r"""Get all auth providers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Auth/Providers"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_bitrate_test_bytes(self, request: operations.GetBitrateTestBytesRequest) -> operations.GetBitrateTestBytesResponse:
        r"""Tests the network with a request with the size of the bitrate.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Playback/BitrateTest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBitrateTestBytesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_bitrate_test_bytes_200_application_octet_stream_binary_string = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_book_remote_search_results(self, request: operations.GetBookRemoteSearchResultsRequest) -> operations.GetBookRemoteSearchResultsResponse:
        r"""Get book remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/Book"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBookRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_box_set_remote_search_results(self, request: operations.GetBoxSetRemoteSearchResultsRequest) -> operations.GetBoxSetRemoteSearchResultsResponse:
        r"""Get box set remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/BoxSet"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBoxSetRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_branding_css(self) -> operations.GetBrandingCSSResponse:
        r"""Gets branding css.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Branding/Css"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrandingCSSResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_branding_css_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                res.get_branding_css_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                res.get_branding_css_200_application_json_string = r.content
            if utils.match_content_type(content_type, "text/css"):
                res.get_branding_css_200_text_css_string = r.content
        elif r.status_code == 204:
            pass

        return res

    
    def get_branding_css_2(self) -> operations.GetBrandingCSS2Response:
        r"""Gets branding css.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Branding/Css.css"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrandingCSS2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_branding_css_2_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                res.get_branding_css_2_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                res.get_branding_css_2_200_application_json_string = r.content
            if utils.match_content_type(content_type, "text/css"):
                res.get_branding_css_2_200_text_css_string = r.content
        elif r.status_code == 204:
            pass

        return res

    
    def get_branding_options(self) -> operations.GetBrandingOptionsResponse:
        r"""Gets branding configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Branding/Configuration"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrandingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandingOptions])
                res.branding_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandingOptions])
                res.branding_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandingOptions])
                res.branding_options = out

        return res

    
    def get_channel(self, request: operations.GetChannelRequest) -> operations.GetChannelResponse:
        r"""Gets a live tv channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Channels/{channelId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_channel_features(self, request: operations.GetChannelFeaturesRequest) -> operations.GetChannelFeaturesResponse:
        r"""Get channel features.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Channels/{channelId}/Features", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelFeatures])
                res.channel_features = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelFeatures])
                res.channel_features = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelFeatures])
                res.channel_features = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_channel_items(self, request: operations.GetChannelItemsRequest) -> operations.GetChannelItemsResponse:
        r"""Get channel items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Channels/{channelId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_channel_mapping_options(self, request: operations.GetChannelMappingOptionsRequest) -> operations.GetChannelMappingOptionsResponse:
        r"""Get channel mapping options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ChannelMappingOptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelMappingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelMappingOptionsDto])
                res.channel_mapping_options_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelMappingOptionsDto])
                res.channel_mapping_options_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelMappingOptionsDto])
                res.channel_mapping_options_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_channels(self, request: operations.GetChannelsRequest) -> operations.GetChannelsResponse:
        r"""Gets available channels.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Channels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_configuration(self, request: operations.GetConfigurationRequest) -> operations.GetConfigurationResponse:
        r"""Gets application configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Configuration"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServerConfiguration])
                res.server_configuration = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ServerConfiguration])
                res.server_configuration = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ServerConfiguration])
                res.server_configuration = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_configuration_pages(self, request: operations.GetConfigurationPagesRequest) -> operations.GetConfigurationPagesResponse:
        r"""Gets the configuration pages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/web/ConfigurationPages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConfigurationPageInfo]])
                res.configuration_page_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConfigurationPageInfo]])
                res.configuration_page_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ConfigurationPageInfo]])
                res.configuration_page_infos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_connection_manager(self, request: operations.GetConnectionManagerRequest) -> operations.GetConnectionManagerResponse:
        r"""Gets Dlna media receiver registrar xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ConnectionManager", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectionManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_connection_manager_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_connection_manager_2(self, request: operations.GetConnectionManager2Request) -> operations.GetConnectionManager2Response:
        r"""Gets Dlna media receiver registrar xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ConnectionManager/ConnectionManager", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectionManager2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_connection_manager_2_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_connection_manager_3(self, request: operations.GetConnectionManager3Request) -> operations.GetConnectionManager3Response:
        r"""Gets Dlna media receiver registrar xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ConnectionManager/ConnectionManager.xml", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectionManager3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_connection_manager_3_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_content_directory(self, request: operations.GetContentDirectoryRequest) -> operations.GetContentDirectoryResponse:
        r"""Gets Dlna content directory xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ContentDirectory", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentDirectoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_content_directory_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_content_directory_2(self, request: operations.GetContentDirectory2Request) -> operations.GetContentDirectory2Response:
        r"""Gets Dlna content directory xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ContentDirectory/ContentDirectory", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentDirectory2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_content_directory_2_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_content_directory_3(self, request: operations.GetContentDirectory3Request) -> operations.GetContentDirectory3Response:
        r"""Gets Dlna content directory xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ContentDirectory/ContentDirectory.xml", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentDirectory3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_content_directory_3_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_countries(self, request: operations.GetCountriesRequest) -> operations.GetCountriesResponse:
        r"""Gets known countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Localization/Countries"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CountryInfo]])
                res.country_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CountryInfo]])
                res.country_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CountryInfo]])
                res.country_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_critic_reviews(self, request: operations.GetCriticReviewsRequest) -> operations.GetCriticReviewsResponse:
        r"""Gets critic review for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/CriticReviews", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCriticReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_cultures(self, request: operations.GetCulturesRequest) -> operations.GetCulturesResponse:
        r"""Gets known cultures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Localization/Cultures"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCulturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CultureDto]])
                res.culture_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CultureDto]])
                res.culture_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CultureDto]])
                res.culture_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_current_user(self, request: operations.GetCurrentUserRequest) -> operations.GetCurrentUserResponse:
        r"""Gets the user based on auth token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/Me"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_dashboard_configuration_page(self, request: operations.GetDashboardConfigurationPageRequest) -> operations.GetDashboardConfigurationPageResponse:
        r"""Gets a dashboard configuration page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/web/ConfigurationPage"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDashboardConfigurationPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-javascript"):
                res.get_dashboard_configuration_page_200_application_x_javascript_binary_string = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.get_dashboard_configuration_page_200_text_html_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_default_directory_browser(self, request: operations.GetDefaultDirectoryBrowserRequest) -> operations.GetDefaultDirectoryBrowserResponse:
        r"""Get Default directory browser.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Environment/DefaultDirectoryBrowser"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultDirectoryBrowserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultDirectoryBrowserInfoDto])
                res.default_directory_browser_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultDirectoryBrowserInfoDto])
                res.default_directory_browser_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultDirectoryBrowserInfoDto])
                res.default_directory_browser_info_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_default_listing_provider(self, request: operations.GetDefaultListingProviderRequest) -> operations.GetDefaultListingProviderResponse:
        r"""Gets default listings provider info.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ListingProviders/Default"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultListingProviderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsProviderInfo])
                res.listings_provider_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsProviderInfo])
                res.listings_provider_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingsProviderInfo])
                res.listings_provider_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_default_metadata_options(self, request: operations.GetDefaultMetadataOptionsRequest) -> operations.GetDefaultMetadataOptionsResponse:
        r"""Gets a default MetadataOptions object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Configuration/MetadataOptions/Default"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultMetadataOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MetadataOptions])
                res.metadata_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.MetadataOptions])
                res.metadata_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.MetadataOptions])
                res.metadata_options = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_default_profile(self, request: operations.GetDefaultProfileRequest) -> operations.GetDefaultProfileResponse:
        r"""Gets the default profile.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Dlna/Profiles/Default"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceProfile])
                res.device_profile = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceProfile])
                res.device_profile = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceProfile])
                res.device_profile = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_default_timer(self, request: operations.GetDefaultTimerRequest) -> operations.GetDefaultTimerResponse:
        r"""Gets the default values for a new timer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Timers/Defaults"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefaultTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDto])
                res.series_timer_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDto])
                res.series_timer_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDto])
                res.series_timer_info_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_description_xml(self, request: operations.GetDescriptionXMLRequest) -> operations.GetDescriptionXMLResponse:
        r"""Get Description Xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/description", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescriptionXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_description_xml_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_description_xml_2(self, request: operations.GetDescriptionXML2Request) -> operations.GetDescriptionXML2Response:
        r"""Get Description Xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/description.xml", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescriptionXML2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_description_xml_2_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_device_info(self, request: operations.GetDeviceInfoRequest) -> operations.GetDeviceInfoResponse:
        r"""Get info for a device.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Devices/Info"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfo])
                res.device_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfo])
                res.device_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfo])
                res.device_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_device_options(self, request: operations.GetDeviceOptionsRequest) -> operations.GetDeviceOptionsResponse:
        r"""Get options for a device.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Devices/Options"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceOptions])
                res.device_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceOptions])
                res.device_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceOptions])
                res.device_options = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_devices(self, request: operations.GetDevicesRequest) -> operations.GetDevicesResponse:
        r"""Get Devices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Devices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfoQueryResult])
                res.device_info_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfoQueryResult])
                res.device_info_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInfoQueryResult])
                res.device_info_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_directory_contents(self, request: operations.GetDirectoryContentsRequest) -> operations.GetDirectoryContentsResponse:
        r"""Gets the contents of a given directory in the file system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Environment/DirectoryContents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectoryContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_display_preferences(self, request: operations.GetDisplayPreferencesRequest) -> operations.GetDisplayPreferencesResponse:
        r"""Get Display Preferences.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/DisplayPreferences/{displayPreferencesId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDisplayPreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DisplayPreferencesDto])
                res.display_preferences_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DisplayPreferencesDto])
                res.display_preferences_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DisplayPreferencesDto])
                res.display_preferences_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_download(self, request: operations.GetDownloadRequest) -> operations.GetDownloadResponse:
        r"""Downloads item media.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Download", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_download_200_audio_wildcard_binary_string = r.content
            if utils.match_content_type(content_type, "video/*"):
                res.get_download_200_video_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_drives(self, request: operations.GetDrivesRequest) -> operations.GetDrivesResponse:
        r"""Gets available drives from the server's file system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Environment/Drives"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDrivesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_endpoint_info(self, request: operations.GetEndpointInfoRequest) -> operations.GetEndpointInfoResponse:
        r"""Gets information about the request endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Endpoint"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEndpointInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndPointInfo])
                res.end_point_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.EndPointInfo])
                res.end_point_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.EndPointInfo])
                res.end_point_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_episodes(self, request: operations.GetEpisodesRequest) -> operations.GetEpisodesResponse:
        r"""Gets episodes for a tv season.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Shows/{seriesId}/Episodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_external_id_infos(self, request: operations.GetExternalIDInfosRequest) -> operations.GetExternalIDInfosResponse:
        r"""Get the item's external id info.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/ExternalIdInfos", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExternalIDInfosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ExternalIDInfo]])
                res.external_id_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ExternalIDInfo]])
                res.external_id_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ExternalIDInfo]])
                res.external_id_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_fallback_font(self, request: operations.GetFallbackFontRequest) -> operations.GetFallbackFontResponse:
        r"""Gets a fallback font file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/FallbackFont/Fonts/{name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFallbackFontResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "font/*"):
                res.get_fallback_font_200_font_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_fallback_font_list(self, request: operations.GetFallbackFontListRequest) -> operations.GetFallbackFontListResponse:
        r"""Gets a list of available fallback font files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/FallbackFont/Fonts"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFallbackFontListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FontFile]])
                res.font_files = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FontFile]])
                res.font_files = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FontFile]])
                res.font_files = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_file(self, request: operations.GetFileRequest) -> operations.GetFileResponse:
        r"""Get the original file of an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/File", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_file_200_audio_wildcard_binary_string = r.content
            if utils.match_content_type(content_type, "video/*"):
                res.get_file_200_video_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_first_user(self, request: operations.GetFirstUserRequest) -> operations.GetFirstUserResponse:
        r"""Gets the first user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/User"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirstUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupUserDto])
                res.startup_user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupUserDto])
                res.startup_user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupUserDto])
                res.startup_user_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_first_user_2(self, request: operations.GetFirstUser2Request) -> operations.GetFirstUser2Response:
        r"""Gets the first user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/FirstUser"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirstUser2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupUserDto])
                res.startup_user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupUserDto])
                res.startup_user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupUserDto])
                res.startup_user_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_general_image(self, request: operations.GetGeneralImageRequest) -> operations.GetGeneralImageResponse:
        r"""Get General Image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Images/General/{name}/{type}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneralImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_general_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_general_images(self, request: operations.GetGeneralImagesRequest) -> operations.GetGeneralImagesResponse:
        r"""Get all general images.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Images/General"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneralImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_genre(self, request: operations.GetGenreRequest) -> operations.GetGenreResponse:
        r"""Gets a genre, by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Genres/{genreName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_genre_image(self, request: operations.GetGenreImageRequest) -> operations.GetGenreImageResponse:
        r"""Get genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Genres/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenreImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_genre_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_genre_image_by_index(self, request: operations.GetGenreImageByIndexRequest) -> operations.GetGenreImageByIndexResponse:
        r"""Get genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Genres/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenreImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_genre_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_genres(self, request: operations.GetGenresRequest) -> operations.GetGenresResponse:
        r"""Gets all genres from a given item, folder, or the entire library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Genres"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_grouping_options(self, request: operations.GetGroupingOptionsRequest) -> operations.GetGroupingOptionsResponse:
        r"""Get user view grouping options.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/GroupingOptions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGroupingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SpecialViewOptionDto]])
                res.special_view_option_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SpecialViewOptionDto]])
                res.special_view_option_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SpecialViewOptionDto]])
                res.special_view_option_dtos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_guide_info(self, request: operations.GetGuideInfoRequest) -> operations.GetGuideInfoResponse:
        r"""Get guid info.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/GuideInfo"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGuideInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuideInfo])
                res.guide_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.GuideInfo])
                res.guide_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.GuideInfo])
                res.guide_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_hls_audio_segment(self, request: operations.GetHlsAudioSegmentRequest) -> operations.GetHlsAudioSegmentResponse:
        r"""Gets a video stream using HTTP live streaming.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/hls1/{playlistId}/{segmentId}.{container}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlsAudioSegmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_hls_audio_segment_200_audio_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_hls_audio_segment_legacy_aac(self, request: operations.GetHlsAudioSegmentLegacyAacRequest) -> operations.GetHlsAudioSegmentLegacyAacResponse:
        r"""Gets the specified audio segment for an audio item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/hls/{segmentId}/stream.aac", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlsAudioSegmentLegacyAacResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_hls_audio_segment_legacy_aac_200_audio_wildcard_binary_string = r.content

        return res

    
    def get_hls_audio_segment_legacy_mp3(self, request: operations.GetHlsAudioSegmentLegacyMp3Request) -> operations.GetHlsAudioSegmentLegacyMp3Response:
        r"""Gets the specified audio segment for an audio item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/hls/{segmentId}/stream.mp3", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlsAudioSegmentLegacyMp3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_hls_audio_segment_legacy_mp3_200_audio_wildcard_binary_string = r.content

        return res

    
    def get_hls_playlist_legacy(self, request: operations.GetHlsPlaylistLegacyRequest) -> operations.GetHlsPlaylistLegacyResponse:
        r"""Gets a hls video playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/hls/{playlistId}/stream.m3u8", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlsPlaylistLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_hls_playlist_legacy_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_hls_video_segment(self, request: operations.GetHlsVideoSegmentRequest) -> operations.GetHlsVideoSegmentResponse:
        r"""Gets a video stream using HTTP live streaming.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/hls1/{playlistId}/{segmentId}.{container}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlsVideoSegmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.get_hls_video_segment_200_video_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_hls_video_segment_legacy(self, request: operations.GetHlsVideoSegmentLegacyRequest) -> operations.GetHlsVideoSegmentLegacyResponse:
        r"""Gets a hls video segment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/hls/{playlistId}/{segmentId}.{segmentContainer}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHlsVideoSegmentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.get_hls_video_segment_legacy_200_video_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_icon(self, request: operations.GetIconRequest) -> operations.GetIconResponse:
        r"""Gets a server icon.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/icons/{fileName}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIconResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_icon_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            pass

        return res

    
    def get_icon_id(self, request: operations.GetIconIDRequest) -> operations.GetIconIDResponse:
        r"""Gets a server icon.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/icons/{fileName}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIconIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_icon_id_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 503:
            pass

        return res

    
    def get_instant_mix_from_album(self, request: operations.GetInstantMixFromAlbumRequest) -> operations.GetInstantMixFromAlbumResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Albums/{id}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromAlbumResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_instant_mix_from_artists(self, request: operations.GetInstantMixFromArtistsRequest) -> operations.GetInstantMixFromArtistsResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Artists/{id}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_instant_mix_from_item(self, request: operations.GetInstantMixFromItemRequest) -> operations.GetInstantMixFromItemResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{id}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_instant_mix_from_music_genre(self, request: operations.GetInstantMixFromMusicGenreRequest) -> operations.GetInstantMixFromMusicGenreResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{name}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromMusicGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_instant_mix_from_music_genres(self, request: operations.GetInstantMixFromMusicGenresRequest) -> operations.GetInstantMixFromMusicGenresResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{id}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromMusicGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_instant_mix_from_playlist(self, request: operations.GetInstantMixFromPlaylistRequest) -> operations.GetInstantMixFromPlaylistResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Playlists/{id}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_instant_mix_from_song(self, request: operations.GetInstantMixFromSongRequest) -> operations.GetInstantMixFromSongResponse:
        r"""Creates an instant playlist based on a given song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Songs/{id}/InstantMix", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstantMixFromSongResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_intros(self, request: operations.GetIntrosRequest) -> operations.GetIntrosResponse:
        r"""Gets intros to play before the main media item plays.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/{itemId}/Intros", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntrosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_item(self, request: operations.GetItemRequest) -> operations.GetItemResponse:
        r"""Gets an item from a user's library.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_item_counts(self, request: operations.GetItemCountsRequest) -> operations.GetItemCountsResponse:
        r"""Get item counts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/Counts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemCountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemCounts])
                res.item_counts = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemCounts])
                res.item_counts = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ItemCounts])
                res.item_counts = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_item_image(self, request: operations.GetItemImageRequest) -> operations.GetItemImageResponse:
        r"""Gets the item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_item_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_item_image2(self, request: operations.GetItemImage2Request) -> operations.GetItemImage2Response:
        r"""Gets the item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemImage2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_item_image2_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_item_image_by_index(self, request: operations.GetItemImageByIndexRequest) -> operations.GetItemImageByIndexResponse:
        r"""Gets the item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_item_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_item_image_infos(self, request: operations.GetItemImageInfosRequest) -> operations.GetItemImageInfosResponse:
        r"""Get item image infos.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemImageInfosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageInfo]])
                res.image_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageInfo]])
                res.image_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageInfo]])
                res.image_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_items(self, request: operations.GetItemsRequest) -> operations.GetItemsResponse:
        r"""Gets items based on a query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_items_by_user_id(self, request: operations.GetItemsByUserIDRequest) -> operations.GetItemsByUserIDResponse:
        r"""Gets items based on a query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemsByUserIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_keys(self, request: operations.GetKeysRequest) -> operations.GetKeysResponse:
        r"""Get all keys.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Auth/Keys"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationInfoQueryResult])
                res.authentication_info_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationInfoQueryResult])
                res.authentication_info_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationInfoQueryResult])
                res.authentication_info_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_latest_channel_items(self, request: operations.GetLatestChannelItemsRequest) -> operations.GetLatestChannelItemsResponse:
        r"""Gets latest channel items.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Channels/Items/Latest"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestChannelItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_latest_media(self, request: operations.GetLatestMediaRequest) -> operations.GetLatestMediaResponse:
        r"""Gets latest media.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/Latest", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_library_options_info(self, request: operations.GetLibraryOptionsInfoRequest) -> operations.GetLibraryOptionsInfoResponse:
        r"""Gets the library options info.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Libraries/AvailableOptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLibraryOptionsInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LibraryOptionsResultDto])
                res.library_options_result_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.LibraryOptionsResultDto])
                res.library_options_result_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.LibraryOptionsResultDto])
                res.library_options_result_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_lineups(self, request: operations.GetLineupsRequest) -> operations.GetLineupsResponse:
        r"""Gets available lineups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ListingProviders/Lineups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLineupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_live_hls_stream(self, request: operations.GetLiveHlsStreamRequest) -> operations.GetLiveHlsStreamResponse:
        r"""Gets a hls live stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/live.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveHlsStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_live_hls_stream_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_live_recording_file(self, request: operations.GetLiveRecordingFileRequest) -> operations.GetLiveRecordingFileResponse:
        r"""Gets a live tv recording stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/LiveRecordings/{recordingId}/stream", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveRecordingFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.get_live_recording_file_200_video_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_live_stream_file(self, request: operations.GetLiveStreamFileRequest) -> operations.GetLiveStreamFileResponse:
        r"""Gets a live tv channel stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/LiveStreamFiles/{streamId}/stream.{container}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveStreamFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.get_live_stream_file_200_video_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_live_tv_channels(self, request: operations.GetLiveTvChannelsRequest) -> operations.GetLiveTvChannelsResponse:
        r"""Gets available live tv channels.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Channels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveTvChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_live_tv_info(self, request: operations.GetLiveTvInfoRequest) -> operations.GetLiveTvInfoResponse:
        r"""Gets available live tv services.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Info"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveTvInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveTvInfo])
                res.live_tv_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveTvInfo])
                res.live_tv_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveTvInfo])
                res.live_tv_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_live_tv_programs(self, request: operations.GetLiveTvProgramsRequest) -> operations.GetLiveTvProgramsResponse:
        r"""Gets available live tv epgs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Programs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveTvProgramsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_local_trailers(self, request: operations.GetLocalTrailersRequest) -> operations.GetLocalTrailersResponse:
        r"""Gets local trailers for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/{itemId}/LocalTrailers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocalTrailersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_localization_options(self, request: operations.GetLocalizationOptionsRequest) -> operations.GetLocalizationOptionsResponse:
        r"""Gets localization options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Localization/Options"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocalizationOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocalizationOption]])
                res.localization_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocalizationOption]])
                res.localization_options = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocalizationOption]])
                res.localization_options = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_log_entries(self, request: operations.GetLogEntriesRequest) -> operations.GetLogEntriesResponse:
        r"""Gets activity log entries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/ActivityLog/Entries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogEntriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActivityLogEntryQueryResult])
                res.activity_log_entry_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ActivityLogEntryQueryResult])
                res.activity_log_entry_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ActivityLogEntryQueryResult])
                res.activity_log_entry_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_log_file(self, request: operations.GetLogFileRequest) -> operations.GetLogFileResponse:
        r"""Gets a log file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Logs/Log"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLogFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.get_log_file_200_text_plain_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_master_hls_audio_playlist(self, request: operations.GetMasterHlsAudioPlaylistRequest) -> operations.GetMasterHlsAudioPlaylistResponse:
        r"""Gets an audio hls playlist stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/master.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMasterHlsAudioPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_master_hls_audio_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_master_hls_video_playlist(self, request: operations.GetMasterHlsVideoPlaylistRequest) -> operations.GetMasterHlsVideoPlaylistResponse:
        r"""Gets a video hls playlist stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/master.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMasterHlsVideoPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_master_hls_video_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_media_folders(self, request: operations.GetMediaFoldersRequest) -> operations.GetMediaFoldersResponse:
        r"""Gets all user media folders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/MediaFolders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaFoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_media_info_image(self, request: operations.GetMediaInfoImageRequest) -> operations.GetMediaInfoImageResponse:
        r"""Get media info image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Images/MediaInfo/{theme}/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaInfoImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_media_info_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_media_info_images(self, request: operations.GetMediaInfoImagesRequest) -> operations.GetMediaInfoImagesResponse:
        r"""Get all media info images.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Images/MediaInfo"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaInfoImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_media_receiver_registrar(self, request: operations.GetMediaReceiverRegistrarRequest) -> operations.GetMediaReceiverRegistrarResponse:
        r"""Gets Dlna media receiver registrar xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/MediaReceiverRegistrar", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaReceiverRegistrarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_media_receiver_registrar_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_media_receiver_registrar_2(self, request: operations.GetMediaReceiverRegistrar2Request) -> operations.GetMediaReceiverRegistrar2Response:
        r"""Gets Dlna media receiver registrar xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaReceiverRegistrar2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_media_receiver_registrar_2_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_media_receiver_registrar_3(self, request: operations.GetMediaReceiverRegistrar3Request) -> operations.GetMediaReceiverRegistrar3Response:
        r"""Gets Dlna media receiver registrar xml.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/MediaReceiverRegistrar/MediaReceiverRegistrar.xml", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMediaReceiverRegistrar3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_media_receiver_registrar_3_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def get_metadata_editor_info(self, request: operations.GetMetadataEditorInfoRequest) -> operations.GetMetadataEditorInfoResponse:
        r"""Gets metadata editor info for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/MetadataEditor", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMetadataEditorInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MetadataEditorInfo])
                res.metadata_editor_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.MetadataEditorInfo])
                res.metadata_editor_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.MetadataEditorInfo])
                res.metadata_editor_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_movie_recommendations(self, request: operations.GetMovieRecommendationsRequest) -> operations.GetMovieRecommendationsResponse:
        r"""Gets movie recommendations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Movies/Recommendations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMovieRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RecommendationDto]])
                res.recommendation_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RecommendationDto]])
                res.recommendation_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RecommendationDto]])
                res.recommendation_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_movie_remote_search_results(self, request: operations.GetMovieRemoteSearchResultsRequest) -> operations.GetMovieRemoteSearchResultsResponse:
        r"""Get movie remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/Movie"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMovieRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_music_album_remote_search_results(self, request: operations.GetMusicAlbumRemoteSearchResultsRequest) -> operations.GetMusicAlbumRemoteSearchResultsResponse:
        r"""Get music album remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/MusicAlbum"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicAlbumRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_music_artist_remote_search_results(self, request: operations.GetMusicArtistRemoteSearchResultsRequest) -> operations.GetMusicArtistRemoteSearchResultsResponse:
        r"""Get music artist remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/MusicArtist"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicArtistRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_music_genre(self, request: operations.GetMusicGenreRequest) -> operations.GetMusicGenreResponse:
        r"""Gets a music genre, by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{genreName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_music_genre_image(self, request: operations.GetMusicGenreImageRequest) -> operations.GetMusicGenreImageResponse:
        r"""Get music genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicGenreImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_music_genre_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_music_genre_image_by_index(self, request: operations.GetMusicGenreImageByIndexRequest) -> operations.GetMusicGenreImageByIndexResponse:
        r"""Get music genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicGenreImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_music_genre_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_music_genres(self, request: operations.GetMusicGenresRequest) -> operations.GetMusicGenresResponse:
        r"""Gets all music genres from a given item, folder, or the entire library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/MusicGenres"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_music_video_remote_search_results(self, request: operations.GetMusicVideoRemoteSearchResultsRequest) -> operations.GetMusicVideoRemoteSearchResultsResponse:
        r"""Get music video remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/MusicVideo"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMusicVideoRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_named_configuration(self, request: operations.GetNamedConfigurationRequest) -> operations.GetNamedConfigurationResponse:
        r"""Gets a named configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/System/Configuration/{key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNamedConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_named_configuration_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_network_shares(self, request: operations.GetNetworkSharesRequest) -> operations.GetNetworkSharesResponse:
        r"""Gets network paths.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Environment/NetworkShares"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSharesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.FileSystemEntryInfo]])
                res.file_system_entry_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_next_up(self, request: operations.GetNextUpRequest) -> operations.GetNextUpResponse:
        r"""Gets a list of next up episodes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Shows/NextUp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNextUpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_notification_services(self, request: operations.GetNotificationServicesRequest) -> operations.GetNotificationServicesResponse:
        r"""Gets notification services.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Notifications/Services"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_notification_types(self, request: operations.GetNotificationTypesRequest) -> operations.GetNotificationTypesResponse:
        r"""Gets notification types.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Notifications/Types"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NotificationTypeInfo]])
                res.notification_type_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NotificationTypeInfo]])
                res.notification_type_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NotificationTypeInfo]])
                res.notification_type_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_notifications(self, request: operations.GetNotificationsRequest) -> operations.GetNotificationsResponse:
        r"""Gets a user's notifications.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Notifications/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationResultDto])
                res.notification_result_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationResultDto])
                res.notification_result_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationResultDto])
                res.notification_result_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_notifications_summary(self, request: operations.GetNotificationsSummaryRequest) -> operations.GetNotificationsSummaryResponse:
        r"""Gets a user's notification summary.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Notifications/{userId}/Summary", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationsSummaryDto])
                res.notifications_summary_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationsSummaryDto])
                res.notifications_summary_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationsSummaryDto])
                res.notifications_summary_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_package_info(self, request: operations.GetPackageInfoRequest) -> operations.GetPackageInfoResponse:
        r"""Gets a package by name or assembly GUID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Packages/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackageInfo])
                res.package_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PackageInfo])
                res.package_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PackageInfo])
                res.package_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_packages(self, request: operations.GetPackagesRequest) -> operations.GetPackagesResponse:
        r"""Gets available packages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Packages"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PackageInfo]])
                res.package_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PackageInfo]])
                res.package_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PackageInfo]])
                res.package_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_parent_path(self, request: operations.GetParentPathRequest) -> operations.GetParentPathResponse:
        r"""Gets the parent path of a given path.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Environment/ParentPath"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParentPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_parent_path_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                res.get_parent_path_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                res.get_parent_path_200_application_json_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_parental_ratings(self, request: operations.GetParentalRatingsRequest) -> operations.GetParentalRatingsResponse:
        r"""Gets known parental ratings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Localization/ParentalRatings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParentalRatingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ParentalRating]])
                res.parental_ratings = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ParentalRating]])
                res.parental_ratings = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ParentalRating]])
                res.parental_ratings = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_password_reset_providers(self, request: operations.GetPasswordResetProvidersRequest) -> operations.GetPasswordResetProvidersResponse:
        r"""Get all password reset providers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Auth/PasswordResetProviders"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPasswordResetProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_person(self, request: operations.GetPersonRequest) -> operations.GetPersonResponse:
        r"""Get person by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Persons/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_person_image(self, request: operations.GetPersonImageRequest) -> operations.GetPersonImageResponse:
        r"""Get person image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Persons/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_person_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_person_image_by_index(self, request: operations.GetPersonImageByIndexRequest) -> operations.GetPersonImageByIndexResponse:
        r"""Get person image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Persons/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_person_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_person_remote_search_results(self, request: operations.GetPersonRemoteSearchResultsRequest) -> operations.GetPersonRemoteSearchResultsResponse:
        r"""Get person remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/Person"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_persons(self, request: operations.GetPersonsRequest) -> operations.GetPersonsResponse:
        r"""Gets all persons.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Persons"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_physical_paths(self, request: operations.GetPhysicalPathsRequest) -> operations.GetPhysicalPathsResponse:
        r"""Gets a list of physical paths from virtual folders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/PhysicalPaths"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhysicalPathsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_physical_paths_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_physical_paths_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_physical_paths_200_application_json_strings = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_ping_system(self) -> operations.GetPingSystemResponse:
        r"""Pings the system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Ping"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPingSystemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_ping_system_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                res.get_ping_system_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                res.get_ping_system_200_application_json_string = r.content

        return res

    
    def get_playback_info(self, request: operations.GetPlaybackInfoRequest) -> operations.GetPlaybackInfoResponse:
        r"""Gets live playback media info for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/PlaybackInfo", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaybackInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaybackInfoResponse])
                res.playback_info_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaybackInfoResponse])
                res.playback_info_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaybackInfoResponse])
                res.playback_info_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_playlist_items(self, request: operations.GetPlaylistItemsRequest) -> operations.GetPlaylistItemsResponse:
        r"""Gets the original items of a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Playlists/{playlistId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlaylistItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_plugin_configuration(self, request: operations.GetPluginConfigurationRequest) -> operations.GetPluginConfigurationResponse:
        r"""Gets plugin configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/Configuration", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.base_plugin_configuration = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.base_plugin_configuration = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.base_plugin_configuration = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_plugin_image(self, request: operations.GetPluginImageRequest) -> operations.GetPluginImageResponse:
        r"""Gets a plugin's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/{version}/Image", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_plugin_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_plugin_manifest(self, request: operations.GetPluginManifestRequest) -> operations.GetPluginManifestResponse:
        r"""Gets a plugin's manifest.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/Manifest", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginManifestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_plugins(self, request: operations.GetPluginsRequest) -> operations.GetPluginsResponse:
        r"""Gets a list of currently installed plugins.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Plugins"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PluginInfo]])
                res.plugin_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PluginInfo]])
                res.plugin_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PluginInfo]])
                res.plugin_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_posted_playback_info(self, request: operations.GetPostedPlaybackInfoRequest) -> operations.GetPostedPlaybackInfoResponse:
        r"""Gets live playback media info for an item.
        For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/PlaybackInfo", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPostedPlaybackInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaybackInfoResponse])
                res.playback_info_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaybackInfoResponse])
                res.playback_info_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaybackInfoResponse])
                res.playback_info_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_profile(self, request: operations.GetProfileRequest) -> operations.GetProfileResponse:
        r"""Gets a single profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/Profiles/{profileId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceProfile])
                res.device_profile = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceProfile])
                res.device_profile = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceProfile])
                res.device_profile = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_profile_infos(self, request: operations.GetProfileInfosRequest) -> operations.GetProfileInfosResponse:
        r"""Get profile infos.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Dlna/ProfileInfos"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileInfosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DeviceProfileInfo]])
                res.device_profile_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DeviceProfileInfo]])
                res.device_profile_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DeviceProfileInfo]])
                res.device_profile_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_program(self, request: operations.GetProgramRequest) -> operations.GetProgramResponse:
        r"""Gets a live tv program.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Programs/{programId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgramResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_programs(self, request: operations.GetProgramsRequest) -> operations.GetProgramsResponse:
        r"""Gets available live tv epgs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Programs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProgramsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_public_system_info(self) -> operations.GetPublicSystemInfoResponse:
        r"""Gets public information about the server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Info/Public"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicSystemInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicSystemInfo])
                res.public_system_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicSystemInfo])
                res.public_system_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicSystemInfo])
                res.public_system_info = out

        return res

    
    def get_public_users(self) -> operations.GetPublicUsersResponse:
        r"""Gets a list of publicly visible users for display on a login screen.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users/Public"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserDto]])
                res.user_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserDto]])
                res.user_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserDto]])
                res.user_dtos = out

        return res

    
    def get_query_filters(self, request: operations.GetQueryFiltersRequest) -> operations.GetQueryFiltersResponse:
        r"""Gets query filters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/Filters2"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryFiltersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryFilters])
                res.query_filters = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryFilters])
                res.query_filters = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryFilters])
                res.query_filters = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_query_filters_legacy(self, request: operations.GetQueryFiltersLegacyRequest) -> operations.GetQueryFiltersLegacyResponse:
        r"""Gets legacy query filters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/Filters"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryFiltersLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryFiltersLegacy])
                res.query_filters_legacy = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryFiltersLegacy])
                res.query_filters_legacy = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryFiltersLegacy])
                res.query_filters_legacy = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_rating_image(self, request: operations.GetRatingImageRequest) -> operations.GetRatingImageResponse:
        r"""Get rating image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Images/Ratings/{theme}/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRatingImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_rating_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_rating_images(self, request: operations.GetRatingImagesRequest) -> operations.GetRatingImagesResponse:
        r"""Get all general images.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Images/Ratings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRatingImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageByNameInfo]])
                res.image_by_name_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_recommended_programs(self, request: operations.GetRecommendedProgramsRequest) -> operations.GetRecommendedProgramsResponse:
        r"""Gets recommended live tv epgs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Programs/Recommended"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecommendedProgramsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_recording(self, request: operations.GetRecordingRequest) -> operations.GetRecordingResponse:
        r"""Gets a live tv recording.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Recordings/{recordingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_recording_folders(self, request: operations.GetRecordingFoldersRequest) -> operations.GetRecordingFoldersResponse:
        r"""Gets recording folders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Recordings/Folders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordingFoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_recording_group(self, request: operations.GetRecordingGroupRequest) -> operations.GetRecordingGroupResponse:
        r"""Get recording group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Recordings/Groups/{groupId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_recording_groups(self, request: operations.GetRecordingGroupsRequest) -> operations.GetRecordingGroupsResponse:
        r"""Gets live tv recording groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Recordings/Groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordingGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_recordings(self, request: operations.GetRecordingsRequest) -> operations.GetRecordingsResponse:
        r"""Gets live tv recordings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Recordings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_recordings_series(self, request: operations.GetRecordingsSeriesRequest) -> operations.GetRecordingsSeriesResponse:
        r"""Gets live tv recording series.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Recordings/Series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordingsSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_remote_image(self, request: operations.GetRemoteImageRequest) -> operations.GetRemoteImageResponse:
        r"""Gets a remote image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Images/Remote"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_remote_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_remote_image_providers(self, request: operations.GetRemoteImageProvidersRequest) -> operations.GetRemoteImageProvidersResponse:
        r"""Gets available remote image providers for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/RemoteImages/Providers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoteImageProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageProviderInfo]])
                res.image_provider_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageProviderInfo]])
                res.image_provider_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ImageProviderInfo]])
                res.image_provider_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_remote_images(self, request: operations.GetRemoteImagesRequest) -> operations.GetRemoteImagesResponse:
        r"""Gets available remote images for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/RemoteImages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoteImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoteImageResult])
                res.remote_image_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoteImageResult])
                res.remote_image_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoteImageResult])
                res.remote_image_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_remote_search_image(self, request: operations.GetRemoteSearchImageRequest) -> operations.GetRemoteSearchImageResponse:
        r"""Gets a remote image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/Image"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoteSearchImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_remote_search_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_remote_subtitles(self, request: operations.GetRemoteSubtitlesRequest) -> operations.GetRemoteSubtitlesResponse:
        r"""Gets the remote subtitles.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Providers/Subtitles/Subtitles/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoteSubtitlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/*"):
                res.get_remote_subtitles_200_text_wildcard_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_repositories(self, request: operations.GetRepositoriesRequest) -> operations.GetRepositoriesResponse:
        r"""Gets all package repositories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Repositories"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RepositoryInfo]])
                res.repository_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RepositoryInfo]])
                res.repository_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RepositoryInfo]])
                res.repository_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_resume_items(self, request: operations.GetResumeItemsRequest) -> operations.GetResumeItemsResponse:
        r"""Gets items based on a query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/Resume", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResumeItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_root_folder(self, request: operations.GetRootFolderRequest) -> operations.GetRootFolderResponse:
        r"""Gets the root folder from a user's library.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/Root", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRootFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_schedules_direct_countries(self, request: operations.GetSchedulesDirectCountriesRequest) -> operations.GetSchedulesDirectCountriesResponse:
        r"""Gets available countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ListingProviders/SchedulesDirect/Countries"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchedulesDirectCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.get_schedules_direct_countries_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_seasons(self, request: operations.GetSeasonsRequest) -> operations.GetSeasonsResponse:
        r"""Gets seasons for a tv series.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Shows/{seriesId}/Seasons", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeasonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_series_remote_search_results(self, request: operations.GetSeriesRemoteSearchResultsRequest) -> operations.GetSeriesRemoteSearchResultsResponse:
        r"""Get series remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/Series"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_series_timer(self, request: operations.GetSeriesTimerRequest) -> operations.GetSeriesTimerResponse:
        r"""Gets a live tv series timer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/SeriesTimers/{timerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDto])
                res.series_timer_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDto])
                res.series_timer_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDto])
                res.series_timer_info_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_series_timers(self, request: operations.GetSeriesTimersRequest) -> operations.GetSeriesTimersResponse:
        r"""Gets live tv series timers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/SeriesTimers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesTimersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDtoQueryResult])
                res.series_timer_info_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDtoQueryResult])
                res.series_timer_info_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SeriesTimerInfoDtoQueryResult])
                res.series_timer_info_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_server_logs(self, request: operations.GetServerLogsRequest) -> operations.GetServerLogsResponse:
        r"""Gets a list of available server log files.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Logs"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LogFile]])
                res.log_files = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LogFile]])
                res.log_files = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LogFile]])
                res.log_files = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_sessions(self, request: operations.GetSessionsRequest) -> operations.GetSessionsResponse:
        r"""Gets a list of sessions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SessionInfo]])
                res.session_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SessionInfo]])
                res.session_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SessionInfo]])
                res.session_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_similar_albums(self, request: operations.GetSimilarAlbumsRequest) -> operations.GetSimilarAlbumsResponse:
        r"""Gets similar items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Albums/{itemId}/Similar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_similar_artists(self, request: operations.GetSimilarArtistsRequest) -> operations.GetSimilarArtistsResponse:
        r"""Gets similar items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Artists/{itemId}/Similar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarArtistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_similar_items(self, request: operations.GetSimilarItemsRequest) -> operations.GetSimilarItemsResponse:
        r"""Gets similar items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Similar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_similar_movies(self, request: operations.GetSimilarMoviesRequest) -> operations.GetSimilarMoviesResponse:
        r"""Gets similar items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Movies/{itemId}/Similar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarMoviesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_similar_shows(self, request: operations.GetSimilarShowsRequest) -> operations.GetSimilarShowsResponse:
        r"""Gets similar items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Shows/{itemId}/Similar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_similar_trailers(self, request: operations.GetSimilarTrailersRequest) -> operations.GetSimilarTrailersResponse:
        r"""Gets similar items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Trailers/{itemId}/Similar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSimilarTrailersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_special_features(self, request: operations.GetSpecialFeaturesRequest) -> operations.GetSpecialFeaturesResponse:
        r"""Gets special features for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/{itemId}/SpecialFeatures", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecialFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.BaseItemDto]])
                res.base_item_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_startup_configuration(self, request: operations.GetStartupConfigurationRequest) -> operations.GetStartupConfigurationResponse:
        r"""Gets the initial startup wizard configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/Configuration"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStartupConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupConfigurationDto])
                res.startup_configuration_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupConfigurationDto])
                res.startup_configuration_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.StartupConfigurationDto])
                res.startup_configuration_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_status(self) -> operations.GetStatusResponse:
        r"""Gets the current quick connect state.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Status"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectStateEnum])
                res.quick_connect_state = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectStateEnum])
                res.quick_connect_state = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectStateEnum])
                res.quick_connect_state = out

        return res

    
    def get_studio(self, request: operations.GetStudioRequest) -> operations.GetStudioResponse:
        r"""Gets a studio by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Studios/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_studio_image(self, request: operations.GetStudioImageRequest) -> operations.GetStudioImageResponse:
        r"""Get studio image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Studios/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudioImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_studio_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_studio_image_by_index(self, request: operations.GetStudioImageByIndexRequest) -> operations.GetStudioImageByIndexResponse:
        r"""Get studio image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Studios/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudioImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_studio_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_studios(self, request: operations.GetStudiosRequest) -> operations.GetStudiosResponse:
        r"""Gets all studios from a given item, folder, or the entire library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Studios"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_subtitle(self, request: operations.GetSubtitleRequest) -> operations.GetSubtitleResponse:
        r"""Gets subtitles in a specified format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/Stream.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubtitleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/*"):
                res.get_subtitle_200_text_wildcard_binary_string = r.content

        return res

    
    def get_subtitle_playlist(self, request: operations.GetSubtitlePlaylistRequest) -> operations.GetSubtitlePlaylistResponse:
        r"""Gets an HLS subtitle playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/subtitles.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubtitlePlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_subtitle_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_subtitle_with_ticks(self, request: operations.GetSubtitleWithTicksRequest) -> operations.GetSubtitleWithTicksResponse:
        r"""Gets subtitles in a specified format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/{mediaSourceId}/Subtitles/{index}/{startPositionTicks}/Stream.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubtitleWithTicksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/*"):
                res.get_subtitle_with_ticks_200_text_wildcard_binary_string = r.content

        return res

    
    def get_suggestions(self, request: operations.GetSuggestionsRequest) -> operations.GetSuggestionsResponse:
        r"""Gets suggestions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Suggestions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_system_info(self, request: operations.GetSystemInfoRequest) -> operations.GetSystemInfoResponse:
        r"""Gets information about the server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Info"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSystemInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemInfo])
                res.system_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemInfo])
                res.system_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemInfo])
                res.system_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_task(self, request: operations.GetTaskRequest) -> operations.GetTaskResponse:
        r"""Get task by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ScheduledTasks/{taskId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskInfo])
                res.task_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskInfo])
                res.task_info = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskInfo])
                res.task_info = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_tasks(self, request: operations.GetTasksRequest) -> operations.GetTasksResponse:
        r"""Get tasks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ScheduledTasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TaskInfo]])
                res.task_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TaskInfo]])
                res.task_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TaskInfo]])
                res.task_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_theme_media(self, request: operations.GetThemeMediaRequest) -> operations.GetThemeMediaResponse:
        r"""Get theme songs and videos for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/ThemeMedia", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThemeMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AllThemeMediaResult])
                res.all_theme_media_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AllThemeMediaResult])
                res.all_theme_media_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.AllThemeMediaResult])
                res.all_theme_media_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_theme_songs(self, request: operations.GetThemeSongsRequest) -> operations.GetThemeSongsResponse:
        r"""Get theme songs for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/ThemeSongs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThemeSongsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ThemeMediaResult])
                res.theme_media_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ThemeMediaResult])
                res.theme_media_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ThemeMediaResult])
                res.theme_media_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_theme_videos(self, request: operations.GetThemeVideosRequest) -> operations.GetThemeVideosResponse:
        r"""Get theme videos for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/ThemeVideos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetThemeVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ThemeMediaResult])
                res.theme_media_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ThemeMediaResult])
                res.theme_media_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.ThemeMediaResult])
                res.theme_media_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_timer(self, request: operations.GetTimerRequest) -> operations.GetTimerResponse:
        r"""Gets a timer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Timers/{timerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TimerInfoDto])
                res.timer_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TimerInfoDto])
                res.timer_info_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TimerInfoDto])
                res.timer_info_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_timers(self, request: operations.GetTimersRequest) -> operations.GetTimersResponse:
        r"""Gets the live tv timers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/Timers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TimerInfoDtoQueryResult])
                res.timer_info_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TimerInfoDtoQueryResult])
                res.timer_info_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TimerInfoDtoQueryResult])
                res.timer_info_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_trailer_remote_search_results(self, request: operations.GetTrailerRemoteSearchResultsRequest) -> operations.GetTrailerRemoteSearchResultsResponse:
        r"""Get trailer remote search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Items/RemoteSearch/Trailer"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrailerRemoteSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSearchResult]])
                res.remote_search_results = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_trailers(self, request: operations.GetTrailersRequest) -> operations.GetTrailersResponse:
        r"""Finds movies and trailers similar to a given trailer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Trailers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrailersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_tuner_host_types(self, request: operations.GetTunerHostTypesRequest) -> operations.GetTunerHostTypesResponse:
        r"""Get tuner host types.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/TunerHosts/Types"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTunerHostTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.NameIDPair]])
                res.name_id_pairs = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_universal_audio_stream(self, request: operations.GetUniversalAudioStreamRequest) -> operations.GetUniversalAudioStreamResponse:
        r"""Gets an audio stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/universal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUniversalAudioStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.get_universal_audio_stream_200_audio_wildcard_binary_string = r.content
        elif r.status_code == 302:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_upcoming_episodes(self, request: operations.GetUpcomingEpisodesRequest) -> operations.GetUpcomingEpisodesResponse:
        r"""Gets a list of upcoming episodes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Shows/Upcoming"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpcomingEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_user_by_id(self, request: operations.GetUserByIDRequest) -> operations.GetUserByIDResponse:
        r"""Gets a user by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_user_image(self, request: operations.GetUserImageRequest) -> operations.GetUserImageResponse:
        r"""Get user profile image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_user_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_user_image_by_index(self, request: operations.GetUserImageByIndexRequest) -> operations.GetUserImageByIndexResponse:
        r"""Get user profile image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_user_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_user_views(self, request: operations.GetUserViewsRequest) -> operations.GetUserViewsResponse:
        r"""Get user views.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Views", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserViewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out

        return res

    
    def get_users(self, request: operations.GetUsersRequest) -> operations.GetUsersResponse:
        r"""Gets a list of users.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserDto]])
                res.user_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserDto]])
                res.user_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UserDto]])
                res.user_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_utc_time(self) -> operations.GetUtcTimeResponse:
        r"""Gets the current UTC time.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/GetUtcTime"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUtcTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UtcTimeResponse])
                res.utc_time_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UtcTimeResponse])
                res.utc_time_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UtcTimeResponse])
                res.utc_time_response = out

        return res

    
    def get_variant_hls_audio_playlist(self, request: operations.GetVariantHlsAudioPlaylistRequest) -> operations.GetVariantHlsAudioPlaylistResponse:
        r"""Gets an audio stream using HTTP live streaming.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/main.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantHlsAudioPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_variant_hls_audio_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_variant_hls_video_playlist(self, request: operations.GetVariantHlsVideoPlaylistRequest) -> operations.GetVariantHlsVideoPlaylistResponse:
        r"""Gets a video stream using HTTP live streaming.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/main.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantHlsVideoPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.get_variant_hls_video_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_video_stream(self, request: operations.GetVideoStreamRequest) -> operations.GetVideoStreamResponse:
        r"""Gets a video stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/stream", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.get_video_stream_200_video_wildcard_binary_string = r.content

        return res

    
    def get_video_stream_by_container(self, request: operations.GetVideoStreamByContainerRequest) -> operations.GetVideoStreamByContainerResponse:
        r"""Gets a video stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/{stream}.{container}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVideoStreamByContainerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.get_video_stream_by_container_200_video_wildcard_binary_string = r.content

        return res

    
    def get_virtual_folders(self, request: operations.GetVirtualFoldersRequest) -> operations.GetVirtualFoldersResponse:
        r"""Gets all virtual folders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVirtualFoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualFolderInfo]])
                res.virtual_folder_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualFolderInfo]])
                res.virtual_folder_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VirtualFolderInfo]])
                res.virtual_folder_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_wake_on_lan_info(self, request: operations.GetWakeOnLanInfoRequest) -> operations.GetWakeOnLanInfoResponse:
        r"""Gets wake on lan information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/WakeOnLanInfo"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWakeOnLanInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WakeOnLanInfo]])
                res.wake_on_lan_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WakeOnLanInfo]])
                res.wake_on_lan_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WakeOnLanInfo]])
                res.wake_on_lan_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_year(self, request: operations.GetYearRequest) -> operations.GetYearResponse:
        r"""Gets a year.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Years/{year}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDto])
                res.base_item_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def get_years(self, request: operations.GetYearsRequest) -> operations.GetYearsResponse:
        r"""Get years.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Years"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetYearsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.BaseItemDtoQueryResult])
                res.base_item_dto_query_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def head_artist_image(self, request: operations.HeadArtistImageRequest) -> operations.HeadArtistImageResponse:
        r"""Get artist image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Artists/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadArtistImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_artist_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_audio_stream(self, request: operations.HeadAudioStreamRequest) -> operations.HeadAudioStreamResponse:
        r"""Gets an audio stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/stream", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadAudioStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.head_audio_stream_200_audio_wildcard_binary_string = r.content

        return res

    
    def head_audio_stream_by_container(self, request: operations.HeadAudioStreamByContainerRequest) -> operations.HeadAudioStreamByContainerResponse:
        r"""Gets an audio stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/stream.{container}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadAudioStreamByContainerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.head_audio_stream_by_container_200_audio_wildcard_binary_string = r.content

        return res

    
    def head_genre_image(self, request: operations.HeadGenreImageRequest) -> operations.HeadGenreImageResponse:
        r"""Get genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Genres/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadGenreImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_genre_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_genre_image_by_index(self, request: operations.HeadGenreImageByIndexRequest) -> operations.HeadGenreImageByIndexResponse:
        r"""Get genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Genres/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadGenreImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_genre_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_item_image(self, request: operations.HeadItemImageRequest) -> operations.HeadItemImageResponse:
        r"""Gets the item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadItemImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_item_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_item_image2(self, request: operations.HeadItemImage2Request) -> operations.HeadItemImage2Response:
        r"""Gets the item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}/{tag}/{format}/{maxWidth}/{maxHeight}/{percentPlayed}/{unplayedCount}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadItemImage2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_item_image2_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_item_image_by_index(self, request: operations.HeadItemImageByIndexRequest) -> operations.HeadItemImageByIndexResponse:
        r"""Gets the item's image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadItemImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_item_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_master_hls_audio_playlist(self, request: operations.HeadMasterHlsAudioPlaylistRequest) -> operations.HeadMasterHlsAudioPlaylistResponse:
        r"""Gets an audio hls playlist stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/master.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadMasterHlsAudioPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.head_master_hls_audio_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def head_master_hls_video_playlist(self, request: operations.HeadMasterHlsVideoPlaylistRequest) -> operations.HeadMasterHlsVideoPlaylistResponse:
        r"""Gets a video hls playlist stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/master.m3u8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadMasterHlsVideoPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/x-mpegURL"):
                res.head_master_hls_video_playlist_200_application_x_mpegurl_binary_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def head_music_genre_image(self, request: operations.HeadMusicGenreImageRequest) -> operations.HeadMusicGenreImageResponse:
        r"""Get music genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadMusicGenreImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_music_genre_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_music_genre_image_by_index(self, request: operations.HeadMusicGenreImageByIndexRequest) -> operations.HeadMusicGenreImageByIndexResponse:
        r"""Get music genre image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/MusicGenres/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadMusicGenreImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_music_genre_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_person_image(self, request: operations.HeadPersonImageRequest) -> operations.HeadPersonImageResponse:
        r"""Get person image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Persons/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadPersonImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_person_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_person_image_by_index(self, request: operations.HeadPersonImageByIndexRequest) -> operations.HeadPersonImageByIndexResponse:
        r"""Get person image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Persons/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadPersonImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_person_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_studio_image(self, request: operations.HeadStudioImageRequest) -> operations.HeadStudioImageResponse:
        r"""Get studio image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Studios/{name}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadStudioImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_studio_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_studio_image_by_index(self, request: operations.HeadStudioImageByIndexRequest) -> operations.HeadStudioImageByIndexResponse:
        r"""Get studio image by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Studios/{name}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadStudioImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_studio_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_universal_audio_stream(self, request: operations.HeadUniversalAudioStreamRequest) -> operations.HeadUniversalAudioStreamResponse:
        r"""Gets an audio stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Audio/{itemId}/universal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadUniversalAudioStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "audio/*"):
                res.head_universal_audio_stream_200_audio_wildcard_binary_string = r.content
        elif r.status_code == 302:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def head_user_image(self, request: operations.HeadUserImageRequest) -> operations.HeadUserImageResponse:
        r"""Get user profile image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadUserImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_user_image_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_user_image_by_index(self, request: operations.HeadUserImageByIndexRequest) -> operations.HeadUserImageByIndexResponse:
        r"""Get user profile image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}/{imageIndex}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadUserImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.head_user_image_by_index_200_image_wildcard_binary_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def head_video_stream(self, request: operations.HeadVideoStreamRequest) -> operations.HeadVideoStreamResponse:
        r"""Gets a video stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/stream", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadVideoStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.head_video_stream_200_video_wildcard_binary_string = r.content

        return res

    
    def head_video_stream_by_container(self, request: operations.HeadVideoStreamByContainerRequest) -> operations.HeadVideoStreamByContainerResponse:
        r"""Gets a video stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/{stream}.{container}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadVideoStreamByContainerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "video/*"):
                res.head_video_stream_by_container_200_video_wildcard_binary_string = r.content

        return res

    
    def initiate(self) -> operations.InitiateResponse:
        r"""Initiate a new quick connect request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/QuickConnect/Initiate"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InitiateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectResult])
                res.quick_connect_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectResult])
                res.quick_connect_result = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.QuickConnectResult])
                res.quick_connect_result = out
        elif r.status_code == 401:
            pass

        return res

    
    def install_package(self, request: operations.InstallPackageRequest) -> operations.InstallPackageResponse:
        r"""Installs a package.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Packages/Installed/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InstallPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def mark_favorite_item(self, request: operations.MarkFavoriteItemRequest) -> operations.MarkFavoriteItemResponse:
        r"""Marks an item as a favorite.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/FavoriteItems/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkFavoriteItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def mark_played_item(self, request: operations.MarkPlayedItemRequest) -> operations.MarkPlayedItemResponse:
        r"""Marks an item as played for user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/PlayedItems/{itemId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkPlayedItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def mark_unplayed_item(self, request: operations.MarkUnplayedItemRequest) -> operations.MarkUnplayedItemResponse:
        r"""Marks an item as unplayed for user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/PlayedItems/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MarkUnplayedItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def merge_versions(self, request: operations.MergeVersionsRequest) -> operations.MergeVersionsResponse:
        r"""Merges videos into a single record.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Videos/MergeVersions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MergeVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def move_item(self, request: operations.MoveItemRequest) -> operations.MoveItemResponse:
        r"""Moves a playlist item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Playlists/{playlistId}/Items/{itemId}/Move/{newIndex}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MoveItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def on_playback_progress(self, request: operations.OnPlaybackProgressRequest) -> operations.OnPlaybackProgressResponse:
        r"""Reports a user's playback progress.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/PlayingItems/{itemId}/Progress", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OnPlaybackProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def on_playback_start(self, request: operations.OnPlaybackStartRequest) -> operations.OnPlaybackStartResponse:
        r"""Reports that a user has begun playing an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/PlayingItems/{itemId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OnPlaybackStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def on_playback_stopped(self, request: operations.OnPlaybackStoppedRequest) -> operations.OnPlaybackStoppedResponse:
        r"""Reports that a user has stopped playing an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/PlayingItems/{itemId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OnPlaybackStoppedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def open_live_stream(self, request: operations.OpenLiveStreamRequest) -> operations.OpenLiveStreamResponse:
        r"""Opens a media source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveStreams/Open"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OpenLiveStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStreamResponse])
                res.live_stream_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStreamResponse])
                res.live_stream_response = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStreamResponse])
                res.live_stream_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def ping_playback_session(self, request: operations.PingPlaybackSessionRequest) -> operations.PingPlaybackSessionResponse:
        r"""Pings a playback session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Playing/Ping"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PingPlaybackSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def play(self, request: operations.PlayRequest) -> operations.PlayResponse:
        r"""Instructs a session to play an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/Playing", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post(self, request: operations.PostRequest) -> operations.PostResponse:
        r"""Refreshes metadata for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Refresh", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_added_movies(self, request: operations.PostAddedMoviesRequest) -> operations.PostAddedMoviesResponse:
        r"""Reports that new movies have been added by an external source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/Movies/Added"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddedMoviesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_added_series(self, request: operations.PostAddedSeriesRequest) -> operations.PostAddedSeriesResponse:
        r"""Reports that new episodes of a series have been added by an external source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/Series/Added"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAddedSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_capabilities(self, request: operations.PostCapabilitiesRequest) -> operations.PostCapabilitiesResponse:
        r"""Updates capabilities for a device.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Capabilities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_full_capabilities(self, request: operations.PostFullCapabilitiesRequest) -> operations.PostFullCapabilitiesResponse:
        r"""Updates capabilities for a device.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Capabilities/Full"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFullCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_ping_system(self) -> operations.PostPingSystemResponse:
        r"""Pings the system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Ping"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPingSystemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_ping_system_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                res.post_ping_system_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                res.post_ping_system_200_application_json_string = r.content

        return res

    
    def post_updated_media(self, request: operations.PostUpdatedMediaRequest) -> operations.PostUpdatedMediaResponse:
        r"""Reports that new movies have been added by an external source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/Media/Updated"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdatedMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_updated_movies(self, request: operations.PostUpdatedMoviesRequest) -> operations.PostUpdatedMoviesResponse:
        r"""Reports that new movies have been added by an external source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/Movies/Updated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdatedMoviesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_updated_series(self, request: operations.PostUpdatedSeriesRequest) -> operations.PostUpdatedSeriesResponse:
        r"""Reports that new episodes of a series have been added by an external source.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/Series/Updated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdatedSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def post_user_image(self, request: operations.PostUserImageRequest) -> operations.PostUserImageResponse:
        r"""Sets the user image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def post_user_image_by_index(self, request: operations.PostUserImageByIndexRequest) -> operations.PostUserImageByIndexResponse:
        r"""Sets the user image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Images/{imageType}/{index}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def process_connection_manager_control_request(self, request: operations.ProcessConnectionManagerControlRequestRequest) -> operations.ProcessConnectionManagerControlRequestResponse:
        r"""Process a connection manager control request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ConnectionManager/Control", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessConnectionManagerControlRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.process_connection_manager_control_request_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def process_content_directory_control_request(self, request: operations.ProcessContentDirectoryControlRequestRequest) -> operations.ProcessContentDirectoryControlRequestResponse:
        r"""Process a content directory control request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/ContentDirectory/Control", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessContentDirectoryControlRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.process_content_directory_control_request_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def process_media_receiver_registrar_control_request(self, request: operations.ProcessMediaReceiverRegistrarControlRequestRequest) -> operations.ProcessMediaReceiverRegistrarControlRequestResponse:
        r"""Process a media receiver registrar control request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/{serverId}/MediaReceiverRegistrar/Control", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessMediaReceiverRegistrarControlRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.process_media_receiver_registrar_control_request_200_text_xml_binary_string = r.content
        elif r.status_code == 503:
            pass

        return res

    
    def refresh_library(self, request: operations.RefreshLibraryRequest) -> operations.RefreshLibraryResponse:
        r"""Starts a library scan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/Refresh"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RefreshLibraryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def remove_from_collection(self, request: operations.RemoveFromCollectionRequest) -> operations.RemoveFromCollectionResponse:
        r"""Removes items from a collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Collections/{collectionId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveFromCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def remove_from_playlist(self, request: operations.RemoveFromPlaylistRequest) -> operations.RemoveFromPlaylistResponse:
        r"""Removes items from a playlist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Playlists/{playlistId}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveFromPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def remove_media_path(self, request: operations.RemoveMediaPathRequest) -> operations.RemoveMediaPathResponse:
        r"""Remove a media path.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders/Paths"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveMediaPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def remove_user_from_session(self, request: operations.RemoveUserFromSessionRequest) -> operations.RemoveUserFromSessionResponse:
        r"""Removes an additional user from a session.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/User/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveUserFromSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def remove_virtual_folder(self, request: operations.RemoveVirtualFolderRequest) -> operations.RemoveVirtualFolderResponse:
        r"""Removes a virtual folder.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveVirtualFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def rename_virtual_folder(self, request: operations.RenameVirtualFolderRequest) -> operations.RenameVirtualFolderResponse:
        r"""Renames a virtual folder.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders/Name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RenameVirtualFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def report_playback_progress(self, request: operations.ReportPlaybackProgressRequest) -> operations.ReportPlaybackProgressResponse:
        r"""Reports playback progress within a session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Playing/Progress"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportPlaybackProgressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def report_playback_start(self, request: operations.ReportPlaybackStartRequest) -> operations.ReportPlaybackStartResponse:
        r"""Reports playback has started within a session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Playing"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportPlaybackStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def report_playback_stopped(self, request: operations.ReportPlaybackStoppedRequest) -> operations.ReportPlaybackStoppedResponse:
        r"""Reports playback has stopped within a session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Playing/Stopped"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportPlaybackStoppedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def report_session_ended(self, request: operations.ReportSessionEndedRequest) -> operations.ReportSessionEndedResponse:
        r"""Reports that a session has ended.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Logout"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportSessionEndedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def report_viewing(self, request: operations.ReportViewingRequest) -> operations.ReportViewingResponse:
        r"""Reports that a session is viewing an item.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Sessions/Viewing"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportViewingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def reset_tuner(self, request: operations.ResetTunerRequest) -> operations.ResetTunerResponse:
        r"""Resets a tv tuner.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Tuners/{tunerId}/Reset", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetTunerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def restart_application(self, request: operations.RestartApplicationRequest) -> operations.RestartApplicationResponse:
        r"""Restarts the application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Restart"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RestartApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def revoke_key(self, request: operations.RevokeKeyRequest) -> operations.RevokeKeyResponse:
        r"""Remove an api key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Auth/Keys/{key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def search_remote_subtitles(self, request: operations.SearchRemoteSubtitlesRequest) -> operations.SearchRemoteSubtitlesResponse:
        r"""Search remote subtitles.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/RemoteSearch/Subtitles/{language}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchRemoteSubtitlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSubtitleInfo]])
                res.remote_subtitle_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSubtitleInfo]])
                res.remote_subtitle_infos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RemoteSubtitleInfo]])
                res.remote_subtitle_infos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def send_full_general_command(self, request: operations.SendFullGeneralCommandRequest) -> operations.SendFullGeneralCommandResponse:
        r"""Issues a full general command to a client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/Command", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendFullGeneralCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def send_general_command(self, request: operations.SendGeneralCommandRequest) -> operations.SendGeneralCommandResponse:
        r"""Issues a general command to a client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/Command/{command}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SendGeneralCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def send_message_command(self, request: operations.SendMessageCommandRequest) -> operations.SendMessageCommandResponse:
        r"""Issues a command to a client to display a message to the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/Message", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SendMessageCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def send_playstate_command(self, request: operations.SendPlaystateCommandRequest) -> operations.SendPlaystateCommandResponse:
        r"""Issues a playstate command to a client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/Playing/{command}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SendPlaystateCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def send_system_command(self, request: operations.SendSystemCommandRequest) -> operations.SendSystemCommandResponse:
        r"""Issues a system command to a client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Sessions/{sessionId}/System/{command}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SendSystemCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def set_channel_mapping(self, request: operations.SetChannelMappingRequest) -> operations.SetChannelMappingResponse:
        r"""Set channel mappings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/LiveTv/ChannelMappings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetChannelMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TunerChannelMapping])
                res.tuner_channel_mapping = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TunerChannelMapping])
                res.tuner_channel_mapping = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.TunerChannelMapping])
                res.tuner_channel_mapping = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def set_item_image(self, request: operations.SetItemImageRequest) -> operations.SetItemImageResponse:
        r"""Set item image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetItemImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def set_item_image_by_index(self, request: operations.SetItemImageByIndexRequest) -> operations.SetItemImageByIndexResponse:
        r"""Set item image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetItemImageByIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def set_read(self, request: operations.SetReadRequest) -> operations.SetReadResponse:
        r"""Sets notifications as read.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Notifications/{userId}/Read", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def set_remote_access(self, request: operations.SetRemoteAccessRequest) -> operations.SetRemoteAccessResponse:
        r"""Sets remote access and UPnP.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/RemoteAccess"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetRemoteAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def set_repositories(self, request: operations.SetRepositoriesRequest) -> operations.SetRepositoriesResponse:
        r"""Sets the enabled and existing package repositories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Repositories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetRepositoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def set_unread(self, request: operations.SetUnreadRequest) -> operations.SetUnreadResponse:
        r"""Sets notifications as unread.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Notifications/{userId}/Unread", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SetUnreadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def shutdown_application(self, request: operations.ShutdownApplicationRequest) -> operations.ShutdownApplicationResponse:
        r"""Shuts down the application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Shutdown"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShutdownApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def start_task(self, request: operations.StartTaskRequest) -> operations.StartTaskResponse:
        r"""Start specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ScheduledTasks/Running/{taskId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def stop_encoding_process(self, request: operations.StopEncodingProcessRequest) -> operations.StopEncodingProcessResponse:
        r"""Stops an active encoding.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Videos/ActiveEncodings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StopEncodingProcessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def stop_task(self, request: operations.StopTaskRequest) -> operations.StopTaskResponse:
        r"""Stop specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ScheduledTasks/Running/{taskId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def sync_play_buffering(self, request: operations.SyncPlayBufferingRequest) -> operations.SyncPlayBufferingResponse:
        r"""Notify SyncPlay group that member is buffering.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Buffering"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayBufferingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_create_group(self, request: operations.SyncPlayCreateGroupRequest) -> operations.SyncPlayCreateGroupResponse:
        r"""Create a new SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/New"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayCreateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_get_groups(self, request: operations.SyncPlayGetGroupsRequest) -> operations.SyncPlayGetGroupsResponse:
        r"""Gets all SyncPlay groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/List"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayGetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupInfoDto]])
                res.group_info_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupInfoDto]])
                res.group_info_dtos = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GroupInfoDto]])
                res.group_info_dtos = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_join_group(self, request: operations.SyncPlayJoinGroupRequest) -> operations.SyncPlayJoinGroupResponse:
        r"""Join an existing SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Join"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayJoinGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_leave_group(self, request: operations.SyncPlayLeaveGroupRequest) -> operations.SyncPlayLeaveGroupResponse:
        r"""Leave the joined SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Leave"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayLeaveGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_move_playlist_item(self, request: operations.SyncPlayMovePlaylistItemRequest) -> operations.SyncPlayMovePlaylistItemResponse:
        r"""Request to move an item in the playlist in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/MovePlaylistItem"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayMovePlaylistItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_next_item(self, request: operations.SyncPlayNextItemRequest) -> operations.SyncPlayNextItemResponse:
        r"""Request next item in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/NextItem"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayNextItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_pause(self, request: operations.SyncPlayPauseRequest) -> operations.SyncPlayPauseResponse:
        r"""Request pause in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Pause"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_ping(self, request: operations.SyncPlayPingRequest) -> operations.SyncPlayPingResponse:
        r"""Update session ping.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Ping"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayPingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_previous_item(self, request: operations.SyncPlayPreviousItemRequest) -> operations.SyncPlayPreviousItemResponse:
        r"""Request previous item in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/PreviousItem"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayPreviousItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_queue(self, request: operations.SyncPlayQueueRequest) -> operations.SyncPlayQueueResponse:
        r"""Request to queue items to the playlist of a SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Queue"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_ready(self, request: operations.SyncPlayReadyRequest) -> operations.SyncPlayReadyResponse:
        r"""Notify SyncPlay group that member is ready for playback.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Ready"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayReadyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_remove_from_playlist(self, request: operations.SyncPlayRemoveFromPlaylistRequest) -> operations.SyncPlayRemoveFromPlaylistResponse:
        r"""Request to remove items from the playlist in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/RemoveFromPlaylist"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayRemoveFromPlaylistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_seek(self, request: operations.SyncPlaySeekRequest) -> operations.SyncPlaySeekResponse:
        r"""Request seek in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Seek"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlaySeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_set_ignore_wait(self, request: operations.SyncPlaySetIgnoreWaitRequest) -> operations.SyncPlaySetIgnoreWaitResponse:
        r"""Request SyncPlay group to ignore member during group-wait.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/SetIgnoreWait"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlaySetIgnoreWaitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_set_new_queue(self, request: operations.SyncPlaySetNewQueueRequest) -> operations.SyncPlaySetNewQueueResponse:
        r"""Request to set new playlist in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/SetNewQueue"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlaySetNewQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_set_playlist_item(self, request: operations.SyncPlaySetPlaylistItemRequest) -> operations.SyncPlaySetPlaylistItemResponse:
        r"""Request to change playlist item in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/SetPlaylistItem"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlaySetPlaylistItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_set_repeat_mode(self, request: operations.SyncPlaySetRepeatModeRequest) -> operations.SyncPlaySetRepeatModeResponse:
        r"""Request to set repeat mode in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/SetRepeatMode"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlaySetRepeatModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_set_shuffle_mode(self, request: operations.SyncPlaySetShuffleModeRequest) -> operations.SyncPlaySetShuffleModeResponse:
        r"""Request to set shuffle mode in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/SetShuffleMode"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlaySetShuffleModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_stop(self, request: operations.SyncPlayStopRequest) -> operations.SyncPlayStopResponse:
        r"""Request stop in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Stop"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def sync_play_unpause(self, request: operations.SyncPlayUnpauseRequest) -> operations.SyncPlayUnpauseResponse:
        r"""Request unpause in SyncPlay group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/SyncPlay/Unpause"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SyncPlayUnpauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def uninstall_plugin(self, request: operations.UninstallPluginRequest) -> operations.UninstallPluginResponse:
        r"""Uninstalls a plugin.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UninstallPluginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def uninstall_plugin_by_version(self, request: operations.UninstallPluginByVersionRequest) -> operations.UninstallPluginByVersionResponse:
        r"""Uninstalls a plugin by version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/{version}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UninstallPluginByVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def unmark_favorite_item(self, request: operations.UnmarkFavoriteItemRequest) -> operations.UnmarkFavoriteItemResponse:
        r"""Unmarks item as a favorite.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/FavoriteItems/{itemId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnmarkFavoriteItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_configuration(self, request: operations.UpdateConfigurationRequest) -> operations.UpdateConfigurationResponse:
        r"""Updates application configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/Configuration"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_device_options(self, request: operations.UpdateDeviceOptionsRequest) -> operations.UpdateDeviceOptionsResponse:
        r"""Update device options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Devices/Options"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_display_preferences(self, request: operations.UpdateDisplayPreferencesRequest) -> operations.UpdateDisplayPreferencesResponse:
        r"""Update Display Preferences.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/DisplayPreferences/{displayPreferencesId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDisplayPreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_initial_configuration(self, request: operations.UpdateInitialConfigurationRequest) -> operations.UpdateInitialConfigurationResponse:
        r"""Sets the initial startup wizard configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/Configuration"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateInitialConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_item(self, request: operations.UpdateItemRequest) -> operations.UpdateItemResponse:
        r"""Updates an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_item_content_type(self, request: operations.UpdateItemContentTypeRequest) -> operations.UpdateItemContentTypeResponse:
        r"""Updates an item's content type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/ContentType", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateItemContentTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_item_image_index(self, request: operations.UpdateItemImageIndexRequest) -> operations.UpdateItemImageIndexResponse:
        r"""Updates the index for an item image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Items/{itemId}/Images/{imageType}/{imageIndex}/Index", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateItemImageIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_library_options(self, request: operations.UpdateLibraryOptionsRequest) -> operations.UpdateLibraryOptionsResponse:
        r"""Update library options.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders/LibraryOptions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLibraryOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_media_encoder_path(self, request: operations.UpdateMediaEncoderPathRequest) -> operations.UpdateMediaEncoderPathResponse:
        r"""Updates the path to the media encoder.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/System/MediaEncoder/Path"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMediaEncoderPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_media_path(self, request: operations.UpdateMediaPathRequest) -> operations.UpdateMediaPathResponse:
        r"""Updates a media path.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Library/VirtualFolders/Paths/Update"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMediaPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_named_configuration(self, request: operations.UpdateNamedConfigurationRequest) -> operations.UpdateNamedConfigurationResponse:
        r"""Updates named configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/System/Configuration/{key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNamedConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_plugin_configuration(self, request: operations.UpdatePluginConfigurationRequest) -> operations.UpdatePluginConfigurationResponse:
        r"""Updates plugin configuration.
        Accepts plugin configuration as JSON body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Plugins/{pluginId}/Configuration", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePluginConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_plugin_security_info(self, request: operations.UpdatePluginSecurityInfoRequest) -> operations.UpdatePluginSecurityInfoResponse:
        r"""Updates plugin security info.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Plugins/SecurityInfo"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePluginSecurityInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_profile(self, request: operations.UpdateProfileRequest) -> operations.UpdateProfileResponse:
        r"""Updates a profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Dlna/Profiles/{profileId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_series_timer(self, request: operations.UpdateSeriesTimerRequest) -> operations.UpdateSeriesTimerResponse:
        r"""Updates a live tv series timer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/SeriesTimers/{timerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSeriesTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_startup_user(self, request: operations.UpdateStartupUserRequest) -> operations.UpdateStartupUserResponse:
        r"""Sets the user name and password.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Startup/User"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateStartupUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        r"""Update specified task triggers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ScheduledTasks/{taskId}/Triggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_timer(self, request: operations.UpdateTimerRequest) -> operations.UpdateTimerResponse:
        r"""Updates a live tv timer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/LiveTv/Timers/{timerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTimerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        r"""Updates a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_user_configuration(self, request: operations.UpdateUserConfigurationRequest) -> operations.UpdateUserConfigurationResponse:
        r"""Updates a user configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Configuration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_user_easy_password(self, request: operations.UpdateUserEasyPasswordRequest) -> operations.UpdateUserEasyPasswordResponse:
        r"""Updates a user's easy password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/EasyPassword", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserEasyPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_user_item_rating(self, request: operations.UpdateUserItemRatingRequest) -> operations.UpdateUserItemRatingResponse:
        r"""Updates a user's rating for an item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Items/{itemId}/Rating", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserItemRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[shared.UserItemDataDto])
                res.user_item_data_dto = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def update_user_password(self, request: operations.UpdateUserPasswordRequest) -> operations.UpdateUserPasswordResponse:
        r"""Updates a user's password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def update_user_policy(self, request: operations.UpdateUserPolicyRequest) -> operations.UpdateUserPolicyResponse:
        r"""Updates a user policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Users/{userId}/Policy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    
    def upload_subtitle(self, request: operations.UploadSubtitleRequest) -> operations.UploadSubtitleResponse:
        r"""Upload an external subtitle file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Videos/{itemId}/Subtitles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadSubtitleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def validate_path(self, request: operations.ValidatePathRequest) -> operations.ValidatePathResponse:
        r"""Validates path.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Environment/ValidatePath"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ValidatePathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"CamelCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out
            if utils.match_content_type(content_type, "application/json; profile=\"PascalCase\""):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.problem_details = out

        return res

    