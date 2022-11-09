import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Clear the full history stored in the changes log
    **/
    DeleteChanges(config?: AxiosRequestConfig): Promise<operations.DeleteChangesResponse>;
    /**
     * Clear the full history stored in the exports log
    **/
    DeleteExports(config?: AxiosRequestConfig): Promise<operations.DeleteExportsResponse>;
    /**
     * Delete the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    DeleteInstancesId(req: operations.DeleteInstancesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstancesIdResponse>;
    /**
     * Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    DeleteInstancesIdAttachmentsName(req: operations.DeleteInstancesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstancesIdAttachmentsNameResponse>;
    /**
     * Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    DeleteInstancesIdMetadataName(req: operations.DeleteInstancesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstancesIdMetadataNameResponse>;
    /**
     * Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    DeleteModalitiesId(req: operations.DeleteModalitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModalitiesIdResponse>;
    /**
     * Delete the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    DeletePatientsId(req: operations.DeletePatientsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePatientsIdResponse>;
    /**
     * Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    DeletePatientsIdAttachmentsName(req: operations.DeletePatientsIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeletePatientsIdAttachmentsNameResponse>;
    /**
     * Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    DeletePatientsIdMetadataName(req: operations.DeletePatientsIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeletePatientsIdMetadataNameResponse>;
    /**
     * Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    DeletePeersId(req: operations.DeletePeersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePeersIdResponse>;
    /**
     * Delete the query/retrieve operation whose identifier is provided in the URL
    **/
    DeleteQueriesId(req: operations.DeleteQueriesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueriesIdResponse>;
    /**
     * Delete the DICOM series whose Orthanc identifier is provided in the URL
    **/
    DeleteSeriesId(req: operations.DeleteSeriesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSeriesIdResponse>;
    /**
     * Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    DeleteSeriesIdAttachmentsName(req: operations.DeleteSeriesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSeriesIdAttachmentsNameResponse>;
    /**
     * Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    DeleteSeriesIdMetadataName(req: operations.DeleteSeriesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSeriesIdMetadataNameResponse>;
    /**
     * Delete the DICOM study whose Orthanc identifier is provided in the URL
    **/
    DeleteStudiesId(req: operations.DeleteStudiesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudiesIdResponse>;
    /**
     * Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    DeleteStudiesIdAttachmentsName(req: operations.DeleteStudiesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudiesIdAttachmentsNameResponse>;
    /**
     * Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    DeleteStudiesIdMetadataName(req: operations.DeleteStudiesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudiesIdMetadataNameResponse>;
    /**
     * Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.
    **/
    GetChanges(req: operations.GetChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetChangesResponse>;
    /**
     * For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.
    **/
    GetExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * List the Orthanc identifiers of all the available DICOM instances
    **/
    GetInstances(req: operations.GetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesResponse>;
    /**
     * Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    GetInstancesId(req: operations.GetInstancesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdResponse>;
    /**
     * Get the list of attachments that are associated with the given instance
    **/
    GetInstancesIdAttachments(req: operations.GetInstancesIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsResponse>;
    /**
     * Get the list of the operations that are available for attachments associated with the given instance
    **/
    GetInstancesIdAttachmentsName(req: operations.GetInstancesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    GetInstancesIdAttachmentsNameCompressedData(req: operations.GetInstancesIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameCompressedDataResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    GetInstancesIdAttachmentsNameCompressedMd5(req: operations.GetInstancesIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameCompressedMd5Response>;
    /**
     * Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    GetInstancesIdAttachmentsNameCompressedSize(req: operations.GetInstancesIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameCompressedSizeResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given instance
    **/
    GetInstancesIdAttachmentsNameData(req: operations.GetInstancesIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameDataResponse>;
    /**
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    GetInstancesIdAttachmentsNameIsCompressed(req: operations.GetInstancesIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameIsCompressedResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given instance
    **/
    GetInstancesIdAttachmentsNameMd5(req: operations.GetInstancesIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameMd5Response>;
    /**
     * Get the size of one attachment associated with the given instance
    **/
    GetInstancesIdAttachmentsNameSize(req: operations.GetInstancesIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameSizeResponse>;
    /**
     * Get the raw content of one DICOM tag in the hierarchy of DICOM dataset
    **/
    GetInstancesIdContent(req: operations.GetInstancesIdContentRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdContentResponse>;
    /**
     * Download one DICOM instance
    **/
    GetInstancesIdFile(req: operations.GetInstancesIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFileResponse>;
    /**
     * List the frames that are available in the DICOM instance of interest
    **/
    GetInstancesIdFrames(req: operations.GetInstancesIdFramesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesResponse>;
    /**
     * List the available operations under URI `/instances/{id}/frames/{frame}/`
    **/
    GetInstancesIdFramesFrame(req: operations.GetInstancesIdFramesFrameRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameResponse>;
    /**
     * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
    **/
    GetInstancesIdFramesFrameImageInt16(req: operations.GetInstancesIdFramesFrameImageInt16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameImageInt16Response>;
    /**
     * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
    **/
    GetInstancesIdFramesFrameImageUint16(req: operations.GetInstancesIdFramesFrameImageUint16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameImageUint16Response>;
    /**
     * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
    **/
    GetInstancesIdFramesFrameImageUint8(req: operations.GetInstancesIdFramesFrameImageUint8Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameImageUint8Response>;
    /**
     * Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
    **/
    GetInstancesIdFramesFrameMatlab(req: operations.GetInstancesIdFramesFrameMatlabRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameMatlabResponse>;
    /**
     * Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
    **/
    GetInstancesIdFramesFramePreview(req: operations.GetInstancesIdFramesFramePreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFramePreviewResponse>;
    /**
     * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.
    **/
    GetInstancesIdFramesFrameRaw(req: operations.GetInstancesIdFramesFrameRawRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameRawResponse>;
    /**
     * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip
    **/
    GetInstancesIdFramesFrameRawGz(req: operations.GetInstancesIdFramesFrameRawGzRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameRawGzResponse>;
    /**
     * Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
    **/
    GetInstancesIdFramesFrameRendered(req: operations.GetInstancesIdFramesFrameRenderedRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameRenderedResponse>;
    /**
     * Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
    **/
    GetInstancesIdHeader(req: operations.GetInstancesIdHeaderRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdHeaderResponse>;
    /**
     * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
    **/
    GetInstancesIdImageInt16(req: operations.GetInstancesIdImageInt16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdImageInt16Response>;
    /**
     * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
    **/
    GetInstancesIdImageUint16(req: operations.GetInstancesIdImageUint16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdImageUint16Response>;
    /**
     * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
    **/
    GetInstancesIdImageUint8(req: operations.GetInstancesIdImageUint8Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdImageUint8Response>;
    /**
     * Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
    **/
    GetInstancesIdMatlab(req: operations.GetInstancesIdMatlabRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdMatlabResponse>;
    /**
     * Get the list of metadata that are associated with the given instance
    **/
    GetInstancesIdMetadata(req: operations.GetInstancesIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdMetadataResponse>;
    /**
     * Get the value of a metadata that is associated with the given instance
    **/
    GetInstancesIdMetadataName(req: operations.GetInstancesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdMetadataNameResponse>;
    /**
     * Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    GetInstancesIdModule(req: operations.GetInstancesIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdModuleResponse>;
    /**
     * Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    GetInstancesIdPatient(req: operations.GetInstancesIdPatientRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdPatientResponse>;
    /**
     * Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.
    **/
    GetInstancesIdPdf(req: operations.GetInstancesIdPdfRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdPdfResponse>;
    /**
     * Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
    **/
    GetInstancesIdPreview(req: operations.GetInstancesIdPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdPreviewResponse>;
    /**
     * Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
    **/
    GetInstancesIdRendered(req: operations.GetInstancesIdRenderedRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdRenderedResponse>;
    /**
     * Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    GetInstancesIdSeries(req: operations.GetInstancesIdSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdSeriesResponse>;
    /**
     * Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)
    **/
    GetInstancesIdSimplifiedTags(req: operations.GetInstancesIdSimplifiedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdSimplifiedTagsResponse>;
    /**
     * Get statistics about the given instance
    **/
    GetInstancesIdStatistics(req: operations.GetInstancesIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdStatisticsResponse>;
    /**
     * Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    GetInstancesIdStudy(req: operations.GetInstancesIdStudyRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdStudyResponse>;
    /**
     * Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
    **/
    GetInstancesIdTags(req: operations.GetInstancesIdTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdTagsResponse>;
    /**
     * List all the available jobs
    **/
    GetJobs(req: operations.GetJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsResponse>;
    /**
     * Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    GetJobsId(req: operations.GetJobsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsIdResponse>;
    /**
     * Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).
    **/
    GetJobsIdKey(req: operations.GetJobsIdKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsIdKeyResponse>;
    /**
     * List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.
    **/
    GetModalities(req: operations.GetModalitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetModalitiesResponse>;
    /**
     * List the operations that are available for a DICOM modality.
    **/
    GetModalitiesId(req: operations.GetModalitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetModalitiesIdResponse>;
    /**
     * Get detailed information about the configuration of some DICOM modality
    **/
    GetModalitiesIdConfiguration(req: operations.GetModalitiesIdConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetModalitiesIdConfigurationResponse>;
    /**
     * List the Orthanc identifiers of all the available DICOM patients
    **/
    GetPatients(req: operations.GetPatientsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsResponse>;
    /**
     * Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsId(req: operations.GetPatientsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdResponse>;
    /**
     * Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    GetPatientsIdArchive(req: operations.GetPatientsIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdArchiveResponse>;
    /**
     * Get the list of attachments that are associated with the given patient
    **/
    GetPatientsIdAttachments(req: operations.GetPatientsIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsResponse>;
    /**
     * Get the list of the operations that are available for attachments associated with the given patient
    **/
    GetPatientsIdAttachmentsName(req: operations.GetPatientsIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    GetPatientsIdAttachmentsNameCompressedData(req: operations.GetPatientsIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameCompressedDataResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    GetPatientsIdAttachmentsNameCompressedMd5(req: operations.GetPatientsIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameCompressedMd5Response>;
    /**
     * Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    GetPatientsIdAttachmentsNameCompressedSize(req: operations.GetPatientsIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameCompressedSizeResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given patient
    **/
    GetPatientsIdAttachmentsNameData(req: operations.GetPatientsIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameDataResponse>;
    /**
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    GetPatientsIdAttachmentsNameIsCompressed(req: operations.GetPatientsIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameIsCompressedResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given patient
    **/
    GetPatientsIdAttachmentsNameMd5(req: operations.GetPatientsIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameMd5Response>;
    /**
     * Get the size of one attachment associated with the given patient
    **/
    GetPatientsIdAttachmentsNameSize(req: operations.GetPatientsIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameSizeResponse>;
    /**
     * Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsIdInstances(req: operations.GetPatientsIdInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdInstancesResponse>;
    /**
     * Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsIdInstancesTags(req: operations.GetPatientsIdInstancesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdInstancesTagsResponse>;
    /**
     * Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    GetPatientsIdMedia(req: operations.GetPatientsIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdMediaResponse>;
    /**
     * Get the list of metadata that are associated with the given patient
    **/
    GetPatientsIdMetadata(req: operations.GetPatientsIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdMetadataResponse>;
    /**
     * Get the value of a metadata that is associated with the given patient
    **/
    GetPatientsIdMetadataName(req: operations.GetPatientsIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdMetadataNameResponse>;
    /**
     * Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsIdModule(req: operations.GetPatientsIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdModuleResponse>;
    /**
     * Is the patient protected against recycling?
    **/
    GetPatientsIdProtected(req: operations.GetPatientsIdProtectedRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdProtectedResponse>;
    /**
     * Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsIdSeries(req: operations.GetPatientsIdSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdSeriesResponse>;
    /**
     * Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsIdSharedTags(req: operations.GetPatientsIdSharedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdSharedTagsResponse>;
    /**
     * Get statistics about the given patient
    **/
    GetPatientsIdStatistics(req: operations.GetPatientsIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdStatisticsResponse>;
    /**
     * Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    GetPatientsIdStudies(req: operations.GetPatientsIdStudiesRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdStudiesResponse>;
    /**
     * List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.
    **/
    GetPeers(req: operations.GetPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersResponse>;
    /**
     * List the operations that are available for an Orthanc peer.
    **/
    GetPeersId(req: operations.GetPeersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersIdResponse>;
    /**
     * Get detailed information about the configuration of some Orthanc peer
    **/
    GetPeersIdConfiguration(req: operations.GetPeersIdConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersIdConfigurationResponse>;
    /**
     * Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.
    **/
    GetPeersIdSystem(req: operations.GetPeersIdSystemRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersIdSystemResponse>;
    /**
     * List all the installed plugins
    **/
    GetPlugins(config?: AxiosRequestConfig): Promise<operations.GetPluginsResponse>;
    /**
     * Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.
    **/
    GetPluginsExplorerJs(config?: AxiosRequestConfig): Promise<operations.GetPluginsExplorerJsResponse>;
    /**
     * Get system information about the plugin whose identifier is provided in the URL
    **/
    GetPluginsId(req: operations.GetPluginsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginsIdResponse>;
    /**
     * List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
    **/
    GetQueries(config?: AxiosRequestConfig): Promise<operations.GetQueriesResponse>;
    /**
     * List the available operations for the query/retrieve operation whose identifier is provided in the URL
    **/
    GetQueriesId(req: operations.GetQueriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdResponse>;
    /**
     * List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL
    **/
    GetQueriesIdAnswers(req: operations.GetQueriesIdAnswersRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdAnswersResponse>;
    /**
     * List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL
    **/
    GetQueriesIdAnswersIndex(req: operations.GetQueriesIdAnswersIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdAnswersIndexResponse>;
    /**
     * Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL
    **/
    GetQueriesIdAnswersIndexContent(req: operations.GetQueriesIdAnswersIndexContentRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdAnswersIndexContentResponse>;
    /**
     * Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL
    **/
    GetQueriesIdLevel(req: operations.GetQueriesIdLevelRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdLevelResponse>;
    /**
     * Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL
    **/
    GetQueriesIdModality(req: operations.GetQueriesIdModalityRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdModalityResponse>;
    /**
     * Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL
    **/
    GetQueriesIdQuery(req: operations.GetQueriesIdQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdQueryResponse>;
    /**
     * List the Orthanc identifiers of all the available DICOM series
    **/
    GetSeries(req: operations.GetSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesResponse>;
    /**
     * Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesId(req: operations.GetSeriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdResponse>;
    /**
     * Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    GetSeriesIdArchive(req: operations.GetSeriesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdArchiveResponse>;
    /**
     * Get the list of attachments that are associated with the given series
    **/
    GetSeriesIdAttachments(req: operations.GetSeriesIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsResponse>;
    /**
     * Get the list of the operations that are available for attachments associated with the given series
    **/
    GetSeriesIdAttachmentsName(req: operations.GetSeriesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    GetSeriesIdAttachmentsNameCompressedData(req: operations.GetSeriesIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameCompressedDataResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    GetSeriesIdAttachmentsNameCompressedMd5(req: operations.GetSeriesIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameCompressedMd5Response>;
    /**
     * Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    GetSeriesIdAttachmentsNameCompressedSize(req: operations.GetSeriesIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameCompressedSizeResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given series
    **/
    GetSeriesIdAttachmentsNameData(req: operations.GetSeriesIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameDataResponse>;
    /**
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    GetSeriesIdAttachmentsNameIsCompressed(req: operations.GetSeriesIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameIsCompressedResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given series
    **/
    GetSeriesIdAttachmentsNameMd5(req: operations.GetSeriesIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameMd5Response>;
    /**
     * Get the size of one attachment associated with the given series
    **/
    GetSeriesIdAttachmentsNameSize(req: operations.GetSeriesIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameSizeResponse>;
    /**
     * Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesIdInstances(req: operations.GetSeriesIdInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdInstancesResponse>;
    /**
     * Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesIdInstancesTags(req: operations.GetSeriesIdInstancesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdInstancesTagsResponse>;
    /**
     * Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    GetSeriesIdMedia(req: operations.GetSeriesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdMediaResponse>;
    /**
     * Get the list of metadata that are associated with the given series
    **/
    GetSeriesIdMetadata(req: operations.GetSeriesIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdMetadataResponse>;
    /**
     * Get the value of a metadata that is associated with the given series
    **/
    GetSeriesIdMetadataName(req: operations.GetSeriesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdMetadataNameResponse>;
    /**
     * Get the series module of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesIdModule(req: operations.GetSeriesIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdModuleResponse>;
    /**
     * Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.
    **/
    GetSeriesIdOrderedSlices(req: operations.GetSeriesIdOrderedSlicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdOrderedSlicesResponse>;
    /**
     * Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesIdPatient(req: operations.GetSeriesIdPatientRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdPatientResponse>;
    /**
     * Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesIdSharedTags(req: operations.GetSeriesIdSharedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdSharedTagsResponse>;
    /**
     * Get statistics about the given series
    **/
    GetSeriesIdStatistics(req: operations.GetSeriesIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdStatisticsResponse>;
    /**
     * Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    GetSeriesIdStudy(req: operations.GetSeriesIdStudyRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdStudyResponse>;
    /**
     * Get statistics related to the database of Orthanc
    **/
    GetStatistics(config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
    /**
     * Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
    **/
    GetStorageCommitmentId(req: operations.GetStorageCommitmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetStorageCommitmentIdResponse>;
    /**
     * List the Orthanc identifiers of all the available DICOM studies
    **/
    GetStudies(req: operations.GetStudiesRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesResponse>;
    /**
     * Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesId(req: operations.GetStudiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdResponse>;
    /**
     * Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    GetStudiesIdArchive(req: operations.GetStudiesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdArchiveResponse>;
    /**
     * Get the list of attachments that are associated with the given study
    **/
    GetStudiesIdAttachments(req: operations.GetStudiesIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsResponse>;
    /**
     * Get the list of the operations that are available for attachments associated with the given study
    **/
    GetStudiesIdAttachmentsName(req: operations.GetStudiesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    GetStudiesIdAttachmentsNameCompressedData(req: operations.GetStudiesIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameCompressedDataResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    GetStudiesIdAttachmentsNameCompressedMd5(req: operations.GetStudiesIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameCompressedMd5Response>;
    /**
     * Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    GetStudiesIdAttachmentsNameCompressedSize(req: operations.GetStudiesIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameCompressedSizeResponse>;
    /**
     * Get the (binary) content of one attachment associated with the given study
    **/
    GetStudiesIdAttachmentsNameData(req: operations.GetStudiesIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameDataResponse>;
    /**
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    GetStudiesIdAttachmentsNameIsCompressed(req: operations.GetStudiesIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameIsCompressedResponse>;
    /**
     * Get the MD5 hash of one attachment associated with the given study
    **/
    GetStudiesIdAttachmentsNameMd5(req: operations.GetStudiesIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameMd5Response>;
    /**
     * Get the size of one attachment associated with the given study
    **/
    GetStudiesIdAttachmentsNameSize(req: operations.GetStudiesIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameSizeResponse>;
    /**
     * Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdInstances(req: operations.GetStudiesIdInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdInstancesResponse>;
    /**
     * Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdInstancesTags(req: operations.GetStudiesIdInstancesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdInstancesTagsResponse>;
    /**
     * Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    GetStudiesIdMedia(req: operations.GetStudiesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdMediaResponse>;
    /**
     * Get the list of metadata that are associated with the given study
    **/
    GetStudiesIdMetadata(req: operations.GetStudiesIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdMetadataResponse>;
    /**
     * Get the value of a metadata that is associated with the given study
    **/
    GetStudiesIdMetadataName(req: operations.GetStudiesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdMetadataNameResponse>;
    /**
     * Get the study module of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdModule(req: operations.GetStudiesIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdModuleResponse>;
    /**
     * Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdModulePatient(req: operations.GetStudiesIdModulePatientRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdModulePatientResponse>;
    /**
     * Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdPatient(req: operations.GetStudiesIdPatientRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdPatientResponse>;
    /**
     * Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdSeries(req: operations.GetStudiesIdSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdSeriesResponse>;
    /**
     * Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    GetStudiesIdSharedTags(req: operations.GetStudiesIdSharedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdSharedTagsResponse>;
    /**
     * Get statistics about the given study
    **/
    GetStudiesIdStatistics(req: operations.GetStudiesIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdStatisticsResponse>;
    /**
     * Get system information about Orthanc
    **/
    GetSystem(config?: AxiosRequestConfig): Promise<operations.GetSystemResponse>;
    /**
     * List the available operations under URI `/tools/`
    **/
    GetTools(config?: AxiosRequestConfig): Promise<operations.GetToolsResponse>;
    /**
     * Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.
    **/
    GetToolsAcceptedTransferSyntaxes(config?: AxiosRequestConfig): Promise<operations.GetToolsAcceptedTransferSyntaxesResponse>;
    /**
     * Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
    **/
    GetToolsDefaultEncoding(config?: AxiosRequestConfig): Promise<operations.GetToolsDefaultEncodingResponse>;
    /**
     * Get the DICOM conformance statement of Orthanc
    **/
    GetToolsDicomConformance(config?: AxiosRequestConfig): Promise<operations.GetToolsDicomConformanceResponse>;
    /**
     * Generate a random DICOM identifier
    **/
    GetToolsGenerateUid(req: operations.GetToolsGenerateUidRequest, config?: AxiosRequestConfig): Promise<operations.GetToolsGenerateUidResponse>;
    /**
     * Get the main log level of Orthanc
    **/
    GetToolsLogLevel(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelResponse>;
    /**
     * Get the log level of the log category `dicom`
    **/
    GetToolsLogLevelDicom(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelDicomResponse>;
    /**
     * Get the log level of the log category `generic`
    **/
    GetToolsLogLevelGeneric(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelGenericResponse>;
    /**
     * Get the log level of the log category `http`
    **/
    GetToolsLogLevelHttp(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelHttpResponse>;
    /**
     * Get the log level of the log category `jobs`
    **/
    GetToolsLogLevelJobs(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelJobsResponse>;
    /**
     * Get the log level of the log category `lua`
    **/
    GetToolsLogLevelLua(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelLuaResponse>;
    /**
     * Get the log level of the log category `plugins`
    **/
    GetToolsLogLevelPlugins(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelPluginsResponse>;
    /**
     * Get the log level of the log category `sqlite`
    **/
    GetToolsLogLevelSqlite(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelSqliteResponse>;
    /**
     * Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`
    **/
    GetToolsMetrics(config?: AxiosRequestConfig): Promise<operations.GetToolsMetricsResponse>;
    /**
     * Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus
    **/
    GetToolsMetricsPrometheus(config?: AxiosRequestConfig): Promise<operations.GetToolsMetricsPrometheusResponse>;
    /**
     * Get UTC time
    **/
    GetToolsNow(config?: AxiosRequestConfig): Promise<operations.GetToolsNowResponse>;
    /**
     * Get local time
    **/
    GetToolsNowLocal(config?: AxiosRequestConfig): Promise<operations.GetToolsNowLocalResponse>;
    /**
     * Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?
    **/
    GetToolsUnknownSopClassAccepted(config?: AxiosRequestConfig): Promise<operations.GetToolsUnknownSopClassAcceptedResponse>;
    /**
     * Upload DICOM instances
    **/
    PostInstances(req: operations.PostInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesResponse>;
    /**
     * Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance
    **/
    PostInstancesIdAnonymize(req: operations.PostInstancesIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAnonymizeResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostInstancesIdAttachmentsNameCompress(req: operations.PostInstancesIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAttachmentsNameCompressResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostInstancesIdAttachmentsNameUncompress(req: operations.PostInstancesIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAttachmentsNameUncompressResponse>;
    /**
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    PostInstancesIdAttachmentsNameVerifyMd5(req: operations.PostInstancesIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAttachmentsNameVerifyMd5Response>;
    /**
     * Write the DICOM file onto the filesystem where Orthanc is running
    **/
    PostInstancesIdExport(req: operations.PostInstancesIdExportRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdExportResponse>;
    /**
     * Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance
    **/
    PostInstancesIdModify(req: operations.PostInstancesIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdModifyResponse>;
    /**
     * Reconstruct the main DICOM tags of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    PostInstancesIdReconstruct(req: operations.PostInstancesIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdReconstructResponse>;
    /**
     * Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    PostJobsIdCancel(req: operations.PostJobsIdCancelRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdCancelResponse>;
    /**
     * Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    PostJobsIdPause(req: operations.PostJobsIdPauseRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdPauseResponse>;
    /**
     * Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    PostJobsIdResubmit(req: operations.PostJobsIdResubmitRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdResubmitResponse>;
    /**
     * Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    PostJobsIdResume(req: operations.PostJobsIdResumeRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdResumeResponse>;
    /**
     * Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo
    **/
    PostModalitiesIdEcho(req: operations.PostModalitiesIdEchoRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdEchoResponse>;
    /**
     * Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.
    **/
    PostModalitiesIdFind(req: operations.PostModalitiesIdFindRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindResponse>;
    /**
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.
    **/
    PostModalitiesIdFindInstance(req: operations.PostModalitiesIdFindInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindInstanceResponse>;
    /**
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.
    **/
    PostModalitiesIdFindPatient(req: operations.PostModalitiesIdFindPatientRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindPatientResponse>;
    /**
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.
    **/
    PostModalitiesIdFindSeries(req: operations.PostModalitiesIdFindSeriesRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindSeriesResponse>;
    /**
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.
    **/
    PostModalitiesIdFindStudy(req: operations.PostModalitiesIdFindStudyRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindStudyResponse>;
    /**
     * Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL
    **/
    PostModalitiesIdFindWorklist(req: operations.PostModalitiesIdFindWorklistRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindWorklistResponse>;
    /**
     * Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move
    **/
    PostModalitiesIdMove(req: operations.PostModalitiesIdMoveRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdMoveResponse>;
    /**
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
    **/
    PostModalitiesIdQuery(req: operations.PostModalitiesIdQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdQueryResponse>;
    /**
     * Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
    **/
    PostModalitiesIdStorageCommitment(req: operations.PostModalitiesIdStorageCommitmentRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdStorageCommitmentResponse>;
    /**
     * Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu
    **/
    PostModalitiesIdStore(req: operations.PostModalitiesIdStoreRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdStoreResponse>;
    /**
     * Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.
    **/
    PostModalitiesIdStoreStraight(req: operations.PostModalitiesIdStoreStraightRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdStoreStraightResponse>;
    /**
     * Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
    **/
    PostPatientsIdAnonymize(req: operations.PostPatientsIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAnonymizeResponse>;
    /**
     * Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    PostPatientsIdArchive(req: operations.PostPatientsIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdArchiveResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostPatientsIdAttachmentsNameCompress(req: operations.PostPatientsIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAttachmentsNameCompressResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostPatientsIdAttachmentsNameUncompress(req: operations.PostPatientsIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAttachmentsNameUncompressResponse>;
    /**
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    PostPatientsIdAttachmentsNameVerifyMd5(req: operations.PostPatientsIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAttachmentsNameVerifyMd5Response>;
    /**
     * Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    PostPatientsIdMedia(req: operations.PostPatientsIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdMediaResponse>;
    /**
     * Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
    **/
    PostPatientsIdModify(req: operations.PostPatientsIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdModifyResponse>;
    /**
     * Reconstruct the main DICOM tags of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    PostPatientsIdReconstruct(req: operations.PostPatientsIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdReconstructResponse>;
    /**
     * Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource
    **/
    PostPeersIdStore(req: operations.PostPeersIdStoreRequest, config?: AxiosRequestConfig): Promise<operations.PostPeersIdStoreResponse>;
    /**
     * Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.
    **/
    PostPeersIdStoreStraight(req: operations.PostPeersIdStoreStraightRequest, config?: AxiosRequestConfig): Promise<operations.PostPeersIdStoreStraightResponse>;
    /**
     * Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
    **/
    PostQueriesIdAnswersIndexQueryInstances(req: operations.PostQueriesIdAnswersIndexQueryInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexQueryInstancesResponse>;
    /**
     * Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
    **/
    PostQueriesIdAnswersIndexQuerySeries(req: operations.PostQueriesIdAnswersIndexQuerySeriesRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexQuerySeriesResponse>;
    /**
     * Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
    **/
    PostQueriesIdAnswersIndexQueryStudies(req: operations.PostQueriesIdAnswersIndexQueryStudiesRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexQueryStudiesResponse>;
    /**
     * Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
    **/
    PostQueriesIdAnswersIndexRetrieve(req: operations.PostQueriesIdAnswersIndexRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexRetrieveResponse>;
    /**
     * Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
    **/
    PostQueriesIdRetrieve(req: operations.PostQueriesIdRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdRetrieveResponse>;
    /**
     * Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
    **/
    PostSeriesIdAnonymize(req: operations.PostSeriesIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAnonymizeResponse>;
    /**
     * Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL
    **/
    PostSeriesIdArchive(req: operations.PostSeriesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdArchiveResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostSeriesIdAttachmentsNameCompress(req: operations.PostSeriesIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAttachmentsNameCompressResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostSeriesIdAttachmentsNameUncompress(req: operations.PostSeriesIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAttachmentsNameUncompressResponse>;
    /**
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    PostSeriesIdAttachmentsNameVerifyMd5(req: operations.PostSeriesIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAttachmentsNameVerifyMd5Response>;
    /**
     * Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL
    **/
    PostSeriesIdMedia(req: operations.PostSeriesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdMediaResponse>;
    /**
     * Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
    **/
    PostSeriesIdModify(req: operations.PostSeriesIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdModifyResponse>;
    /**
     * Reconstruct the main DICOM tags of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    PostSeriesIdReconstruct(req: operations.PostSeriesIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdReconstructResponse>;
    /**
     * Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances
    **/
    PostStorageCommitmentIdRemove(req: operations.PostStorageCommitmentIdRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostStorageCommitmentIdRemoveResponse>;
    /**
     * Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
    **/
    PostStudiesIdAnonymize(req: operations.PostStudiesIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAnonymizeResponse>;
    /**
     * Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL
    **/
    PostStudiesIdArchive(req: operations.PostStudiesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdArchiveResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostStudiesIdAttachmentsNameCompress(req: operations.PostStudiesIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAttachmentsNameCompressResponse>;
    /**
     * Change the compression scheme that is used to store an attachment.
    **/
    PostStudiesIdAttachmentsNameUncompress(req: operations.PostStudiesIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAttachmentsNameUncompressResponse>;
    /**
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    PostStudiesIdAttachmentsNameVerifyMd5(req: operations.PostStudiesIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAttachmentsNameVerifyMd5Response>;
    /**
     * Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL
    **/
    PostStudiesIdMedia(req: operations.PostStudiesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdMediaResponse>;
    /**
     * Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging
    **/
    PostStudiesIdMerge(req: operations.PostStudiesIdMergeRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdMergeResponse>;
    /**
     * Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
    **/
    PostStudiesIdModify(req: operations.PostStudiesIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdModifyResponse>;
    /**
     * Reconstruct the main DICOM tags of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    PostStudiesIdReconstruct(req: operations.PostStudiesIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdReconstructResponse>;
    /**
     * Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting
    **/
    PostStudiesIdSplit(req: operations.PostStudiesIdSplitRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdSplitResponse>;
    /**
     * Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
    **/
    PostToolsBulkAnonymize(req: operations.PostToolsBulkAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkAnonymizeResponse>;
    /**
     * Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.
    **/
    PostToolsBulkContent(req: operations.PostToolsBulkContentRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkContentResponse>;
    /**
     * Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
    **/
    PostToolsBulkDelete(req: operations.PostToolsBulkDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkDeleteResponse>;
    /**
     * Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
    **/
    PostToolsBulkModify(req: operations.PostToolsBulkModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkModifyResponse>;
    /**
     * Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
    **/
    PostToolsCreateArchive(req: operations.PostToolsCreateArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateArchiveResponse>;
    /**
     * Create one DICOM instance, and store it into Orthanc
    **/
    PostToolsCreateDicom(req: operations.PostToolsCreateDicomRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateDicomResponse>;
    /**
     * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
    **/
    PostToolsCreateMedia(req: operations.PostToolsCreateMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateMediaResponse>;
    /**
     * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
    **/
    PostToolsCreateMediaExtended(req: operations.PostToolsCreateMediaExtendedRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateMediaExtendedResponse>;
    /**
     * Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)
    **/
    PostToolsDicomEcho(req: operations.PostToolsDicomEchoRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsDicomEchoResponse>;
    /**
     * Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`
    **/
    PostToolsExecuteScript(req: operations.PostToolsExecuteScriptRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsExecuteScriptResponse>;
    /**
     * This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc
    **/
    PostToolsFind(req: operations.PostToolsFindRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsFindResponse>;
    /**
     * Remove all the attachments of the type "DICOM-as-JSON" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area
    **/
    PostToolsInvalidateTags(config?: AxiosRequestConfig): Promise<operations.PostToolsInvalidateTagsResponse>;
    /**
     * This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources
    **/
    PostToolsLookup(req: operations.PostToolsLookupRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsLookupResponse>;
    /**
     * Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated.
    **/
    PostToolsReconstruct(config?: AxiosRequestConfig): Promise<operations.PostToolsReconstructResponse>;
    /**
     * Restart Orthanc
    **/
    PostToolsReset(config?: AxiosRequestConfig): Promise<operations.PostToolsResetResponse>;
    /**
     * Shutdown Orthanc
    **/
    PostToolsShutdown(config?: AxiosRequestConfig): Promise<operations.PostToolsShutdownResponse>;
    /**
     * Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    PutInstancesIdAttachmentsName(req: operations.PutInstancesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutInstancesIdAttachmentsNameResponse>;
    /**
     * Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    PutInstancesIdMetadataName(req: operations.PutInstancesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutInstancesIdMetadataNameResponse>;
    /**
     * Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    PutModalitiesId(req: operations.PutModalitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutModalitiesIdResponse>;
    /**
     * Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    PutPatientsIdAttachmentsName(req: operations.PutPatientsIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutPatientsIdAttachmentsNameResponse>;
    /**
     * Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    PutPatientsIdMetadataName(req: operations.PutPatientsIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutPatientsIdMetadataNameResponse>;
    /**
     * Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`
    **/
    PutPatientsIdProtected(req: operations.PutPatientsIdProtectedRequest, config?: AxiosRequestConfig): Promise<operations.PutPatientsIdProtectedResponse>;
    /**
     * Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    PutPeersId(req: operations.PutPeersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPeersIdResponse>;
    /**
     * Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    PutSeriesIdAttachmentsName(req: operations.PutSeriesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSeriesIdAttachmentsNameResponse>;
    /**
     * Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    PutSeriesIdMetadataName(req: operations.PutSeriesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSeriesIdMetadataNameResponse>;
    /**
     * Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    PutStudiesIdAttachmentsName(req: operations.PutStudiesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutStudiesIdAttachmentsNameResponse>;
    /**
     * Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    PutStudiesIdMetadataName(req: operations.PutStudiesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutStudiesIdMetadataNameResponse>;
    /**
     * Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP
    **/
    PutToolsAcceptedTransferSyntaxes(req: operations.PutToolsAcceptedTransferSyntaxesRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsAcceptedTransferSyntaxesResponse>;
    /**
     * Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
    **/
    PutToolsDefaultEncoding(req: operations.PutToolsDefaultEncodingRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsDefaultEncodingResponse>;
    /**
     * Set the main log level of Orthanc
    **/
    PutToolsLogLevel(req: operations.PutToolsLogLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelResponse>;
    /**
     * Set the log level of the log category `dicom`
    **/
    PutToolsLogLevelDicom(req: operations.PutToolsLogLevelDicomRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelDicomResponse>;
    /**
     * Set the log level of the log category `generic`
    **/
    PutToolsLogLevelGeneric(req: operations.PutToolsLogLevelGenericRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelGenericResponse>;
    /**
     * Set the log level of the log category `http`
    **/
    PutToolsLogLevelHttp(req: operations.PutToolsLogLevelHttpRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelHttpResponse>;
    /**
     * Set the log level of the log category `jobs`
    **/
    PutToolsLogLevelJobs(req: operations.PutToolsLogLevelJobsRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelJobsResponse>;
    /**
     * Set the log level of the log category `lua`
    **/
    PutToolsLogLevelLua(req: operations.PutToolsLogLevelLuaRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelLuaResponse>;
    /**
     * Set the log level of the log category `plugins`
    **/
    PutToolsLogLevelPlugins(req: operations.PutToolsLogLevelPluginsRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelPluginsResponse>;
    /**
     * Set the log level of the log category `sqlite`
    **/
    PutToolsLogLevelSqlite(req: operations.PutToolsLogLevelSqliteRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelSqliteResponse>;
    /**
     * Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`
    **/
    PutToolsMetrics(req: operations.PutToolsMetricsRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsMetricsResponse>;
    /**
     * Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID
    **/
    PutToolsUnknownSopClassAccepted(req: operations.PutToolsUnknownSopClassAcceptedRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsUnknownSopClassAcceptedResponse>;
}
export {};
