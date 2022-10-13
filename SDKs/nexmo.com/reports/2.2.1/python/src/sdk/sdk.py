import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.nexmo.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def cancel_report(self, request: operations.CancelReportRequest) -> operations.CancelReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/reports/{report_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelReportResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CancelReportResponses(cancel_report_200_application_json_one_of=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CancelReportResponses(cancel_report_401_application_json_any=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CancelReportResponses(cancel_report_404_application_json_any=out)
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CancelReportResponses(cancel_report_409_application_json_any=out)

        return res

    
    def create_async_report(self, request: operations.CreateAsyncReportRequest) -> operations.CreateAsyncReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAsyncReportResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreateAsyncReportResponses(create_async_report_200_application_json_one_of=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreateAsyncReportResponses(create_async_report_400_application_json_any=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreateAsyncReportResponses(create_async_report_401_application_json_any=out)
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreateAsyncReportResponses(create_async_report_403_application_json_any=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.CreateAsyncReportResponses(create_async_report_422_application_json_any=out)

        return res

    
    def download_report(self, request: operations.DownloadReportRequest) -> operations.DownloadReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3/media/{file_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DownloadReportResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.responses[r.status_code][content_type] = operations.DownloadReportResponses(raw_response=r.content)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.DownloadReportResponses(download_report_401_application_json_any=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.DownloadReportResponses(download_report_404_application_json_any=out)

        return res

    
    def get_records(self, request: operations.GetRecordsRequest) -> operations.GetRecordsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecordsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.GetRecordsResponses(get_records_200_application_json_one_of=out)
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.GetRecordsResponses(get_records_403_application_json_any=out)
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.GetRecordsResponses(get_records_422_application_json_one_of=out)

        return res

    
    def get_report(self, request: operations.GetReportRequest) -> operations.GetReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/reports/{report_id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.GetReportResponses(get_report_200_application_json_one_of=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.GetReportResponses(get_report_401_application_json_any=out)
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.GetReportResponses(get_report_404_application_json_any=out)

        return res

    
    def list_reports(self, request: operations.ListReportsRequest) -> operations.ListReportsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListReportsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListReports200ApplicationJSON])
                res.responses[r.status_code][content_type] = operations.ListReportsResponses(list_reports_200_application_json_object=out)
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ListReportsResponses(list_reports_400_application_json_any=out)
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.responses[r.status_code][content_type] = operations.ListReportsResponses(list_reports_401_application_json_any=out)

        return res

    