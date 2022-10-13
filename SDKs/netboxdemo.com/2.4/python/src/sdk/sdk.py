import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://netboxdemo.com/api",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def circuits_choices_list(self) -> operations.CircuitsChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def circuits_choices_read(self, request: operations.CircuitsChoicesReadRequest) -> operations.CircuitsChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def circuits_circuit_terminations_create(self, request: operations.CircuitsCircuitTerminationsCreateRequest) -> operations.CircuitsCircuitTerminationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/circuit-terminations/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    
    def circuits_circuit_terminations_delete(self, request: operations.CircuitsCircuitTerminationsDeleteRequest) -> operations.CircuitsCircuitTerminationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def circuits_circuit_terminations_list(self, request: operations.CircuitsCircuitTerminationsListRequest) -> operations.CircuitsCircuitTerminationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/circuit-terminations/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitTerminationsList200ApplicationJSON])
                res.circuits_circuit_terminations_list_200_application_json_object = out

        return res

    
    
    def circuits_circuit_terminations_partial_update(self, request: operations.CircuitsCircuitTerminationsPartialUpdateRequest) -> operations.CircuitsCircuitTerminationsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    
    def circuits_circuit_terminations_read(self, request: operations.CircuitsCircuitTerminationsReadRequest) -> operations.CircuitsCircuitTerminationsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    
    def circuits_circuit_terminations_update(self, request: operations.CircuitsCircuitTerminationsUpdateRequest) -> operations.CircuitsCircuitTerminationsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-terminations/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTerminationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitTermination])
                res.circuit_termination = out

        return res

    
    
    def circuits_circuit_types_create(self, request: operations.CircuitsCircuitTypesCreateRequest) -> operations.CircuitsCircuitTypesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/circuit-types/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    
    def circuits_circuit_types_delete(self, request: operations.CircuitsCircuitTypesDeleteRequest) -> operations.CircuitsCircuitTypesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def circuits_circuit_types_list(self, request: operations.CircuitsCircuitTypesListRequest) -> operations.CircuitsCircuitTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/circuit-types/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitTypesList200ApplicationJSON])
                res.circuits_circuit_types_list_200_application_json_object = out

        return res

    
    
    def circuits_circuit_types_partial_update(self, request: operations.CircuitsCircuitTypesPartialUpdateRequest) -> operations.CircuitsCircuitTypesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    
    def circuits_circuit_types_read(self, request: operations.CircuitsCircuitTypesReadRequest) -> operations.CircuitsCircuitTypesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    
    def circuits_circuit_types_update(self, request: operations.CircuitsCircuitTypesUpdateRequest) -> operations.CircuitsCircuitTypesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuit-types/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CircuitType])
                res.circuit_type = out

        return res

    
    
    def circuits_circuits_create(self, request: operations.CircuitsCircuitsCreateRequest) -> operations.CircuitsCircuitsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/circuits/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    
    def circuits_circuits_delete(self, request: operations.CircuitsCircuitsDeleteRequest) -> operations.CircuitsCircuitsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def circuits_circuits_list(self, request: operations.CircuitsCircuitsListRequest) -> operations.CircuitsCircuitsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/circuits/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsCircuitsList200ApplicationJSON])
                res.circuits_circuits_list_200_application_json_object = out

        return res

    
    
    def circuits_circuits_partial_update(self, request: operations.CircuitsCircuitsPartialUpdateRequest) -> operations.CircuitsCircuitsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    
    def circuits_circuits_read(self, request: operations.CircuitsCircuitsReadRequest) -> operations.CircuitsCircuitsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    
    def circuits_circuits_update(self, request: operations.CircuitsCircuitsUpdateRequest) -> operations.CircuitsCircuitsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/circuits/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsCircuitsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Circuit])
                res.circuit = out

        return res

    
    
    def circuits_providers_create(self, request: operations.CircuitsProvidersCreateRequest) -> operations.CircuitsProvidersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/providers/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    
    def circuits_providers_delete(self, request: operations.CircuitsProvidersDeleteRequest) -> operations.CircuitsProvidersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def circuits_providers_graphs(self, request: operations.CircuitsProvidersGraphsRequest) -> operations.CircuitsProvidersGraphsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/providers/{id}/graphs/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersGraphsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    
    def circuits_providers_list(self, request: operations.CircuitsProvidersListRequest) -> operations.CircuitsProvidersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/circuits/providers/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CircuitsProvidersList200ApplicationJSON])
                res.circuits_providers_list_200_application_json_object = out

        return res

    
    
    def circuits_providers_partial_update(self, request: operations.CircuitsProvidersPartialUpdateRequest) -> operations.CircuitsProvidersPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    
    def circuits_providers_read(self, request: operations.CircuitsProvidersReadRequest) -> operations.CircuitsProvidersReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    
    def circuits_providers_update(self, request: operations.CircuitsProvidersUpdateRequest) -> operations.CircuitsProvidersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/circuits/providers/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CircuitsProvidersUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Provider])
                res.provider = out

        return res

    
    
    def dcim_choices_list(self) -> operations.DcimChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def dcim_choices_read(self, request: operations.DcimChoicesReadRequest) -> operations.DcimChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def dcim_connected_device_list(self, request: operations.DcimConnectedDeviceListRequest) -> operations.DcimConnectedDeviceListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/connected-device/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConnectedDeviceListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    
    def dcim_console_connections_list(self, request: operations.DcimConsoleConnectionsListRequest) -> operations.DcimConsoleConnectionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleConnectionsList200ApplicationJSON])
                res.dcim_console_connections_list_200_application_json_object = out

        return res

    
    
    def dcim_console_port_templates_create(self, request: operations.DcimConsolePortTemplatesCreateRequest) -> operations.DcimConsolePortTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-port-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    
    def dcim_console_port_templates_delete(self, request: operations.DcimConsolePortTemplatesDeleteRequest) -> operations.DcimConsolePortTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_console_port_templates_list(self, request: operations.DcimConsolePortTemplatesListRequest) -> operations.DcimConsolePortTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsolePortTemplatesList200ApplicationJSON])
                res.dcim_console_port_templates_list_200_application_json_object = out

        return res

    
    
    def dcim_console_port_templates_partial_update(self, request: operations.DcimConsolePortTemplatesPartialUpdateRequest) -> operations.DcimConsolePortTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    
    def dcim_console_port_templates_read(self, request: operations.DcimConsolePortTemplatesReadRequest) -> operations.DcimConsolePortTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    
    def dcim_console_port_templates_update(self, request: operations.DcimConsolePortTemplatesUpdateRequest) -> operations.DcimConsolePortTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-port-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePortTemplate])
                res.console_port_template = out

        return res

    
    
    def dcim_console_ports_create(self, request: operations.DcimConsolePortsCreateRequest) -> operations.DcimConsolePortsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-ports/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    
    def dcim_console_ports_delete(self, request: operations.DcimConsolePortsDeleteRequest) -> operations.DcimConsolePortsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_console_ports_list(self, request: operations.DcimConsolePortsListRequest) -> operations.DcimConsolePortsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsolePortsList200ApplicationJSON])
                res.dcim_console_ports_list_200_application_json_object = out

        return res

    
    
    def dcim_console_ports_partial_update(self, request: operations.DcimConsolePortsPartialUpdateRequest) -> operations.DcimConsolePortsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    
    def dcim_console_ports_read(self, request: operations.DcimConsolePortsReadRequest) -> operations.DcimConsolePortsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    
    def dcim_console_ports_update(self, request: operations.DcimConsolePortsUpdateRequest) -> operations.DcimConsolePortsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-ports/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsolePortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsolePort])
                res.console_port = out

        return res

    
    
    def dcim_console_server_port_templates_create(self, request: operations.DcimConsoleServerPortTemplatesCreateRequest) -> operations.DcimConsoleServerPortTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-server-port-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    
    def dcim_console_server_port_templates_delete(self, request: operations.DcimConsoleServerPortTemplatesDeleteRequest) -> operations.DcimConsoleServerPortTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_console_server_port_templates_list(self, request: operations.DcimConsoleServerPortTemplatesListRequest) -> operations.DcimConsoleServerPortTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-server-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleServerPortTemplatesList200ApplicationJSON])
                res.dcim_console_server_port_templates_list_200_application_json_object = out

        return res

    
    
    def dcim_console_server_port_templates_partial_update(self, request: operations.DcimConsoleServerPortTemplatesPartialUpdateRequest) -> operations.DcimConsoleServerPortTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    
    def dcim_console_server_port_templates_read(self, request: operations.DcimConsoleServerPortTemplatesReadRequest) -> operations.DcimConsoleServerPortTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    
    def dcim_console_server_port_templates_update(self, request: operations.DcimConsoleServerPortTemplatesUpdateRequest) -> operations.DcimConsoleServerPortTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-port-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPortTemplate])
                res.console_server_port_template = out

        return res

    
    
    def dcim_console_server_ports_create(self, request: operations.DcimConsoleServerPortsCreateRequest) -> operations.DcimConsoleServerPortsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-server-ports/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    
    def dcim_console_server_ports_delete(self, request: operations.DcimConsoleServerPortsDeleteRequest) -> operations.DcimConsoleServerPortsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_console_server_ports_list(self, request: operations.DcimConsoleServerPortsListRequest) -> operations.DcimConsoleServerPortsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/console-server-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimConsoleServerPortsList200ApplicationJSON])
                res.dcim_console_server_ports_list_200_application_json_object = out

        return res

    
    
    def dcim_console_server_ports_partial_update(self, request: operations.DcimConsoleServerPortsPartialUpdateRequest) -> operations.DcimConsoleServerPortsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    
    def dcim_console_server_ports_read(self, request: operations.DcimConsoleServerPortsReadRequest) -> operations.DcimConsoleServerPortsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    
    def dcim_console_server_ports_update(self, request: operations.DcimConsoleServerPortsUpdateRequest) -> operations.DcimConsoleServerPortsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/console-server-ports/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimConsoleServerPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsoleServerPort])
                res.console_server_port = out

        return res

    
    
    def dcim_device_bay_templates_create(self, request: operations.DcimDeviceBayTemplatesCreateRequest) -> operations.DcimDeviceBayTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-bay-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    
    def dcim_device_bay_templates_delete(self, request: operations.DcimDeviceBayTemplatesDeleteRequest) -> operations.DcimDeviceBayTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_device_bay_templates_list(self, request: operations.DcimDeviceBayTemplatesListRequest) -> operations.DcimDeviceBayTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-bay-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceBayTemplatesList200ApplicationJSON])
                res.dcim_device_bay_templates_list_200_application_json_object = out

        return res

    
    
    def dcim_device_bay_templates_partial_update(self, request: operations.DcimDeviceBayTemplatesPartialUpdateRequest) -> operations.DcimDeviceBayTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    
    def dcim_device_bay_templates_read(self, request: operations.DcimDeviceBayTemplatesReadRequest) -> operations.DcimDeviceBayTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    
    def dcim_device_bay_templates_update(self, request: operations.DcimDeviceBayTemplatesUpdateRequest) -> operations.DcimDeviceBayTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bay-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBayTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBayTemplate])
                res.device_bay_template = out

        return res

    
    
    def dcim_device_bays_create(self, request: operations.DcimDeviceBaysCreateRequest) -> operations.DcimDeviceBaysCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-bays/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    
    def dcim_device_bays_delete(self, request: operations.DcimDeviceBaysDeleteRequest) -> operations.DcimDeviceBaysDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_device_bays_list(self, request: operations.DcimDeviceBaysListRequest) -> operations.DcimDeviceBaysListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-bays/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceBaysList200ApplicationJSON])
                res.dcim_device_bays_list_200_application_json_object = out

        return res

    
    
    def dcim_device_bays_partial_update(self, request: operations.DcimDeviceBaysPartialUpdateRequest) -> operations.DcimDeviceBaysPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    
    def dcim_device_bays_read(self, request: operations.DcimDeviceBaysReadRequest) -> operations.DcimDeviceBaysReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    
    def dcim_device_bays_update(self, request: operations.DcimDeviceBaysUpdateRequest) -> operations.DcimDeviceBaysUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-bays/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceBaysUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceBay])
                res.device_bay = out

        return res

    
    
    def dcim_device_roles_create(self, request: operations.DcimDeviceRolesCreateRequest) -> operations.DcimDeviceRolesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-roles/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    
    def dcim_device_roles_delete(self, request: operations.DcimDeviceRolesDeleteRequest) -> operations.DcimDeviceRolesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_device_roles_list(self, request: operations.DcimDeviceRolesListRequest) -> operations.DcimDeviceRolesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceRolesList200ApplicationJSON])
                res.dcim_device_roles_list_200_application_json_object = out

        return res

    
    
    def dcim_device_roles_partial_update(self, request: operations.DcimDeviceRolesPartialUpdateRequest) -> operations.DcimDeviceRolesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    
    def dcim_device_roles_read(self, request: operations.DcimDeviceRolesReadRequest) -> operations.DcimDeviceRolesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    
    def dcim_device_roles_update(self, request: operations.DcimDeviceRolesUpdateRequest) -> operations.DcimDeviceRolesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceRole])
                res.device_role = out

        return res

    
    
    def dcim_device_types_create(self, request: operations.DcimDeviceTypesCreateRequest) -> operations.DcimDeviceTypesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-types/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    
    def dcim_device_types_delete(self, request: operations.DcimDeviceTypesDeleteRequest) -> operations.DcimDeviceTypesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_device_types_list(self, request: operations.DcimDeviceTypesListRequest) -> operations.DcimDeviceTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/device-types/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDeviceTypesList200ApplicationJSON])
                res.dcim_device_types_list_200_application_json_object = out

        return res

    
    
    def dcim_device_types_partial_update(self, request: operations.DcimDeviceTypesPartialUpdateRequest) -> operations.DcimDeviceTypesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    
    def dcim_device_types_read(self, request: operations.DcimDeviceTypesReadRequest) -> operations.DcimDeviceTypesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    
    def dcim_device_types_update(self, request: operations.DcimDeviceTypesUpdateRequest) -> operations.DcimDeviceTypesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/device-types/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDeviceTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceType])
                res.device_type = out

        return res

    
    
    def dcim_devices_create(self, request: operations.DcimDevicesCreateRequest) -> operations.DcimDevicesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/devices/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    
    def dcim_devices_delete(self, request: operations.DcimDevicesDeleteRequest) -> operations.DcimDevicesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_devices_list(self, request: operations.DcimDevicesListRequest) -> operations.DcimDevicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/devices/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimDevicesList200ApplicationJSON])
                res.dcim_devices_list_200_application_json_object = out

        return res

    
    
    def dcim_devices_napalm(self, request: operations.DcimDevicesNapalmRequest) -> operations.DcimDevicesNapalmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/devices/{id}/napalm/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesNapalmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    
    def dcim_devices_partial_update(self, request: operations.DcimDevicesPartialUpdateRequest) -> operations.DcimDevicesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    
    def dcim_devices_read(self, request: operations.DcimDevicesReadRequest) -> operations.DcimDevicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeviceWithConfigContext])
                res.device_with_config_context = out

        return res

    
    
    def dcim_devices_update(self, request: operations.DcimDevicesUpdateRequest) -> operations.DcimDevicesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/devices/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimDevicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Device])
                res.device = out

        return res

    
    
    def dcim_interface_connections_create(self, request: operations.DcimInterfaceConnectionsCreateRequest) -> operations.DcimInterfaceConnectionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/interface-connections/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceConnection])
                res.interface_connection = out

        return res

    
    
    def dcim_interface_connections_delete(self, request: operations.DcimInterfaceConnectionsDeleteRequest) -> operations.DcimInterfaceConnectionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-connections/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_interface_connections_list(self, request: operations.DcimInterfaceConnectionsListRequest) -> operations.DcimInterfaceConnectionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/interface-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfaceConnectionsList200ApplicationJSON])
                res.dcim_interface_connections_list_200_application_json_object = out

        return res

    
    
    def dcim_interface_connections_partial_update(self, request: operations.DcimInterfaceConnectionsPartialUpdateRequest) -> operations.DcimInterfaceConnectionsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-connections/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceConnection])
                res.interface_connection = out

        return res

    
    
    def dcim_interface_connections_read(self, request: operations.DcimInterfaceConnectionsReadRequest) -> operations.DcimInterfaceConnectionsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-connections/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceConnection])
                res.interface_connection = out

        return res

    
    
    def dcim_interface_connections_update(self, request: operations.DcimInterfaceConnectionsUpdateRequest) -> operations.DcimInterfaceConnectionsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-connections/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceConnectionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceConnection])
                res.interface_connection = out

        return res

    
    
    def dcim_interface_templates_create(self, request: operations.DcimInterfaceTemplatesCreateRequest) -> operations.DcimInterfaceTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/interface-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    
    def dcim_interface_templates_delete(self, request: operations.DcimInterfaceTemplatesDeleteRequest) -> operations.DcimInterfaceTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_interface_templates_list(self, request: operations.DcimInterfaceTemplatesListRequest) -> operations.DcimInterfaceTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/interface-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfaceTemplatesList200ApplicationJSON])
                res.dcim_interface_templates_list_200_application_json_object = out

        return res

    
    
    def dcim_interface_templates_partial_update(self, request: operations.DcimInterfaceTemplatesPartialUpdateRequest) -> operations.DcimInterfaceTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    
    def dcim_interface_templates_read(self, request: operations.DcimInterfaceTemplatesReadRequest) -> operations.DcimInterfaceTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    
    def dcim_interface_templates_update(self, request: operations.DcimInterfaceTemplatesUpdateRequest) -> operations.DcimInterfaceTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interface-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfaceTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InterfaceTemplate])
                res.interface_template = out

        return res

    
    
    def dcim_interfaces_create(self, request: operations.DcimInterfacesCreateRequest) -> operations.DcimInterfacesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/interfaces/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def dcim_interfaces_delete(self, request: operations.DcimInterfacesDeleteRequest) -> operations.DcimInterfacesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_interfaces_graphs(self, request: operations.DcimInterfacesGraphsRequest) -> operations.DcimInterfacesGraphsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/graphs/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesGraphsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def dcim_interfaces_list(self, request: operations.DcimInterfacesListRequest) -> operations.DcimInterfacesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/interfaces/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInterfacesList200ApplicationJSON])
                res.dcim_interfaces_list_200_application_json_object = out

        return res

    
    
    def dcim_interfaces_partial_update(self, request: operations.DcimInterfacesPartialUpdateRequest) -> operations.DcimInterfacesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def dcim_interfaces_read(self, request: operations.DcimInterfacesReadRequest) -> operations.DcimInterfacesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def dcim_interfaces_update(self, request: operations.DcimInterfacesUpdateRequest) -> operations.DcimInterfacesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/interfaces/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInterfacesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def dcim_inventory_items_create(self, request: operations.DcimInventoryItemsCreateRequest) -> operations.DcimInventoryItemsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/inventory-items/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    
    def dcim_inventory_items_delete(self, request: operations.DcimInventoryItemsDeleteRequest) -> operations.DcimInventoryItemsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_inventory_items_list(self, request: operations.DcimInventoryItemsListRequest) -> operations.DcimInventoryItemsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/inventory-items/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimInventoryItemsList200ApplicationJSON])
                res.dcim_inventory_items_list_200_application_json_object = out

        return res

    
    
    def dcim_inventory_items_partial_update(self, request: operations.DcimInventoryItemsPartialUpdateRequest) -> operations.DcimInventoryItemsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    
    def dcim_inventory_items_read(self, request: operations.DcimInventoryItemsReadRequest) -> operations.DcimInventoryItemsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    
    def dcim_inventory_items_update(self, request: operations.DcimInventoryItemsUpdateRequest) -> operations.DcimInventoryItemsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/inventory-items/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimInventoryItemsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InventoryItem])
                res.inventory_item = out

        return res

    
    
    def dcim_manufacturers_create(self, request: operations.DcimManufacturersCreateRequest) -> operations.DcimManufacturersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/manufacturers/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    
    def dcim_manufacturers_delete(self, request: operations.DcimManufacturersDeleteRequest) -> operations.DcimManufacturersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_manufacturers_list(self, request: operations.DcimManufacturersListRequest) -> operations.DcimManufacturersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/manufacturers/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimManufacturersList200ApplicationJSON])
                res.dcim_manufacturers_list_200_application_json_object = out

        return res

    
    
    def dcim_manufacturers_partial_update(self, request: operations.DcimManufacturersPartialUpdateRequest) -> operations.DcimManufacturersPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    
    def dcim_manufacturers_read(self, request: operations.DcimManufacturersReadRequest) -> operations.DcimManufacturersReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    
    def dcim_manufacturers_update(self, request: operations.DcimManufacturersUpdateRequest) -> operations.DcimManufacturersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/manufacturers/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimManufacturersUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Manufacturer])
                res.manufacturer = out

        return res

    
    
    def dcim_platforms_create(self, request: operations.DcimPlatformsCreateRequest) -> operations.DcimPlatformsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/platforms/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    
    def dcim_platforms_delete(self, request: operations.DcimPlatformsDeleteRequest) -> operations.DcimPlatformsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_platforms_list(self, request: operations.DcimPlatformsListRequest) -> operations.DcimPlatformsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/platforms/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPlatformsList200ApplicationJSON])
                res.dcim_platforms_list_200_application_json_object = out

        return res

    
    
    def dcim_platforms_partial_update(self, request: operations.DcimPlatformsPartialUpdateRequest) -> operations.DcimPlatformsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    
    def dcim_platforms_read(self, request: operations.DcimPlatformsReadRequest) -> operations.DcimPlatformsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    
    def dcim_platforms_update(self, request: operations.DcimPlatformsUpdateRequest) -> operations.DcimPlatformsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/platforms/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPlatformsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Platform])
                res.platform = out

        return res

    
    
    def dcim_power_connections_list(self, request: operations.DcimPowerConnectionsListRequest) -> operations.DcimPowerConnectionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-connections/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerConnectionsList200ApplicationJSON])
                res.dcim_power_connections_list_200_application_json_object = out

        return res

    
    
    def dcim_power_outlet_templates_create(self, request: operations.DcimPowerOutletTemplatesCreateRequest) -> operations.DcimPowerOutletTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-outlet-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    
    def dcim_power_outlet_templates_delete(self, request: operations.DcimPowerOutletTemplatesDeleteRequest) -> operations.DcimPowerOutletTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_power_outlet_templates_list(self, request: operations.DcimPowerOutletTemplatesListRequest) -> operations.DcimPowerOutletTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-outlet-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerOutletTemplatesList200ApplicationJSON])
                res.dcim_power_outlet_templates_list_200_application_json_object = out

        return res

    
    
    def dcim_power_outlet_templates_partial_update(self, request: operations.DcimPowerOutletTemplatesPartialUpdateRequest) -> operations.DcimPowerOutletTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    
    def dcim_power_outlet_templates_read(self, request: operations.DcimPowerOutletTemplatesReadRequest) -> operations.DcimPowerOutletTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    
    def dcim_power_outlet_templates_update(self, request: operations.DcimPowerOutletTemplatesUpdateRequest) -> operations.DcimPowerOutletTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlet-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutletTemplate])
                res.power_outlet_template = out

        return res

    
    
    def dcim_power_outlets_create(self, request: operations.DcimPowerOutletsCreateRequest) -> operations.DcimPowerOutletsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-outlets/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    
    def dcim_power_outlets_delete(self, request: operations.DcimPowerOutletsDeleteRequest) -> operations.DcimPowerOutletsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_power_outlets_list(self, request: operations.DcimPowerOutletsListRequest) -> operations.DcimPowerOutletsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-outlets/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerOutletsList200ApplicationJSON])
                res.dcim_power_outlets_list_200_application_json_object = out

        return res

    
    
    def dcim_power_outlets_partial_update(self, request: operations.DcimPowerOutletsPartialUpdateRequest) -> operations.DcimPowerOutletsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    
    def dcim_power_outlets_read(self, request: operations.DcimPowerOutletsReadRequest) -> operations.DcimPowerOutletsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    
    def dcim_power_outlets_update(self, request: operations.DcimPowerOutletsUpdateRequest) -> operations.DcimPowerOutletsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-outlets/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerOutletsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerOutlet])
                res.power_outlet = out

        return res

    
    
    def dcim_power_port_templates_create(self, request: operations.DcimPowerPortTemplatesCreateRequest) -> operations.DcimPowerPortTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-port-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    
    def dcim_power_port_templates_delete(self, request: operations.DcimPowerPortTemplatesDeleteRequest) -> operations.DcimPowerPortTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_power_port_templates_list(self, request: operations.DcimPowerPortTemplatesListRequest) -> operations.DcimPowerPortTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-port-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPortTemplatesList200ApplicationJSON])
                res.dcim_power_port_templates_list_200_application_json_object = out

        return res

    
    
    def dcim_power_port_templates_partial_update(self, request: operations.DcimPowerPortTemplatesPartialUpdateRequest) -> operations.DcimPowerPortTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    
    def dcim_power_port_templates_read(self, request: operations.DcimPowerPortTemplatesReadRequest) -> operations.DcimPowerPortTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    
    def dcim_power_port_templates_update(self, request: operations.DcimPowerPortTemplatesUpdateRequest) -> operations.DcimPowerPortTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-port-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPortTemplate])
                res.power_port_template = out

        return res

    
    
    def dcim_power_ports_create(self, request: operations.DcimPowerPortsCreateRequest) -> operations.DcimPowerPortsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-ports/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    
    def dcim_power_ports_delete(self, request: operations.DcimPowerPortsDeleteRequest) -> operations.DcimPowerPortsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_power_ports_list(self, request: operations.DcimPowerPortsListRequest) -> operations.DcimPowerPortsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/power-ports/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimPowerPortsList200ApplicationJSON])
                res.dcim_power_ports_list_200_application_json_object = out

        return res

    
    
    def dcim_power_ports_partial_update(self, request: operations.DcimPowerPortsPartialUpdateRequest) -> operations.DcimPowerPortsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    
    def dcim_power_ports_read(self, request: operations.DcimPowerPortsReadRequest) -> operations.DcimPowerPortsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    
    def dcim_power_ports_update(self, request: operations.DcimPowerPortsUpdateRequest) -> operations.DcimPowerPortsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/power-ports/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimPowerPortsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PowerPort])
                res.power_port = out

        return res

    
    
    def dcim_rack_groups_create(self, request: operations.DcimRackGroupsCreateRequest) -> operations.DcimRackGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/rack-groups/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    
    def dcim_rack_groups_delete(self, request: operations.DcimRackGroupsDeleteRequest) -> operations.DcimRackGroupsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_rack_groups_list(self, request: operations.DcimRackGroupsListRequest) -> operations.DcimRackGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/rack-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackGroupsList200ApplicationJSON])
                res.dcim_rack_groups_list_200_application_json_object = out

        return res

    
    
    def dcim_rack_groups_partial_update(self, request: operations.DcimRackGroupsPartialUpdateRequest) -> operations.DcimRackGroupsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    
    def dcim_rack_groups_read(self, request: operations.DcimRackGroupsReadRequest) -> operations.DcimRackGroupsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    
    def dcim_rack_groups_update(self, request: operations.DcimRackGroupsUpdateRequest) -> operations.DcimRackGroupsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackGroup])
                res.rack_group = out

        return res

    
    
    def dcim_rack_reservations_create(self, request: operations.DcimRackReservationsCreateRequest) -> operations.DcimRackReservationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/rack-reservations/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    
    def dcim_rack_reservations_delete(self, request: operations.DcimRackReservationsDeleteRequest) -> operations.DcimRackReservationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_rack_reservations_list(self, request: operations.DcimRackReservationsListRequest) -> operations.DcimRackReservationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/rack-reservations/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackReservationsList200ApplicationJSON])
                res.dcim_rack_reservations_list_200_application_json_object = out

        return res

    
    
    def dcim_rack_reservations_partial_update(self, request: operations.DcimRackReservationsPartialUpdateRequest) -> operations.DcimRackReservationsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    
    def dcim_rack_reservations_read(self, request: operations.DcimRackReservationsReadRequest) -> operations.DcimRackReservationsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    
    def dcim_rack_reservations_update(self, request: operations.DcimRackReservationsUpdateRequest) -> operations.DcimRackReservationsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-reservations/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackReservationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackReservation])
                res.rack_reservation = out

        return res

    
    
    def dcim_rack_roles_create(self, request: operations.DcimRackRolesCreateRequest) -> operations.DcimRackRolesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/rack-roles/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    
    def dcim_rack_roles_delete(self, request: operations.DcimRackRolesDeleteRequest) -> operations.DcimRackRolesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_rack_roles_list(self, request: operations.DcimRackRolesListRequest) -> operations.DcimRackRolesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/rack-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRackRolesList200ApplicationJSON])
                res.dcim_rack_roles_list_200_application_json_object = out

        return res

    
    
    def dcim_rack_roles_partial_update(self, request: operations.DcimRackRolesPartialUpdateRequest) -> operations.DcimRackRolesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    
    def dcim_rack_roles_read(self, request: operations.DcimRackRolesReadRequest) -> operations.DcimRackRolesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    
    def dcim_rack_roles_update(self, request: operations.DcimRackRolesUpdateRequest) -> operations.DcimRackRolesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/rack-roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRackRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RackRole])
                res.rack_role = out

        return res

    
    
    def dcim_racks_create(self, request: operations.DcimRacksCreateRequest) -> operations.DcimRacksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/racks/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    
    def dcim_racks_delete(self, request: operations.DcimRacksDeleteRequest) -> operations.DcimRacksDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_racks_list(self, request: operations.DcimRacksListRequest) -> operations.DcimRacksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/racks/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRacksList200ApplicationJSON])
                res.dcim_racks_list_200_application_json_object = out

        return res

    
    
    def dcim_racks_partial_update(self, request: operations.DcimRacksPartialUpdateRequest) -> operations.DcimRacksPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    
    def dcim_racks_read(self, request: operations.DcimRacksReadRequest) -> operations.DcimRacksReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    
    def dcim_racks_units(self, request: operations.DcimRacksUnitsRequest) -> operations.DcimRacksUnitsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/racks/{id}/units/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksUnitsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    
    def dcim_racks_update(self, request: operations.DcimRacksUpdateRequest) -> operations.DcimRacksUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/racks/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRacksUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rack])
                res.rack = out

        return res

    
    
    def dcim_regions_create(self, request: operations.DcimRegionsCreateRequest) -> operations.DcimRegionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/regions/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    
    def dcim_regions_delete(self, request: operations.DcimRegionsDeleteRequest) -> operations.DcimRegionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_regions_list(self, request: operations.DcimRegionsListRequest) -> operations.DcimRegionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/regions/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimRegionsList200ApplicationJSON])
                res.dcim_regions_list_200_application_json_object = out

        return res

    
    
    def dcim_regions_partial_update(self, request: operations.DcimRegionsPartialUpdateRequest) -> operations.DcimRegionsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    
    def dcim_regions_read(self, request: operations.DcimRegionsReadRequest) -> operations.DcimRegionsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    
    def dcim_regions_update(self, request: operations.DcimRegionsUpdateRequest) -> operations.DcimRegionsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/regions/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimRegionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out

        return res

    
    
    def dcim_sites_create(self, request: operations.DcimSitesCreateRequest) -> operations.DcimSitesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/sites/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    
    def dcim_sites_delete(self, request: operations.DcimSitesDeleteRequest) -> operations.DcimSitesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_sites_graphs(self, request: operations.DcimSitesGraphsRequest) -> operations.DcimSitesGraphsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/sites/{id}/graphs/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesGraphsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    
    def dcim_sites_list(self, request: operations.DcimSitesListRequest) -> operations.DcimSitesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/sites/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimSitesList200ApplicationJSON])
                res.dcim_sites_list_200_application_json_object = out

        return res

    
    
    def dcim_sites_partial_update(self, request: operations.DcimSitesPartialUpdateRequest) -> operations.DcimSitesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    
    def dcim_sites_read(self, request: operations.DcimSitesReadRequest) -> operations.DcimSitesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    
    def dcim_sites_update(self, request: operations.DcimSitesUpdateRequest) -> operations.DcimSitesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/sites/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimSitesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out

        return res

    
    
    def dcim_virtual_chassis_create(self, request: operations.DcimVirtualChassisCreateRequest) -> operations.DcimVirtualChassisCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/virtual-chassis/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    
    def dcim_virtual_chassis_delete(self, request: operations.DcimVirtualChassisDeleteRequest) -> operations.DcimVirtualChassisDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def dcim_virtual_chassis_list(self, request: operations.DcimVirtualChassisListRequest) -> operations.DcimVirtualChassisListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/dcim/virtual-chassis/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DcimVirtualChassisList200ApplicationJSON])
                res.dcim_virtual_chassis_list_200_application_json_object = out

        return res

    
    
    def dcim_virtual_chassis_partial_update(self, request: operations.DcimVirtualChassisPartialUpdateRequest) -> operations.DcimVirtualChassisPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    
    def dcim_virtual_chassis_read(self, request: operations.DcimVirtualChassisReadRequest) -> operations.DcimVirtualChassisReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    
    def dcim_virtual_chassis_update(self, request: operations.DcimVirtualChassisUpdateRequest) -> operations.DcimVirtualChassisUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/dcim/virtual-chassis/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DcimVirtualChassisUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualChassis])
                res.virtual_chassis = out

        return res

    
    
    def extras_choices_list(self) -> operations.ExtrasChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def extras_choices_read(self, request: operations.ExtrasChoicesReadRequest) -> operations.ExtrasChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def extras_config_contexts_create(self, request: operations.ExtrasConfigContextsCreateRequest) -> operations.ExtrasConfigContextsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/config-contexts/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    
    def extras_config_contexts_delete(self, request: operations.ExtrasConfigContextsDeleteRequest) -> operations.ExtrasConfigContextsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def extras_config_contexts_list(self, request: operations.ExtrasConfigContextsListRequest) -> operations.ExtrasConfigContextsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/config-contexts/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasConfigContextsList200ApplicationJSON])
                res.extras_config_contexts_list_200_application_json_object = out

        return res

    
    
    def extras_config_contexts_partial_update(self, request: operations.ExtrasConfigContextsPartialUpdateRequest) -> operations.ExtrasConfigContextsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    
    def extras_config_contexts_read(self, request: operations.ExtrasConfigContextsReadRequest) -> operations.ExtrasConfigContextsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    
    def extras_config_contexts_update(self, request: operations.ExtrasConfigContextsUpdateRequest) -> operations.ExtrasConfigContextsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/config-contexts/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasConfigContextsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigContext])
                res.config_context = out

        return res

    
    
    def extras_export_templates_create(self, request: operations.ExtrasExportTemplatesCreateRequest) -> operations.ExtrasExportTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/export-templates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    
    def extras_export_templates_delete(self, request: operations.ExtrasExportTemplatesDeleteRequest) -> operations.ExtrasExportTemplatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def extras_export_templates_list(self, request: operations.ExtrasExportTemplatesListRequest) -> operations.ExtrasExportTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/export-templates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasExportTemplatesList200ApplicationJSON])
                res.extras_export_templates_list_200_application_json_object = out

        return res

    
    
    def extras_export_templates_partial_update(self, request: operations.ExtrasExportTemplatesPartialUpdateRequest) -> operations.ExtrasExportTemplatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    
    def extras_export_templates_read(self, request: operations.ExtrasExportTemplatesReadRequest) -> operations.ExtrasExportTemplatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    
    def extras_export_templates_update(self, request: operations.ExtrasExportTemplatesUpdateRequest) -> operations.ExtrasExportTemplatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/export-templates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasExportTemplatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExportTemplate])
                res.export_template = out

        return res

    
    
    def extras_graphs_create(self, request: operations.ExtrasGraphsCreateRequest) -> operations.ExtrasGraphsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/graphs/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    
    def extras_graphs_delete(self, request: operations.ExtrasGraphsDeleteRequest) -> operations.ExtrasGraphsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def extras_graphs_list(self, request: operations.ExtrasGraphsListRequest) -> operations.ExtrasGraphsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/graphs/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasGraphsList200ApplicationJSON])
                res.extras_graphs_list_200_application_json_object = out

        return res

    
    
    def extras_graphs_partial_update(self, request: operations.ExtrasGraphsPartialUpdateRequest) -> operations.ExtrasGraphsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    
    def extras_graphs_read(self, request: operations.ExtrasGraphsReadRequest) -> operations.ExtrasGraphsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    
    def extras_graphs_update(self, request: operations.ExtrasGraphsUpdateRequest) -> operations.ExtrasGraphsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/graphs/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasGraphsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Graph])
                res.graph = out

        return res

    
    
    def extras_image_attachments_create(self, request: operations.ExtrasImageAttachmentsCreateRequest) -> operations.ExtrasImageAttachmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/image-attachments/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    
    def extras_image_attachments_delete(self, request: operations.ExtrasImageAttachmentsDeleteRequest) -> operations.ExtrasImageAttachmentsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def extras_image_attachments_list(self, request: operations.ExtrasImageAttachmentsListRequest) -> operations.ExtrasImageAttachmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/image-attachments/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasImageAttachmentsList200ApplicationJSON])
                res.extras_image_attachments_list_200_application_json_object = out

        return res

    
    
    def extras_image_attachments_partial_update(self, request: operations.ExtrasImageAttachmentsPartialUpdateRequest) -> operations.ExtrasImageAttachmentsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    
    def extras_image_attachments_read(self, request: operations.ExtrasImageAttachmentsReadRequest) -> operations.ExtrasImageAttachmentsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    
    def extras_image_attachments_update(self, request: operations.ExtrasImageAttachmentsUpdateRequest) -> operations.ExtrasImageAttachmentsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/image-attachments/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasImageAttachmentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageAttachment])
                res.image_attachment = out

        return res

    
    
    def extras_object_changes_list(self, request: operations.ExtrasObjectChangesListRequest) -> operations.ExtrasObjectChangesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/object-changes/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasObjectChangesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasObjectChangesList200ApplicationJSON])
                res.extras_object_changes_list_200_application_json_object = out

        return res

    
    
    def extras_object_changes_read(self, request: operations.ExtrasObjectChangesReadRequest) -> operations.ExtrasObjectChangesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/object-changes/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasObjectChangesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectChange])
                res.object_change = out

        return res

    
    
    def extras_recent_activity_list(self, request: operations.ExtrasRecentActivityListRequest) -> operations.ExtrasRecentActivityListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/recent-activity/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasRecentActivityListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasRecentActivityList200ApplicationJSON])
                res.extras_recent_activity_list_200_application_json_object = out

        return res

    
    
    def extras_recent_activity_read(self, request: operations.ExtrasRecentActivityReadRequest) -> operations.ExtrasRecentActivityReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/recent-activity/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasRecentActivityReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAction])
                res.user_action = out

        return res

    
    
    def extras_tags_create(self, request: operations.ExtrasTagsCreateRequest) -> operations.ExtrasTagsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/tags/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    
    def extras_tags_delete(self, request: operations.ExtrasTagsDeleteRequest) -> operations.ExtrasTagsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def extras_tags_list(self, request: operations.ExtrasTagsListRequest) -> operations.ExtrasTagsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/tags/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasTagsList200ApplicationJSON])
                res.extras_tags_list_200_application_json_object = out

        return res

    
    
    def extras_tags_partial_update(self, request: operations.ExtrasTagsPartialUpdateRequest) -> operations.ExtrasTagsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    
    def extras_tags_read(self, request: operations.ExtrasTagsReadRequest) -> operations.ExtrasTagsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    
    def extras_tags_update(self, request: operations.ExtrasTagsUpdateRequest) -> operations.ExtrasTagsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/tags/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTagsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    
    
    def extras_topology_maps_create(self, request: operations.ExtrasTopologyMapsCreateRequest) -> operations.ExtrasTopologyMapsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/topology-maps/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    
    def extras_topology_maps_delete(self, request: operations.ExtrasTopologyMapsDeleteRequest) -> operations.ExtrasTopologyMapsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def extras_topology_maps_list(self, request: operations.ExtrasTopologyMapsListRequest) -> operations.ExtrasTopologyMapsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/extras/topology-maps/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExtrasTopologyMapsList200ApplicationJSON])
                res.extras_topology_maps_list_200_application_json_object = out

        return res

    
    
    def extras_topology_maps_partial_update(self, request: operations.ExtrasTopologyMapsPartialUpdateRequest) -> operations.ExtrasTopologyMapsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    
    def extras_topology_maps_read(self, request: operations.ExtrasTopologyMapsReadRequest) -> operations.ExtrasTopologyMapsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    
    def extras_topology_maps_render(self, request: operations.ExtrasTopologyMapsRenderRequest) -> operations.ExtrasTopologyMapsRenderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/render/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsRenderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    
    def extras_topology_maps_update(self, request: operations.ExtrasTopologyMapsUpdateRequest) -> operations.ExtrasTopologyMapsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/extras/topology-maps/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExtrasTopologyMapsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopologyMap])
                res.topology_map = out

        return res

    
    
    def ipam_choices_list(self) -> operations.IpamChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def ipam_choices_read(self, request: operations.IpamChoicesReadRequest) -> operations.IpamChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def ipam_aggregates_create(self, request: operations.IpamAggregatesCreateRequest) -> operations.IpamAggregatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/aggregates/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    
    def ipam_aggregates_delete(self, request: operations.IpamAggregatesDeleteRequest) -> operations.IpamAggregatesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_aggregates_list(self, request: operations.IpamAggregatesListRequest) -> operations.IpamAggregatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/aggregates/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamAggregatesList200ApplicationJSON])
                res.ipam_aggregates_list_200_application_json_object = out

        return res

    
    
    def ipam_aggregates_partial_update(self, request: operations.IpamAggregatesPartialUpdateRequest) -> operations.IpamAggregatesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    
    def ipam_aggregates_read(self, request: operations.IpamAggregatesReadRequest) -> operations.IpamAggregatesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    
    def ipam_aggregates_update(self, request: operations.IpamAggregatesUpdateRequest) -> operations.IpamAggregatesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/aggregates/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamAggregatesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Aggregate])
                res.aggregate = out

        return res

    
    
    def ipam_ip_addresses_create(self, request: operations.IpamIPAddressesCreateRequest) -> operations.IpamIPAddressesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/ip-addresses/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    
    def ipam_ip_addresses_delete(self, request: operations.IpamIPAddressesDeleteRequest) -> operations.IpamIPAddressesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_ip_addresses_list(self, request: operations.IpamIPAddressesListRequest) -> operations.IpamIPAddressesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/ip-addresses/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamIPAddressesList200ApplicationJSON])
                res.ipam_ip_addresses_list_200_application_json_object = out

        return res

    
    
    def ipam_ip_addresses_partial_update(self, request: operations.IpamIPAddressesPartialUpdateRequest) -> operations.IpamIPAddressesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    
    def ipam_ip_addresses_read(self, request: operations.IpamIPAddressesReadRequest) -> operations.IpamIPAddressesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    
    def ipam_ip_addresses_update(self, request: operations.IpamIPAddressesUpdateRequest) -> operations.IpamIPAddressesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/ip-addresses/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamIPAddressesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out

        return res

    
    
    def ipam_prefixes_available_ips_create(self, request: operations.IpamPrefixesAvailableIpsCreateRequest) -> operations.IpamPrefixesAvailableIpsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-ips/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailableIpsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_available_ips_read(self, request: operations.IpamPrefixesAvailableIpsReadRequest) -> operations.IpamPrefixesAvailableIpsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-ips/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailableIpsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_available_prefixes_create(self, request: operations.IpamPrefixesAvailablePrefixesCreateRequest) -> operations.IpamPrefixesAvailablePrefixesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-prefixes/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailablePrefixesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_available_prefixes_read(self, request: operations.IpamPrefixesAvailablePrefixesReadRequest) -> operations.IpamPrefixesAvailablePrefixesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/available-prefixes/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesAvailablePrefixesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_create(self, request: operations.IpamPrefixesCreateRequest) -> operations.IpamPrefixesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/prefixes/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_delete(self, request: operations.IpamPrefixesDeleteRequest) -> operations.IpamPrefixesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_prefixes_list(self, request: operations.IpamPrefixesListRequest) -> operations.IpamPrefixesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/prefixes/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamPrefixesList200ApplicationJSON])
                res.ipam_prefixes_list_200_application_json_object = out

        return res

    
    
    def ipam_prefixes_partial_update(self, request: operations.IpamPrefixesPartialUpdateRequest) -> operations.IpamPrefixesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_read(self, request: operations.IpamPrefixesReadRequest) -> operations.IpamPrefixesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_prefixes_update(self, request: operations.IpamPrefixesUpdateRequest) -> operations.IpamPrefixesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/prefixes/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamPrefixesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Prefix])
                res.prefix = out

        return res

    
    
    def ipam_rirs_create(self, request: operations.IpamRirsCreateRequest) -> operations.IpamRirsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/rirs/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    
    def ipam_rirs_delete(self, request: operations.IpamRirsDeleteRequest) -> operations.IpamRirsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_rirs_list(self, request: operations.IpamRirsListRequest) -> operations.IpamRirsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/rirs/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamRirsList200ApplicationJSON])
                res.ipam_rirs_list_200_application_json_object = out

        return res

    
    
    def ipam_rirs_partial_update(self, request: operations.IpamRirsPartialUpdateRequest) -> operations.IpamRirsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    
    def ipam_rirs_read(self, request: operations.IpamRirsReadRequest) -> operations.IpamRirsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    
    def ipam_rirs_update(self, request: operations.IpamRirsUpdateRequest) -> operations.IpamRirsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/rirs/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRirsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rir])
                res.rir = out

        return res

    
    
    def ipam_roles_create(self, request: operations.IpamRolesCreateRequest) -> operations.IpamRolesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/roles/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    
    def ipam_roles_delete(self, request: operations.IpamRolesDeleteRequest) -> operations.IpamRolesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_roles_list(self, request: operations.IpamRolesListRequest) -> operations.IpamRolesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/roles/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamRolesList200ApplicationJSON])
                res.ipam_roles_list_200_application_json_object = out

        return res

    
    
    def ipam_roles_partial_update(self, request: operations.IpamRolesPartialUpdateRequest) -> operations.IpamRolesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    
    def ipam_roles_read(self, request: operations.IpamRolesReadRequest) -> operations.IpamRolesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    
    def ipam_roles_update(self, request: operations.IpamRolesUpdateRequest) -> operations.IpamRolesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Role])
                res.role = out

        return res

    
    
    def ipam_services_create(self, request: operations.IpamServicesCreateRequest) -> operations.IpamServicesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/services/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    
    def ipam_services_delete(self, request: operations.IpamServicesDeleteRequest) -> operations.IpamServicesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_services_list(self, request: operations.IpamServicesListRequest) -> operations.IpamServicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/services/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamServicesList200ApplicationJSON])
                res.ipam_services_list_200_application_json_object = out

        return res

    
    
    def ipam_services_partial_update(self, request: operations.IpamServicesPartialUpdateRequest) -> operations.IpamServicesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    
    def ipam_services_read(self, request: operations.IpamServicesReadRequest) -> operations.IpamServicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    
    def ipam_services_update(self, request: operations.IpamServicesUpdateRequest) -> operations.IpamServicesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/services/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamServicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    
    def ipam_vlan_groups_create(self, request: operations.IpamVlanGroupsCreateRequest) -> operations.IpamVlanGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/vlan-groups/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    
    def ipam_vlan_groups_delete(self, request: operations.IpamVlanGroupsDeleteRequest) -> operations.IpamVlanGroupsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_vlan_groups_list(self, request: operations.IpamVlanGroupsListRequest) -> operations.IpamVlanGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/vlan-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVlanGroupsList200ApplicationJSON])
                res.ipam_vlan_groups_list_200_application_json_object = out

        return res

    
    
    def ipam_vlan_groups_partial_update(self, request: operations.IpamVlanGroupsPartialUpdateRequest) -> operations.IpamVlanGroupsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    
    def ipam_vlan_groups_read(self, request: operations.IpamVlanGroupsReadRequest) -> operations.IpamVlanGroupsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    
    def ipam_vlan_groups_update(self, request: operations.IpamVlanGroupsUpdateRequest) -> operations.IpamVlanGroupsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlan-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlanGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VlanGroup])
                res.vlan_group = out

        return res

    
    
    def ipam_vlans_create(self, request: operations.IpamVlansCreateRequest) -> operations.IpamVlansCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/vlans/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    
    def ipam_vlans_delete(self, request: operations.IpamVlansDeleteRequest) -> operations.IpamVlansDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_vlans_list(self, request: operations.IpamVlansListRequest) -> operations.IpamVlansListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/vlans/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVlansList200ApplicationJSON])
                res.ipam_vlans_list_200_application_json_object = out

        return res

    
    
    def ipam_vlans_partial_update(self, request: operations.IpamVlansPartialUpdateRequest) -> operations.IpamVlansPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    
    def ipam_vlans_read(self, request: operations.IpamVlansReadRequest) -> operations.IpamVlansReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    
    def ipam_vlans_update(self, request: operations.IpamVlansUpdateRequest) -> operations.IpamVlansUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vlans/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVlansUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vlan])
                res.vlan = out

        return res

    
    
    def ipam_vrfs_create(self, request: operations.IpamVrfsCreateRequest) -> operations.IpamVrfsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/vrfs/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    
    def ipam_vrfs_delete(self, request: operations.IpamVrfsDeleteRequest) -> operations.IpamVrfsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def ipam_vrfs_list(self, request: operations.IpamVrfsListRequest) -> operations.IpamVrfsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ipam/vrfs/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IpamVrfsList200ApplicationJSON])
                res.ipam_vrfs_list_200_application_json_object = out

        return res

    
    
    def ipam_vrfs_partial_update(self, request: operations.IpamVrfsPartialUpdateRequest) -> operations.IpamVrfsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    
    def ipam_vrfs_read(self, request: operations.IpamVrfsReadRequest) -> operations.IpamVrfsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    
    def ipam_vrfs_update(self, request: operations.IpamVrfsUpdateRequest) -> operations.IpamVrfsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ipam/vrfs/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IpamVrfsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Vrf])
                res.vrf = out

        return res

    
    
    def secrets_choices_list(self) -> operations.SecretsChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def secrets_choices_read(self, request: operations.SecretsChoicesReadRequest) -> operations.SecretsChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def secrets_generate_rsa_key_pair_list(self) -> operations.SecretsGenerateRsaKeyPairListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/generate-rsa-key-pair/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsGenerateRsaKeyPairListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def secrets_get_session_key_create(self) -> operations.SecretsGetSessionKeyCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/get-session-key/"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsGetSessionKeyCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            pass

        return res

    
    
    def secrets_secret_roles_create(self, request: operations.SecretsSecretRolesCreateRequest) -> operations.SecretsSecretRolesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/secret-roles/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    
    def secrets_secret_roles_delete(self, request: operations.SecretsSecretRolesDeleteRequest) -> operations.SecretsSecretRolesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def secrets_secret_roles_list(self, request: operations.SecretsSecretRolesListRequest) -> operations.SecretsSecretRolesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/secret-roles/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretsSecretRolesList200ApplicationJSON])
                res.secrets_secret_roles_list_200_application_json_object = out

        return res

    
    
    def secrets_secret_roles_partial_update(self, request: operations.SecretsSecretRolesPartialUpdateRequest) -> operations.SecretsSecretRolesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    
    def secrets_secret_roles_read(self, request: operations.SecretsSecretRolesReadRequest) -> operations.SecretsSecretRolesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    
    def secrets_secret_roles_update(self, request: operations.SecretsSecretRolesUpdateRequest) -> operations.SecretsSecretRolesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secret-roles/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SecretRole])
                res.secret_role = out

        return res

    
    
    def secrets_secrets_create(self, request: operations.SecretsSecretsCreateRequest) -> operations.SecretsSecretsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/secrets/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    
    def secrets_secrets_delete(self, request: operations.SecretsSecretsDeleteRequest) -> operations.SecretsSecretsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def secrets_secrets_list(self, request: operations.SecretsSecretsListRequest) -> operations.SecretsSecretsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/secrets/secrets/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SecretsSecretsList200ApplicationJSON])
                res.secrets_secrets_list_200_application_json_object = out

        return res

    
    
    def secrets_secrets_partial_update(self, request: operations.SecretsSecretsPartialUpdateRequest) -> operations.SecretsSecretsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    
    def secrets_secrets_read(self, request: operations.SecretsSecretsReadRequest) -> operations.SecretsSecretsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    
    def secrets_secrets_update(self, request: operations.SecretsSecretsUpdateRequest) -> operations.SecretsSecretsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/secrets/secrets/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecretsSecretsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Secret])
                res.secret = out

        return res

    
    
    def tenancy_choices_list(self) -> operations.TenancyChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tenancy/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def tenancy_choices_read(self, request: operations.TenancyChoicesReadRequest) -> operations.TenancyChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def tenancy_tenant_groups_create(self, request: operations.TenancyTenantGroupsCreateRequest) -> operations.TenancyTenantGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tenancy/tenant-groups/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    
    def tenancy_tenant_groups_delete(self, request: operations.TenancyTenantGroupsDeleteRequest) -> operations.TenancyTenantGroupsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def tenancy_tenant_groups_list(self, request: operations.TenancyTenantGroupsListRequest) -> operations.TenancyTenantGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tenancy/tenant-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TenancyTenantGroupsList200ApplicationJSON])
                res.tenancy_tenant_groups_list_200_application_json_object = out

        return res

    
    
    def tenancy_tenant_groups_partial_update(self, request: operations.TenancyTenantGroupsPartialUpdateRequest) -> operations.TenancyTenantGroupsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    
    def tenancy_tenant_groups_read(self, request: operations.TenancyTenantGroupsReadRequest) -> operations.TenancyTenantGroupsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    
    def tenancy_tenant_groups_update(self, request: operations.TenancyTenantGroupsUpdateRequest) -> operations.TenancyTenantGroupsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenant-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TenantGroup])
                res.tenant_group = out

        return res

    
    
    def tenancy_tenants_create(self, request: operations.TenancyTenantsCreateRequest) -> operations.TenancyTenantsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tenancy/tenants/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    
    def tenancy_tenants_delete(self, request: operations.TenancyTenantsDeleteRequest) -> operations.TenancyTenantsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def tenancy_tenants_list(self, request: operations.TenancyTenantsListRequest) -> operations.TenancyTenantsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tenancy/tenants/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TenancyTenantsList200ApplicationJSON])
                res.tenancy_tenants_list_200_application_json_object = out

        return res

    
    
    def tenancy_tenants_partial_update(self, request: operations.TenancyTenantsPartialUpdateRequest) -> operations.TenancyTenantsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    
    def tenancy_tenants_read(self, request: operations.TenancyTenantsReadRequest) -> operations.TenancyTenantsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    
    def tenancy_tenants_update(self, request: operations.TenancyTenantsUpdateRequest) -> operations.TenancyTenantsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tenancy/tenants/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TenancyTenantsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tenant])
                res.tenant = out

        return res

    
    
    def virtualization_choices_list(self) -> operations.VirtualizationChoicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/_choices/"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationChoicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def virtualization_choices_read(self, request: operations.VirtualizationChoicesReadRequest) -> operations.VirtualizationChoicesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/_choices/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationChoicesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def virtualization_cluster_groups_create(self, request: operations.VirtualizationClusterGroupsCreateRequest) -> operations.VirtualizationClusterGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/cluster-groups/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    
    def virtualization_cluster_groups_delete(self, request: operations.VirtualizationClusterGroupsDeleteRequest) -> operations.VirtualizationClusterGroupsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def virtualization_cluster_groups_list(self, request: operations.VirtualizationClusterGroupsListRequest) -> operations.VirtualizationClusterGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/cluster-groups/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClusterGroupsList200ApplicationJSON])
                res.virtualization_cluster_groups_list_200_application_json_object = out

        return res

    
    
    def virtualization_cluster_groups_partial_update(self, request: operations.VirtualizationClusterGroupsPartialUpdateRequest) -> operations.VirtualizationClusterGroupsPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    
    def virtualization_cluster_groups_read(self, request: operations.VirtualizationClusterGroupsReadRequest) -> operations.VirtualizationClusterGroupsReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    
    def virtualization_cluster_groups_update(self, request: operations.VirtualizationClusterGroupsUpdateRequest) -> operations.VirtualizationClusterGroupsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-groups/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterGroup])
                res.cluster_group = out

        return res

    
    
    def virtualization_cluster_types_create(self, request: operations.VirtualizationClusterTypesCreateRequest) -> operations.VirtualizationClusterTypesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/cluster-types/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    
    def virtualization_cluster_types_delete(self, request: operations.VirtualizationClusterTypesDeleteRequest) -> operations.VirtualizationClusterTypesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def virtualization_cluster_types_list(self, request: operations.VirtualizationClusterTypesListRequest) -> operations.VirtualizationClusterTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/cluster-types/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClusterTypesList200ApplicationJSON])
                res.virtualization_cluster_types_list_200_application_json_object = out

        return res

    
    
    def virtualization_cluster_types_partial_update(self, request: operations.VirtualizationClusterTypesPartialUpdateRequest) -> operations.VirtualizationClusterTypesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    
    def virtualization_cluster_types_read(self, request: operations.VirtualizationClusterTypesReadRequest) -> operations.VirtualizationClusterTypesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    
    def virtualization_cluster_types_update(self, request: operations.VirtualizationClusterTypesUpdateRequest) -> operations.VirtualizationClusterTypesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/cluster-types/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClusterTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClusterType])
                res.cluster_type = out

        return res

    
    
    def virtualization_clusters_create(self, request: operations.VirtualizationClustersCreateRequest) -> operations.VirtualizationClustersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/clusters/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    
    def virtualization_clusters_delete(self, request: operations.VirtualizationClustersDeleteRequest) -> operations.VirtualizationClustersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def virtualization_clusters_list(self, request: operations.VirtualizationClustersListRequest) -> operations.VirtualizationClustersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/clusters/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationClustersList200ApplicationJSON])
                res.virtualization_clusters_list_200_application_json_object = out

        return res

    
    
    def virtualization_clusters_partial_update(self, request: operations.VirtualizationClustersPartialUpdateRequest) -> operations.VirtualizationClustersPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    
    def virtualization_clusters_read(self, request: operations.VirtualizationClustersReadRequest) -> operations.VirtualizationClustersReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    
    def virtualization_clusters_update(self, request: operations.VirtualizationClustersUpdateRequest) -> operations.VirtualizationClustersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/clusters/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationClustersUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    
    def virtualization_interfaces_create(self, request: operations.VirtualizationInterfacesCreateRequest) -> operations.VirtualizationInterfacesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/interfaces/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def virtualization_interfaces_delete(self, request: operations.VirtualizationInterfacesDeleteRequest) -> operations.VirtualizationInterfacesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def virtualization_interfaces_list(self, request: operations.VirtualizationInterfacesListRequest) -> operations.VirtualizationInterfacesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/interfaces/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationInterfacesList200ApplicationJSON])
                res.virtualization_interfaces_list_200_application_json_object = out

        return res

    
    
    def virtualization_interfaces_partial_update(self, request: operations.VirtualizationInterfacesPartialUpdateRequest) -> operations.VirtualizationInterfacesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def virtualization_interfaces_read(self, request: operations.VirtualizationInterfacesReadRequest) -> operations.VirtualizationInterfacesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def virtualization_interfaces_update(self, request: operations.VirtualizationInterfacesUpdateRequest) -> operations.VirtualizationInterfacesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/interfaces/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationInterfacesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Interface])
                res.interface = out

        return res

    
    
    def virtualization_virtual_machines_create(self, request: operations.VirtualizationVirtualMachinesCreateRequest) -> operations.VirtualizationVirtualMachinesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/virtual-machines/"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachine])
                res.virtual_machine = out

        return res

    
    
    def virtualization_virtual_machines_delete(self, request: operations.VirtualizationVirtualMachinesDeleteRequest) -> operations.VirtualizationVirtualMachinesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def virtualization_virtual_machines_list(self, request: operations.VirtualizationVirtualMachinesListRequest) -> operations.VirtualizationVirtualMachinesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/virtualization/virtual-machines/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.VirtualizationVirtualMachinesList200ApplicationJSON])
                res.virtualization_virtual_machines_list_200_application_json_object = out

        return res

    
    
    def virtualization_virtual_machines_partial_update(self, request: operations.VirtualizationVirtualMachinesPartialUpdateRequest) -> operations.VirtualizationVirtualMachinesPartialUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesPartialUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachine])
                res.virtual_machine = out

        return res

    
    
    def virtualization_virtual_machines_read(self, request: operations.VirtualizationVirtualMachinesReadRequest) -> operations.VirtualizationVirtualMachinesReadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesReadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachineWithConfigContext])
                res.virtual_machine_with_config_context = out

        return res

    
    
    def virtualization_virtual_machines_update(self, request: operations.VirtualizationVirtualMachinesUpdateRequest) -> operations.VirtualizationVirtualMachinesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/virtualization/virtual-machines/{id}/", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VirtualizationVirtualMachinesUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VirtualMachine])
                res.virtual_machine = out

        return res

    