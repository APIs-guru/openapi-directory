

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://netboxdemo.com/api",
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
        
    
    
    
    def circuits_circuit_terminations_create(self, request: operations.CircuitsCircuitTerminationsCreateRequest) -> operations.CircuitsCircuitTerminationsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-terminations/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_terminations_delete(self, request: operations.CircuitsCircuitTerminationsDeleteRequest) -> operations.CircuitsCircuitTerminationsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_circuit_terminations_list(self, request: operations.CircuitsCircuitTerminationsListRequest) -> operations.CircuitsCircuitTerminationsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-terminations/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitTerminationsList200ApplicationJSON])
                res.circuits_circuit_terminations_list_200_application_json_object = out

        return res

    
    def circuits_circuit_terminations_partial_update(self, request: operations.CircuitsCircuitTerminationsPartialUpdateRequest) -> operations.CircuitsCircuitTerminationsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_terminations_read(self, request: operations.CircuitsCircuitTerminationsReadRequest) -> operations.CircuitsCircuitTerminationsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_terminations_update(self, request: operations.CircuitsCircuitTerminationsUpdateRequest) -> operations.CircuitsCircuitTerminationsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    def circuits_circuit_types_create(self, request: operations.CircuitsCircuitTypesCreateRequest) -> operations.CircuitsCircuitTypesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-types/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuit_types_delete(self, request: operations.CircuitsCircuitTypesDeleteRequest) -> operations.CircuitsCircuitTypesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_circuit_types_list(self, request: operations.CircuitsCircuitTypesListRequest) -> operations.CircuitsCircuitTypesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuit-types/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitTypesList200ApplicationJSON])
                res.circuits_circuit_types_list_200_application_json_object = out

        return res

    
    def circuits_circuit_types_partial_update(self, request: operations.CircuitsCircuitTypesPartialUpdateRequest) -> operations.CircuitsCircuitTypesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuit_types_read(self, request: operations.CircuitsCircuitTypesReadRequest) -> operations.CircuitsCircuitTypesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuit_types_update(self, request: operations.CircuitsCircuitTypesUpdateRequest) -> operations.CircuitsCircuitTypesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    def circuits_circuits_create(self, request: operations.CircuitsCircuitsCreateRequest) -> operations.CircuitsCircuitsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuits/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_circuits_delete(self, request: operations.CircuitsCircuitsDeleteRequest) -> operations.CircuitsCircuitsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_circuits_list(self, request: operations.CircuitsCircuitsListRequest) -> operations.CircuitsCircuitsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/circuits/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitsList200ApplicationJSON])
                res.circuits_circuits_list_200_application_json_object = out

        return res

    
    def circuits_circuits_partial_update(self, request: operations.CircuitsCircuitsPartialUpdateRequest) -> operations.CircuitsCircuitsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_circuits_read(self, request: operations.CircuitsCircuitsReadRequest) -> operations.CircuitsCircuitsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_circuits_update(self, request: operations.CircuitsCircuitsUpdateRequest) -> operations.CircuitsCircuitsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    def circuits_providers_create(self, request: operations.CircuitsProvidersCreateRequest) -> operations.CircuitsProvidersCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/providers/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_delete(self, request: operations.CircuitsProvidersDeleteRequest) -> operations.CircuitsProvidersDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def circuits_providers_graphs(self, request: operations.CircuitsProvidersGraphsRequest) -> operations.CircuitsProvidersGraphsResponse:
        r"""A convenience method for rendering graphs for a particular provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_list(self, request: operations.CircuitsProvidersListRequest) -> operations.CircuitsProvidersListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/circuits/providers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsProvidersList200ApplicationJSON])
                res.circuits_providers_list_200_application_json_object = out

        return res

    
    def circuits_providers_partial_update(self, request: operations.CircuitsProvidersPartialUpdateRequest) -> operations.CircuitsProvidersPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_read(self, request: operations.CircuitsProvidersReadRequest) -> operations.CircuitsProvidersReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def circuits_providers_update(self, request: operations.CircuitsProvidersUpdateRequest) -> operations.CircuitsProvidersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    def dcim_cables_create(self, request: operations.DcimCablesCreateRequest) -> operations.DcimCablesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/cables/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_cables_delete(self, request: operations.DcimCablesDeleteRequest) -> operations.DcimCablesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_cables_list(self, request: operations.DcimCablesListRequest) -> operations.DcimCablesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/cables/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimCablesList200ApplicationJSON])
                res.dcim_cables_list_200_application_json_object = out

        return res

    
    def dcim_cables_partial_update(self, request: operations.DcimCablesPartialUpdateRequest) -> operations.DcimCablesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_cables_read(self, request: operations.DcimCablesReadRequest) -> operations.DcimCablesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_cables_update(self, request: operations.DcimCablesUpdateRequest) -> operations.DcimCablesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/cables/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimCablesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cable])
                res.cable = out

        return res

    
    def dcim_connected_device_list(self, request: operations.DcimConnectedDeviceListRequest) -> operations.DcimConnectedDeviceListResponse:
        r"""This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
        interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
        via a protocol such as LLDP. Two query parameters must be included in the request:
        
        * `peer_device`: The name of the peer device
        * `peer_interface`: The name of the peer interface
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/connected-device/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConnectedDeviceListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    def dcim_console_connections_list(self, request: operations.DcimConsoleConnectionsListRequest) -> operations.DcimConsoleConnectionsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleConnectionsList200ApplicationJSON])
                res.dcim_console_connections_list_200_application_json_object = out

        return res

    
    def dcim_console_port_templates_create(self, request: operations.DcimConsolePortTemplatesCreateRequest) -> operations.DcimConsolePortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-port-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_port_templates_delete(self, request: operations.DcimConsolePortTemplatesDeleteRequest) -> operations.DcimConsolePortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_port_templates_list(self, request: operations.DcimConsolePortTemplatesListRequest) -> operations.DcimConsolePortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsolePortTemplatesList200ApplicationJSON])
                res.dcim_console_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_console_port_templates_partial_update(self, request: operations.DcimConsolePortTemplatesPartialUpdateRequest) -> operations.DcimConsolePortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_port_templates_read(self, request: operations.DcimConsolePortTemplatesReadRequest) -> operations.DcimConsolePortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_port_templates_update(self, request: operations.DcimConsolePortTemplatesUpdateRequest) -> operations.DcimConsolePortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    def dcim_console_ports_create(self, request: operations.DcimConsolePortsCreateRequest) -> operations.DcimConsolePortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-ports/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_delete(self, request: operations.DcimConsolePortsDeleteRequest) -> operations.DcimConsolePortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_ports_list(self, request: operations.DcimConsolePortsListRequest) -> operations.DcimConsolePortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsolePortsList200ApplicationJSON])
                res.dcim_console_ports_list_200_application_json_object = out

        return res

    
    def dcim_console_ports_partial_update(self, request: operations.DcimConsolePortsPartialUpdateRequest) -> operations.DcimConsolePortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_read(self, request: operations.DcimConsolePortsReadRequest) -> operations.DcimConsolePortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_trace(self, request: operations.DcimConsolePortsTraceRequest) -> operations.DcimConsolePortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_ports_update(self, request: operations.DcimConsolePortsUpdateRequest) -> operations.DcimConsolePortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    def dcim_console_server_port_templates_create(self, request: operations.DcimConsoleServerPortTemplatesCreateRequest) -> operations.DcimConsoleServerPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-port-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_port_templates_delete(self, request: operations.DcimConsoleServerPortTemplatesDeleteRequest) -> operations.DcimConsoleServerPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_server_port_templates_list(self, request: operations.DcimConsoleServerPortTemplatesListRequest) -> operations.DcimConsoleServerPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleServerPortTemplatesList200ApplicationJSON])
                res.dcim_console_server_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_console_server_port_templates_partial_update(self, request: operations.DcimConsoleServerPortTemplatesPartialUpdateRequest) -> operations.DcimConsoleServerPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_port_templates_read(self, request: operations.DcimConsoleServerPortTemplatesReadRequest) -> operations.DcimConsoleServerPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_port_templates_update(self, request: operations.DcimConsoleServerPortTemplatesUpdateRequest) -> operations.DcimConsoleServerPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    def dcim_console_server_ports_create(self, request: operations.DcimConsoleServerPortsCreateRequest) -> operations.DcimConsoleServerPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-ports/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_delete(self, request: operations.DcimConsoleServerPortsDeleteRequest) -> operations.DcimConsoleServerPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_console_server_ports_list(self, request: operations.DcimConsoleServerPortsListRequest) -> operations.DcimConsoleServerPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/console-server-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleServerPortsList200ApplicationJSON])
                res.dcim_console_server_ports_list_200_application_json_object = out

        return res

    
    def dcim_console_server_ports_partial_update(self, request: operations.DcimConsoleServerPortsPartialUpdateRequest) -> operations.DcimConsoleServerPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_read(self, request: operations.DcimConsoleServerPortsReadRequest) -> operations.DcimConsoleServerPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_trace(self, request: operations.DcimConsoleServerPortsTraceRequest) -> operations.DcimConsoleServerPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_console_server_ports_update(self, request: operations.DcimConsoleServerPortsUpdateRequest) -> operations.DcimConsoleServerPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    def dcim_device_bay_templates_create(self, request: operations.DcimDeviceBayTemplatesCreateRequest) -> operations.DcimDeviceBayTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bay-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bay_templates_delete(self, request: operations.DcimDeviceBayTemplatesDeleteRequest) -> operations.DcimDeviceBayTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_bay_templates_list(self, request: operations.DcimDeviceBayTemplatesListRequest) -> operations.DcimDeviceBayTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bay-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceBayTemplatesList200ApplicationJSON])
                res.dcim_device_bay_templates_list_200_application_json_object = out

        return res

    
    def dcim_device_bay_templates_partial_update(self, request: operations.DcimDeviceBayTemplatesPartialUpdateRequest) -> operations.DcimDeviceBayTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bay_templates_read(self, request: operations.DcimDeviceBayTemplatesReadRequest) -> operations.DcimDeviceBayTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bay_templates_update(self, request: operations.DcimDeviceBayTemplatesUpdateRequest) -> operations.DcimDeviceBayTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    def dcim_device_bays_create(self, request: operations.DcimDeviceBaysCreateRequest) -> operations.DcimDeviceBaysCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bays/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_bays_delete(self, request: operations.DcimDeviceBaysDeleteRequest) -> operations.DcimDeviceBaysDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_bays_list(self, request: operations.DcimDeviceBaysListRequest) -> operations.DcimDeviceBaysListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-bays/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceBaysList200ApplicationJSON])
                res.dcim_device_bays_list_200_application_json_object = out

        return res

    
    def dcim_device_bays_partial_update(self, request: operations.DcimDeviceBaysPartialUpdateRequest) -> operations.DcimDeviceBaysPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_bays_read(self, request: operations.DcimDeviceBaysReadRequest) -> operations.DcimDeviceBaysReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_bays_update(self, request: operations.DcimDeviceBaysUpdateRequest) -> operations.DcimDeviceBaysUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    def dcim_device_roles_create(self, request: operations.DcimDeviceRolesCreateRequest) -> operations.DcimDeviceRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-roles/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_roles_delete(self, request: operations.DcimDeviceRolesDeleteRequest) -> operations.DcimDeviceRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_roles_list(self, request: operations.DcimDeviceRolesListRequest) -> operations.DcimDeviceRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceRolesList200ApplicationJSON])
                res.dcim_device_roles_list_200_application_json_object = out

        return res

    
    def dcim_device_roles_partial_update(self, request: operations.DcimDeviceRolesPartialUpdateRequest) -> operations.DcimDeviceRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_roles_read(self, request: operations.DcimDeviceRolesReadRequest) -> operations.DcimDeviceRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_roles_update(self, request: operations.DcimDeviceRolesUpdateRequest) -> operations.DcimDeviceRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    def dcim_device_types_create(self, request: operations.DcimDeviceTypesCreateRequest) -> operations.DcimDeviceTypesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-types/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_device_types_delete(self, request: operations.DcimDeviceTypesDeleteRequest) -> operations.DcimDeviceTypesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_device_types_list(self, request: operations.DcimDeviceTypesListRequest) -> operations.DcimDeviceTypesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/device-types/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceTypesList200ApplicationJSON])
                res.dcim_device_types_list_200_application_json_object = out

        return res

    
    def dcim_device_types_partial_update(self, request: operations.DcimDeviceTypesPartialUpdateRequest) -> operations.DcimDeviceTypesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_device_types_read(self, request: operations.DcimDeviceTypesReadRequest) -> operations.DcimDeviceTypesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_device_types_update(self, request: operations.DcimDeviceTypesUpdateRequest) -> operations.DcimDeviceTypesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    def dcim_devices_create(self, request: operations.DcimDevicesCreateRequest) -> operations.DcimDevicesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/devices/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_delete(self, request: operations.DcimDevicesDeleteRequest) -> operations.DcimDevicesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_devices_graphs(self, request: operations.DcimDevicesGraphsRequest) -> operations.DcimDevicesGraphsResponse:
        r"""A convenience method for rendering graphs for a particular Device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_list(self, request: operations.DcimDevicesListRequest) -> operations.DcimDevicesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/devices/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDevicesList200ApplicationJSON])
                res.dcim_devices_list_200_application_json_object = out

        return res

    
    def dcim_devices_napalm(self, request: operations.DcimDevicesNapalmRequest) -> operations.DcimDevicesNapalmResponse:
        r"""Execute a NAPALM method on a Device
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/napalm/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesNapalmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceNapalm])
                res.device_napalm = out

        return res

    
    def dcim_devices_partial_update(self, request: operations.DcimDevicesPartialUpdateRequest) -> operations.DcimDevicesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_read(self, request: operations.DcimDevicesReadRequest) -> operations.DcimDevicesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_devices_update(self, request: operations.DcimDevicesUpdateRequest) -> operations.DcimDevicesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    def dcim_front_port_templates_create(self, request: operations.DcimFrontPortTemplatesCreateRequest) -> operations.DcimFrontPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-port-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_port_templates_delete(self, request: operations.DcimFrontPortTemplatesDeleteRequest) -> operations.DcimFrontPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_front_port_templates_list(self, request: operations.DcimFrontPortTemplatesListRequest) -> operations.DcimFrontPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimFrontPortTemplatesList200ApplicationJSON])
                res.dcim_front_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_front_port_templates_partial_update(self, request: operations.DcimFrontPortTemplatesPartialUpdateRequest) -> operations.DcimFrontPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_port_templates_read(self, request: operations.DcimFrontPortTemplatesReadRequest) -> operations.DcimFrontPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_port_templates_update(self, request: operations.DcimFrontPortTemplatesUpdateRequest) -> operations.DcimFrontPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPortTemplate])
                res.front_port_template = out

        return res

    
    def dcim_front_ports_create(self, request: operations.DcimFrontPortsCreateRequest) -> operations.DcimFrontPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-ports/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_delete(self, request: operations.DcimFrontPortsDeleteRequest) -> operations.DcimFrontPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_front_ports_list(self, request: operations.DcimFrontPortsListRequest) -> operations.DcimFrontPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/front-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimFrontPortsList200ApplicationJSON])
                res.dcim_front_ports_list_200_application_json_object = out

        return res

    
    def dcim_front_ports_partial_update(self, request: operations.DcimFrontPortsPartialUpdateRequest) -> operations.DcimFrontPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_read(self, request: operations.DcimFrontPortsReadRequest) -> operations.DcimFrontPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_trace(self, request: operations.DcimFrontPortsTraceRequest) -> operations.DcimFrontPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_front_ports_update(self, request: operations.DcimFrontPortsUpdateRequest) -> operations.DcimFrontPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/front-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimFrontPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FrontPort])
                res.front_port = out

        return res

    
    def dcim_interface_connections_list(self, request: operations.DcimInterfaceConnectionsListRequest) -> operations.DcimInterfaceConnectionsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interface-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfaceConnectionsList200ApplicationJSON])
                res.dcim_interface_connections_list_200_application_json_object = out

        return res

    
    def dcim_interface_templates_create(self, request: operations.DcimInterfaceTemplatesCreateRequest) -> operations.DcimInterfaceTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interface-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interface_templates_delete(self, request: operations.DcimInterfaceTemplatesDeleteRequest) -> operations.DcimInterfaceTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_interface_templates_list(self, request: operations.DcimInterfaceTemplatesListRequest) -> operations.DcimInterfaceTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interface-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfaceTemplatesList200ApplicationJSON])
                res.dcim_interface_templates_list_200_application_json_object = out

        return res

    
    def dcim_interface_templates_partial_update(self, request: operations.DcimInterfaceTemplatesPartialUpdateRequest) -> operations.DcimInterfaceTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interface_templates_read(self, request: operations.DcimInterfaceTemplatesReadRequest) -> operations.DcimInterfaceTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interface_templates_update(self, request: operations.DcimInterfaceTemplatesUpdateRequest) -> operations.DcimInterfaceTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    def dcim_interfaces_create(self, request: operations.DcimInterfacesCreateRequest) -> operations.DcimInterfacesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interfaces/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_delete(self, request: operations.DcimInterfacesDeleteRequest) -> operations.DcimInterfacesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_interfaces_graphs(self, request: operations.DcimInterfacesGraphsRequest) -> operations.DcimInterfacesGraphsResponse:
        r"""A convenience method for rendering graphs for a particular interface.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_list(self, request: operations.DcimInterfacesListRequest) -> operations.DcimInterfacesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/interfaces/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfacesList200ApplicationJSON])
                res.dcim_interfaces_list_200_application_json_object = out

        return res

    
    def dcim_interfaces_partial_update(self, request: operations.DcimInterfacesPartialUpdateRequest) -> operations.DcimInterfacesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_read(self, request: operations.DcimInterfacesReadRequest) -> operations.DcimInterfacesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_trace(self, request: operations.DcimInterfacesTraceRequest) -> operations.DcimInterfacesTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_interfaces_update(self, request: operations.DcimInterfacesUpdateRequest) -> operations.DcimInterfacesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceInterface])
                res.device_interface = out

        return res

    
    def dcim_inventory_items_create(self, request: operations.DcimInventoryItemsCreateRequest) -> operations.DcimInventoryItemsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/inventory-items/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_inventory_items_delete(self, request: operations.DcimInventoryItemsDeleteRequest) -> operations.DcimInventoryItemsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_inventory_items_list(self, request: operations.DcimInventoryItemsListRequest) -> operations.DcimInventoryItemsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/inventory-items/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInventoryItemsList200ApplicationJSON])
                res.dcim_inventory_items_list_200_application_json_object = out

        return res

    
    def dcim_inventory_items_partial_update(self, request: operations.DcimInventoryItemsPartialUpdateRequest) -> operations.DcimInventoryItemsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_inventory_items_read(self, request: operations.DcimInventoryItemsReadRequest) -> operations.DcimInventoryItemsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_inventory_items_update(self, request: operations.DcimInventoryItemsUpdateRequest) -> operations.DcimInventoryItemsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    def dcim_manufacturers_create(self, request: operations.DcimManufacturersCreateRequest) -> operations.DcimManufacturersCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/manufacturers/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_manufacturers_delete(self, request: operations.DcimManufacturersDeleteRequest) -> operations.DcimManufacturersDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_manufacturers_list(self, request: operations.DcimManufacturersListRequest) -> operations.DcimManufacturersListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/manufacturers/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimManufacturersList200ApplicationJSON])
                res.dcim_manufacturers_list_200_application_json_object = out

        return res

    
    def dcim_manufacturers_partial_update(self, request: operations.DcimManufacturersPartialUpdateRequest) -> operations.DcimManufacturersPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_manufacturers_read(self, request: operations.DcimManufacturersReadRequest) -> operations.DcimManufacturersReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_manufacturers_update(self, request: operations.DcimManufacturersUpdateRequest) -> operations.DcimManufacturersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    def dcim_platforms_create(self, request: operations.DcimPlatformsCreateRequest) -> operations.DcimPlatformsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/platforms/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_platforms_delete(self, request: operations.DcimPlatformsDeleteRequest) -> operations.DcimPlatformsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_platforms_list(self, request: operations.DcimPlatformsListRequest) -> operations.DcimPlatformsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/platforms/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPlatformsList200ApplicationJSON])
                res.dcim_platforms_list_200_application_json_object = out

        return res

    
    def dcim_platforms_partial_update(self, request: operations.DcimPlatformsPartialUpdateRequest) -> operations.DcimPlatformsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_platforms_read(self, request: operations.DcimPlatformsReadRequest) -> operations.DcimPlatformsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_platforms_update(self, request: operations.DcimPlatformsUpdateRequest) -> operations.DcimPlatformsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    def dcim_power_connections_list(self, request: operations.DcimPowerConnectionsListRequest) -> operations.DcimPowerConnectionsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerConnectionsList200ApplicationJSON])
                res.dcim_power_connections_list_200_application_json_object = out

        return res

    
    def dcim_power_feeds_create(self, request: operations.DcimPowerFeedsCreateRequest) -> operations.DcimPowerFeedsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-feeds/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_feeds_delete(self, request: operations.DcimPowerFeedsDeleteRequest) -> operations.DcimPowerFeedsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_feeds_list(self, request: operations.DcimPowerFeedsListRequest) -> operations.DcimPowerFeedsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-feeds/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerFeedsList200ApplicationJSON])
                res.dcim_power_feeds_list_200_application_json_object = out

        return res

    
    def dcim_power_feeds_partial_update(self, request: operations.DcimPowerFeedsPartialUpdateRequest) -> operations.DcimPowerFeedsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_feeds_read(self, request: operations.DcimPowerFeedsReadRequest) -> operations.DcimPowerFeedsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_feeds_update(self, request: operations.DcimPowerFeedsUpdateRequest) -> operations.DcimPowerFeedsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-feeds/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerFeedsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerFeed])
                res.power_feed = out

        return res

    
    def dcim_power_outlet_templates_create(self, request: operations.DcimPowerOutletTemplatesCreateRequest) -> operations.DcimPowerOutletTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlet-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlet_templates_delete(self, request: operations.DcimPowerOutletTemplatesDeleteRequest) -> operations.DcimPowerOutletTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_outlet_templates_list(self, request: operations.DcimPowerOutletTemplatesListRequest) -> operations.DcimPowerOutletTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlet-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerOutletTemplatesList200ApplicationJSON])
                res.dcim_power_outlet_templates_list_200_application_json_object = out

        return res

    
    def dcim_power_outlet_templates_partial_update(self, request: operations.DcimPowerOutletTemplatesPartialUpdateRequest) -> operations.DcimPowerOutletTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlet_templates_read(self, request: operations.DcimPowerOutletTemplatesReadRequest) -> operations.DcimPowerOutletTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlet_templates_update(self, request: operations.DcimPowerOutletTemplatesUpdateRequest) -> operations.DcimPowerOutletTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    def dcim_power_outlets_create(self, request: operations.DcimPowerOutletsCreateRequest) -> operations.DcimPowerOutletsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlets/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_delete(self, request: operations.DcimPowerOutletsDeleteRequest) -> operations.DcimPowerOutletsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_outlets_list(self, request: operations.DcimPowerOutletsListRequest) -> operations.DcimPowerOutletsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-outlets/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerOutletsList200ApplicationJSON])
                res.dcim_power_outlets_list_200_application_json_object = out

        return res

    
    def dcim_power_outlets_partial_update(self, request: operations.DcimPowerOutletsPartialUpdateRequest) -> operations.DcimPowerOutletsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_read(self, request: operations.DcimPowerOutletsReadRequest) -> operations.DcimPowerOutletsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_trace(self, request: operations.DcimPowerOutletsTraceRequest) -> operations.DcimPowerOutletsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_outlets_update(self, request: operations.DcimPowerOutletsUpdateRequest) -> operations.DcimPowerOutletsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    def dcim_power_panels_create(self, request: operations.DcimPowerPanelsCreateRequest) -> operations.DcimPowerPanelsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-panels/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_panels_delete(self, request: operations.DcimPowerPanelsDeleteRequest) -> operations.DcimPowerPanelsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_panels_list(self, request: operations.DcimPowerPanelsListRequest) -> operations.DcimPowerPanelsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-panels/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPanelsList200ApplicationJSON])
                res.dcim_power_panels_list_200_application_json_object = out

        return res

    
    def dcim_power_panels_partial_update(self, request: operations.DcimPowerPanelsPartialUpdateRequest) -> operations.DcimPowerPanelsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_panels_read(self, request: operations.DcimPowerPanelsReadRequest) -> operations.DcimPowerPanelsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_panels_update(self, request: operations.DcimPowerPanelsUpdateRequest) -> operations.DcimPowerPanelsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-panels/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPanelsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPanel])
                res.power_panel = out

        return res

    
    def dcim_power_port_templates_create(self, request: operations.DcimPowerPortTemplatesCreateRequest) -> operations.DcimPowerPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-port-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_port_templates_delete(self, request: operations.DcimPowerPortTemplatesDeleteRequest) -> operations.DcimPowerPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_port_templates_list(self, request: operations.DcimPowerPortTemplatesListRequest) -> operations.DcimPowerPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPortTemplatesList200ApplicationJSON])
                res.dcim_power_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_power_port_templates_partial_update(self, request: operations.DcimPowerPortTemplatesPartialUpdateRequest) -> operations.DcimPowerPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_port_templates_read(self, request: operations.DcimPowerPortTemplatesReadRequest) -> operations.DcimPowerPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_port_templates_update(self, request: operations.DcimPowerPortTemplatesUpdateRequest) -> operations.DcimPowerPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    def dcim_power_ports_create(self, request: operations.DcimPowerPortsCreateRequest) -> operations.DcimPowerPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-ports/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_delete(self, request: operations.DcimPowerPortsDeleteRequest) -> operations.DcimPowerPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_power_ports_list(self, request: operations.DcimPowerPortsListRequest) -> operations.DcimPowerPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/power-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPortsList200ApplicationJSON])
                res.dcim_power_ports_list_200_application_json_object = out

        return res

    
    def dcim_power_ports_partial_update(self, request: operations.DcimPowerPortsPartialUpdateRequest) -> operations.DcimPowerPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_read(self, request: operations.DcimPowerPortsReadRequest) -> operations.DcimPowerPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_trace(self, request: operations.DcimPowerPortsTraceRequest) -> operations.DcimPowerPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_power_ports_update(self, request: operations.DcimPowerPortsUpdateRequest) -> operations.DcimPowerPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    def dcim_rack_groups_create(self, request: operations.DcimRackGroupsCreateRequest) -> operations.DcimRackGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-groups/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_groups_delete(self, request: operations.DcimRackGroupsDeleteRequest) -> operations.DcimRackGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rack_groups_list(self, request: operations.DcimRackGroupsListRequest) -> operations.DcimRackGroupsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackGroupsList200ApplicationJSON])
                res.dcim_rack_groups_list_200_application_json_object = out

        return res

    
    def dcim_rack_groups_partial_update(self, request: operations.DcimRackGroupsPartialUpdateRequest) -> operations.DcimRackGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_groups_read(self, request: operations.DcimRackGroupsReadRequest) -> operations.DcimRackGroupsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_groups_update(self, request: operations.DcimRackGroupsUpdateRequest) -> operations.DcimRackGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    def dcim_rack_reservations_create(self, request: operations.DcimRackReservationsCreateRequest) -> operations.DcimRackReservationsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-reservations/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_reservations_delete(self, request: operations.DcimRackReservationsDeleteRequest) -> operations.DcimRackReservationsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rack_reservations_list(self, request: operations.DcimRackReservationsListRequest) -> operations.DcimRackReservationsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-reservations/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackReservationsList200ApplicationJSON])
                res.dcim_rack_reservations_list_200_application_json_object = out

        return res

    
    def dcim_rack_reservations_partial_update(self, request: operations.DcimRackReservationsPartialUpdateRequest) -> operations.DcimRackReservationsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_reservations_read(self, request: operations.DcimRackReservationsReadRequest) -> operations.DcimRackReservationsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_reservations_update(self, request: operations.DcimRackReservationsUpdateRequest) -> operations.DcimRackReservationsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    def dcim_rack_roles_create(self, request: operations.DcimRackRolesCreateRequest) -> operations.DcimRackRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-roles/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_rack_roles_delete(self, request: operations.DcimRackRolesDeleteRequest) -> operations.DcimRackRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rack_roles_list(self, request: operations.DcimRackRolesListRequest) -> operations.DcimRackRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rack-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackRolesList200ApplicationJSON])
                res.dcim_rack_roles_list_200_application_json_object = out

        return res

    
    def dcim_rack_roles_partial_update(self, request: operations.DcimRackRolesPartialUpdateRequest) -> operations.DcimRackRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_rack_roles_read(self, request: operations.DcimRackRolesReadRequest) -> operations.DcimRackRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_rack_roles_update(self, request: operations.DcimRackRolesUpdateRequest) -> operations.DcimRackRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    def dcim_racks_create(self, request: operations.DcimRacksCreateRequest) -> operations.DcimRacksCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/racks/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_racks_delete(self, request: operations.DcimRacksDeleteRequest) -> operations.DcimRacksDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_racks_elevation(self, request: operations.DcimRacksElevationRequest) -> operations.DcimRacksElevationResponse:
        r"""Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/elevation/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksElevationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.RackUnit]])
                res.rack_units = out

        return res

    
    def dcim_racks_list(self, request: operations.DcimRacksListRequest) -> operations.DcimRacksListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/racks/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRacksList200ApplicationJSON])
                res.dcim_racks_list_200_application_json_object = out

        return res

    
    def dcim_racks_partial_update(self, request: operations.DcimRacksPartialUpdateRequest) -> operations.DcimRacksPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_racks_read(self, request: operations.DcimRacksReadRequest) -> operations.DcimRacksReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_racks_update(self, request: operations.DcimRacksUpdateRequest) -> operations.DcimRacksUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    def dcim_rear_port_templates_create(self, request: operations.DcimRearPortTemplatesCreateRequest) -> operations.DcimRearPortTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-port-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_port_templates_delete(self, request: operations.DcimRearPortTemplatesDeleteRequest) -> operations.DcimRearPortTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rear_port_templates_list(self, request: operations.DcimRearPortTemplatesListRequest) -> operations.DcimRearPortTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRearPortTemplatesList200ApplicationJSON])
                res.dcim_rear_port_templates_list_200_application_json_object = out

        return res

    
    def dcim_rear_port_templates_partial_update(self, request: operations.DcimRearPortTemplatesPartialUpdateRequest) -> operations.DcimRearPortTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_port_templates_read(self, request: operations.DcimRearPortTemplatesReadRequest) -> operations.DcimRearPortTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_port_templates_update(self, request: operations.DcimRearPortTemplatesUpdateRequest) -> operations.DcimRearPortTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-port-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPortTemplate])
                res.rear_port_template = out

        return res

    
    def dcim_rear_ports_create(self, request: operations.DcimRearPortsCreateRequest) -> operations.DcimRearPortsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-ports/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_delete(self, request: operations.DcimRearPortsDeleteRequest) -> operations.DcimRearPortsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_rear_ports_list(self, request: operations.DcimRearPortsListRequest) -> operations.DcimRearPortsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/rear-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRearPortsList200ApplicationJSON])
                res.dcim_rear_ports_list_200_application_json_object = out

        return res

    
    def dcim_rear_ports_partial_update(self, request: operations.DcimRearPortsPartialUpdateRequest) -> operations.DcimRearPortsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_read(self, request: operations.DcimRearPortsReadRequest) -> operations.DcimRearPortsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_trace(self, request: operations.DcimRearPortsTraceRequest) -> operations.DcimRearPortsTraceResponse:
        r"""Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/trace/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsTraceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_rear_ports_update(self, request: operations.DcimRearPortsUpdateRequest) -> operations.DcimRearPortsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/rear-ports/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRearPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RearPort])
                res.rear_port = out

        return res

    
    def dcim_regions_create(self, request: operations.DcimRegionsCreateRequest) -> operations.DcimRegionsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/regions/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_regions_delete(self, request: operations.DcimRegionsDeleteRequest) -> operations.DcimRegionsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_regions_list(self, request: operations.DcimRegionsListRequest) -> operations.DcimRegionsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/regions/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRegionsList200ApplicationJSON])
                res.dcim_regions_list_200_application_json_object = out

        return res

    
    def dcim_regions_partial_update(self, request: operations.DcimRegionsPartialUpdateRequest) -> operations.DcimRegionsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_regions_read(self, request: operations.DcimRegionsReadRequest) -> operations.DcimRegionsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_regions_update(self, request: operations.DcimRegionsUpdateRequest) -> operations.DcimRegionsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    def dcim_sites_create(self, request: operations.DcimSitesCreateRequest) -> operations.DcimSitesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/sites/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_delete(self, request: operations.DcimSitesDeleteRequest) -> operations.DcimSitesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_sites_graphs(self, request: operations.DcimSitesGraphsRequest) -> operations.DcimSitesGraphsResponse:
        r"""A convenience method for rendering graphs for a particular site.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/graphs/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesGraphsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_list(self, request: operations.DcimSitesListRequest) -> operations.DcimSitesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/sites/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimSitesList200ApplicationJSON])
                res.dcim_sites_list_200_application_json_object = out

        return res

    
    def dcim_sites_partial_update(self, request: operations.DcimSitesPartialUpdateRequest) -> operations.DcimSitesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_read(self, request: operations.DcimSitesReadRequest) -> operations.DcimSitesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_sites_update(self, request: operations.DcimSitesUpdateRequest) -> operations.DcimSitesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    def dcim_virtual_chassis_create(self, request: operations.DcimVirtualChassisCreateRequest) -> operations.DcimVirtualChassisCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/virtual-chassis/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def dcim_virtual_chassis_delete(self, request: operations.DcimVirtualChassisDeleteRequest) -> operations.DcimVirtualChassisDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def dcim_virtual_chassis_list(self, request: operations.DcimVirtualChassisListRequest) -> operations.DcimVirtualChassisListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dcim/virtual-chassis/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimVirtualChassisList200ApplicationJSON])
                res.dcim_virtual_chassis_list_200_application_json_object = out

        return res

    
    def dcim_virtual_chassis_partial_update(self, request: operations.DcimVirtualChassisPartialUpdateRequest) -> operations.DcimVirtualChassisPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def dcim_virtual_chassis_read(self, request: operations.DcimVirtualChassisReadRequest) -> operations.DcimVirtualChassisReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def dcim_virtual_chassis_update(self, request: operations.DcimVirtualChassisUpdateRequest) -> operations.DcimVirtualChassisUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    def extras_custom_field_choices_list(self) -> operations.ExtrasCustomFieldChoicesListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/_custom_field_choices/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasCustomFieldChoicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_custom_field_choices_read(self, request: operations.ExtrasCustomFieldChoicesReadRequest) -> operations.ExtrasCustomFieldChoicesReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/_custom_field_choices/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasCustomFieldChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_config_contexts_create(self, request: operations.ExtrasConfigContextsCreateRequest) -> operations.ExtrasConfigContextsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/config-contexts/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_config_contexts_delete(self, request: operations.ExtrasConfigContextsDeleteRequest) -> operations.ExtrasConfigContextsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_config_contexts_list(self, request: operations.ExtrasConfigContextsListRequest) -> operations.ExtrasConfigContextsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/config-contexts/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasConfigContextsList200ApplicationJSON])
                res.extras_config_contexts_list_200_application_json_object = out

        return res

    
    def extras_config_contexts_partial_update(self, request: operations.ExtrasConfigContextsPartialUpdateRequest) -> operations.ExtrasConfigContextsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_config_contexts_read(self, request: operations.ExtrasConfigContextsReadRequest) -> operations.ExtrasConfigContextsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_config_contexts_update(self, request: operations.ExtrasConfigContextsUpdateRequest) -> operations.ExtrasConfigContextsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    def extras_export_templates_create(self, request: operations.ExtrasExportTemplatesCreateRequest) -> operations.ExtrasExportTemplatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/export-templates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_export_templates_delete(self, request: operations.ExtrasExportTemplatesDeleteRequest) -> operations.ExtrasExportTemplatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_export_templates_list(self, request: operations.ExtrasExportTemplatesListRequest) -> operations.ExtrasExportTemplatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/export-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasExportTemplatesList200ApplicationJSON])
                res.extras_export_templates_list_200_application_json_object = out

        return res

    
    def extras_export_templates_partial_update(self, request: operations.ExtrasExportTemplatesPartialUpdateRequest) -> operations.ExtrasExportTemplatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_export_templates_read(self, request: operations.ExtrasExportTemplatesReadRequest) -> operations.ExtrasExportTemplatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_export_templates_update(self, request: operations.ExtrasExportTemplatesUpdateRequest) -> operations.ExtrasExportTemplatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    def extras_graphs_create(self, request: operations.ExtrasGraphsCreateRequest) -> operations.ExtrasGraphsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/graphs/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_graphs_delete(self, request: operations.ExtrasGraphsDeleteRequest) -> operations.ExtrasGraphsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_graphs_list(self, request: operations.ExtrasGraphsListRequest) -> operations.ExtrasGraphsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/graphs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasGraphsList200ApplicationJSON])
                res.extras_graphs_list_200_application_json_object = out

        return res

    
    def extras_graphs_partial_update(self, request: operations.ExtrasGraphsPartialUpdateRequest) -> operations.ExtrasGraphsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_graphs_read(self, request: operations.ExtrasGraphsReadRequest) -> operations.ExtrasGraphsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_graphs_update(self, request: operations.ExtrasGraphsUpdateRequest) -> operations.ExtrasGraphsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    def extras_image_attachments_create(self, request: operations.ExtrasImageAttachmentsCreateRequest) -> operations.ExtrasImageAttachmentsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/image-attachments/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_image_attachments_delete(self, request: operations.ExtrasImageAttachmentsDeleteRequest) -> operations.ExtrasImageAttachmentsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_image_attachments_list(self, request: operations.ExtrasImageAttachmentsListRequest) -> operations.ExtrasImageAttachmentsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/image-attachments/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasImageAttachmentsList200ApplicationJSON])
                res.extras_image_attachments_list_200_application_json_object = out

        return res

    
    def extras_image_attachments_partial_update(self, request: operations.ExtrasImageAttachmentsPartialUpdateRequest) -> operations.ExtrasImageAttachmentsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_image_attachments_read(self, request: operations.ExtrasImageAttachmentsReadRequest) -> operations.ExtrasImageAttachmentsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_image_attachments_update(self, request: operations.ExtrasImageAttachmentsUpdateRequest) -> operations.ExtrasImageAttachmentsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    def extras_object_changes_list(self, request: operations.ExtrasObjectChangesListRequest) -> operations.ExtrasObjectChangesListResponse:
        r"""Retrieve a list of recent changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/object-changes/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasObjectChangesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasObjectChangesList200ApplicationJSON])
                res.extras_object_changes_list_200_application_json_object = out

        return res

    
    def extras_object_changes_read(self, request: operations.ExtrasObjectChangesReadRequest) -> operations.ExtrasObjectChangesReadResponse:
        r"""Retrieve a list of recent changes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/object-changes/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasObjectChangesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectChange])
                res.object_change = out

        return res

    
    def extras_reports_list(self) -> operations.ExtrasReportsListResponse:
        r"""Compile all reports and their related results (if any). Result data is deferred in the list view.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/reports/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_reports_read(self, request: operations.ExtrasReportsReadRequest) -> operations.ExtrasReportsReadResponse:
        r"""Retrieve a single Report identified as \"<module>.<report>\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/reports/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasReportsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_reports_run(self, request: operations.ExtrasReportsRunRequest) -> operations.ExtrasReportsRunResponse:
        r"""Run a Report and create a new ReportResult, overwriting any previous result for the Report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/reports/{id}/run/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasReportsRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def extras_scripts_list(self) -> operations.ExtrasScriptsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/scripts/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasScriptsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_scripts_read(self, request: operations.ExtrasScriptsReadRequest) -> operations.ExtrasScriptsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/scripts/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasScriptsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def extras_tags_create(self, request: operations.ExtrasTagsCreateRequest) -> operations.ExtrasTagsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/tags/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_tags_delete(self, request: operations.ExtrasTagsDeleteRequest) -> operations.ExtrasTagsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def extras_tags_list(self, request: operations.ExtrasTagsListRequest) -> operations.ExtrasTagsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/extras/tags/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasTagsList200ApplicationJSON])
                res.extras_tags_list_200_application_json_object = out

        return res

    
    def extras_tags_partial_update(self, request: operations.ExtrasTagsPartialUpdateRequest) -> operations.ExtrasTagsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_tags_read(self, request: operations.ExtrasTagsReadRequest) -> operations.ExtrasTagsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def extras_tags_update(self, request: operations.ExtrasTagsUpdateRequest) -> operations.ExtrasTagsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    def ipam_aggregates_create(self, request: operations.IpamAggregatesCreateRequest) -> operations.IpamAggregatesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/aggregates/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_aggregates_delete(self, request: operations.IpamAggregatesDeleteRequest) -> operations.IpamAggregatesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_aggregates_list(self, request: operations.IpamAggregatesListRequest) -> operations.IpamAggregatesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/aggregates/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamAggregatesList200ApplicationJSON])
                res.ipam_aggregates_list_200_application_json_object = out

        return res

    
    def ipam_aggregates_partial_update(self, request: operations.IpamAggregatesPartialUpdateRequest) -> operations.IpamAggregatesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_aggregates_read(self, request: operations.IpamAggregatesReadRequest) -> operations.IpamAggregatesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_aggregates_update(self, request: operations.IpamAggregatesUpdateRequest) -> operations.IpamAggregatesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    def ipam_ip_addresses_create(self, request: operations.IpamIPAddressesCreateRequest) -> operations.IpamIPAddressesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/ip-addresses/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_ip_addresses_delete(self, request: operations.IpamIPAddressesDeleteRequest) -> operations.IpamIPAddressesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_ip_addresses_list(self, request: operations.IpamIPAddressesListRequest) -> operations.IpamIPAddressesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/ip-addresses/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamIPAddressesList200ApplicationJSON])
                res.ipam_ip_addresses_list_200_application_json_object = out

        return res

    
    def ipam_ip_addresses_partial_update(self, request: operations.IpamIPAddressesPartialUpdateRequest) -> operations.IpamIPAddressesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_ip_addresses_read(self, request: operations.IpamIPAddressesReadRequest) -> operations.IpamIPAddressesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_ip_addresses_update(self, request: operations.IpamIPAddressesUpdateRequest) -> operations.IpamIPAddressesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    def ipam_prefixes_available_ips_create(self, request: operations.IpamPrefixesAvailableIpsCreateRequest) -> operations.IpamPrefixesAvailableIpsCreateResponse:
        r"""A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
        returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
        however results will not be paginated.
        
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-ips/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailableIpsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AvailableIP]])
                res.available_ips = out

        return res

    
    def ipam_prefixes_available_ips_read(self, request: operations.IpamPrefixesAvailableIpsReadRequest) -> operations.IpamPrefixesAvailableIpsReadResponse:
        r"""A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
        returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
        however results will not be paginated.
        
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-ips/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailableIpsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AvailableIP]])
                res.available_ips = out

        return res

    
    def ipam_prefixes_available_prefixes_create(self, request: operations.IpamPrefixesAvailablePrefixesCreateRequest) -> operations.IpamPrefixesAvailablePrefixesCreateResponse:
        r"""A convenience method for returning available child prefixes within a parent.
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-prefixes/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailablePrefixesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AvailablePrefix]])
                res.available_prefixes = out

        return res

    
    def ipam_prefixes_available_prefixes_read(self, request: operations.IpamPrefixesAvailablePrefixesReadRequest) -> operations.IpamPrefixesAvailablePrefixesReadResponse:
        r"""A convenience method for returning available child prefixes within a parent.
        The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
        invoked in parallel, which results in a race condition where multiple insertions can occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-prefixes/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailablePrefixesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AvailablePrefix]])
                res.available_prefixes = out

        return res

    
    def ipam_prefixes_create(self, request: operations.IpamPrefixesCreateRequest) -> operations.IpamPrefixesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/prefixes/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_prefixes_delete(self, request: operations.IpamPrefixesDeleteRequest) -> operations.IpamPrefixesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_prefixes_list(self, request: operations.IpamPrefixesListRequest) -> operations.IpamPrefixesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/prefixes/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamPrefixesList200ApplicationJSON])
                res.ipam_prefixes_list_200_application_json_object = out

        return res

    
    def ipam_prefixes_partial_update(self, request: operations.IpamPrefixesPartialUpdateRequest) -> operations.IpamPrefixesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_prefixes_read(self, request: operations.IpamPrefixesReadRequest) -> operations.IpamPrefixesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_prefixes_update(self, request: operations.IpamPrefixesUpdateRequest) -> operations.IpamPrefixesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    def ipam_rirs_create(self, request: operations.IpamRirsCreateRequest) -> operations.IpamRirsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/rirs/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_rirs_delete(self, request: operations.IpamRirsDeleteRequest) -> operations.IpamRirsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_rirs_list(self, request: operations.IpamRirsListRequest) -> operations.IpamRirsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/rirs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamRirsList200ApplicationJSON])
                res.ipam_rirs_list_200_application_json_object = out

        return res

    
    def ipam_rirs_partial_update(self, request: operations.IpamRirsPartialUpdateRequest) -> operations.IpamRirsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_rirs_read(self, request: operations.IpamRirsReadRequest) -> operations.IpamRirsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_rirs_update(self, request: operations.IpamRirsUpdateRequest) -> operations.IpamRirsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    def ipam_roles_create(self, request: operations.IpamRolesCreateRequest) -> operations.IpamRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/roles/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_roles_delete(self, request: operations.IpamRolesDeleteRequest) -> operations.IpamRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_roles_list(self, request: operations.IpamRolesListRequest) -> operations.IpamRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamRolesList200ApplicationJSON])
                res.ipam_roles_list_200_application_json_object = out

        return res

    
    def ipam_roles_partial_update(self, request: operations.IpamRolesPartialUpdateRequest) -> operations.IpamRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_roles_read(self, request: operations.IpamRolesReadRequest) -> operations.IpamRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_roles_update(self, request: operations.IpamRolesUpdateRequest) -> operations.IpamRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    def ipam_services_create(self, request: operations.IpamServicesCreateRequest) -> operations.IpamServicesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/services/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_services_delete(self, request: operations.IpamServicesDeleteRequest) -> operations.IpamServicesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_services_list(self, request: operations.IpamServicesListRequest) -> operations.IpamServicesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/services/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamServicesList200ApplicationJSON])
                res.ipam_services_list_200_application_json_object = out

        return res

    
    def ipam_services_partial_update(self, request: operations.IpamServicesPartialUpdateRequest) -> operations.IpamServicesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_services_read(self, request: operations.IpamServicesReadRequest) -> operations.IpamServicesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_services_update(self, request: operations.IpamServicesUpdateRequest) -> operations.IpamServicesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def ipam_vlan_groups_create(self, request: operations.IpamVlanGroupsCreateRequest) -> operations.IpamVlanGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlan-groups/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlan_groups_delete(self, request: operations.IpamVlanGroupsDeleteRequest) -> operations.IpamVlanGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_vlan_groups_list(self, request: operations.IpamVlanGroupsListRequest) -> operations.IpamVlanGroupsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlan-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVlanGroupsList200ApplicationJSON])
                res.ipam_vlan_groups_list_200_application_json_object = out

        return res

    
    def ipam_vlan_groups_partial_update(self, request: operations.IpamVlanGroupsPartialUpdateRequest) -> operations.IpamVlanGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlan_groups_read(self, request: operations.IpamVlanGroupsReadRequest) -> operations.IpamVlanGroupsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlan_groups_update(self, request: operations.IpamVlanGroupsUpdateRequest) -> operations.IpamVlanGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    def ipam_vlans_create(self, request: operations.IpamVlansCreateRequest) -> operations.IpamVlansCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlans/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vlans_delete(self, request: operations.IpamVlansDeleteRequest) -> operations.IpamVlansDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_vlans_list(self, request: operations.IpamVlansListRequest) -> operations.IpamVlansListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vlans/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVlansList200ApplicationJSON])
                res.ipam_vlans_list_200_application_json_object = out

        return res

    
    def ipam_vlans_partial_update(self, request: operations.IpamVlansPartialUpdateRequest) -> operations.IpamVlansPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vlans_read(self, request: operations.IpamVlansReadRequest) -> operations.IpamVlansReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vlans_update(self, request: operations.IpamVlansUpdateRequest) -> operations.IpamVlansUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    def ipam_vrfs_create(self, request: operations.IpamVrfsCreateRequest) -> operations.IpamVrfsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vrfs/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def ipam_vrfs_delete(self, request: operations.IpamVrfsDeleteRequest) -> operations.IpamVrfsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def ipam_vrfs_list(self, request: operations.IpamVrfsListRequest) -> operations.IpamVrfsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ipam/vrfs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVrfsList200ApplicationJSON])
                res.ipam_vrfs_list_200_application_json_object = out

        return res

    
    def ipam_vrfs_partial_update(self, request: operations.IpamVrfsPartialUpdateRequest) -> operations.IpamVrfsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def ipam_vrfs_read(self, request: operations.IpamVrfsReadRequest) -> operations.IpamVrfsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def ipam_vrfs_update(self, request: operations.IpamVrfsUpdateRequest) -> operations.IpamVrfsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    def secrets_generate_rsa_key_pair_list(self) -> operations.SecretsGenerateRsaKeyPairListResponse:
        r"""This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.
        {
                \"public_key\": \"<public key>\",
                \"private_key\": \"<private key>\"
            }
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/generate-rsa-key-pair/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsGenerateRsaKeyPairListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def secrets_get_session_key_create(self) -> operations.SecretsGetSessionKeyCreateResponse:
        r"""Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
        key is POSTed with the name `private_key`. An example:
        
            curl -v -X POST -H \"Authorization: Token <token>\" -H \"Accept: application/json; indent=4\" \
            --data-urlencode \"private_key@<filename>\" https://netbox/api/secrets/get-session-key/
        
        This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:
        
            {
                \"session_key\": \"+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf=\"
            }
        
        This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
        key will be returned instead of a new one.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/get-session-key/"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsGetSessionKeyCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def secrets_secret_roles_create(self, request: operations.SecretsSecretRolesCreateRequest) -> operations.SecretsSecretRolesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secret-roles/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secret_roles_delete(self, request: operations.SecretsSecretRolesDeleteRequest) -> operations.SecretsSecretRolesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def secrets_secret_roles_list(self, request: operations.SecretsSecretRolesListRequest) -> operations.SecretsSecretRolesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secret-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretsSecretRolesList200ApplicationJSON])
                res.secrets_secret_roles_list_200_application_json_object = out

        return res

    
    def secrets_secret_roles_partial_update(self, request: operations.SecretsSecretRolesPartialUpdateRequest) -> operations.SecretsSecretRolesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secret_roles_read(self, request: operations.SecretsSecretRolesReadRequest) -> operations.SecretsSecretRolesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secret_roles_update(self, request: operations.SecretsSecretRolesUpdateRequest) -> operations.SecretsSecretRolesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    def secrets_secrets_create(self, request: operations.SecretsSecretsCreateRequest) -> operations.SecretsSecretsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secrets/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secrets_secrets_delete(self, request: operations.SecretsSecretsDeleteRequest) -> operations.SecretsSecretsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def secrets_secrets_list(self, request: operations.SecretsSecretsListRequest) -> operations.SecretsSecretsListResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secrets/secrets/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretsSecretsList200ApplicationJSON])
                res.secrets_secrets_list_200_application_json_object = out

        return res

    
    def secrets_secrets_partial_update(self, request: operations.SecretsSecretsPartialUpdateRequest) -> operations.SecretsSecretsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secrets_secrets_read(self, request: operations.SecretsSecretsReadRequest) -> operations.SecretsSecretsReadResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def secrets_secrets_update(self, request: operations.SecretsSecretsUpdateRequest) -> operations.SecretsSecretsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    def tenancy_tenant_groups_create(self, request: operations.TenancyTenantGroupsCreateRequest) -> operations.TenancyTenantGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenant-groups/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenant_groups_delete(self, request: operations.TenancyTenantGroupsDeleteRequest) -> operations.TenancyTenantGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tenancy_tenant_groups_list(self, request: operations.TenancyTenantGroupsListRequest) -> operations.TenancyTenantGroupsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenant-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TenancyTenantGroupsList200ApplicationJSON])
                res.tenancy_tenant_groups_list_200_application_json_object = out

        return res

    
    def tenancy_tenant_groups_partial_update(self, request: operations.TenancyTenantGroupsPartialUpdateRequest) -> operations.TenancyTenantGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenant_groups_read(self, request: operations.TenancyTenantGroupsReadRequest) -> operations.TenancyTenantGroupsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenant_groups_update(self, request: operations.TenancyTenantGroupsUpdateRequest) -> operations.TenancyTenantGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    def tenancy_tenants_create(self, request: operations.TenancyTenantsCreateRequest) -> operations.TenancyTenantsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenants/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def tenancy_tenants_delete(self, request: operations.TenancyTenantsDeleteRequest) -> operations.TenancyTenantsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def tenancy_tenants_list(self, request: operations.TenancyTenantsListRequest) -> operations.TenancyTenantsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tenancy/tenants/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TenancyTenantsList200ApplicationJSON])
                res.tenancy_tenants_list_200_application_json_object = out

        return res

    
    def tenancy_tenants_partial_update(self, request: operations.TenancyTenantsPartialUpdateRequest) -> operations.TenancyTenantsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def tenancy_tenants_read(self, request: operations.TenancyTenantsReadRequest) -> operations.TenancyTenantsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def tenancy_tenants_update(self, request: operations.TenancyTenantsUpdateRequest) -> operations.TenancyTenantsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    def virtualization_cluster_groups_create(self, request: operations.VirtualizationClusterGroupsCreateRequest) -> operations.VirtualizationClusterGroupsCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-groups/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_groups_delete(self, request: operations.VirtualizationClusterGroupsDeleteRequest) -> operations.VirtualizationClusterGroupsDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_cluster_groups_list(self, request: operations.VirtualizationClusterGroupsListRequest) -> operations.VirtualizationClusterGroupsListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClusterGroupsList200ApplicationJSON])
                res.virtualization_cluster_groups_list_200_application_json_object = out

        return res

    
    def virtualization_cluster_groups_partial_update(self, request: operations.VirtualizationClusterGroupsPartialUpdateRequest) -> operations.VirtualizationClusterGroupsPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_groups_read(self, request: operations.VirtualizationClusterGroupsReadRequest) -> operations.VirtualizationClusterGroupsReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_groups_update(self, request: operations.VirtualizationClusterGroupsUpdateRequest) -> operations.VirtualizationClusterGroupsUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    def virtualization_cluster_types_create(self, request: operations.VirtualizationClusterTypesCreateRequest) -> operations.VirtualizationClusterTypesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-types/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_cluster_types_delete(self, request: operations.VirtualizationClusterTypesDeleteRequest) -> operations.VirtualizationClusterTypesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_cluster_types_list(self, request: operations.VirtualizationClusterTypesListRequest) -> operations.VirtualizationClusterTypesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/cluster-types/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClusterTypesList200ApplicationJSON])
                res.virtualization_cluster_types_list_200_application_json_object = out

        return res

    
    def virtualization_cluster_types_partial_update(self, request: operations.VirtualizationClusterTypesPartialUpdateRequest) -> operations.VirtualizationClusterTypesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_cluster_types_read(self, request: operations.VirtualizationClusterTypesReadRequest) -> operations.VirtualizationClusterTypesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_cluster_types_update(self, request: operations.VirtualizationClusterTypesUpdateRequest) -> operations.VirtualizationClusterTypesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    def virtualization_clusters_create(self, request: operations.VirtualizationClustersCreateRequest) -> operations.VirtualizationClustersCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/clusters/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_clusters_delete(self, request: operations.VirtualizationClustersDeleteRequest) -> operations.VirtualizationClustersDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_clusters_list(self, request: operations.VirtualizationClustersListRequest) -> operations.VirtualizationClustersListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/clusters/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClustersList200ApplicationJSON])
                res.virtualization_clusters_list_200_application_json_object = out

        return res

    
    def virtualization_clusters_partial_update(self, request: operations.VirtualizationClustersPartialUpdateRequest) -> operations.VirtualizationClustersPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_clusters_read(self, request: operations.VirtualizationClustersReadRequest) -> operations.VirtualizationClustersReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_clusters_update(self, request: operations.VirtualizationClustersUpdateRequest) -> operations.VirtualizationClustersUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def virtualization_interfaces_create(self, request: operations.VirtualizationInterfacesCreateRequest) -> operations.VirtualizationInterfacesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/interfaces/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineInterface])
                res.virtual_machine_interface = out

        return res

    
    def virtualization_interfaces_delete(self, request: operations.VirtualizationInterfacesDeleteRequest) -> operations.VirtualizationInterfacesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_interfaces_list(self, request: operations.VirtualizationInterfacesListRequest) -> operations.VirtualizationInterfacesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/interfaces/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationInterfacesList200ApplicationJSON])
                res.virtualization_interfaces_list_200_application_json_object = out

        return res

    
    def virtualization_interfaces_partial_update(self, request: operations.VirtualizationInterfacesPartialUpdateRequest) -> operations.VirtualizationInterfacesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineInterface])
                res.virtual_machine_interface = out

        return res

    
    def virtualization_interfaces_read(self, request: operations.VirtualizationInterfacesReadRequest) -> operations.VirtualizationInterfacesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineInterface])
                res.virtual_machine_interface = out

        return res

    
    def virtualization_interfaces_update(self, request: operations.VirtualizationInterfacesUpdateRequest) -> operations.VirtualizationInterfacesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineInterface])
                res.virtual_machine_interface = out

        return res

    
    def virtualization_virtual_machines_create(self, request: operations.VirtualizationVirtualMachinesCreateRequest) -> operations.VirtualizationVirtualMachinesCreateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/virtual-machines/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineWithConfigContext])
                res.virtual_machine_with_config_context = out

        return res

    
    def virtualization_virtual_machines_delete(self, request: operations.VirtualizationVirtualMachinesDeleteRequest) -> operations.VirtualizationVirtualMachinesDeleteResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def virtualization_virtual_machines_list(self, request: operations.VirtualizationVirtualMachinesListRequest) -> operations.VirtualizationVirtualMachinesListResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/virtualization/virtual-machines/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationVirtualMachinesList200ApplicationJSON])
                res.virtualization_virtual_machines_list_200_application_json_object = out

        return res

    
    def virtualization_virtual_machines_partial_update(self, request: operations.VirtualizationVirtualMachinesPartialUpdateRequest) -> operations.VirtualizationVirtualMachinesPartialUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineWithConfigContext])
                res.virtual_machine_with_config_context = out

        return res

    
    def virtualization_virtual_machines_read(self, request: operations.VirtualizationVirtualMachinesReadRequest) -> operations.VirtualizationVirtualMachinesReadResponse:
        r"""Call to super to allow for caching
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineWithConfigContext])
                res.virtual_machine_with_config_context = out

        return res

    
    def virtualization_virtual_machines_update(self, request: operations.VirtualizationVirtualMachinesUpdateRequest) -> operations.VirtualizationVirtualMachinesUpdateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineWithConfigContext])
                res.virtual_machine_with_config_context = out

        return res

    