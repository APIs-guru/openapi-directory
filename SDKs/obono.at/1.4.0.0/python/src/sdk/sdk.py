

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://obono.at/api/v1",
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
        
    
    
    
    def get_auth(self, request: operations.GetAuthRequest) -> operations.GetAuthResponse:
        r"""Request a JWT access token using your obono username and password.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthResult])
                res.auth_result = out

        return res

    
    def get_belege_beleg_uuid_(self, request: operations.GetBelegeBelegUUIDRequest) -> operations.GetBelegeBelegUUIDResponse:
        r"""Retrieves a particular `Beleg` from the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/belege/{belegUuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Beleg])
                res.beleg = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_export_csv_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/csv/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_dep131_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/dep131/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_dep7_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/dep7/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_gobd_registrierkassen_registrierkasse_uuid_(self, request: operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDRequest) -> operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/gobd/registrierkassen/{registrierkasseUuid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_html_belege_beleg_uuid_(self, request: operations.GetExportHTMLBelegeBelegUUIDRequest) -> operations.GetExportHTMLBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/html/belege/{belegUuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportHTMLBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_pdf_belege_beleg_uuid_(self, request: operations.GetExportPdfBelegeBelegUUIDRequest) -> operations.GetExportPdfBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/pdf/belege/{belegUuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportPdfBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_qr_belege_beleg_uuid_(self, request: operations.GetExportQrBelegeBelegUUIDRequest) -> operations.GetExportQrBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/qr/belege/{belegUuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportQrBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_thermal_print_belege_beleg_uuid_(self, request: operations.GetExportThermalPrintBelegeBelegUUIDRequest) -> operations.GetExportThermalPrintBelegeBelegUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/thermal-print/belege/{belegUuid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportThermalPrintBelegeBelegUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_export_xls_registrierkassen_registrierkasse_uuid_belege(self, request: operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest) -> operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/export/xls/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def add_beleg(self, request: operations.AddBelegRequest) -> operations.AddBelegResponse:
        r"""Signs a receipt and stores it in the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBelegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 409:
            pass
        elif r.status_code == 415:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_abschluss(self, request: operations.CreateAbschlussRequest) -> operations.CreateAbschlussResponse:
        r"""Generates an `Abschlussbeleg`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/abschluss", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAbschlussResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            

        return res

    
    def get_beleg(self, request: operations.GetBelegRequest) -> operations.GetBelegResponse:
        r"""Retrieves a particular `Beleg` from the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/belege/{belegUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBelegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Beleg])
                res.beleg = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_belege(self, request: operations.GetBelegeRequest) -> operations.GetBelegeResponse:
        r"""Retrieves the `Beleg` collection from the \"Datenerfassungsprotokoll\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/belege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Belege])
                res.belege = out

        return res

    
    def get_dep(self, request: operations.GetDepRequest) -> operations.GetDepResponse:
        r"""Generates a DEP file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/dep", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_monatsbelege(self, request: operations.GetMonatsbelegeRequest) -> operations.GetMonatsbelegeResponse:
        r"""Returns a list of `Monatsbelege`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}/monatsbelege", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMonatsbelegeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Monatsbeleg]])
                res.monatsbelegs = out

        return res

    
    def get_registrierkasse(self, request: operations.GetRegistrierkasseRequest) -> operations.GetRegistrierkasseResponse:
        r"""Returns information about a particular `Registrierkasse`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/registrierkassen/{registrierkasseUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegistrierkasseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Registrierkasse])
                res.registrierkasse = out
        elif r.status_code == 404:
            pass

        return res

    