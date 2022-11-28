import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Sites:
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

    
    def firebasehosting_sites_channels_create(self, request: operations.FirebasehostingSitesChannelsCreateRequest) -> operations.FirebasehostingSitesChannelsCreateResponse:
        r"""Creates a new channel in the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/channels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def firebasehosting_sites_channels_list(self, request: operations.FirebasehostingSitesChannelsListRequest) -> operations.FirebasehostingSitesChannelsListResponse:
        r"""Lists the channels for the specified site. All sites have a default `live` channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChannelsResponse])
                res.list_channels_response = out

        return res

    
    def firebasehosting_sites_domains_create(self, request: operations.FirebasehostingSitesDomainsCreateRequest) -> operations.FirebasehostingSitesDomainsCreateResponse:
        r"""Creates a domain mapping on the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/domains", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesDomainsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out

        return res

    
    def firebasehosting_sites_domains_get(self, request: operations.FirebasehostingSitesDomainsGetRequest) -> operations.FirebasehostingSitesDomainsGetResponse:
        r"""Gets a domain mapping on the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesDomainsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out

        return res

    
    def firebasehosting_sites_domains_list(self, request: operations.FirebasehostingSitesDomainsListRequest) -> operations.FirebasehostingSitesDomainsListResponse:
        r"""Lists the domains for the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/domains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesDomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDomainsResponse])
                res.list_domains_response = out

        return res

    
    def firebasehosting_sites_domains_update(self, request: operations.FirebasehostingSitesDomainsUpdateRequest) -> operations.FirebasehostingSitesDomainsUpdateResponse:
        r"""Updates the specified domain mapping, creating the mapping as if it does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesDomainsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out

        return res

    
    def firebasehosting_sites_releases_create(self, request: operations.FirebasehostingSitesReleasesCreateRequest) -> operations.FirebasehostingSitesReleasesCreateResponse:
        r"""Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/releases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesReleasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Release])
                res.release = out

        return res

    
    def firebasehosting_sites_releases_list(self, request: operations.FirebasehostingSitesReleasesListRequest) -> operations.FirebasehostingSitesReleasesListResponse:
        r"""Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/releases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesReleasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReleasesResponse])
                res.list_releases_response = out

        return res

    
    def firebasehosting_sites_versions_clone(self, request: operations.FirebasehostingSitesVersionsCloneRequest) -> operations.FirebasehostingSitesVersionsCloneResponse:
        r"""Creates a new version on the specified target site using the content of the specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/versions:clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsCloneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def firebasehosting_sites_versions_create(self, request: operations.FirebasehostingSitesVersionsCreateRequest) -> operations.FirebasehostingSitesVersionsCreateResponse:
        r"""Creates a new version for the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Version])
                res.version = out

        return res

    
    def firebasehosting_sites_versions_delete(self, request: operations.FirebasehostingSitesVersionsDeleteRequest) -> operations.FirebasehostingSitesVersionsDeleteResponse:
        r"""Deletes the specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def firebasehosting_sites_versions_files_list(self, request: operations.FirebasehostingSitesVersionsFilesListRequest) -> operations.FirebasehostingSitesVersionsFilesListResponse:
        r"""Lists the remaining files to be uploaded for the specified version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/files", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVersionFilesResponse])
                res.list_version_files_response = out

        return res

    
    def firebasehosting_sites_versions_list(self, request: operations.FirebasehostingSitesVersionsListRequest) -> operations.FirebasehostingSitesVersionsListResponse:
        r"""Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVersionsResponse])
                res.list_versions_response = out

        return res

    
    def firebasehosting_sites_versions_patch(self, request: operations.FirebasehostingSitesVersionsPatchRequest) -> operations.FirebasehostingSitesVersionsPatchResponse:
        r""" Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Version])
                res.version = out

        return res

    
    def firebasehosting_sites_versions_populate_files(self, request: operations.FirebasehostingSitesVersionsPopulateFilesRequest) -> operations.FirebasehostingSitesVersionsPopulateFilesResponse:
        r""" Adds content files to the specified version. Each file must be under 2 GB.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}:populateFiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasehostingSitesVersionsPopulateFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PopulateVersionFilesResponse])
                res.populate_version_files_response = out

        return res

    