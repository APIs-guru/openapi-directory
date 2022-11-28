

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://demo.orthanc-server.com/",
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
        
    
    
    
    def delete_changes(self) -> operations.DeleteChangesResponse:
        r"""Clear changes
        Clear the full history stored in the changes log
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changes"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_exports(self) -> operations.DeleteExportsResponse:
        r"""Clear exports
        Clear the full history stored in the exports log
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/exports"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteExportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_instances_id_(self, request: operations.DeleteInstancesIDRequest) -> operations.DeleteInstancesIDResponse:
        r"""Delete some instance
        Delete the DICOM instance whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstancesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_instances_id_attachments_name_(self, request: operations.DeleteInstancesIDAttachmentsNameRequest) -> operations.DeleteInstancesIDAttachmentsNameResponse:
        r"""Delete attachment
        Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstancesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_instances_id_metadata_name_(self, request: operations.DeleteInstancesIDMetadataNameRequest) -> operations.DeleteInstancesIDMetadataNameResponse:
        r"""Delete metadata
        Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInstancesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_modalities_id_(self, request: operations.DeleteModalitiesIDRequest) -> operations.DeleteModalitiesIDResponse:
        r"""Delete DICOM modality
        Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteModalitiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_patients_id_(self, request: operations.DeletePatientsIDRequest) -> operations.DeletePatientsIDResponse:
        r"""Delete some patient
        Delete the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePatientsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_patients_id_attachments_name_(self, request: operations.DeletePatientsIDAttachmentsNameRequest) -> operations.DeletePatientsIDAttachmentsNameResponse:
        r"""Delete attachment
        Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePatientsIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_patients_id_metadata_name_(self, request: operations.DeletePatientsIDMetadataNameRequest) -> operations.DeletePatientsIDMetadataNameResponse:
        r"""Delete metadata
        Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePatientsIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_peers_id_(self, request: operations.DeletePeersIDRequest) -> operations.DeletePeersIDResponse:
        r"""Delete Orthanc peer
        Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePeersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_queries_id_(self, request: operations.DeleteQueriesIDRequest) -> operations.DeleteQueriesIDResponse:
        r"""Delete a query
        Delete the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQueriesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_series_id_(self, request: operations.DeleteSeriesIDRequest) -> operations.DeleteSeriesIDResponse:
        r"""Delete some series
        Delete the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSeriesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_series_id_attachments_name_(self, request: operations.DeleteSeriesIDAttachmentsNameRequest) -> operations.DeleteSeriesIDAttachmentsNameResponse:
        r"""Delete attachment
        Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSeriesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_series_id_metadata_name_(self, request: operations.DeleteSeriesIDMetadataNameRequest) -> operations.DeleteSeriesIDMetadataNameResponse:
        r"""Delete metadata
        Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSeriesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_studies_id_(self, request: operations.DeleteStudiesIDRequest) -> operations.DeleteStudiesIDResponse:
        r"""Delete some study
        Delete the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStudiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_studies_id_attachments_name_(self, request: operations.DeleteStudiesIDAttachmentsNameRequest) -> operations.DeleteStudiesIDAttachmentsNameResponse:
        r"""Delete attachment
        Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStudiesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_studies_id_metadata_name_(self, request: operations.DeleteStudiesIDMetadataNameRequest) -> operations.DeleteStudiesIDMetadataNameResponse:
        r"""Delete metadata
        Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStudiesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_changes(self, request: operations.GetChangesRequest) -> operations.GetChangesResponse:
        r"""List changes
        Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_changes_200_application_json_any = out

        return res

    
    def get_exports(self, request: operations.GetExportsRequest) -> operations.GetExportsResponse:
        r"""List exports
        For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/exports"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_exports_200_application_json_any = out

        return res

    
    def get_instances(self, request: operations.GetInstancesRequest) -> operations.GetInstancesResponse:
        r"""List the available instances
        List the Orthanc identifiers of all the available DICOM instances
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/instances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_200_application_json_any = out

        return res

    
    def get_instances_id_(self, request: operations.GetInstancesIDRequest) -> operations.GetInstancesIDResponse:
        r"""Get information about some instance
        Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_200_application_json_any = out

        return res

    
    def get_instances_id_attachments(self, request: operations.GetInstancesIDAttachmentsRequest) -> operations.GetInstancesIDAttachmentsResponse:
        r"""List attachments
        Get the list of attachments that are associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_attachments_200_application_json_any = out

        return res

    
    def get_instances_id_attachments_name_(self, request: operations.GetInstancesIDAttachmentsNameRequest) -> operations.GetInstancesIDAttachmentsNameResponse:
        r"""List operations on attachments
        Get the list of the operations that are available for attachments associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_attachments_name_200_application_json_any = out

        return res

    
    def get_instances_id_attachments_name_compressed_data(self, request: operations.GetInstancesIDAttachmentsNameCompressedDataRequest) -> operations.GetInstancesIDAttachmentsNameCompressedDataResponse:
        r"""Get attachment (no decompression)
        Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compressed-data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_instances_id_attachments_name_compressed_md5(self, request: operations.GetInstancesIDAttachmentsNameCompressedMd5Request) -> operations.GetInstancesIDAttachmentsNameCompressedMd5Response:
        r"""Get MD5 of attachment on disk
        Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_attachments_name_compressed_size(self, request: operations.GetInstancesIDAttachmentsNameCompressedSizeRequest) -> operations.GetInstancesIDAttachmentsNameCompressedSizeResponse:
        r"""Get size of attachment on disk
        Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compressed-size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_attachments_name_data(self, request: operations.GetInstancesIDAttachmentsNameDataRequest) -> operations.GetInstancesIDAttachmentsNameDataResponse:
        r"""Get attachment
        Get the (binary) content of one attachment associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_instances_id_attachments_name_is_compressed(self, request: operations.GetInstancesIDAttachmentsNameIsCompressedRequest) -> operations.GetInstancesIDAttachmentsNameIsCompressedResponse:
        r"""Is attachment compressed?
        Test whether the attachment has been stored as a compressed file on the disk.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/is-compressed", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_attachments_name_md5(self, request: operations.GetInstancesIDAttachmentsNameMd5Request) -> operations.GetInstancesIDAttachmentsNameMd5Response:
        r"""Get MD5 of attachment
        Get the MD5 hash of one attachment associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_attachments_name_size(self, request: operations.GetInstancesIDAttachmentsNameSizeRequest) -> operations.GetInstancesIDAttachmentsNameSizeResponse:
        r"""Get size of attachment
        Get the size of one attachment associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_content(self, request: operations.GetInstancesIDContentRequest) -> operations.GetInstancesIDContentResponse:
        r"""Get raw tag
        Get the raw content of one DICOM tag in the hierarchy of DICOM dataset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_instances_id_file(self, request: operations.GetInstancesIDFileRequest) -> operations.GetInstancesIDFileResponse:
        r"""Download DICOM
        Download one DICOM instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/file", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
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
        r"""List available frames
        List the frames that are available in the DICOM instance of interest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_frames_200_application_json_any = out

        return res

    
    def get_instances_id_frames_frame_(self, request: operations.GetInstancesIDFramesFrameRequest) -> operations.GetInstancesIDFramesFrameResponse:
        r"""List operations
        List the available operations under URI `/instances/{id}/frames/{frame}/`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_frames_frame_200_application_json_any = out

        return res

    
    def get_instances_id_frames_frame_image_int16(self, request: operations.GetInstancesIDFramesFrameImageInt16Request) -> operations.GetInstancesIDFramesFrameImageInt16Response:
        r"""Decode a frame (int16)
        Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/image-int16", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Decode a frame (uint16)
        Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/image-uint16", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Decode a frame (uint8)
        Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/image-uint8", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Decode frame for Matlab
        Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/matlab", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameMatlabResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_frames_frame_preview(self, request: operations.GetInstancesIDFramesFramePreviewRequest) -> operations.GetInstancesIDFramesFramePreviewResponse:
        r"""Decode a frame (preview)
        Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/preview", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Access raw frame
        Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/raw", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameRawResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_instances_id_frames_frame_raw_gz(self, request: operations.GetInstancesIDFramesFrameRawGzRequest) -> operations.GetInstancesIDFramesFrameRawGzResponse:
        r"""Access raw frame (compressed)
        Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/raw.gz", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDFramesFrameRawGzResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/gzip"):
                res.body = r.content

        return res

    
    def get_instances_id_frames_frame_rendered(self, request: operations.GetInstancesIDFramesFrameRenderedRequest) -> operations.GetInstancesIDFramesFrameRenderedResponse:
        r"""Render a frame
        Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/frames/{frame}/rendered", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Get DICOM meta-header
        Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/header", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDHeaderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_header_200_application_json_any = out

        return res

    
    def get_instances_id_image_int16(self, request: operations.GetInstancesIDImageInt16Request) -> operations.GetInstancesIDImageInt16Response:
        r"""Decode an image (int16)
        Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/image-int16", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Decode an image (uint16)
        Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/image-uint16", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Decode an image (uint8)
        Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/image-uint8", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Decode frame for Matlab
        Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/matlab", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDMatlabResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_metadata(self, request: operations.GetInstancesIDMetadataRequest) -> operations.GetInstancesIDMetadataResponse:
        r"""List metadata
        Get the list of metadata that are associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_metadata_200_application_json_any = out

        return res

    
    def get_instances_id_metadata_name_(self, request: operations.GetInstancesIDMetadataNameRequest) -> operations.GetInstancesIDMetadataNameResponse:
        r"""Get metadata
        Get the value of a metadata that is associated with the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_instances_id_module(self, request: operations.GetInstancesIDModuleRequest) -> operations.GetInstancesIDModuleResponse:
        r"""Get instance module
        Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_module_200_application_json_any = out

        return res

    
    def get_instances_id_patient(self, request: operations.GetInstancesIDPatientRequest) -> operations.GetInstancesIDPatientResponse:
        r"""Get parent patient
        Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDPatientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_patient_200_application_json_any = out

        return res

    
    def get_instances_id_pdf(self, request: operations.GetInstancesIDPdfRequest) -> operations.GetInstancesIDPdfResponse:
        r"""Get embedded PDF
        Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/pdf", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDPdfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/pdf"):
                res.body = r.content

        return res

    
    def get_instances_id_preview(self, request: operations.GetInstancesIDPreviewRequest) -> operations.GetInstancesIDPreviewResponse:
        r"""Decode an image (preview)
        Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/preview", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Render an image
        Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/rendered", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
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
        r"""Get parent series
        Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_series_200_application_json_any = out

        return res

    
    def get_instances_id_simplified_tags(self, request: operations.GetInstancesIDSimplifiedTagsRequest) -> operations.GetInstancesIDSimplifiedTagsResponse:
        r"""Get human-readable tags
        Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/simplified-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDSimplifiedTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_simplified_tags_200_application_json_any = out

        return res

    
    def get_instances_id_statistics(self, request: operations.GetInstancesIDStatisticsRequest) -> operations.GetInstancesIDStatisticsResponse:
        r"""Get instance statistics
        Get statistics about the given instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/statistics", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_statistics_200_application_json_any = out

        return res

    
    def get_instances_id_study(self, request: operations.GetInstancesIDStudyRequest) -> operations.GetInstancesIDStudyResponse:
        r"""Get parent study
        Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/study", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDStudyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_study_200_application_json_any = out

        return res

    
    def get_instances_id_tags(self, request: operations.GetInstancesIDTagsRequest) -> operations.GetInstancesIDTagsResponse:
        r"""Get DICOM tags
        Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstancesIDTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_instances_id_tags_200_application_json_any = out

        return res

    
    def get_jobs(self, request: operations.GetJobsRequest) -> operations.GetJobsResponse:
        r"""List jobs
        List all the available jobs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_jobs_200_application_json_any = out

        return res

    
    def get_jobs_id_(self, request: operations.GetJobsIDRequest) -> operations.GetJobsIDResponse:
        r"""Get job
        Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_jobs_id_200_application_json_any = out

        return res

    
    def get_jobs_id_key_(self, request: operations.GetJobsIDKeyRequest) -> operations.GetJobsIDKeyResponse:
        r"""Get job output
        Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/{key}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobsIDKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_modalities(self, request: operations.GetModalitiesRequest) -> operations.GetModalitiesResponse:
        r"""List DICOM modalities
        List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/modalities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModalitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_modalities_200_application_json_any = out

        return res

    
    def get_modalities_id_(self, request: operations.GetModalitiesIDRequest) -> operations.GetModalitiesIDResponse:
        r"""List operations on modality
        List the operations that are available for a DICOM modality.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModalitiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_modalities_id_200_application_json_any = out

        return res

    
    def get_modalities_id_configuration(self, request: operations.GetModalitiesIDConfigurationRequest) -> operations.GetModalitiesIDConfigurationResponse:
        r"""Get modality configuration
        Get detailed information about the configuration of some DICOM modality
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/configuration", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModalitiesIDConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_modalities_id_configuration_200_application_json_any = out

        return res

    
    def get_patients(self, request: operations.GetPatientsRequest) -> operations.GetPatientsResponse:
        r"""List the available patients
        List the Orthanc identifiers of all the available DICOM patients
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/patients"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_200_application_json_any = out

        return res

    
    def get_patients_id_(self, request: operations.GetPatientsIDRequest) -> operations.GetPatientsIDResponse:
        r"""Get information about some patient
        Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_200_application_json_any = out

        return res

    
    def get_patients_id_archive(self, request: operations.GetPatientsIDArchiveRequest) -> operations.GetPatientsIDArchiveResponse:
        r"""Create ZIP archive
        Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/archive", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments(self, request: operations.GetPatientsIDAttachmentsRequest) -> operations.GetPatientsIDAttachmentsResponse:
        r"""List attachments
        Get the list of attachments that are associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_attachments_200_application_json_any = out

        return res

    
    def get_patients_id_attachments_name_(self, request: operations.GetPatientsIDAttachmentsNameRequest) -> operations.GetPatientsIDAttachmentsNameResponse:
        r"""List operations on attachments
        Get the list of the operations that are available for attachments associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_attachments_name_200_application_json_any = out

        return res

    
    def get_patients_id_attachments_name_compressed_data(self, request: operations.GetPatientsIDAttachmentsNameCompressedDataRequest) -> operations.GetPatientsIDAttachmentsNameCompressedDataResponse:
        r"""Get attachment (no decompression)
        Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compressed-data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments_name_compressed_md5(self, request: operations.GetPatientsIDAttachmentsNameCompressedMd5Request) -> operations.GetPatientsIDAttachmentsNameCompressedMd5Response:
        r"""Get MD5 of attachment on disk
        Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments_name_compressed_size(self, request: operations.GetPatientsIDAttachmentsNameCompressedSizeRequest) -> operations.GetPatientsIDAttachmentsNameCompressedSizeResponse:
        r"""Get size of attachment on disk
        Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compressed-size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments_name_data(self, request: operations.GetPatientsIDAttachmentsNameDataRequest) -> operations.GetPatientsIDAttachmentsNameDataResponse:
        r"""Get attachment
        Get the (binary) content of one attachment associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments_name_is_compressed(self, request: operations.GetPatientsIDAttachmentsNameIsCompressedRequest) -> operations.GetPatientsIDAttachmentsNameIsCompressedResponse:
        r"""Is attachment compressed?
        Test whether the attachment has been stored as a compressed file on the disk.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/is-compressed", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments_name_md5(self, request: operations.GetPatientsIDAttachmentsNameMd5Request) -> operations.GetPatientsIDAttachmentsNameMd5Response:
        r"""Get MD5 of attachment
        Get the MD5 hash of one attachment associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_attachments_name_size(self, request: operations.GetPatientsIDAttachmentsNameSizeRequest) -> operations.GetPatientsIDAttachmentsNameSizeResponse:
        r"""Get size of attachment
        Get the size of one attachment associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_instances(self, request: operations.GetPatientsIDInstancesRequest) -> operations.GetPatientsIDInstancesResponse:
        r"""Get child instances
        Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_instances_200_application_json_any = out

        return res

    
    def get_patients_id_instances_tags(self, request: operations.GetPatientsIDInstancesTagsRequest) -> operations.GetPatientsIDInstancesTagsResponse:
        r"""Get tags of instances
        Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/instances-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDInstancesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_instances_tags_200_application_json_any = out

        return res

    
    def get_patients_id_media(self, request: operations.GetPatientsIDMediaRequest) -> operations.GetPatientsIDMediaResponse:
        r"""Create DICOMDIR media
        Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    def get_patients_id_metadata(self, request: operations.GetPatientsIDMetadataRequest) -> operations.GetPatientsIDMetadataResponse:
        r"""List metadata
        Get the list of metadata that are associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_metadata_200_application_json_any = out

        return res

    
    def get_patients_id_metadata_name_(self, request: operations.GetPatientsIDMetadataNameRequest) -> operations.GetPatientsIDMetadataNameResponse:
        r"""Get metadata
        Get the value of a metadata that is associated with the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_module(self, request: operations.GetPatientsIDModuleRequest) -> operations.GetPatientsIDModuleResponse:
        r"""Get patient module
        Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_module_200_application_json_any = out

        return res

    
    def get_patients_id_protected(self, request: operations.GetPatientsIDProtectedRequest) -> operations.GetPatientsIDProtectedResponse:
        r"""Is the patient protected against recycling?
        Is the patient protected against recycling?
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/protected", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDProtectedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_patients_id_series(self, request: operations.GetPatientsIDSeriesRequest) -> operations.GetPatientsIDSeriesResponse:
        r"""Get child series
        Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_series_200_application_json_any = out

        return res

    
    def get_patients_id_shared_tags(self, request: operations.GetPatientsIDSharedTagsRequest) -> operations.GetPatientsIDSharedTagsResponse:
        r"""Get shared tags
        Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/shared-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDSharedTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_shared_tags_200_application_json_any = out

        return res

    
    def get_patients_id_statistics(self, request: operations.GetPatientsIDStatisticsRequest) -> operations.GetPatientsIDStatisticsResponse:
        r"""Get patient statistics
        Get statistics about the given patient
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/statistics", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_statistics_200_application_json_any = out

        return res

    
    def get_patients_id_studies(self, request: operations.GetPatientsIDStudiesRequest) -> operations.GetPatientsIDStudiesResponse:
        r"""Get child studies
        Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/studies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPatientsIDStudiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_patients_id_studies_200_application_json_any = out

        return res

    
    def get_peers(self, request: operations.GetPeersRequest) -> operations.GetPeersResponse:
        r"""List Orthanc peers
        List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/peers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_200_application_json_any = out

        return res

    
    def get_peers_id_(self, request: operations.GetPeersIDRequest) -> operations.GetPeersIDResponse:
        r"""List operations on peer
        List the operations that are available for an Orthanc peer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_id_200_application_json_any = out

        return res

    
    def get_peers_id_configuration(self, request: operations.GetPeersIDConfigurationRequest) -> operations.GetPeersIDConfigurationResponse:
        r"""Get peer configuration
        Get detailed information about the configuration of some Orthanc peer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}/configuration", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersIDConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_id_configuration_200_application_json_any = out

        return res

    
    def get_peers_id_system(self, request: operations.GetPeersIDSystemRequest) -> operations.GetPeersIDSystemResponse:
        r"""Get peer system information
        Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}/system", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPeersIDSystemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_peers_id_system_200_application_json_any = out

        return res

    
    def get_plugins(self) -> operations.GetPluginsResponse:
        r"""List plugins
        List all the installed plugins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_plugins_200_application_json_any = out

        return res

    
    def get_plugins_explorer_js(self) -> operations.GetPluginsExplorerJsResponse:
        r"""JavaScript extensions to Orthanc Explorer
        Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/plugins/explorer.js"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsExplorerJsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content

        return res

    
    def get_plugins_id_(self, request: operations.GetPluginsIDRequest) -> operations.GetPluginsIDResponse:
        r"""Get plugin
        Get system information about the plugin whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/plugins/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPluginsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_plugins_id_200_application_json_any = out

        return res

    
    def get_queries(self) -> operations.GetQueriesResponse:
        r"""List query/retrieve operations
        List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/queries"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_200_application_json_any = out

        return res

    
    def get_queries_id_(self, request: operations.GetQueriesIDRequest) -> operations.GetQueriesIDResponse:
        r"""List operations on a query
        List the available operations for the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_200_application_json_any = out

        return res

    
    def get_queries_id_answers(self, request: operations.GetQueriesIDAnswersRequest) -> operations.GetQueriesIDAnswersResponse:
        r"""List answers to a query
        List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_answers_200_application_json_any = out

        return res

    
    def get_queries_id_answers_index_(self, request: operations.GetQueriesIDAnswersIndexRequest) -> operations.GetQueriesIDAnswersIndexResponse:
        r"""List operations on an answer
        List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDAnswersIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_answers_index_200_application_json_any = out

        return res

    
    def get_queries_id_answers_index_content(self, request: operations.GetQueriesIDAnswersIndexContentRequest) -> operations.GetQueriesIDAnswersIndexContentResponse:
        r"""Get one answer
        Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/content", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDAnswersIndexContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_answers_index_content_200_application_json_any = out

        return res

    
    def get_queries_id_level(self, request: operations.GetQueriesIDLevelRequest) -> operations.GetQueriesIDLevelResponse:
        r"""Get level of original query
        Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/level", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_queries_id_modality(self, request: operations.GetQueriesIDModalityRequest) -> operations.GetQueriesIDModalityResponse:
        r"""Get modality of original query
        Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/modality", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDModalityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_queries_id_query(self, request: operations.GetQueriesIDQueryRequest) -> operations.GetQueriesIDQueryResponse:
        r"""Get original query arguments
        Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/query", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueriesIDQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_queries_id_query_200_application_json_any = out

        return res

    
    def get_series(self, request: operations.GetSeriesRequest) -> operations.GetSeriesResponse:
        r"""List the available series
        List the Orthanc identifiers of all the available DICOM series
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/series"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_200_application_json_any = out

        return res

    
    def get_series_id_(self, request: operations.GetSeriesIDRequest) -> operations.GetSeriesIDResponse:
        r"""Get information about some series
        Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_200_application_json_any = out

        return res

    
    def get_series_id_archive(self, request: operations.GetSeriesIDArchiveRequest) -> operations.GetSeriesIDArchiveResponse:
        r"""Create ZIP archive
        Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/archive", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    def get_series_id_attachments(self, request: operations.GetSeriesIDAttachmentsRequest) -> operations.GetSeriesIDAttachmentsResponse:
        r"""List attachments
        Get the list of attachments that are associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_attachments_200_application_json_any = out

        return res

    
    def get_series_id_attachments_name_(self, request: operations.GetSeriesIDAttachmentsNameRequest) -> operations.GetSeriesIDAttachmentsNameResponse:
        r"""List operations on attachments
        Get the list of the operations that are available for attachments associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_attachments_name_200_application_json_any = out

        return res

    
    def get_series_id_attachments_name_compressed_data(self, request: operations.GetSeriesIDAttachmentsNameCompressedDataRequest) -> operations.GetSeriesIDAttachmentsNameCompressedDataResponse:
        r"""Get attachment (no decompression)
        Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compressed-data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_series_id_attachments_name_compressed_md5(self, request: operations.GetSeriesIDAttachmentsNameCompressedMd5Request) -> operations.GetSeriesIDAttachmentsNameCompressedMd5Response:
        r"""Get MD5 of attachment on disk
        Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_series_id_attachments_name_compressed_size(self, request: operations.GetSeriesIDAttachmentsNameCompressedSizeRequest) -> operations.GetSeriesIDAttachmentsNameCompressedSizeResponse:
        r"""Get size of attachment on disk
        Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compressed-size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_series_id_attachments_name_data(self, request: operations.GetSeriesIDAttachmentsNameDataRequest) -> operations.GetSeriesIDAttachmentsNameDataResponse:
        r"""Get attachment
        Get the (binary) content of one attachment associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_series_id_attachments_name_is_compressed(self, request: operations.GetSeriesIDAttachmentsNameIsCompressedRequest) -> operations.GetSeriesIDAttachmentsNameIsCompressedResponse:
        r"""Is attachment compressed?
        Test whether the attachment has been stored as a compressed file on the disk.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/is-compressed", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_series_id_attachments_name_md5(self, request: operations.GetSeriesIDAttachmentsNameMd5Request) -> operations.GetSeriesIDAttachmentsNameMd5Response:
        r"""Get MD5 of attachment
        Get the MD5 hash of one attachment associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_series_id_attachments_name_size(self, request: operations.GetSeriesIDAttachmentsNameSizeRequest) -> operations.GetSeriesIDAttachmentsNameSizeResponse:
        r"""Get size of attachment
        Get the size of one attachment associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_series_id_instances(self, request: operations.GetSeriesIDInstancesRequest) -> operations.GetSeriesIDInstancesResponse:
        r"""Get child instances
        Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_instances_200_application_json_any = out

        return res

    
    def get_series_id_instances_tags(self, request: operations.GetSeriesIDInstancesTagsRequest) -> operations.GetSeriesIDInstancesTagsResponse:
        r"""Get tags of instances
        Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/instances-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDInstancesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_instances_tags_200_application_json_any = out

        return res

    
    def get_series_id_media(self, request: operations.GetSeriesIDMediaRequest) -> operations.GetSeriesIDMediaResponse:
        r"""Create DICOMDIR media
        Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    def get_series_id_metadata(self, request: operations.GetSeriesIDMetadataRequest) -> operations.GetSeriesIDMetadataResponse:
        r"""List metadata
        Get the list of metadata that are associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_metadata_200_application_json_any = out

        return res

    
    def get_series_id_metadata_name_(self, request: operations.GetSeriesIDMetadataNameRequest) -> operations.GetSeriesIDMetadataNameResponse:
        r"""Get metadata
        Get the value of a metadata that is associated with the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_series_id_module(self, request: operations.GetSeriesIDModuleRequest) -> operations.GetSeriesIDModuleResponse:
        r"""Get series module
        Get the series module of the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_module_200_application_json_any = out

        return res

    
    def get_series_id_ordered_slices(self, request: operations.GetSeriesIDOrderedSlicesRequest) -> operations.GetSeriesIDOrderedSlicesResponse:
        r"""Order the slices
        Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/ordered-slices", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDOrderedSlicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_ordered_slices_200_application_json_any = out

        return res

    
    def get_series_id_patient(self, request: operations.GetSeriesIDPatientRequest) -> operations.GetSeriesIDPatientResponse:
        r"""Get parent patient
        Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDPatientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_patient_200_application_json_any = out

        return res

    
    def get_series_id_shared_tags(self, request: operations.GetSeriesIDSharedTagsRequest) -> operations.GetSeriesIDSharedTagsResponse:
        r"""Get shared tags
        Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/shared-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDSharedTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_shared_tags_200_application_json_any = out

        return res

    
    def get_series_id_statistics(self, request: operations.GetSeriesIDStatisticsRequest) -> operations.GetSeriesIDStatisticsResponse:
        r"""Get series statistics
        Get statistics about the given series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/statistics", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_statistics_200_application_json_any = out

        return res

    
    def get_series_id_study(self, request: operations.GetSeriesIDStudyRequest) -> operations.GetSeriesIDStudyResponse:
        r"""Get parent study
        Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/study", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSeriesIDStudyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_series_id_study_200_application_json_any = out

        return res

    
    def get_statistics(self) -> operations.GetStatisticsResponse:
        r"""Get database statistics
        Get statistics related to the database of Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_statistics_200_application_json_any = out

        return res

    
    def get_storage_commitment_id_(self, request: operations.GetStorageCommitmentIDRequest) -> operations.GetStorageCommitmentIDResponse:
        r"""Get storage commitment report
        Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage-commitment/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStorageCommitmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_storage_commitment_id_200_application_json_any = out

        return res

    
    def get_studies(self, request: operations.GetStudiesRequest) -> operations.GetStudiesResponse:
        r"""List the available studies
        List the Orthanc identifiers of all the available DICOM studies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/studies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_200_application_json_any = out

        return res

    
    def get_studies_id_(self, request: operations.GetStudiesIDRequest) -> operations.GetStudiesIDResponse:
        r"""Get information about some study
        Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_200_application_json_any = out

        return res

    
    def get_studies_id_archive(self, request: operations.GetStudiesIDArchiveRequest) -> operations.GetStudiesIDArchiveResponse:
        r"""Create ZIP archive
        Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/archive", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments(self, request: operations.GetStudiesIDAttachmentsRequest) -> operations.GetStudiesIDAttachmentsResponse:
        r"""List attachments
        Get the list of attachments that are associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_attachments_200_application_json_any = out

        return res

    
    def get_studies_id_attachments_name_(self, request: operations.GetStudiesIDAttachmentsNameRequest) -> operations.GetStudiesIDAttachmentsNameResponse:
        r"""List operations on attachments
        Get the list of the operations that are available for attachments associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_attachments_name_200_application_json_any = out

        return res

    
    def get_studies_id_attachments_name_compressed_data(self, request: operations.GetStudiesIDAttachmentsNameCompressedDataRequest) -> operations.GetStudiesIDAttachmentsNameCompressedDataResponse:
        r"""Get attachment (no decompression)
        Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compressed-data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameCompressedDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments_name_compressed_md5(self, request: operations.GetStudiesIDAttachmentsNameCompressedMd5Request) -> operations.GetStudiesIDAttachmentsNameCompressedMd5Response:
        r"""Get MD5 of attachment on disk
        Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compressed-md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameCompressedMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments_name_compressed_size(self, request: operations.GetStudiesIDAttachmentsNameCompressedSizeRequest) -> operations.GetStudiesIDAttachmentsNameCompressedSizeResponse:
        r"""Get size of attachment on disk
        Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compressed-size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameCompressedSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments_name_data(self, request: operations.GetStudiesIDAttachmentsNameDataRequest) -> operations.GetStudiesIDAttachmentsNameDataResponse:
        r"""Get attachment
        Get the (binary) content of one attachment associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/data", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments_name_is_compressed(self, request: operations.GetStudiesIDAttachmentsNameIsCompressedRequest) -> operations.GetStudiesIDAttachmentsNameIsCompressedResponse:
        r"""Is attachment compressed?
        Test whether the attachment has been stored as a compressed file on the disk.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/is-compressed", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameIsCompressedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments_name_md5(self, request: operations.GetStudiesIDAttachmentsNameMd5Request) -> operations.GetStudiesIDAttachmentsNameMd5Response:
        r"""Get MD5 of attachment
        Get the MD5 hash of one attachment associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/md5", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_studies_id_attachments_name_size(self, request: operations.GetStudiesIDAttachmentsNameSizeRequest) -> operations.GetStudiesIDAttachmentsNameSizeResponse:
        r"""Get size of attachment
        Get the size of one attachment associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/size", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDAttachmentsNameSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_studies_id_instances(self, request: operations.GetStudiesIDInstancesRequest) -> operations.GetStudiesIDInstancesResponse:
        r"""Get child instances
        Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_instances_200_application_json_any = out

        return res

    
    def get_studies_id_instances_tags(self, request: operations.GetStudiesIDInstancesTagsRequest) -> operations.GetStudiesIDInstancesTagsResponse:
        r"""Get tags of instances
        Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/instances-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDInstancesTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_instances_tags_200_application_json_any = out

        return res

    
    def get_studies_id_media(self, request: operations.GetStudiesIDMediaRequest) -> operations.GetStudiesIDMediaResponse:
        r"""Create DICOMDIR media
        Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/zip"):
                res.body = r.content

        return res

    
    def get_studies_id_metadata(self, request: operations.GetStudiesIDMetadataRequest) -> operations.GetStudiesIDMetadataResponse:
        r"""List metadata
        Get the list of metadata that are associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_metadata_200_application_json_any = out

        return res

    
    def get_studies_id_metadata_name_(self, request: operations.GetStudiesIDMetadataNameRequest) -> operations.GetStudiesIDMetadataNameResponse:
        r"""Get metadata
        Get the value of a metadata that is associated with the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_studies_id_module(self, request: operations.GetStudiesIDModuleRequest) -> operations.GetStudiesIDModuleResponse:
        r"""Get study module
        Get the study module of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/module", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDModuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_module_200_application_json_any = out

        return res

    
    def get_studies_id_module_patient(self, request: operations.GetStudiesIDModulePatientRequest) -> operations.GetStudiesIDModulePatientResponse:
        r"""Get patient module of study
        Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/module-patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDModulePatientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_module_patient_200_application_json_any = out

        return res

    
    def get_studies_id_patient(self, request: operations.GetStudiesIDPatientRequest) -> operations.GetStudiesIDPatientResponse:
        r"""Get parent patient
        Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/patient", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDPatientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_patient_200_application_json_any = out

        return res

    
    def get_studies_id_series(self, request: operations.GetStudiesIDSeriesRequest) -> operations.GetStudiesIDSeriesResponse:
        r"""Get child series
        Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/series", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_series_200_application_json_any = out

        return res

    
    def get_studies_id_shared_tags(self, request: operations.GetStudiesIDSharedTagsRequest) -> operations.GetStudiesIDSharedTagsResponse:
        r"""Get shared tags
        Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/shared-tags", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDSharedTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_shared_tags_200_application_json_any = out

        return res

    
    def get_studies_id_statistics(self, request: operations.GetStudiesIDStatisticsRequest) -> operations.GetStudiesIDStatisticsResponse:
        r"""Get study statistics
        Get statistics about the given study
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/statistics", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudiesIDStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_studies_id_statistics_200_application_json_any = out

        return res

    
    def get_system(self) -> operations.GetSystemResponse:
        r"""Get system information
        Get system information about Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSystemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_system_200_application_json_any = out

        return res

    
    def get_tools(self) -> operations.GetToolsResponse:
        r"""List operations
        List the available operations under URI `/tools/`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_tools_200_application_json_any = out

        return res

    
    def get_tools_accepted_transfer_syntaxes(self) -> operations.GetToolsAcceptedTransferSyntaxesResponse:
        r"""Get accepted transfer syntaxes
        Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/accepted-transfer-syntaxes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsAcceptedTransferSyntaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_tools_accepted_transfer_syntaxes_200_application_json_any = out

        return res

    
    def get_tools_default_encoding(self) -> operations.GetToolsDefaultEncodingResponse:
        r"""Get default encoding
        Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/default-encoding"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsDefaultEncodingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_dicom_conformance(self) -> operations.GetToolsDicomConformanceResponse:
        r"""Get DICOM conformance
        Get the DICOM conformance statement of Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/dicom-conformance"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsDicomConformanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_generate_uid(self, request: operations.GetToolsGenerateUIDRequest) -> operations.GetToolsGenerateUIDResponse:
        r"""Generate an identifier
        Generate a random DICOM identifier
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/generate-uid"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsGenerateUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level(self) -> operations.GetToolsLogLevelResponse:
        r"""Get main log level
        Get the main log level of Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_dicom(self) -> operations.GetToolsLogLevelDicomResponse:
        r"""Get log level for `dicom`
        Get the log level of the log category `dicom`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-dicom"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelDicomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_generic(self) -> operations.GetToolsLogLevelGenericResponse:
        r"""Get log level for `generic`
        Get the log level of the log category `generic`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-generic"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelGenericResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_http(self) -> operations.GetToolsLogLevelHTTPResponse:
        r"""Get log level for `http`
        Get the log level of the log category `http`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-http"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelHTTPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_jobs(self) -> operations.GetToolsLogLevelJobsResponse:
        r"""Get log level for `jobs`
        Get the log level of the log category `jobs`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-jobs"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_lua(self) -> operations.GetToolsLogLevelLuaResponse:
        r"""Get log level for `lua`
        Get the log level of the log category `lua`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-lua"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelLuaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_plugins(self) -> operations.GetToolsLogLevelPluginsResponse:
        r"""Get log level for `plugins`
        Get the log level of the log category `plugins`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-plugins"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelPluginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_log_level_sqlite(self) -> operations.GetToolsLogLevelSqliteResponse:
        r"""Get log level for `sqlite`
        Get the log level of the log category `sqlite`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-sqlite"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsLogLevelSqliteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_metrics(self) -> operations.GetToolsMetricsResponse:
        r"""Are metrics collected?
        Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/metrics"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_metrics_prometheus(self) -> operations.GetToolsMetricsPrometheusResponse:
        r"""Get usage metrics
        Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/metrics-prometheus"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsMetricsPrometheusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_tools_now(self) -> operations.GetToolsNowResponse:
        r"""Get UTC time
        Get UTC time
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/now"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsNowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_now_local(self) -> operations.GetToolsNowLocalResponse:
        r"""Get local time
        Get local time
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/now-local"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsNowLocalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_tools_unknown_sop_class_accepted(self) -> operations.GetToolsUnknownSopClassAcceptedResponse:
        r"""Is unknown SOP class accepted?
        Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/unknown-sop-class-accepted"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetToolsUnknownSopClassAcceptedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_instances(self, request: operations.PostInstancesRequest) -> operations.PostInstancesResponse:
        r"""Upload DICOM instances
        Upload DICOM instances
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/instances"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_instances_200_application_json_any = out

        return res

    
    def post_instances_id_anonymize(self, request: operations.PostInstancesIDAnonymizeRequest) -> operations.PostInstancesIDAnonymizeResponse:
        r"""Anonymize instance
        Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/anonymize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/dicom"):
                res.body = r.content

        return res

    
    def post_instances_id_attachments_name_compress(self, request: operations.PostInstancesIDAttachmentsNameCompressRequest) -> operations.PostInstancesIDAttachmentsNameCompressResponse:
        r"""Compress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/compress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_instances_id_attachments_name_uncompress(self, request: operations.PostInstancesIDAttachmentsNameUncompressRequest) -> operations.PostInstancesIDAttachmentsNameUncompressResponse:
        r"""Uncompress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/uncompress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_instances_id_attachments_name_verify_md5(self, request: operations.PostInstancesIDAttachmentsNameVerifyMd5Request) -> operations.PostInstancesIDAttachmentsNameVerifyMd5Response:
        r"""Verify attachment
        Verify that the attachment is not corrupted, by validating its MD5 hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}/verify-md5", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_instances_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    def post_instances_id_export(self, request: operations.PostInstancesIDExportRequest) -> operations.PostInstancesIDExportResponse:
        r"""Write DICOM onto filesystem
        Write the DICOM file onto the filesystem where Orthanc is running
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/export", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_instances_id_modify(self, request: operations.PostInstancesIDModifyRequest) -> operations.PostInstancesIDModifyResponse:
        r"""Modify instance
        Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/dicom"):
                res.body = r.content

        return res

    
    def post_instances_id_reconstruct(self, request: operations.PostInstancesIDReconstructRequest) -> operations.PostInstancesIDReconstructResponse:
        r"""Reconstruct tags of instance
        Reconstruct the main DICOM tags of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/reconstruct", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInstancesIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_jobs_id_cancel(self, request: operations.PostJobsIDCancelRequest) -> operations.PostJobsIDCancelResponse:
        r"""Cancel job
        Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/cancel", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_cancel_200_application_json_any = out

        return res

    
    def post_jobs_id_pause(self, request: operations.PostJobsIDPauseRequest) -> operations.PostJobsIDPauseResponse:
        r"""Pause job
        Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/pause", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_pause_200_application_json_any = out

        return res

    
    def post_jobs_id_resubmit(self, request: operations.PostJobsIDResubmitRequest) -> operations.PostJobsIDResubmitResponse:
        r"""Resubmit job
        Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/resubmit", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDResubmitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_resubmit_200_application_json_any = out

        return res

    
    def post_jobs_id_resume(self, request: operations.PostJobsIDResumeRequest) -> operations.PostJobsIDResumeResponse:
        r"""Resume job
        Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{id}/resume", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJobsIDResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_jobs_id_resume_200_application_json_any = out

        return res

    
    def post_modalities_id_echo(self, request: operations.PostModalitiesIDEchoRequest) -> operations.PostModalitiesIDEchoResponse:
        r"""Trigger C-ECHO SCU
        Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/echo", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDEchoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_modalities_id_find(self, request: operations.PostModalitiesIDFindRequest) -> operations.PostModalitiesIDFindResponse:
        r"""Hierarchical C-FIND SCU
        Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/find", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_200_application_json_any = out

        return res

    
    def post_modalities_id_find_instance(self, request: operations.PostModalitiesIDFindInstanceRequest) -> operations.PostModalitiesIDFindInstanceResponse:
        r"""C-FIND SCU for instances
        Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/find-instance", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_instance_200_application_json_any = out

        return res

    
    def post_modalities_id_find_patient(self, request: operations.PostModalitiesIDFindPatientRequest) -> operations.PostModalitiesIDFindPatientResponse:
        r"""C-FIND SCU for patients
        Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/find-patient", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindPatientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_patient_200_application_json_any = out

        return res

    
    def post_modalities_id_find_series(self, request: operations.PostModalitiesIDFindSeriesRequest) -> operations.PostModalitiesIDFindSeriesResponse:
        r"""C-FIND SCU for series
        Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/find-series", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindSeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_series_200_application_json_any = out

        return res

    
    def post_modalities_id_find_study(self, request: operations.PostModalitiesIDFindStudyRequest) -> operations.PostModalitiesIDFindStudyResponse:
        r"""C-FIND SCU for studies
        Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/find-study", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindStudyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_study_200_application_json_any = out

        return res

    
    def post_modalities_id_find_worklist(self, request: operations.PostModalitiesIDFindWorklistRequest) -> operations.PostModalitiesIDFindWorklistResponse:
        r"""C-FIND SCU for worklist
        Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/find-worklist", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDFindWorklistResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_find_worklist_200_application_json_any = out

        return res

    
    def post_modalities_id_move(self, request: operations.PostModalitiesIDMoveRequest) -> operations.PostModalitiesIDMoveResponse:
        r"""Trigger C-MOVE SCU
        Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_modalities_id_query(self, request: operations.PostModalitiesIDQueryRequest) -> operations.PostModalitiesIDQueryResponse:
        r"""Trigger C-FIND SCU
        Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/query", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_query_200_application_json_any = out

        return res

    
    def post_modalities_id_storage_commitment(self, request: operations.PostModalitiesIDStorageCommitmentRequest) -> operations.PostModalitiesIDStorageCommitmentResponse:
        r"""Trigger storage commitment request
        Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/storage-commitment", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDStorageCommitmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_storage_commitment_200_application_json_any = out

        return res

    
    def post_modalities_id_store(self, request: operations.PostModalitiesIDStoreRequest) -> operations.PostModalitiesIDStoreResponse:
        r"""Trigger C-STORE SCU
        Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/store", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDStoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_store_200_application_json_any = out

        return res

    
    def post_modalities_id_store_straight(self, request: operations.PostModalitiesIDStoreStraightRequest) -> operations.PostModalitiesIDStoreStraightResponse:
        r"""Straight C-STORE SCU
        Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}/store-straight", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostModalitiesIDStoreStraightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_modalities_id_store_straight_200_application_json_any = out

        return res

    
    def post_patients_id_anonymize(self, request: operations.PostPatientsIDAnonymizeRequest) -> operations.PostPatientsIDAnonymizeResponse:
        r"""Anonymize patient
        Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/anonymize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_anonymize_200_application_json_any = out

        return res

    
    def post_patients_id_archive(self, request: operations.PostPatientsIDArchiveRequest) -> operations.PostPatientsIDArchiveResponse:
        r"""Create ZIP archive
        Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/archive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Compress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/compress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_patients_id_attachments_name_uncompress(self, request: operations.PostPatientsIDAttachmentsNameUncompressRequest) -> operations.PostPatientsIDAttachmentsNameUncompressResponse:
        r"""Uncompress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/uncompress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_patients_id_attachments_name_verify_md5(self, request: operations.PostPatientsIDAttachmentsNameVerifyMd5Request) -> operations.PostPatientsIDAttachmentsNameVerifyMd5Response:
        r"""Verify attachment
        Verify that the attachment is not corrupted, by validating its MD5 hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}/verify-md5", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    def post_patients_id_media(self, request: operations.PostPatientsIDMediaRequest) -> operations.PostPatientsIDMediaResponse:
        r"""Create DICOMDIR media
        Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/media", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Modify patient
        Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_patients_id_modify_200_application_json_any = out

        return res

    
    def post_patients_id_reconstruct(self, request: operations.PostPatientsIDReconstructRequest) -> operations.PostPatientsIDReconstructResponse:
        r"""Reconstruct tags of patient
        Reconstruct the main DICOM tags of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/reconstruct", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPatientsIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_peers_id_store(self, request: operations.PostPeersIDStoreRequest) -> operations.PostPeersIDStoreResponse:
        r"""Send to Orthanc peer
        Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}/store", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPeersIDStoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_peers_id_store_200_application_json_any = out

        return res

    
    def post_peers_id_store_straight(self, request: operations.PostPeersIDStoreStraightRequest) -> operations.PostPeersIDStoreStraightResponse:
        r"""Straight store to peer
        Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}/store-straight", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPeersIDStoreStraightResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_peers_id_store_straight_200_application_json_any = out

        return res

    
    def post_queries_id_answers_index_query_instances(self, request: operations.PostQueriesIDAnswersIndexQueryInstancesRequest) -> operations.PostQueriesIDAnswersIndexQueryInstancesResponse:
        r"""Query the child instances of an answer
        Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/query-instances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexQueryInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_query_instances_200_application_json_any = out

        return res

    
    def post_queries_id_answers_index_query_series(self, request: operations.PostQueriesIDAnswersIndexQuerySeriesRequest) -> operations.PostQueriesIDAnswersIndexQuerySeriesResponse:
        r"""Query the child series of an answer
        Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/query-series", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexQuerySeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_query_series_200_application_json_any = out

        return res

    
    def post_queries_id_answers_index_query_studies(self, request: operations.PostQueriesIDAnswersIndexQueryStudiesRequest) -> operations.PostQueriesIDAnswersIndexQueryStudiesResponse:
        r"""Query the child studies of an answer
        Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/query-studies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexQueryStudiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_query_studies_200_application_json_any = out

        return res

    
    def post_queries_id_answers_index_retrieve(self, request: operations.PostQueriesIDAnswersIndexRetrieveRequest) -> operations.PostQueriesIDAnswersIndexRetrieveResponse:
        r"""Retrieve one answer
        Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/answers/{index}/retrieve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDAnswersIndexRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_answers_index_retrieve_200_application_json_any = out

        return res

    
    def post_queries_id_retrieve(self, request: operations.PostQueriesIDRetrieveRequest) -> operations.PostQueriesIDRetrieveResponse:
        r"""Retrieve all answers
        Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{id}/retrieve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueriesIDRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_queries_id_retrieve_200_application_json_any = out

        return res

    
    def post_series_id_anonymize(self, request: operations.PostSeriesIDAnonymizeRequest) -> operations.PostSeriesIDAnonymizeResponse:
        r"""Anonymize series
        Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/anonymize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_anonymize_200_application_json_any = out

        return res

    
    def post_series_id_archive(self, request: operations.PostSeriesIDArchiveRequest) -> operations.PostSeriesIDArchiveResponse:
        r"""Create ZIP archive
        Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/archive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Compress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/compress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_series_id_attachments_name_uncompress(self, request: operations.PostSeriesIDAttachmentsNameUncompressRequest) -> operations.PostSeriesIDAttachmentsNameUncompressResponse:
        r"""Uncompress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/uncompress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_series_id_attachments_name_verify_md5(self, request: operations.PostSeriesIDAttachmentsNameVerifyMd5Request) -> operations.PostSeriesIDAttachmentsNameVerifyMd5Response:
        r"""Verify attachment
        Verify that the attachment is not corrupted, by validating its MD5 hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}/verify-md5", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    def post_series_id_media(self, request: operations.PostSeriesIDMediaRequest) -> operations.PostSeriesIDMediaResponse:
        r"""Create DICOMDIR media
        Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/media", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Modify series
        Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_series_id_modify_200_application_json_any = out

        return res

    
    def post_series_id_reconstruct(self, request: operations.PostSeriesIDReconstructRequest) -> operations.PostSeriesIDReconstructResponse:
        r"""Reconstruct tags of series
        Reconstruct the main DICOM tags of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/reconstruct", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSeriesIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_storage_commitment_id_remove(self, request: operations.PostStorageCommitmentIDRemoveRequest) -> operations.PostStorageCommitmentIDRemoveResponse:
        r"""Remove after storage commitment
        Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/storage-commitment/{id}/remove", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStorageCommitmentIDRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_studies_id_anonymize(self, request: operations.PostStudiesIDAnonymizeRequest) -> operations.PostStudiesIDAnonymizeResponse:
        r"""Anonymize study
        Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/anonymize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_anonymize_200_application_json_any = out

        return res

    
    def post_studies_id_archive(self, request: operations.PostStudiesIDArchiveRequest) -> operations.PostStudiesIDArchiveResponse:
        r"""Create ZIP archive
        Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/archive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Compress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/compress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAttachmentsNameCompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_studies_id_attachments_name_uncompress(self, request: operations.PostStudiesIDAttachmentsNameUncompressRequest) -> operations.PostStudiesIDAttachmentsNameUncompressResponse:
        r"""Uncompress attachment
        Change the compression scheme that is used to store an attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/uncompress", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAttachmentsNameUncompressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_studies_id_attachments_name_verify_md5(self, request: operations.PostStudiesIDAttachmentsNameVerifyMd5Request) -> operations.PostStudiesIDAttachmentsNameVerifyMd5Response:
        r"""Verify attachment
        Verify that the attachment is not corrupted, by validating its MD5 hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}/verify-md5", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDAttachmentsNameVerifyMd5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_attachments_name_verify_md5_200_application_json_any = out

        return res

    
    def post_studies_id_media(self, request: operations.PostStudiesIDMediaRequest) -> operations.PostStudiesIDMediaResponse:
        r"""Create DICOMDIR media
        Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/media", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Merge study
        Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/merge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDMergeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_merge_200_application_json_any = out

        return res

    
    def post_studies_id_modify(self, request: operations.PostStudiesIDModifyRequest) -> operations.PostStudiesIDModifyResponse:
        r"""Modify study
        Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_modify_200_application_json_any = out

        return res

    
    def post_studies_id_reconstruct(self, request: operations.PostStudiesIDReconstructRequest) -> operations.PostStudiesIDReconstructResponse:
        r"""Reconstruct tags of study
        Reconstruct the main DICOM tags of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/reconstruct", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDReconstructResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_studies_id_split(self, request: operations.PostStudiesIDSplitRequest) -> operations.PostStudiesIDSplitResponse:
        r"""Split study
        Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/split", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStudiesIDSplitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_studies_id_split_200_application_json_any = out

        return res

    
    def post_tools_bulk_anonymize(self, request: operations.PostToolsBulkAnonymizeRequest) -> operations.PostToolsBulkAnonymizeResponse:
        r"""Anonymize a set of resources
        Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/bulk-anonymize"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkAnonymizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_bulk_anonymize_200_application_json_any = out

        return res

    
    def post_tools_bulk_content(self, request: operations.PostToolsBulkContentRequest) -> operations.PostToolsBulkContentResponse:
        r"""Describe a set of instances
        Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/bulk-content"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_tools_bulk_delete(self, request: operations.PostToolsBulkDeleteRequest) -> operations.PostToolsBulkDeleteResponse:
        r"""Delete a set of instances
        Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/bulk-delete"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_tools_bulk_modify(self, request: operations.PostToolsBulkModifyRequest) -> operations.PostToolsBulkModifyResponse:
        r"""Modify a set of resources
        Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/bulk-modify"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsBulkModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_bulk_modify_200_application_json_any = out

        return res

    
    def post_tools_create_archive(self, request: operations.PostToolsCreateArchiveRequest) -> operations.PostToolsCreateArchiveResponse:
        r"""Create ZIP archive
        Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/create-archive"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Create one DICOM instance
        Create one DICOM instance, and store it into Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/create-dicom"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsCreateDicomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_create_dicom_200_application_json_any = out

        return res

    
    def post_tools_create_media(self, request: operations.PostToolsCreateMediaRequest) -> operations.PostToolsCreateMediaResponse:
        r"""Create DICOMDIR media
        Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/create-media"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Create DICOMDIR media
        Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/create-media-extended"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
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
        r"""Trigger C-ECHO SCU
        Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/dicom-echo"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsDicomEchoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_tools_execute_script(self, request: operations.PostToolsExecuteScriptRequest) -> operations.PostToolsExecuteScriptResponse:
        r"""Execute Lua script
        Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/execute-script"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsExecuteScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_tools_find(self, request: operations.PostToolsFindRequest) -> operations.PostToolsFindResponse:
        r"""Look for local resources
        This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/find"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_find_200_application_json_any = out

        return res

    
    def post_tools_invalidate_tags(self) -> operations.PostToolsInvalidateTagsResponse:
        r"""Invalidate DICOM-as-JSON summaries
        Remove all the attachments of the type \"DICOM-as-JSON\" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/invalidate-tags"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsInvalidateTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_tools_lookup(self, request: operations.PostToolsLookupRequest) -> operations.PostToolsLookupResponse:
        r"""Look for DICOM identifiers
        This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/lookup"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_tools_lookup_200_application_json_any = out

        return res

    
    def post_tools_reconstruct(self) -> operations.PostToolsReconstructResponse:
        r"""Reconstruct all the index
        Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/reconstruct"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsReconstructResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_tools_reset(self) -> operations.PostToolsResetResponse:
        r"""Restart Orthanc
        Restart Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/reset"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_tools_shutdown(self) -> operations.PostToolsShutdownResponse:
        r"""Shutdown Orthanc
        Shutdown Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/shutdown"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostToolsShutdownResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_instances_id_attachments_name_(self, request: operations.PutInstancesIDAttachmentsNameRequest) -> operations.PutInstancesIDAttachmentsNameResponse:
        r"""Set attachment
        Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutInstancesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_instances_id_attachments_name_200_application_json_any = out

        return res

    
    def put_instances_id_metadata_name_(self, request: operations.PutInstancesIDMetadataNameRequest) -> operations.PutInstancesIDMetadataNameResponse:
        r"""Set metadata
        Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/instances/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutInstancesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_modalities_id_(self, request: operations.PutModalitiesIDRequest) -> operations.PutModalitiesIDResponse:
        r"""Update DICOM modality
        Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/modalities/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutModalitiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_patients_id_attachments_name_(self, request: operations.PutPatientsIDAttachmentsNameRequest) -> operations.PutPatientsIDAttachmentsNameResponse:
        r"""Set attachment
        Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPatientsIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_patients_id_attachments_name_200_application_json_any = out

        return res

    
    def put_patients_id_metadata_name_(self, request: operations.PutPatientsIDMetadataNameRequest) -> operations.PutPatientsIDMetadataNameResponse:
        r"""Set metadata
        Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPatientsIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_patients_id_protected(self, request: operations.PutPatientsIDProtectedRequest) -> operations.PutPatientsIDProtectedResponse:
        r"""Protect one patient against recycling
        Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/patients/{id}/protected", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPatientsIDProtectedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_peers_id_(self, request: operations.PutPeersIDRequest) -> operations.PutPeersIDResponse:
        r"""Update Orthanc peer
        Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/peers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPeersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_series_id_attachments_name_(self, request: operations.PutSeriesIDAttachmentsNameRequest) -> operations.PutSeriesIDAttachmentsNameResponse:
        r"""Set attachment
        Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSeriesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_series_id_attachments_name_200_application_json_any = out

        return res

    
    def put_series_id_metadata_name_(self, request: operations.PutSeriesIDMetadataNameRequest) -> operations.PutSeriesIDMetadataNameResponse:
        r"""Set metadata
        Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/series/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSeriesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_studies_id_attachments_name_(self, request: operations.PutStudiesIDAttachmentsNameRequest) -> operations.PutStudiesIDAttachmentsNameResponse:
        r"""Set attachment
        Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/attachments/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutStudiesIDAttachmentsNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_studies_id_attachments_name_200_application_json_any = out

        return res

    
    def put_studies_id_metadata_name_(self, request: operations.PutStudiesIDMetadataNameRequest) -> operations.PutStudiesIDMetadataNameResponse:
        r"""Set metadata
        Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/studies/{id}/metadata/{name}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutStudiesIDMetadataNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_accepted_transfer_syntaxes(self, request: operations.PutToolsAcceptedTransferSyntaxesRequest) -> operations.PutToolsAcceptedTransferSyntaxesResponse:
        r"""Set accepted transfer syntaxes
        Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/accepted-transfer-syntaxes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsAcceptedTransferSyntaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_tools_accepted_transfer_syntaxes_200_application_json_any = out

        return res

    
    def put_tools_default_encoding(self, request: operations.PutToolsDefaultEncodingRequest) -> operations.PutToolsDefaultEncodingResponse:
        r"""Set default encoding
        Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/default-encoding"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsDefaultEncodingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level(self, request: operations.PutToolsLogLevelRequest) -> operations.PutToolsLogLevelResponse:
        r"""Set main log level
        Set the main log level of Orthanc
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_dicom(self, request: operations.PutToolsLogLevelDicomRequest) -> operations.PutToolsLogLevelDicomResponse:
        r"""Set log level for `dicom`
        Set the log level of the log category `dicom`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-dicom"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelDicomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_generic(self, request: operations.PutToolsLogLevelGenericRequest) -> operations.PutToolsLogLevelGenericResponse:
        r"""Set log level for `generic`
        Set the log level of the log category `generic`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-generic"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelGenericResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_http(self, request: operations.PutToolsLogLevelHTTPRequest) -> operations.PutToolsLogLevelHTTPResponse:
        r"""Set log level for `http`
        Set the log level of the log category `http`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-http"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelHTTPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_jobs(self, request: operations.PutToolsLogLevelJobsRequest) -> operations.PutToolsLogLevelJobsResponse:
        r"""Set log level for `jobs`
        Set the log level of the log category `jobs`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-jobs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_lua(self, request: operations.PutToolsLogLevelLuaRequest) -> operations.PutToolsLogLevelLuaResponse:
        r"""Set log level for `lua`
        Set the log level of the log category `lua`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-lua"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelLuaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_plugins(self, request: operations.PutToolsLogLevelPluginsRequest) -> operations.PutToolsLogLevelPluginsResponse:
        r"""Set log level for `plugins`
        Set the log level of the log category `plugins`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-plugins"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelPluginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_log_level_sqlite(self, request: operations.PutToolsLogLevelSqliteRequest) -> operations.PutToolsLogLevelSqliteResponse:
        r"""Set log level for `sqlite`
        Set the log level of the log category `sqlite`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/log-level-sqlite"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsLogLevelSqliteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_metrics(self, request: operations.PutToolsMetricsRequest) -> operations.PutToolsMetricsResponse:
        r"""Enable collection of metrics
        Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/metrics"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_tools_unknown_sop_class_accepted(self, request: operations.PutToolsUnknownSopClassAcceptedRequest) -> operations.PutToolsUnknownSopClassAcceptedResponse:
        r"""Set unknown SOP class accepted
        Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tools/unknown-sop-class-accepted"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutToolsUnknownSopClassAcceptedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    