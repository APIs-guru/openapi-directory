import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def datastream_projects_locations_connection_profiles_create(self, request: operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest) -> operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse:
        r"""Use this method to create a connection profile in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/connectionProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsConnectionProfilesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def datastream_projects_locations_connection_profiles_discover(self, request: operations.DatastreamProjectsLocationsConnectionProfilesDiscoverRequest) -> operations.DatastreamProjectsLocationsConnectionProfilesDiscoverResponse:
        r"""Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/connectionProfiles:discover", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsConnectionProfilesDiscoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscoverConnectionProfileResponse])
                res.discover_connection_profile_response = out

        return res

    
    def datastream_projects_locations_connection_profiles_list(self, request: operations.DatastreamProjectsLocationsConnectionProfilesListRequest) -> operations.DatastreamProjectsLocationsConnectionProfilesListResponse:
        r"""Use this method to list connection profiles created in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/connectionProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsConnectionProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConnectionProfilesResponse])
                res.list_connection_profiles_response = out

        return res

    
    def datastream_projects_locations_fetch_static_ips(self, request: operations.DatastreamProjectsLocationsFetchStaticIpsRequest) -> operations.DatastreamProjectsLocationsFetchStaticIpsResponse:
        r"""The FetchStaticIps API call exposes the static IP addresses used by Datastream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:fetchStaticIps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsFetchStaticIpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchStaticIpsResponse])
                res.fetch_static_ips_response = out

        return res

    
    def datastream_projects_locations_list(self, request: operations.DatastreamProjectsLocationsListRequest) -> operations.DatastreamProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def datastream_projects_locations_operations_cancel(self, request: operations.DatastreamProjectsLocationsOperationsCancelRequest) -> operations.DatastreamProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def datastream_projects_locations_operations_list(self, request: operations.DatastreamProjectsLocationsOperationsListRequest) -> operations.DatastreamProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def datastream_projects_locations_private_connections_create(self, request: operations.DatastreamProjectsLocationsPrivateConnectionsCreateRequest) -> operations.DatastreamProjectsLocationsPrivateConnectionsCreateResponse:
        r"""Use this method to create a private connectivity configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/privateConnections", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsPrivateConnectionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def datastream_projects_locations_private_connections_list(self, request: operations.DatastreamProjectsLocationsPrivateConnectionsListRequest) -> operations.DatastreamProjectsLocationsPrivateConnectionsListResponse:
        r"""Use this method to list private connectivity configurations in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/privateConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsPrivateConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPrivateConnectionsResponse])
                res.list_private_connections_response = out

        return res

    
    def datastream_projects_locations_private_connections_routes_create(self, request: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest) -> operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse:
        r"""Use this method to create a route for a private connectivity configuration in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/routes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsPrivateConnectionsRoutesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def datastream_projects_locations_private_connections_routes_list(self, request: operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest) -> operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse:
        r"""Use this method to list routes created for a private connectivity configuration in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/routes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsPrivateConnectionsRoutesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRoutesResponse])
                res.list_routes_response = out

        return res

    
    def datastream_projects_locations_streams_create(self, request: operations.DatastreamProjectsLocationsStreamsCreateRequest) -> operations.DatastreamProjectsLocationsStreamsCreateResponse:
        r"""Use this method to create a stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/streams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def datastream_projects_locations_streams_delete(self, request: operations.DatastreamProjectsLocationsStreamsDeleteRequest) -> operations.DatastreamProjectsLocationsStreamsDeleteResponse:
        r"""Use this method to delete a stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def datastream_projects_locations_streams_list(self, request: operations.DatastreamProjectsLocationsStreamsListRequest) -> operations.DatastreamProjectsLocationsStreamsListResponse:
        r"""Use this method to list streams in a project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/streams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStreamsResponse])
                res.list_streams_response = out

        return res

    
    def datastream_projects_locations_streams_objects_get(self, request: operations.DatastreamProjectsLocationsStreamsObjectsGetRequest) -> operations.DatastreamProjectsLocationsStreamsObjectsGetResponse:
        r"""Use this method to get details about a stream object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsObjectsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StreamObject])
                res.stream_object = out

        return res

    
    def datastream_projects_locations_streams_objects_list(self, request: operations.DatastreamProjectsLocationsStreamsObjectsListRequest) -> operations.DatastreamProjectsLocationsStreamsObjectsListResponse:
        r"""Use this method to list the objects of a specific stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/objects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsObjectsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListStreamObjectsResponse])
                res.list_stream_objects_response = out

        return res

    
    def datastream_projects_locations_streams_objects_lookup(self, request: operations.DatastreamProjectsLocationsStreamsObjectsLookupRequest) -> operations.DatastreamProjectsLocationsStreamsObjectsLookupResponse:
        r"""Use this method to look up a stream object by its source object identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/objects:lookup", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsObjectsLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StreamObject])
                res.stream_object = out

        return res

    
    def datastream_projects_locations_streams_objects_start_backfill_job(self, request: operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest) -> operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse:
        r"""Use this method to start a backfill job for the specified stream object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{object}:startBackfillJob", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsObjectsStartBackfillJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartBackfillJobResponse])
                res.start_backfill_job_response = out

        return res

    
    def datastream_projects_locations_streams_objects_stop_backfill_job(self, request: operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest) -> operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse:
        r"""Use this method to stop a backfill job for the specified stream object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{object}:stopBackfillJob", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsObjectsStopBackfillJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StopBackfillJobResponse])
                res.stop_backfill_job_response = out

        return res

    
    def datastream_projects_locations_streams_patch(self, request: operations.DatastreamProjectsLocationsStreamsPatchRequest) -> operations.DatastreamProjectsLocationsStreamsPatchResponse:
        r"""Use this method to update the configuration of a stream.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatastreamProjectsLocationsStreamsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    