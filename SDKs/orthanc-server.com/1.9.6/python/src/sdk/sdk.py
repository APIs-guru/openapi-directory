import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://demo.orthanc-server.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_changes(self) -> operations.DeleteChangesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/changes"
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChangesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_exports(self) -> operations.DeleteExportsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/exports"
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteExportsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_instances_id_(self, request: operations.DeleteInstancesIDRequest) -> operations.DeleteInstancesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstancesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_instances_id_attachments_name_(self, request: operations.DeleteInstancesIDAttachmentsNameRequest) -> operations.DeleteInstancesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstancesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_instances_id_metadata_name_(self, request: operations.DeleteInstancesIDMetadataNameRequest) -> operations.DeleteInstancesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstancesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_modalities_id_(self, request: operations.DeleteModalitiesIDRequest) -> operations.DeleteModalitiesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteModalitiesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_patients_id_(self, request: operations.DeletePatientsIDRequest) -> operations.DeletePatientsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePatientsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_patients_id_attachments_name_(self, request: operations.DeletePatientsIDAttachmentsNameRequest) -> operations.DeletePatientsIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePatientsIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_patients_id_metadata_name_(self, request: operations.DeletePatientsIDMetadataNameRequest) -> operations.DeletePatientsIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePatientsIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_peers_id_(self, request: operations.DeletePeersIDRequest) -> operations.DeletePeersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePeersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_queries_id_(self, request: operations.DeleteQueriesIDRequest) -> operations.DeleteQueriesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQueriesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_series_id_(self, request: operations.DeleteSeriesIDRequest) -> operations.DeleteSeriesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSeriesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_series_id_attachments_name_(self, request: operations.DeleteSeriesIDAttachmentsNameRequest) -> operations.DeleteSeriesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSeriesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_series_id_metadata_name_(self, request: operations.DeleteSeriesIDMetadataNameRequest) -> operations.DeleteSeriesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSeriesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_studies_id_(self, request: operations.DeleteStudiesIDRequest) -> operations.DeleteStudiesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStudiesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_studies_id_attachments_name_(self, request: operations.DeleteStudiesIDAttachmentsNameRequest) -> operations.DeleteStudiesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStudiesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_studies_id_metadata_name_(self, request: operations.DeleteStudiesIDMetadataNameRequest) -> operations.DeleteStudiesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStudiesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_changes(self, request: operations.GetChangesRequest) -> operations.GetChangesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/changes"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_changes_200_application_json_any = out

        return res

    
    
    def get_exports(self, request: operations.GetExportsRequest) -> operations.GetExportsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/exports"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_exports_200_application_json_any = out

        return res

    
    
    def get_instances(self, request: operations.GetInstancesRequest) -> operations.GetInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/instances"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_200_application_json_any = out

        return res

    
    
    def get_instances_id_(self, request: operations.GetInstancesIDRequest) -> operations.GetInstancesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_200_application_json_any = out

        return res

    
    
    def get_instances_id_attachments(self, request: operations.GetInstancesIDAttachmentsRequest) -> operations.GetInstancesIDAttachmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_attachments_200_application_json_any = out

        return res

    
    
    def get_instances_id_attachments_name_(self, request: operations.GetInstancesIDAttachmentsNameRequest) -> operations.GetInstancesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_attachments_name_200_application_json_any = out

        return res

    
    
    def get_instances_id_attachments_name_compressed_data(self, request: operations.GetInstancesIDAttachmentsNameCompressedDataRequest) -> operations.GetInstancesIDAttachmentsNameCompressedDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compressed-data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_instances_id_attachments_name_compressed_md5(self, request: operations.GetInstancesIDAttachmentsNameCompressedMd5Request) -> operations.GetInstancesIDAttachmentsNameCompressedMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_attachments_name_compressed_size(self, request: operations.GetInstancesIDAttachmentsNameCompressedSizeRequest) -> operations.GetInstancesIDAttachmentsNameCompressedSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compressed-size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_attachments_name_data(self, request: operations.GetInstancesIDAttachmentsNameDataRequest) -> operations.GetInstancesIDAttachmentsNameDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_instances_id_attachments_name_is_compressed(self, request: operations.GetInstancesIDAttachmentsNameIsCompressedRequest) -> operations.GetInstancesIDAttachmentsNameIsCompressedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/is-compressed", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_attachments_name_md5(self, request: operations.GetInstancesIDAttachmentsNameMd5Request) -> operations.GetInstancesIDAttachmentsNameMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_attachments_name_size(self, request: operations.GetInstancesIDAttachmentsNameSizeRequest) -> operations.GetInstancesIDAttachmentsNameSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_content(self, request: operations.GetInstancesIDContentRequest) -> operations.GetInstancesIDContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_instances_id_file(self, request: operations.GetInstancesIDFileRequest) -> operations.GetInstancesIDFileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/file", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/dicom"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/dicom+xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/dicom+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_file_200_application_dicom_plus_json_any = out

        return res

    
    
    def get_instances_id_frames(self, request: operations.GetInstancesIDFramesRequest) -> operations.GetInstancesIDFramesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_frames_200_application_json_any = out

        return res

    
    
    def get_instances_id_frames_frame_(self, request: operations.GetInstancesIDFramesFrameRequest) -> operations.GetInstancesIDFramesFrameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_frames_frame_200_application_json_any = out

        return res

    
    
    def get_instances_id_frames_frame_image_int16(self, request: operations.GetInstancesIDFramesFrameImageInt16Request) -> operations.GetInstancesIDFramesFrameImageInt16Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/image-int16", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameImageInt16Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_image_uint16(self, request: operations.GetInstancesIDFramesFrameImageUint16Request) -> operations.GetInstancesIDFramesFrameImageUint16Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/image-uint16", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameImageUint16Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_image_uint8(self, request: operations.GetInstancesIDFramesFrameImageUint8Request) -> operations.GetInstancesIDFramesFrameImageUint8Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/image-uint8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameImageUint8Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_matlab(self, request: operations.GetInstancesIDFramesFrameMatlabRequest) -> operations.GetInstancesIDFramesFrameMatlabResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/matlab", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameMatlabResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_preview(self, request: operations.GetInstancesIDFramesFramePreviewRequest) -> operations.GetInstancesIDFramesFramePreviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/preview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFramePreviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_raw(self, request: operations.GetInstancesIDFramesFrameRawRequest) -> operations.GetInstancesIDFramesFrameRawResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/raw", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameRawResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_raw_gz(self, request: operations.GetInstancesIDFramesFrameRawGzRequest) -> operations.GetInstancesIDFramesFrameRawGzResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/raw.gz", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameRawGzResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/gzip"):
                res.body = r.content

        return res

    
    
    def get_instances_id_frames_frame_rendered(self, request: operations.GetInstancesIDFramesFrameRenderedRequest) -> operations.GetInstancesIDFramesFrameRenderedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/rendered", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameRenderedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_header(self, request: operations.GetInstancesIDHeaderRequest) -> operations.GetInstancesIDHeaderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/header", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDHeaderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_header_200_application_json_any = out

        return res

    
    
    def get_instances_id_image_int16(self, request: operations.GetInstancesIDImageInt16Request) -> operations.GetInstancesIDImageInt16Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/image-int16", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDImageInt16Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_image_uint16(self, request: operations.GetInstancesIDImageUint16Request) -> operations.GetInstancesIDImageUint16Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/image-uint16", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDImageUint16Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_image_uint8(self, request: operations.GetInstancesIDImageUint8Request) -> operations.GetInstancesIDImageUint8Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/image-uint8", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDImageUint8Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_matlab(self, request: operations.GetInstancesIDMatlabRequest) -> operations.GetInstancesIDMatlabResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/matlab", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDMatlabResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_metadata(self, request: operations.GetInstancesIDMetadataRequest) -> operations.GetInstancesIDMetadataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_metadata_200_application_json_any = out

        return res

    
    
    def get_instances_id_metadata_name_(self, request: operations.GetInstancesIDMetadataNameRequest) -> operations.GetInstancesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_instances_id_module(self, request: operations.GetInstancesIDModuleRequest) -> operations.GetInstancesIDModuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDModuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_module_200_application_json_any = out

        return res

    
    
    def get_instances_id_patient(self, request: operations.GetInstancesIDPatientRequest) -> operations.GetInstancesIDPatientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDPatientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_patient_200_application_json_any = out

        return res

    
    
    def get_instances_id_pdf(self, request: operations.GetInstancesIDPdfRequest) -> operations.GetInstancesIDPdfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/pdf", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDPdfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.body = r.content

        return res

    
    
    def get_instances_id_preview(self, request: operations.GetInstancesIDPreviewRequest) -> operations.GetInstancesIDPreviewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/preview", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDPreviewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_rendered(self, request: operations.GetInstancesIDRenderedRequest) -> operations.GetInstancesIDRenderedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/rendered", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDRenderedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/jpeg"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/png"):
                res.body = r.content
            if utils.match_content_type(content_type, "image/x-portable-arbitrarymap"):
                res.body = r.content

        return res

    
    
    def get_instances_id_series(self, request: operations.GetInstancesIDSeriesRequest) -> operations.GetInstancesIDSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_series_200_application_json_any = out

        return res

    
    
    def get_instances_id_simplified_tags(self, request: operations.GetInstancesIDSimplifiedTagsRequest) -> operations.GetInstancesIDSimplifiedTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/simplified-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDSimplifiedTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_simplified_tags_200_application_json_any = out

        return res

    
    
    def get_instances_id_statistics(self, request: operations.GetInstancesIDStatisticsRequest) -> operations.GetInstancesIDStatisticsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/statistics", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_statistics_200_application_json_any = out

        return res

    
    
    def get_instances_id_study(self, request: operations.GetInstancesIDStudyRequest) -> operations.GetInstancesIDStudyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/study", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDStudyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_study_200_application_json_any = out

        return res

    
    
    def get_instances_id_tags(self, request: operations.GetInstancesIDTagsRequest) -> operations.GetInstancesIDTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_tags_200_application_json_any = out

        return res

    
    
    def get_jobs(self, request: operations.GetJobsRequest) -> operations.GetJobsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/jobs"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_jobs_200_application_json_any = out

        return res

    
    
    def get_jobs_id_(self, request: operations.GetJobsIDRequest) -> operations.GetJobsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/jobs/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_jobs_id_200_application_json_any = out

        return res

    
    
    def get_jobs_id_key_(self, request: operations.GetJobsIDKeyRequest) -> operations.GetJobsIDKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/jobs/{id}/{key}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsIDKeyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_modalities(self, request: operations.GetModalitiesRequest) -> operations.GetModalitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/modalities"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModalitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_modalities_200_application_json_any = out

        return res

    
    
    def get_modalities_id_(self, request: operations.GetModalitiesIDRequest) -> operations.GetModalitiesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModalitiesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_modalities_id_200_application_json_any = out

        return res

    
    
    def get_modalities_id_configuration(self, request: operations.GetModalitiesIDConfigurationRequest) -> operations.GetModalitiesIDConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/configuration", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModalitiesIDConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_modalities_id_configuration_200_application_json_any = out

        return res

    
    
    def get_patients(self, request: operations.GetPatientsRequest) -> operations.GetPatientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/patients"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_200_application_json_any = out

        return res

    
    
    def get_patients_id_(self, request: operations.GetPatientsIDRequest) -> operations.GetPatientsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_200_application_json_any = out

        return res

    
    
    def get_patients_id_archive(self, request: operations.GetPatientsIDArchiveRequest) -> operations.GetPatientsIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/archive", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments(self, request: operations.GetPatientsIDAttachmentsRequest) -> operations.GetPatientsIDAttachmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_attachments_200_application_json_any = out

        return res

    
    
    def get_patients_id_attachments_name_(self, request: operations.GetPatientsIDAttachmentsNameRequest) -> operations.GetPatientsIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_attachments_name_200_application_json_any = out

        return res

    
    
    def get_patients_id_attachments_name_compressed_data(self, request: operations.GetPatientsIDAttachmentsNameCompressedDataRequest) -> operations.GetPatientsIDAttachmentsNameCompressedDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compressed-data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments_name_compressed_md5(self, request: operations.GetPatientsIDAttachmentsNameCompressedMd5Request) -> operations.GetPatientsIDAttachmentsNameCompressedMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments_name_compressed_size(self, request: operations.GetPatientsIDAttachmentsNameCompressedSizeRequest) -> operations.GetPatientsIDAttachmentsNameCompressedSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compressed-size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments_name_data(self, request: operations.GetPatientsIDAttachmentsNameDataRequest) -> operations.GetPatientsIDAttachmentsNameDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments_name_is_compressed(self, request: operations.GetPatientsIDAttachmentsNameIsCompressedRequest) -> operations.GetPatientsIDAttachmentsNameIsCompressedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/is-compressed", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments_name_md5(self, request: operations.GetPatientsIDAttachmentsNameMd5Request) -> operations.GetPatientsIDAttachmentsNameMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_attachments_name_size(self, request: operations.GetPatientsIDAttachmentsNameSizeRequest) -> operations.GetPatientsIDAttachmentsNameSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_instances(self, request: operations.GetPatientsIDInstancesRequest) -> operations.GetPatientsIDInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_instances_200_application_json_any = out

        return res

    
    
    def get_patients_id_instances_tags(self, request: operations.GetPatientsIDInstancesTagsRequest) -> operations.GetPatientsIDInstancesTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/instances-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDInstancesTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_instances_tags_200_application_json_any = out

        return res

    
    
    def get_patients_id_media(self, request: operations.GetPatientsIDMediaRequest) -> operations.GetPatientsIDMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def get_patients_id_metadata(self, request: operations.GetPatientsIDMetadataRequest) -> operations.GetPatientsIDMetadataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_metadata_200_application_json_any = out

        return res

    
    
    def get_patients_id_metadata_name_(self, request: operations.GetPatientsIDMetadataNameRequest) -> operations.GetPatientsIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_module(self, request: operations.GetPatientsIDModuleRequest) -> operations.GetPatientsIDModuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDModuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_module_200_application_json_any = out

        return res

    
    
    def get_patients_id_protected(self, request: operations.GetPatientsIDProtectedRequest) -> operations.GetPatientsIDProtectedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/protected", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDProtectedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_patients_id_series(self, request: operations.GetPatientsIDSeriesRequest) -> operations.GetPatientsIDSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_series_200_application_json_any = out

        return res

    
    
    def get_patients_id_shared_tags(self, request: operations.GetPatientsIDSharedTagsRequest) -> operations.GetPatientsIDSharedTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/shared-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDSharedTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_shared_tags_200_application_json_any = out

        return res

    
    
    def get_patients_id_statistics(self, request: operations.GetPatientsIDStatisticsRequest) -> operations.GetPatientsIDStatisticsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/statistics", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_statistics_200_application_json_any = out

        return res

    
    
    def get_patients_id_studies(self, request: operations.GetPatientsIDStudiesRequest) -> operations.GetPatientsIDStudiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/studies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDStudiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_studies_200_application_json_any = out

        return res

    
    
    def get_peers(self, request: operations.GetPeersRequest) -> operations.GetPeersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/peers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_200_application_json_any = out

        return res

    
    
    def get_peers_id_(self, request: operations.GetPeersIDRequest) -> operations.GetPeersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_id_200_application_json_any = out

        return res

    
    
    def get_peers_id_configuration(self, request: operations.GetPeersIDConfigurationRequest) -> operations.GetPeersIDConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}/configuration", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersIDConfigurationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_id_configuration_200_application_json_any = out

        return res

    
    
    def get_peers_id_system(self, request: operations.GetPeersIDSystemRequest) -> operations.GetPeersIDSystemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}/system", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersIDSystemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_id_system_200_application_json_any = out

        return res

    
    
    def get_plugins(self) -> operations.GetPluginsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/plugins"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_plugins_200_application_json_any = out

        return res

    
    
    def get_plugins_explorer_js(self) -> operations.GetPluginsExplorerJsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/plugins/explorer.js"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsExplorerJsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content

        return res

    
    
    def get_plugins_id_(self, request: operations.GetPluginsIDRequest) -> operations.GetPluginsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/plugins/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_plugins_id_200_application_json_any = out

        return res

    
    
    def get_queries(self) -> operations.GetQueriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/queries"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_200_application_json_any = out

        return res

    
    
    def get_queries_id_(self, request: operations.GetQueriesIDRequest) -> operations.GetQueriesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_200_application_json_any = out

        return res

    
    
    def get_queries_id_answers(self, request: operations.GetQueriesIDAnswersRequest) -> operations.GetQueriesIDAnswersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDAnswersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_answers_200_application_json_any = out

        return res

    
    
    def get_queries_id_answers_index_(self, request: operations.GetQueriesIDAnswersIndexRequest) -> operations.GetQueriesIDAnswersIndexResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDAnswersIndexResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_answers_index_200_application_json_any = out

        return res

    
    
    def get_queries_id_answers_index_content(self, request: operations.GetQueriesIDAnswersIndexContentRequest) -> operations.GetQueriesIDAnswersIndexContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDAnswersIndexContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_answers_index_content_200_application_json_any = out

        return res

    
    
    def get_queries_id_level(self, request: operations.GetQueriesIDLevelRequest) -> operations.GetQueriesIDLevelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/level", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDLevelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_queries_id_modality(self, request: operations.GetQueriesIDModalityRequest) -> operations.GetQueriesIDModalityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/modality", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDModalityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_queries_id_query(self, request: operations.GetQueriesIDQueryRequest) -> operations.GetQueriesIDQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/query", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDQueryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_query_200_application_json_any = out

        return res

    
    
    def get_series(self, request: operations.GetSeriesRequest) -> operations.GetSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_200_application_json_any = out

        return res

    
    
    def get_series_id_(self, request: operations.GetSeriesIDRequest) -> operations.GetSeriesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_200_application_json_any = out

        return res

    
    
    def get_series_id_archive(self, request: operations.GetSeriesIDArchiveRequest) -> operations.GetSeriesIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/archive", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments(self, request: operations.GetSeriesIDAttachmentsRequest) -> operations.GetSeriesIDAttachmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_attachments_200_application_json_any = out

        return res

    
    
    def get_series_id_attachments_name_(self, request: operations.GetSeriesIDAttachmentsNameRequest) -> operations.GetSeriesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_attachments_name_200_application_json_any = out

        return res

    
    
    def get_series_id_attachments_name_compressed_data(self, request: operations.GetSeriesIDAttachmentsNameCompressedDataRequest) -> operations.GetSeriesIDAttachmentsNameCompressedDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compressed-data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments_name_compressed_md5(self, request: operations.GetSeriesIDAttachmentsNameCompressedMd5Request) -> operations.GetSeriesIDAttachmentsNameCompressedMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments_name_compressed_size(self, request: operations.GetSeriesIDAttachmentsNameCompressedSizeRequest) -> operations.GetSeriesIDAttachmentsNameCompressedSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compressed-size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments_name_data(self, request: operations.GetSeriesIDAttachmentsNameDataRequest) -> operations.GetSeriesIDAttachmentsNameDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments_name_is_compressed(self, request: operations.GetSeriesIDAttachmentsNameIsCompressedRequest) -> operations.GetSeriesIDAttachmentsNameIsCompressedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/is-compressed", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments_name_md5(self, request: operations.GetSeriesIDAttachmentsNameMd5Request) -> operations.GetSeriesIDAttachmentsNameMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_series_id_attachments_name_size(self, request: operations.GetSeriesIDAttachmentsNameSizeRequest) -> operations.GetSeriesIDAttachmentsNameSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_series_id_instances(self, request: operations.GetSeriesIDInstancesRequest) -> operations.GetSeriesIDInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_instances_200_application_json_any = out

        return res

    
    
    def get_series_id_instances_tags(self, request: operations.GetSeriesIDInstancesTagsRequest) -> operations.GetSeriesIDInstancesTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/instances-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDInstancesTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_instances_tags_200_application_json_any = out

        return res

    
    
    def get_series_id_media(self, request: operations.GetSeriesIDMediaRequest) -> operations.GetSeriesIDMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def get_series_id_metadata(self, request: operations.GetSeriesIDMetadataRequest) -> operations.GetSeriesIDMetadataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_metadata_200_application_json_any = out

        return res

    
    
    def get_series_id_metadata_name_(self, request: operations.GetSeriesIDMetadataNameRequest) -> operations.GetSeriesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_series_id_module(self, request: operations.GetSeriesIDModuleRequest) -> operations.GetSeriesIDModuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDModuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_module_200_application_json_any = out

        return res

    
    
    def get_series_id_ordered_slices(self, request: operations.GetSeriesIDOrderedSlicesRequest) -> operations.GetSeriesIDOrderedSlicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/ordered-slices", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDOrderedSlicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_ordered_slices_200_application_json_any = out

        return res

    
    
    def get_series_id_patient(self, request: operations.GetSeriesIDPatientRequest) -> operations.GetSeriesIDPatientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDPatientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_patient_200_application_json_any = out

        return res

    
    
    def get_series_id_shared_tags(self, request: operations.GetSeriesIDSharedTagsRequest) -> operations.GetSeriesIDSharedTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/shared-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDSharedTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_shared_tags_200_application_json_any = out

        return res

    
    
    def get_series_id_statistics(self, request: operations.GetSeriesIDStatisticsRequest) -> operations.GetSeriesIDStatisticsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/statistics", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_statistics_200_application_json_any = out

        return res

    
    
    def get_series_id_study(self, request: operations.GetSeriesIDStudyRequest) -> operations.GetSeriesIDStudyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/study", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDStudyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_study_200_application_json_any = out

        return res

    
    
    def get_statistics(self) -> operations.GetStatisticsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/statistics"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_statistics_200_application_json_any = out

        return res

    
    
    def get_storage_commitment_id_(self, request: operations.GetStorageCommitmentIDRequest) -> operations.GetStorageCommitmentIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/storage-commitment/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStorageCommitmentIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_storage_commitment_id_200_application_json_any = out

        return res

    
    
    def get_studies(self, request: operations.GetStudiesRequest) -> operations.GetStudiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/studies"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_200_application_json_any = out

        return res

    
    
    def get_studies_id_(self, request: operations.GetStudiesIDRequest) -> operations.GetStudiesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_200_application_json_any = out

        return res

    
    
    def get_studies_id_archive(self, request: operations.GetStudiesIDArchiveRequest) -> operations.GetStudiesIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/archive", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments(self, request: operations.GetStudiesIDAttachmentsRequest) -> operations.GetStudiesIDAttachmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_attachments_200_application_json_any = out

        return res

    
    
    def get_studies_id_attachments_name_(self, request: operations.GetStudiesIDAttachmentsNameRequest) -> operations.GetStudiesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_attachments_name_200_application_json_any = out

        return res

    
    
    def get_studies_id_attachments_name_compressed_data(self, request: operations.GetStudiesIDAttachmentsNameCompressedDataRequest) -> operations.GetStudiesIDAttachmentsNameCompressedDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compressed-data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments_name_compressed_md5(self, request: operations.GetStudiesIDAttachmentsNameCompressedMd5Request) -> operations.GetStudiesIDAttachmentsNameCompressedMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments_name_compressed_size(self, request: operations.GetStudiesIDAttachmentsNameCompressedSizeRequest) -> operations.GetStudiesIDAttachmentsNameCompressedSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compressed-size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments_name_data(self, request: operations.GetStudiesIDAttachmentsNameDataRequest) -> operations.GetStudiesIDAttachmentsNameDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/data", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments_name_is_compressed(self, request: operations.GetStudiesIDAttachmentsNameIsCompressedRequest) -> operations.GetStudiesIDAttachmentsNameIsCompressedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/is-compressed", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments_name_md5(self, request: operations.GetStudiesIDAttachmentsNameMd5Request) -> operations.GetStudiesIDAttachmentsNameMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/md5", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_studies_id_attachments_name_size(self, request: operations.GetStudiesIDAttachmentsNameSizeRequest) -> operations.GetStudiesIDAttachmentsNameSizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/size", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_studies_id_instances(self, request: operations.GetStudiesIDInstancesRequest) -> operations.GetStudiesIDInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_instances_200_application_json_any = out

        return res

    
    
    def get_studies_id_instances_tags(self, request: operations.GetStudiesIDInstancesTagsRequest) -> operations.GetStudiesIDInstancesTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/instances-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDInstancesTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_instances_tags_200_application_json_any = out

        return res

    
    
    def get_studies_id_media(self, request: operations.GetStudiesIDMediaRequest) -> operations.GetStudiesIDMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def get_studies_id_metadata(self, request: operations.GetStudiesIDMetadataRequest) -> operations.GetStudiesIDMetadataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_metadata_200_application_json_any = out

        return res

    
    
    def get_studies_id_metadata_name_(self, request: operations.GetStudiesIDMetadataNameRequest) -> operations.GetStudiesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/metadata/{name}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_studies_id_module(self, request: operations.GetStudiesIDModuleRequest) -> operations.GetStudiesIDModuleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDModuleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_module_200_application_json_any = out

        return res

    
    
    def get_studies_id_module_patient(self, request: operations.GetStudiesIDModulePatientRequest) -> operations.GetStudiesIDModulePatientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/module-patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDModulePatientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_module_patient_200_application_json_any = out

        return res

    
    
    def get_studies_id_patient(self, request: operations.GetStudiesIDPatientRequest) -> operations.GetStudiesIDPatientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDPatientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_patient_200_application_json_any = out

        return res

    
    
    def get_studies_id_series(self, request: operations.GetStudiesIDSeriesRequest) -> operations.GetStudiesIDSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_series_200_application_json_any = out

        return res

    
    
    def get_studies_id_shared_tags(self, request: operations.GetStudiesIDSharedTagsRequest) -> operations.GetStudiesIDSharedTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/shared-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDSharedTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_shared_tags_200_application_json_any = out

        return res

    
    
    def get_studies_id_statistics(self, request: operations.GetStudiesIDStatisticsRequest) -> operations.GetStudiesIDStatisticsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/statistics", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_statistics_200_application_json_any = out

        return res

    
    
    def get_system(self) -> operations.GetSystemResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/system"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSystemResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_system_200_application_json_any = out

        return res

    
    
    def get_tools(self) -> operations.GetToolsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_tools_200_application_json_any = out

        return res

    
    
    def get_tools_accepted_transfer_syntaxes(self) -> operations.GetToolsAcceptedTransferSyntaxesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/accepted-transfer-syntaxes"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsAcceptedTransferSyntaxesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_tools_accepted_transfer_syntaxes_200_application_json_any = out

        return res

    
    
    def get_tools_default_encoding(self) -> operations.GetToolsDefaultEncodingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/default-encoding"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsDefaultEncodingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_dicom_conformance(self) -> operations.GetToolsDicomConformanceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/dicom-conformance"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsDicomConformanceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_generate_uid(self, request: operations.GetToolsGenerateUIDRequest) -> operations.GetToolsGenerateUIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/generate-uid"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsGenerateUIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level(self) -> operations.GetToolsLogLevelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_dicom(self) -> operations.GetToolsLogLevelDicomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-dicom"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelDicomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_generic(self) -> operations.GetToolsLogLevelGenericResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-generic"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelGenericResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_http(self) -> operations.GetToolsLogLevelHTTPResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-http"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelHTTPResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_jobs(self) -> operations.GetToolsLogLevelJobsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-jobs"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelJobsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_lua(self) -> operations.GetToolsLogLevelLuaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-lua"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelLuaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_plugins(self) -> operations.GetToolsLogLevelPluginsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-plugins"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelPluginsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_log_level_sqlite(self) -> operations.GetToolsLogLevelSqliteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-sqlite"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelSqliteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_metrics(self) -> operations.GetToolsMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/metrics"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsMetricsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_metrics_prometheus(self) -> operations.GetToolsMetricsPrometheusResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/metrics-prometheus"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsMetricsPrometheusResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_tools_now(self) -> operations.GetToolsNowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/now"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsNowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_now_local(self) -> operations.GetToolsNowLocalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/now-local"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsNowLocalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_tools_unknown_sop_class_accepted(self) -> operations.GetToolsUnknownSopClassAcceptedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/unknown-sop-class-accepted"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsUnknownSopClassAcceptedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def post_instances(self, request: operations.PostInstancesRequest) -> operations.PostInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/instances"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_instances_200_application_json_any = out

        return res

    
    
    def post_instances_id_anonymize(self, request: operations.PostInstancesIDAnonymizeRequest) -> operations.PostInstancesIDAnonymizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/anonymize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/dicom"):
                res.body = r.content

        return res

    
    
    def post_instances_id_attachments_name_compress(self, request: operations.PostInstancesIDAttachmentsNameCompressRequest) -> operations.PostInstancesIDAttachmentsNameCompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_instances_id_attachments_name_uncompress(self, request: operations.PostInstancesIDAttachmentsNameUncompressRequest) -> operations.PostInstancesIDAttachmentsNameUncompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/uncompress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_instances_id_attachments_name_verify_md5(self, request: operations.PostInstancesIDAttachmentsNameVerifyMd5Request) -> operations.PostInstancesIDAttachmentsNameVerifyMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/verify-md5", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_instances_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    
    def post_instances_id_export(self, request: operations.PostInstancesIDExportRequest) -> operations.PostInstancesIDExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/export", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_instances_id_modify(self, request: operations.PostInstancesIDModifyRequest) -> operations.PostInstancesIDModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/modify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/dicom"):
                res.body = r.content

        return res

    
    
    def post_instances_id_reconstruct(self, request: operations.PostInstancesIDReconstructRequest) -> operations.PostInstancesIDReconstructResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/reconstruct", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_jobs_id_cancel(self, request: operations.PostJobsIDCancelRequest) -> operations.PostJobsIDCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/jobs/{id}/cancel", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_cancel_200_application_json_any = out

        return res

    
    
    def post_jobs_id_pause(self, request: operations.PostJobsIDPauseRequest) -> operations.PostJobsIDPauseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/jobs/{id}/pause", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDPauseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_pause_200_application_json_any = out

        return res

    
    
    def post_jobs_id_resubmit(self, request: operations.PostJobsIDResubmitRequest) -> operations.PostJobsIDResubmitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/jobs/{id}/resubmit", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDResubmitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_resubmit_200_application_json_any = out

        return res

    
    
    def post_jobs_id_resume(self, request: operations.PostJobsIDResumeRequest) -> operations.PostJobsIDResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/jobs/{id}/resume", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDResumeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_resume_200_application_json_any = out

        return res

    
    
    def post_modalities_id_echo(self, request: operations.PostModalitiesIDEchoRequest) -> operations.PostModalitiesIDEchoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/echo", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDEchoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_modalities_id_find(self, request: operations.PostModalitiesIDFindRequest) -> operations.PostModalitiesIDFindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/find", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_200_application_json_any = out

        return res

    
    
    def post_modalities_id_find_instance(self, request: operations.PostModalitiesIDFindInstanceRequest) -> operations.PostModalitiesIDFindInstanceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/find-instance", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindInstanceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_instance_200_application_json_any = out

        return res

    
    
    def post_modalities_id_find_patient(self, request: operations.PostModalitiesIDFindPatientRequest) -> operations.PostModalitiesIDFindPatientResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/find-patient", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindPatientResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_patient_200_application_json_any = out

        return res

    
    
    def post_modalities_id_find_series(self, request: operations.PostModalitiesIDFindSeriesRequest) -> operations.PostModalitiesIDFindSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/find-series", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_series_200_application_json_any = out

        return res

    
    
    def post_modalities_id_find_study(self, request: operations.PostModalitiesIDFindStudyRequest) -> operations.PostModalitiesIDFindStudyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/find-study", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindStudyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_study_200_application_json_any = out

        return res

    
    
    def post_modalities_id_find_worklist(self, request: operations.PostModalitiesIDFindWorklistRequest) -> operations.PostModalitiesIDFindWorklistResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/find-worklist", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindWorklistResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_worklist_200_application_json_any = out

        return res

    
    
    def post_modalities_id_move(self, request: operations.PostModalitiesIDMoveRequest) -> operations.PostModalitiesIDMoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/move", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDMoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_modalities_id_query(self, request: operations.PostModalitiesIDQueryRequest) -> operations.PostModalitiesIDQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/query", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDQueryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_query_200_application_json_any = out

        return res

    
    
    def post_modalities_id_storage_commitment(self, request: operations.PostModalitiesIDStorageCommitmentRequest) -> operations.PostModalitiesIDStorageCommitmentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/storage-commitment", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDStorageCommitmentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_storage_commitment_200_application_json_any = out

        return res

    
    
    def post_modalities_id_store(self, request: operations.PostModalitiesIDStoreRequest) -> operations.PostModalitiesIDStoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/store", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDStoreResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_store_200_application_json_any = out

        return res

    
    
    def post_modalities_id_store_straight(self, request: operations.PostModalitiesIDStoreStraightRequest) -> operations.PostModalitiesIDStoreStraightResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}/store-straight", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDStoreStraightResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_store_straight_200_application_json_any = out

        return res

    
    
    def post_patients_id_anonymize(self, request: operations.PostPatientsIDAnonymizeRequest) -> operations.PostPatientsIDAnonymizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/anonymize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_anonymize_200_application_json_any = out

        return res

    
    
    def post_patients_id_archive(self, request: operations.PostPatientsIDArchiveRequest) -> operations.PostPatientsIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/archive", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_archive_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_patients_id_attachments_name_compress(self, request: operations.PostPatientsIDAttachmentsNameCompressRequest) -> operations.PostPatientsIDAttachmentsNameCompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_patients_id_attachments_name_uncompress(self, request: operations.PostPatientsIDAttachmentsNameUncompressRequest) -> operations.PostPatientsIDAttachmentsNameUncompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/uncompress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_patients_id_attachments_name_verify_md5(self, request: operations.PostPatientsIDAttachmentsNameVerifyMd5Request) -> operations.PostPatientsIDAttachmentsNameVerifyMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/verify-md5", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    
    def post_patients_id_media(self, request: operations.PostPatientsIDMediaRequest) -> operations.PostPatientsIDMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/media", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_media_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_patients_id_modify(self, request: operations.PostPatientsIDModifyRequest) -> operations.PostPatientsIDModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/modify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_modify_200_application_json_any = out

        return res

    
    
    def post_patients_id_reconstruct(self, request: operations.PostPatientsIDReconstructRequest) -> operations.PostPatientsIDReconstructResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/reconstruct", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_peers_id_store(self, request: operations.PostPeersIDStoreRequest) -> operations.PostPeersIDStoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}/store", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPeersIDStoreResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_peers_id_store_200_application_json_any = out

        return res

    
    
    def post_peers_id_store_straight(self, request: operations.PostPeersIDStoreStraightRequest) -> operations.PostPeersIDStoreStraightResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}/store-straight", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPeersIDStoreStraightResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_peers_id_store_straight_200_application_json_any = out

        return res

    
    
    def post_queries_id_answers_index_query_instances(self, request: operations.PostQueriesIDAnswersIndexQueryInstancesRequest) -> operations.PostQueriesIDAnswersIndexQueryInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/query-instances", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexQueryInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_query_instances_200_application_json_any = out

        return res

    
    
    def post_queries_id_answers_index_query_series(self, request: operations.PostQueriesIDAnswersIndexQuerySeriesRequest) -> operations.PostQueriesIDAnswersIndexQuerySeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/query-series", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexQuerySeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_query_series_200_application_json_any = out

        return res

    
    
    def post_queries_id_answers_index_query_studies(self, request: operations.PostQueriesIDAnswersIndexQueryStudiesRequest) -> operations.PostQueriesIDAnswersIndexQueryStudiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/query-studies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexQueryStudiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_query_studies_200_application_json_any = out

        return res

    
    
    def post_queries_id_answers_index_retrieve(self, request: operations.PostQueriesIDAnswersIndexRetrieveRequest) -> operations.PostQueriesIDAnswersIndexRetrieveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/retrieve", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexRetrieveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_retrieve_200_application_json_any = out

        return res

    
    
    def post_queries_id_retrieve(self, request: operations.PostQueriesIDRetrieveRequest) -> operations.PostQueriesIDRetrieveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/queries/{id}/retrieve", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDRetrieveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_retrieve_200_application_json_any = out

        return res

    
    
    def post_series_id_anonymize(self, request: operations.PostSeriesIDAnonymizeRequest) -> operations.PostSeriesIDAnonymizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/anonymize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_anonymize_200_application_json_any = out

        return res

    
    
    def post_series_id_archive(self, request: operations.PostSeriesIDArchiveRequest) -> operations.PostSeriesIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/archive", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_archive_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_series_id_attachments_name_compress(self, request: operations.PostSeriesIDAttachmentsNameCompressRequest) -> operations.PostSeriesIDAttachmentsNameCompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_series_id_attachments_name_uncompress(self, request: operations.PostSeriesIDAttachmentsNameUncompressRequest) -> operations.PostSeriesIDAttachmentsNameUncompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/uncompress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_series_id_attachments_name_verify_md5(self, request: operations.PostSeriesIDAttachmentsNameVerifyMd5Request) -> operations.PostSeriesIDAttachmentsNameVerifyMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/verify-md5", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    
    def post_series_id_media(self, request: operations.PostSeriesIDMediaRequest) -> operations.PostSeriesIDMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/media", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_media_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_series_id_modify(self, request: operations.PostSeriesIDModifyRequest) -> operations.PostSeriesIDModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/modify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_modify_200_application_json_any = out

        return res

    
    
    def post_series_id_reconstruct(self, request: operations.PostSeriesIDReconstructRequest) -> operations.PostSeriesIDReconstructResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/reconstruct", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_storage_commitment_id_remove(self, request: operations.PostStorageCommitmentIDRemoveRequest) -> operations.PostStorageCommitmentIDRemoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/storage-commitment/{id}/remove", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStorageCommitmentIDRemoveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_studies_id_anonymize(self, request: operations.PostStudiesIDAnonymizeRequest) -> operations.PostStudiesIDAnonymizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/anonymize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_anonymize_200_application_json_any = out

        return res

    
    
    def post_studies_id_archive(self, request: operations.PostStudiesIDArchiveRequest) -> operations.PostStudiesIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/archive", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_archive_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_studies_id_attachments_name_compress(self, request: operations.PostStudiesIDAttachmentsNameCompressRequest) -> operations.PostStudiesIDAttachmentsNameCompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_studies_id_attachments_name_uncompress(self, request: operations.PostStudiesIDAttachmentsNameUncompressRequest) -> operations.PostStudiesIDAttachmentsNameUncompressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/uncompress", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_studies_id_attachments_name_verify_md5(self, request: operations.PostStudiesIDAttachmentsNameVerifyMd5Request) -> operations.PostStudiesIDAttachmentsNameVerifyMd5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/verify-md5", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    
    def post_studies_id_media(self, request: operations.PostStudiesIDMediaRequest) -> operations.PostStudiesIDMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/media", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_media_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_studies_id_merge(self, request: operations.PostStudiesIDMergeRequest) -> operations.PostStudiesIDMergeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/merge", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDMergeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_merge_200_application_json_any = out

        return res

    
    
    def post_studies_id_modify(self, request: operations.PostStudiesIDModifyRequest) -> operations.PostStudiesIDModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/modify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_modify_200_application_json_any = out

        return res

    
    
    def post_studies_id_reconstruct(self, request: operations.PostStudiesIDReconstructRequest) -> operations.PostStudiesIDReconstructResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/reconstruct", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_studies_id_split(self, request: operations.PostStudiesIDSplitRequest) -> operations.PostStudiesIDSplitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/split", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDSplitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_split_200_application_json_any = out

        return res

    
    
    def post_tools_bulk_anonymize(self, request: operations.PostToolsBulkAnonymizeRequest) -> operations.PostToolsBulkAnonymizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/bulk-anonymize"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_bulk_anonymize_200_application_json_any = out

        return res

    
    
    def post_tools_bulk_content(self, request: operations.PostToolsBulkContentRequest) -> operations.PostToolsBulkContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/bulk-content"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_tools_bulk_delete(self, request: operations.PostToolsBulkDeleteRequest) -> operations.PostToolsBulkDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/bulk-delete"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_tools_bulk_modify(self, request: operations.PostToolsBulkModifyRequest) -> operations.PostToolsBulkModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/bulk-modify"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_bulk_modify_200_application_json_any = out

        return res

    
    
    def post_tools_create_archive(self, request: operations.PostToolsCreateArchiveRequest) -> operations.PostToolsCreateArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/create-archive"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsCreateArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_create_archive_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_tools_create_dicom(self, request: operations.PostToolsCreateDicomRequest) -> operations.PostToolsCreateDicomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/create-dicom"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsCreateDicomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_create_dicom_200_application_json_any = out

        return res

    
    
    def post_tools_create_media(self, request: operations.PostToolsCreateMediaRequest) -> operations.PostToolsCreateMediaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/create-media"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsCreateMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_create_media_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_tools_create_media_extended(self, request: operations.PostToolsCreateMediaExtendedRequest) -> operations.PostToolsCreateMediaExtendedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/create-media-extended"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsCreateMediaExtendedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_create_media_extended_200_application_json_any = out
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    
    def post_tools_dicom_echo(self, request: operations.PostToolsDicomEchoRequest) -> operations.PostToolsDicomEchoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/dicom-echo"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsDicomEchoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_tools_execute_script(self, request: operations.PostToolsExecuteScriptRequest) -> operations.PostToolsExecuteScriptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/execute-script"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsExecuteScriptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def post_tools_find(self, request: operations.PostToolsFindRequest) -> operations.PostToolsFindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/find"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsFindResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_find_200_application_json_any = out

        return res

    
    
    def post_tools_invalidate_tags(self) -> operations.PostToolsInvalidateTagsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/invalidate-tags"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsInvalidateTagsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_tools_lookup(self, request: operations.PostToolsLookupRequest) -> operations.PostToolsLookupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/lookup"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsLookupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_lookup_200_application_json_any = out

        return res

    
    
    def post_tools_reconstruct(self) -> operations.PostToolsReconstructResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/reconstruct"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsReconstructResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_tools_reset(self) -> operations.PostToolsResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/reset"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsResetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_tools_shutdown(self) -> operations.PostToolsShutdownResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/shutdown"
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsShutdownResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_instances_id_attachments_name_(self, request: operations.PutInstancesIDAttachmentsNameRequest) -> operations.PutInstancesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutInstancesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_instances_id_attachments_name_200_application_json_any = out

        return res

    
    
    def put_instances_id_metadata_name_(self, request: operations.PutInstancesIDMetadataNameRequest) -> operations.PutInstancesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/instances/{id}/metadata/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutInstancesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_modalities_id_(self, request: operations.PutModalitiesIDRequest) -> operations.PutModalitiesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/modalities/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutModalitiesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_patients_id_attachments_name_(self, request: operations.PutPatientsIDAttachmentsNameRequest) -> operations.PutPatientsIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPatientsIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_patients_id_attachments_name_200_application_json_any = out

        return res

    
    
    def put_patients_id_metadata_name_(self, request: operations.PutPatientsIDMetadataNameRequest) -> operations.PutPatientsIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/metadata/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPatientsIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_patients_id_protected(self, request: operations.PutPatientsIDProtectedRequest) -> operations.PutPatientsIDProtectedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/patients/{id}/protected", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPatientsIDProtectedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_peers_id_(self, request: operations.PutPeersIDRequest) -> operations.PutPeersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/peers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPeersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_series_id_attachments_name_(self, request: operations.PutSeriesIDAttachmentsNameRequest) -> operations.PutSeriesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSeriesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_series_id_attachments_name_200_application_json_any = out

        return res

    
    
    def put_series_id_metadata_name_(self, request: operations.PutSeriesIDMetadataNameRequest) -> operations.PutSeriesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/series/{id}/metadata/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSeriesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_studies_id_attachments_name_(self, request: operations.PutStudiesIDAttachmentsNameRequest) -> operations.PutStudiesIDAttachmentsNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutStudiesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_studies_id_attachments_name_200_application_json_any = out

        return res

    
    
    def put_studies_id_metadata_name_(self, request: operations.PutStudiesIDMetadataNameRequest) -> operations.PutStudiesIDMetadataNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/studies/{id}/metadata/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutStudiesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_accepted_transfer_syntaxes(self, request: operations.PutToolsAcceptedTransferSyntaxesRequest) -> operations.PutToolsAcceptedTransferSyntaxesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/accepted-transfer-syntaxes"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsAcceptedTransferSyntaxesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_tools_accepted_transfer_syntaxes_200_application_json_any = out

        return res

    
    
    def put_tools_default_encoding(self, request: operations.PutToolsDefaultEncodingRequest) -> operations.PutToolsDefaultEncodingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/default-encoding"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsDefaultEncodingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level(self, request: operations.PutToolsLogLevelRequest) -> operations.PutToolsLogLevelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_dicom(self, request: operations.PutToolsLogLevelDicomRequest) -> operations.PutToolsLogLevelDicomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-dicom"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelDicomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_generic(self, request: operations.PutToolsLogLevelGenericRequest) -> operations.PutToolsLogLevelGenericResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-generic"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelGenericResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_http(self, request: operations.PutToolsLogLevelHTTPRequest) -> operations.PutToolsLogLevelHTTPResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-http"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelHTTPResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_jobs(self, request: operations.PutToolsLogLevelJobsRequest) -> operations.PutToolsLogLevelJobsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-jobs"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelJobsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_lua(self, request: operations.PutToolsLogLevelLuaRequest) -> operations.PutToolsLogLevelLuaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-lua"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelLuaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_plugins(self, request: operations.PutToolsLogLevelPluginsRequest) -> operations.PutToolsLogLevelPluginsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-plugins"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelPluginsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_log_level_sqlite(self, request: operations.PutToolsLogLevelSqliteRequest) -> operations.PutToolsLogLevelSqliteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/log-level-sqlite"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelSqliteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_metrics(self, request: operations.PutToolsMetricsRequest) -> operations.PutToolsMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/metrics"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsMetricsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def put_tools_unknown_sop_class_accepted(self, request: operations.PutToolsUnknownSopClassAcceptedRequest) -> operations.PutToolsUnknownSopClassAcceptedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tools/unknown-sop-class-accepted"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsUnknownSopClassAcceptedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    