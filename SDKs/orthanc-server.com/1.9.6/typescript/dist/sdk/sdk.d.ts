import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://demo.orthanc-server.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteChanges - Clear changes
     *
     * Clear the full history stored in the changes log
    **/
    deleteChanges(config?: AxiosRequestConfig): Promise<operations.DeleteChangesResponse>;
    /**
     * deleteExports - Clear exports
     *
     * Clear the full history stored in the exports log
    **/
    deleteExports(config?: AxiosRequestConfig): Promise<operations.DeleteExportsResponse>;
    /**
     * deleteInstancesId - Delete some instance
     *
     * Delete the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    deleteInstancesId(req: operations.DeleteInstancesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstancesIdResponse>;
    /**
     * deleteInstancesIdAttachmentsName - Delete attachment
     *
     * Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    deleteInstancesIdAttachmentsName(req: operations.DeleteInstancesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstancesIdAttachmentsNameResponse>;
    /**
     * deleteInstancesIdMetadataName - Delete metadata
     *
     * Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    deleteInstancesIdMetadataName(req: operations.DeleteInstancesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstancesIdMetadataNameResponse>;
    /**
     * deleteModalitiesId - Delete DICOM modality
     *
     * Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    deleteModalitiesId(req: operations.DeleteModalitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModalitiesIdResponse>;
    /**
     * deletePatientsId - Delete some patient
     *
     * Delete the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    deletePatientsId(req: operations.DeletePatientsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePatientsIdResponse>;
    /**
     * deletePatientsIdAttachmentsName - Delete attachment
     *
     * Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    deletePatientsIdAttachmentsName(req: operations.DeletePatientsIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeletePatientsIdAttachmentsNameResponse>;
    /**
     * deletePatientsIdMetadataName - Delete metadata
     *
     * Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    deletePatientsIdMetadataName(req: operations.DeletePatientsIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeletePatientsIdMetadataNameResponse>;
    /**
     * deletePeersId - Delete Orthanc peer
     *
     * Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    deletePeersId(req: operations.DeletePeersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePeersIdResponse>;
    /**
     * deleteQueriesId - Delete a query
     *
     * Delete the query/retrieve operation whose identifier is provided in the URL
    **/
    deleteQueriesId(req: operations.DeleteQueriesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueriesIdResponse>;
    /**
     * deleteSeriesId - Delete some series
     *
     * Delete the DICOM series whose Orthanc identifier is provided in the URL
    **/
    deleteSeriesId(req: operations.DeleteSeriesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSeriesIdResponse>;
    /**
     * deleteSeriesIdAttachmentsName - Delete attachment
     *
     * Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    deleteSeriesIdAttachmentsName(req: operations.DeleteSeriesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSeriesIdAttachmentsNameResponse>;
    /**
     * deleteSeriesIdMetadataName - Delete metadata
     *
     * Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    deleteSeriesIdMetadataName(req: operations.DeleteSeriesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSeriesIdMetadataNameResponse>;
    /**
     * deleteStudiesId - Delete some study
     *
     * Delete the DICOM study whose Orthanc identifier is provided in the URL
    **/
    deleteStudiesId(req: operations.DeleteStudiesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudiesIdResponse>;
    /**
     * deleteStudiesIdAttachmentsName - Delete attachment
     *
     * Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
    **/
    deleteStudiesIdAttachmentsName(req: operations.DeleteStudiesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudiesIdAttachmentsNameResponse>;
    /**
     * deleteStudiesIdMetadataName - Delete metadata
     *
     * Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
    **/
    deleteStudiesIdMetadataName(req: operations.DeleteStudiesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudiesIdMetadataNameResponse>;
    /**
     * getChanges - List changes
     *
     * Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.
    **/
    getChanges(req: operations.GetChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetChangesResponse>;
    /**
     * getExports - List exports
     *
     * For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.
    **/
    getExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * getInstances - List the available instances
     *
     * List the Orthanc identifiers of all the available DICOM instances
    **/
    getInstances(req: operations.GetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesResponse>;
    /**
     * getInstancesId - Get information about some instance
     *
     * Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    getInstancesId(req: operations.GetInstancesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdResponse>;
    /**
     * getInstancesIdAttachments - List attachments
     *
     * Get the list of attachments that are associated with the given instance
    **/
    getInstancesIdAttachments(req: operations.GetInstancesIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsResponse>;
    /**
     * getInstancesIdAttachmentsName - List operations on attachments
     *
     * Get the list of the operations that are available for attachments associated with the given instance
    **/
    getInstancesIdAttachmentsName(req: operations.GetInstancesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameResponse>;
    /**
     * getInstancesIdAttachmentsNameCompressedData - Get attachment (no decompression)
     *
     * Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    getInstancesIdAttachmentsNameCompressedData(req: operations.GetInstancesIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameCompressedDataResponse>;
    /**
     * getInstancesIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
     *
     * Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    getInstancesIdAttachmentsNameCompressedMd5(req: operations.GetInstancesIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameCompressedMd5Response>;
    /**
     * getInstancesIdAttachmentsNameCompressedSize - Get size of attachment on disk
     *
     * Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    getInstancesIdAttachmentsNameCompressedSize(req: operations.GetInstancesIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameCompressedSizeResponse>;
    /**
     * getInstancesIdAttachmentsNameData - Get attachment
     *
     * Get the (binary) content of one attachment associated with the given instance
    **/
    getInstancesIdAttachmentsNameData(req: operations.GetInstancesIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameDataResponse>;
    /**
     * getInstancesIdAttachmentsNameIsCompressed - Is attachment compressed?
     *
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    getInstancesIdAttachmentsNameIsCompressed(req: operations.GetInstancesIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameIsCompressedResponse>;
    /**
     * getInstancesIdAttachmentsNameMd5 - Get MD5 of attachment
     *
     * Get the MD5 hash of one attachment associated with the given instance
    **/
    getInstancesIdAttachmentsNameMd5(req: operations.GetInstancesIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameMd5Response>;
    /**
     * getInstancesIdAttachmentsNameSize - Get size of attachment
     *
     * Get the size of one attachment associated with the given instance
    **/
    getInstancesIdAttachmentsNameSize(req: operations.GetInstancesIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdAttachmentsNameSizeResponse>;
    /**
     * getInstancesIdContent - Get raw tag
     *
     * Get the raw content of one DICOM tag in the hierarchy of DICOM dataset
    **/
    getInstancesIdContent(req: operations.GetInstancesIdContentRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdContentResponse>;
    /**
     * getInstancesIdFile - Download DICOM
     *
     * Download one DICOM instance
    **/
    getInstancesIdFile(req: operations.GetInstancesIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFileResponse>;
    /**
     * getInstancesIdFrames - List available frames
     *
     * List the frames that are available in the DICOM instance of interest
    **/
    getInstancesIdFrames(req: operations.GetInstancesIdFramesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesResponse>;
    /**
     * getInstancesIdFramesFrame - List operations
     *
     * List the available operations under URI `/instances/{id}/frames/{frame}/`
    **/
    getInstancesIdFramesFrame(req: operations.GetInstancesIdFramesFrameRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameResponse>;
    /**
     * getInstancesIdFramesFrameImageInt16 - Decode a frame (int16)
     *
     * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
    **/
    getInstancesIdFramesFrameImageInt16(req: operations.GetInstancesIdFramesFrameImageInt16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameImageInt16Response>;
    /**
     * getInstancesIdFramesFrameImageUint16 - Decode a frame (uint16)
     *
     * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
    **/
    getInstancesIdFramesFrameImageUint16(req: operations.GetInstancesIdFramesFrameImageUint16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameImageUint16Response>;
    /**
     * getInstancesIdFramesFrameImageUint8 - Decode a frame (uint8)
     *
     * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
    **/
    getInstancesIdFramesFrameImageUint8(req: operations.GetInstancesIdFramesFrameImageUint8Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameImageUint8Response>;
    /**
     * getInstancesIdFramesFrameMatlab - Decode frame for Matlab
     *
     * Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
    **/
    getInstancesIdFramesFrameMatlab(req: operations.GetInstancesIdFramesFrameMatlabRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameMatlabResponse>;
    /**
     * getInstancesIdFramesFramePreview - Decode a frame (preview)
     *
     * Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
    **/
    getInstancesIdFramesFramePreview(req: operations.GetInstancesIdFramesFramePreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFramePreviewResponse>;
    /**
     * getInstancesIdFramesFrameRaw - Access raw frame
     *
     * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.
    **/
    getInstancesIdFramesFrameRaw(req: operations.GetInstancesIdFramesFrameRawRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameRawResponse>;
    /**
     * getInstancesIdFramesFrameRawGz - Access raw frame (compressed)
     *
     * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip
    **/
    getInstancesIdFramesFrameRawGz(req: operations.GetInstancesIdFramesFrameRawGzRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameRawGzResponse>;
    /**
     * getInstancesIdFramesFrameRendered - Render a frame
     *
     * Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
    **/
    getInstancesIdFramesFrameRendered(req: operations.GetInstancesIdFramesFrameRenderedRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdFramesFrameRenderedResponse>;
    /**
     * getInstancesIdHeader - Get DICOM meta-header
     *
     * Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
    **/
    getInstancesIdHeader(req: operations.GetInstancesIdHeaderRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdHeaderResponse>;
    /**
     * getInstancesIdImageInt16 - Decode an image (int16)
     *
     * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
    **/
    getInstancesIdImageInt16(req: operations.GetInstancesIdImageInt16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdImageInt16Response>;
    /**
     * getInstancesIdImageUint16 - Decode an image (uint16)
     *
     * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
    **/
    getInstancesIdImageUint16(req: operations.GetInstancesIdImageUint16Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdImageUint16Response>;
    /**
     * getInstancesIdImageUint8 - Decode an image (uint8)
     *
     * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
    **/
    getInstancesIdImageUint8(req: operations.GetInstancesIdImageUint8Request, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdImageUint8Response>;
    /**
     * getInstancesIdMatlab - Decode frame for Matlab
     *
     * Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
    **/
    getInstancesIdMatlab(req: operations.GetInstancesIdMatlabRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdMatlabResponse>;
    /**
     * getInstancesIdMetadata - List metadata
     *
     * Get the list of metadata that are associated with the given instance
    **/
    getInstancesIdMetadata(req: operations.GetInstancesIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdMetadataResponse>;
    /**
     * getInstancesIdMetadataName - Get metadata
     *
     * Get the value of a metadata that is associated with the given instance
    **/
    getInstancesIdMetadataName(req: operations.GetInstancesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdMetadataNameResponse>;
    /**
     * getInstancesIdModule - Get instance module
     *
     * Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    getInstancesIdModule(req: operations.GetInstancesIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdModuleResponse>;
    /**
     * getInstancesIdPatient - Get parent patient
     *
     * Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    getInstancesIdPatient(req: operations.GetInstancesIdPatientRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdPatientResponse>;
    /**
     * getInstancesIdPdf - Get embedded PDF
     *
     * Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.
    **/
    getInstancesIdPdf(req: operations.GetInstancesIdPdfRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdPdfResponse>;
    /**
     * getInstancesIdPreview - Decode an image (preview)
     *
     * Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
    **/
    getInstancesIdPreview(req: operations.GetInstancesIdPreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdPreviewResponse>;
    /**
     * getInstancesIdRendered - Render an image
     *
     * Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
    **/
    getInstancesIdRendered(req: operations.GetInstancesIdRenderedRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdRenderedResponse>;
    /**
     * getInstancesIdSeries - Get parent series
     *
     * Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    getInstancesIdSeries(req: operations.GetInstancesIdSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdSeriesResponse>;
    /**
     * getInstancesIdSimplifiedTags - Get human-readable tags
     *
     * Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)
    **/
    getInstancesIdSimplifiedTags(req: operations.GetInstancesIdSimplifiedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdSimplifiedTagsResponse>;
    /**
     * getInstancesIdStatistics - Get instance statistics
     *
     * Get statistics about the given instance
    **/
    getInstancesIdStatistics(req: operations.GetInstancesIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdStatisticsResponse>;
    /**
     * getInstancesIdStudy - Get parent study
     *
     * Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL
    **/
    getInstancesIdStudy(req: operations.GetInstancesIdStudyRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdStudyResponse>;
    /**
     * getInstancesIdTags - Get DICOM tags
     *
     * Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
    **/
    getInstancesIdTags(req: operations.GetInstancesIdTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesIdTagsResponse>;
    /**
     * getJobs - List jobs
     *
     * List all the available jobs
    **/
    getJobs(req: operations.GetJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsResponse>;
    /**
     * getJobsId - Get job
     *
     * Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    getJobsId(req: operations.GetJobsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsIdResponse>;
    /**
     * getJobsIdKey - Get job output
     *
     * Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).
    **/
    getJobsIdKey(req: operations.GetJobsIdKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsIdKeyResponse>;
    /**
     * getModalities - List DICOM modalities
     *
     * List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.
    **/
    getModalities(req: operations.GetModalitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetModalitiesResponse>;
    /**
     * getModalitiesId - List operations on modality
     *
     * List the operations that are available for a DICOM modality.
    **/
    getModalitiesId(req: operations.GetModalitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetModalitiesIdResponse>;
    /**
     * getModalitiesIdConfiguration - Get modality configuration
     *
     * Get detailed information about the configuration of some DICOM modality
    **/
    getModalitiesIdConfiguration(req: operations.GetModalitiesIdConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetModalitiesIdConfigurationResponse>;
    /**
     * getPatients - List the available patients
     *
     * List the Orthanc identifiers of all the available DICOM patients
    **/
    getPatients(req: operations.GetPatientsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsResponse>;
    /**
     * getPatientsId - Get information about some patient
     *
     * Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsId(req: operations.GetPatientsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdResponse>;
    /**
     * getPatientsIdArchive - Create ZIP archive
     *
     * Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    getPatientsIdArchive(req: operations.GetPatientsIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdArchiveResponse>;
    /**
     * getPatientsIdAttachments - List attachments
     *
     * Get the list of attachments that are associated with the given patient
    **/
    getPatientsIdAttachments(req: operations.GetPatientsIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsResponse>;
    /**
     * getPatientsIdAttachmentsName - List operations on attachments
     *
     * Get the list of the operations that are available for attachments associated with the given patient
    **/
    getPatientsIdAttachmentsName(req: operations.GetPatientsIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameResponse>;
    /**
     * getPatientsIdAttachmentsNameCompressedData - Get attachment (no decompression)
     *
     * Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    getPatientsIdAttachmentsNameCompressedData(req: operations.GetPatientsIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameCompressedDataResponse>;
    /**
     * getPatientsIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
     *
     * Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    getPatientsIdAttachmentsNameCompressedMd5(req: operations.GetPatientsIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameCompressedMd5Response>;
    /**
     * getPatientsIdAttachmentsNameCompressedSize - Get size of attachment on disk
     *
     * Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    getPatientsIdAttachmentsNameCompressedSize(req: operations.GetPatientsIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameCompressedSizeResponse>;
    /**
     * getPatientsIdAttachmentsNameData - Get attachment
     *
     * Get the (binary) content of one attachment associated with the given patient
    **/
    getPatientsIdAttachmentsNameData(req: operations.GetPatientsIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameDataResponse>;
    /**
     * getPatientsIdAttachmentsNameIsCompressed - Is attachment compressed?
     *
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    getPatientsIdAttachmentsNameIsCompressed(req: operations.GetPatientsIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameIsCompressedResponse>;
    /**
     * getPatientsIdAttachmentsNameMd5 - Get MD5 of attachment
     *
     * Get the MD5 hash of one attachment associated with the given patient
    **/
    getPatientsIdAttachmentsNameMd5(req: operations.GetPatientsIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameMd5Response>;
    /**
     * getPatientsIdAttachmentsNameSize - Get size of attachment
     *
     * Get the size of one attachment associated with the given patient
    **/
    getPatientsIdAttachmentsNameSize(req: operations.GetPatientsIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdAttachmentsNameSizeResponse>;
    /**
     * getPatientsIdInstances - Get child instances
     *
     * Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsIdInstances(req: operations.GetPatientsIdInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdInstancesResponse>;
    /**
     * getPatientsIdInstancesTags - Get tags of instances
     *
     * Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsIdInstancesTags(req: operations.GetPatientsIdInstancesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdInstancesTagsResponse>;
    /**
     * getPatientsIdMedia - Create DICOMDIR media
     *
     * Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    getPatientsIdMedia(req: operations.GetPatientsIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdMediaResponse>;
    /**
     * getPatientsIdMetadata - List metadata
     *
     * Get the list of metadata that are associated with the given patient
    **/
    getPatientsIdMetadata(req: operations.GetPatientsIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdMetadataResponse>;
    /**
     * getPatientsIdMetadataName - Get metadata
     *
     * Get the value of a metadata that is associated with the given patient
    **/
    getPatientsIdMetadataName(req: operations.GetPatientsIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdMetadataNameResponse>;
    /**
     * getPatientsIdModule - Get patient module
     *
     * Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsIdModule(req: operations.GetPatientsIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdModuleResponse>;
    /**
     * getPatientsIdProtected - Is the patient protected against recycling?
     *
     * Is the patient protected against recycling?
    **/
    getPatientsIdProtected(req: operations.GetPatientsIdProtectedRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdProtectedResponse>;
    /**
     * getPatientsIdSeries - Get child series
     *
     * Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsIdSeries(req: operations.GetPatientsIdSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdSeriesResponse>;
    /**
     * getPatientsIdSharedTags - Get shared tags
     *
     * Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsIdSharedTags(req: operations.GetPatientsIdSharedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdSharedTagsResponse>;
    /**
     * getPatientsIdStatistics - Get patient statistics
     *
     * Get statistics about the given patient
    **/
    getPatientsIdStatistics(req: operations.GetPatientsIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdStatisticsResponse>;
    /**
     * getPatientsIdStudies - Get child studies
     *
     * Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    getPatientsIdStudies(req: operations.GetPatientsIdStudiesRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientsIdStudiesResponse>;
    /**
     * getPeers - List Orthanc peers
     *
     * List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.
    **/
    getPeers(req: operations.GetPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersResponse>;
    /**
     * getPeersId - List operations on peer
     *
     * List the operations that are available for an Orthanc peer.
    **/
    getPeersId(req: operations.GetPeersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersIdResponse>;
    /**
     * getPeersIdConfiguration - Get peer configuration
     *
     * Get detailed information about the configuration of some Orthanc peer
    **/
    getPeersIdConfiguration(req: operations.GetPeersIdConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersIdConfigurationResponse>;
    /**
     * getPeersIdSystem - Get peer system information
     *
     * Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.
    **/
    getPeersIdSystem(req: operations.GetPeersIdSystemRequest, config?: AxiosRequestConfig): Promise<operations.GetPeersIdSystemResponse>;
    /**
     * getPlugins - List plugins
     *
     * List all the installed plugins
    **/
    getPlugins(config?: AxiosRequestConfig): Promise<operations.GetPluginsResponse>;
    /**
     * getPluginsExplorerJs - JavaScript extensions to Orthanc Explorer
     *
     * Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.
    **/
    getPluginsExplorerJs(config?: AxiosRequestConfig): Promise<operations.GetPluginsExplorerJsResponse>;
    /**
     * getPluginsId - Get plugin
     *
     * Get system information about the plugin whose identifier is provided in the URL
    **/
    getPluginsId(req: operations.GetPluginsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginsIdResponse>;
    /**
     * getQueries - List query/retrieve operations
     *
     * List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
    **/
    getQueries(config?: AxiosRequestConfig): Promise<operations.GetQueriesResponse>;
    /**
     * getQueriesId - List operations on a query
     *
     * List the available operations for the query/retrieve operation whose identifier is provided in the URL
    **/
    getQueriesId(req: operations.GetQueriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdResponse>;
    /**
     * getQueriesIdAnswers - List answers to a query
     *
     * List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL
    **/
    getQueriesIdAnswers(req: operations.GetQueriesIdAnswersRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdAnswersResponse>;
    /**
     * getQueriesIdAnswersIndex - List operations on an answer
     *
     * List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL
    **/
    getQueriesIdAnswersIndex(req: operations.GetQueriesIdAnswersIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdAnswersIndexResponse>;
    /**
     * getQueriesIdAnswersIndexContent - Get one answer
     *
     * Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL
    **/
    getQueriesIdAnswersIndexContent(req: operations.GetQueriesIdAnswersIndexContentRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdAnswersIndexContentResponse>;
    /**
     * getQueriesIdLevel - Get level of original query
     *
     * Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL
    **/
    getQueriesIdLevel(req: operations.GetQueriesIdLevelRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdLevelResponse>;
    /**
     * getQueriesIdModality - Get modality of original query
     *
     * Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL
    **/
    getQueriesIdModality(req: operations.GetQueriesIdModalityRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdModalityResponse>;
    /**
     * getQueriesIdQuery - Get original query arguments
     *
     * Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL
    **/
    getQueriesIdQuery(req: operations.GetQueriesIdQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueriesIdQueryResponse>;
    /**
     * getSeries - List the available series
     *
     * List the Orthanc identifiers of all the available DICOM series
    **/
    getSeries(req: operations.GetSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesResponse>;
    /**
     * getSeriesId - Get information about some series
     *
     * Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesId(req: operations.GetSeriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdResponse>;
    /**
     * getSeriesIdArchive - Create ZIP archive
     *
     * Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    getSeriesIdArchive(req: operations.GetSeriesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdArchiveResponse>;
    /**
     * getSeriesIdAttachments - List attachments
     *
     * Get the list of attachments that are associated with the given series
    **/
    getSeriesIdAttachments(req: operations.GetSeriesIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsResponse>;
    /**
     * getSeriesIdAttachmentsName - List operations on attachments
     *
     * Get the list of the operations that are available for attachments associated with the given series
    **/
    getSeriesIdAttachmentsName(req: operations.GetSeriesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameResponse>;
    /**
     * getSeriesIdAttachmentsNameCompressedData - Get attachment (no decompression)
     *
     * Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    getSeriesIdAttachmentsNameCompressedData(req: operations.GetSeriesIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameCompressedDataResponse>;
    /**
     * getSeriesIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
     *
     * Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    getSeriesIdAttachmentsNameCompressedMd5(req: operations.GetSeriesIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameCompressedMd5Response>;
    /**
     * getSeriesIdAttachmentsNameCompressedSize - Get size of attachment on disk
     *
     * Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    getSeriesIdAttachmentsNameCompressedSize(req: operations.GetSeriesIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameCompressedSizeResponse>;
    /**
     * getSeriesIdAttachmentsNameData - Get attachment
     *
     * Get the (binary) content of one attachment associated with the given series
    **/
    getSeriesIdAttachmentsNameData(req: operations.GetSeriesIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameDataResponse>;
    /**
     * getSeriesIdAttachmentsNameIsCompressed - Is attachment compressed?
     *
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    getSeriesIdAttachmentsNameIsCompressed(req: operations.GetSeriesIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameIsCompressedResponse>;
    /**
     * getSeriesIdAttachmentsNameMd5 - Get MD5 of attachment
     *
     * Get the MD5 hash of one attachment associated with the given series
    **/
    getSeriesIdAttachmentsNameMd5(req: operations.GetSeriesIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameMd5Response>;
    /**
     * getSeriesIdAttachmentsNameSize - Get size of attachment
     *
     * Get the size of one attachment associated with the given series
    **/
    getSeriesIdAttachmentsNameSize(req: operations.GetSeriesIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdAttachmentsNameSizeResponse>;
    /**
     * getSeriesIdInstances - Get child instances
     *
     * Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesIdInstances(req: operations.GetSeriesIdInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdInstancesResponse>;
    /**
     * getSeriesIdInstancesTags - Get tags of instances
     *
     * Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesIdInstancesTags(req: operations.GetSeriesIdInstancesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdInstancesTagsResponse>;
    /**
     * getSeriesIdMedia - Create DICOMDIR media
     *
     * Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    getSeriesIdMedia(req: operations.GetSeriesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdMediaResponse>;
    /**
     * getSeriesIdMetadata - List metadata
     *
     * Get the list of metadata that are associated with the given series
    **/
    getSeriesIdMetadata(req: operations.GetSeriesIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdMetadataResponse>;
    /**
     * getSeriesIdMetadataName - Get metadata
     *
     * Get the value of a metadata that is associated with the given series
    **/
    getSeriesIdMetadataName(req: operations.GetSeriesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdMetadataNameResponse>;
    /**
     * getSeriesIdModule - Get series module
     *
     * Get the series module of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesIdModule(req: operations.GetSeriesIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdModuleResponse>;
    /**
     * getSeriesIdOrderedSlices - Order the slices
     *
     * Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.
    **/
    getSeriesIdOrderedSlices(req: operations.GetSeriesIdOrderedSlicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdOrderedSlicesResponse>;
    /**
     * getSeriesIdPatient - Get parent patient
     *
     * Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesIdPatient(req: operations.GetSeriesIdPatientRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdPatientResponse>;
    /**
     * getSeriesIdSharedTags - Get shared tags
     *
     * Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesIdSharedTags(req: operations.GetSeriesIdSharedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdSharedTagsResponse>;
    /**
     * getSeriesIdStatistics - Get series statistics
     *
     * Get statistics about the given series
    **/
    getSeriesIdStatistics(req: operations.GetSeriesIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdStatisticsResponse>;
    /**
     * getSeriesIdStudy - Get parent study
     *
     * Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL
    **/
    getSeriesIdStudy(req: operations.GetSeriesIdStudyRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesIdStudyResponse>;
    /**
     * getStatistics - Get database statistics
     *
     * Get statistics related to the database of Orthanc
    **/
    getStatistics(config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
    /**
     * getStorageCommitmentId - Get storage commitment report
     *
     * Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
    **/
    getStorageCommitmentId(req: operations.GetStorageCommitmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetStorageCommitmentIdResponse>;
    /**
     * getStudies - List the available studies
     *
     * List the Orthanc identifiers of all the available DICOM studies
    **/
    getStudies(req: operations.GetStudiesRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesResponse>;
    /**
     * getStudiesId - Get information about some study
     *
     * Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesId(req: operations.GetStudiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdResponse>;
    /**
     * getStudiesIdArchive - Create ZIP archive
     *
     * Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    getStudiesIdArchive(req: operations.GetStudiesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdArchiveResponse>;
    /**
     * getStudiesIdAttachments - List attachments
     *
     * Get the list of attachments that are associated with the given study
    **/
    getStudiesIdAttachments(req: operations.GetStudiesIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsResponse>;
    /**
     * getStudiesIdAttachmentsName - List operations on attachments
     *
     * Get the list of the operations that are available for attachments associated with the given study
    **/
    getStudiesIdAttachmentsName(req: operations.GetStudiesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameResponse>;
    /**
     * getStudiesIdAttachmentsNameCompressedData - Get attachment (no decompression)
     *
     * Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.
    **/
    getStudiesIdAttachmentsNameCompressedData(req: operations.GetStudiesIdAttachmentsNameCompressedDataRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameCompressedDataResponse>;
    /**
     * getStudiesIdAttachmentsNameCompressedMd5 - Get MD5 of attachment on disk
     *
     * Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
    **/
    getStudiesIdAttachmentsNameCompressedMd5(req: operations.GetStudiesIdAttachmentsNameCompressedMd5Request, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameCompressedMd5Response>;
    /**
     * getStudiesIdAttachmentsNameCompressedSize - Get size of attachment on disk
     *
     * Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
    **/
    getStudiesIdAttachmentsNameCompressedSize(req: operations.GetStudiesIdAttachmentsNameCompressedSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameCompressedSizeResponse>;
    /**
     * getStudiesIdAttachmentsNameData - Get attachment
     *
     * Get the (binary) content of one attachment associated with the given study
    **/
    getStudiesIdAttachmentsNameData(req: operations.GetStudiesIdAttachmentsNameDataRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameDataResponse>;
    /**
     * getStudiesIdAttachmentsNameIsCompressed - Is attachment compressed?
     *
     * Test whether the attachment has been stored as a compressed file on the disk.
    **/
    getStudiesIdAttachmentsNameIsCompressed(req: operations.GetStudiesIdAttachmentsNameIsCompressedRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameIsCompressedResponse>;
    /**
     * getStudiesIdAttachmentsNameMd5 - Get MD5 of attachment
     *
     * Get the MD5 hash of one attachment associated with the given study
    **/
    getStudiesIdAttachmentsNameMd5(req: operations.GetStudiesIdAttachmentsNameMd5Request, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameMd5Response>;
    /**
     * getStudiesIdAttachmentsNameSize - Get size of attachment
     *
     * Get the size of one attachment associated with the given study
    **/
    getStudiesIdAttachmentsNameSize(req: operations.GetStudiesIdAttachmentsNameSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdAttachmentsNameSizeResponse>;
    /**
     * getStudiesIdInstances - Get child instances
     *
     * Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdInstances(req: operations.GetStudiesIdInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdInstancesResponse>;
    /**
     * getStudiesIdInstancesTags - Get tags of instances
     *
     * Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdInstancesTags(req: operations.GetStudiesIdInstancesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdInstancesTagsResponse>;
    /**
     * getStudiesIdMedia - Create DICOMDIR media
     *
     * Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
    **/
    getStudiesIdMedia(req: operations.GetStudiesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdMediaResponse>;
    /**
     * getStudiesIdMetadata - List metadata
     *
     * Get the list of metadata that are associated with the given study
    **/
    getStudiesIdMetadata(req: operations.GetStudiesIdMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdMetadataResponse>;
    /**
     * getStudiesIdMetadataName - Get metadata
     *
     * Get the value of a metadata that is associated with the given study
    **/
    getStudiesIdMetadataName(req: operations.GetStudiesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdMetadataNameResponse>;
    /**
     * getStudiesIdModule - Get study module
     *
     * Get the study module of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdModule(req: operations.GetStudiesIdModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdModuleResponse>;
    /**
     * getStudiesIdModulePatient - Get patient module of study
     *
     * Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdModulePatient(req: operations.GetStudiesIdModulePatientRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdModulePatientResponse>;
    /**
     * getStudiesIdPatient - Get parent patient
     *
     * Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdPatient(req: operations.GetStudiesIdPatientRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdPatientResponse>;
    /**
     * getStudiesIdSeries - Get child series
     *
     * Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdSeries(req: operations.GetStudiesIdSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdSeriesResponse>;
    /**
     * getStudiesIdSharedTags - Get shared tags
     *
     * Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
    **/
    getStudiesIdSharedTags(req: operations.GetStudiesIdSharedTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdSharedTagsResponse>;
    /**
     * getStudiesIdStatistics - Get study statistics
     *
     * Get statistics about the given study
    **/
    getStudiesIdStatistics(req: operations.GetStudiesIdStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiesIdStatisticsResponse>;
    /**
     * getSystem - Get system information
     *
     * Get system information about Orthanc
    **/
    getSystem(config?: AxiosRequestConfig): Promise<operations.GetSystemResponse>;
    /**
     * getTools - List operations
     *
     * List the available operations under URI `/tools/`
    **/
    getTools(config?: AxiosRequestConfig): Promise<operations.GetToolsResponse>;
    /**
     * getToolsAcceptedTransferSyntaxes - Get accepted transfer syntaxes
     *
     * Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.
    **/
    getToolsAcceptedTransferSyntaxes(config?: AxiosRequestConfig): Promise<operations.GetToolsAcceptedTransferSyntaxesResponse>;
    /**
     * getToolsDefaultEncoding - Get default encoding
     *
     * Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
    **/
    getToolsDefaultEncoding(config?: AxiosRequestConfig): Promise<operations.GetToolsDefaultEncodingResponse>;
    /**
     * getToolsDicomConformance - Get DICOM conformance
     *
     * Get the DICOM conformance statement of Orthanc
    **/
    getToolsDicomConformance(config?: AxiosRequestConfig): Promise<operations.GetToolsDicomConformanceResponse>;
    /**
     * getToolsGenerateUid - Generate an identifier
     *
     * Generate a random DICOM identifier
    **/
    getToolsGenerateUid(req: operations.GetToolsGenerateUidRequest, config?: AxiosRequestConfig): Promise<operations.GetToolsGenerateUidResponse>;
    /**
     * getToolsLogLevel - Get main log level
     *
     * Get the main log level of Orthanc
    **/
    getToolsLogLevel(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelResponse>;
    /**
     * getToolsLogLevelDicom - Get log level for `dicom`
     *
     * Get the log level of the log category `dicom`
    **/
    getToolsLogLevelDicom(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelDicomResponse>;
    /**
     * getToolsLogLevelGeneric - Get log level for `generic`
     *
     * Get the log level of the log category `generic`
    **/
    getToolsLogLevelGeneric(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelGenericResponse>;
    /**
     * getToolsLogLevelHttp - Get log level for `http`
     *
     * Get the log level of the log category `http`
    **/
    getToolsLogLevelHttp(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelHttpResponse>;
    /**
     * getToolsLogLevelJobs - Get log level for `jobs`
     *
     * Get the log level of the log category `jobs`
    **/
    getToolsLogLevelJobs(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelJobsResponse>;
    /**
     * getToolsLogLevelLua - Get log level for `lua`
     *
     * Get the log level of the log category `lua`
    **/
    getToolsLogLevelLua(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelLuaResponse>;
    /**
     * getToolsLogLevelPlugins - Get log level for `plugins`
     *
     * Get the log level of the log category `plugins`
    **/
    getToolsLogLevelPlugins(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelPluginsResponse>;
    /**
     * getToolsLogLevelSqlite - Get log level for `sqlite`
     *
     * Get the log level of the log category `sqlite`
    **/
    getToolsLogLevelSqlite(config?: AxiosRequestConfig): Promise<operations.GetToolsLogLevelSqliteResponse>;
    /**
     * getToolsMetrics - Are metrics collected?
     *
     * Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`
    **/
    getToolsMetrics(config?: AxiosRequestConfig): Promise<operations.GetToolsMetricsResponse>;
    /**
     * getToolsMetricsPrometheus - Get usage metrics
     *
     * Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus
    **/
    getToolsMetricsPrometheus(config?: AxiosRequestConfig): Promise<operations.GetToolsMetricsPrometheusResponse>;
    /**
     * getToolsNow - Get UTC time
     *
     * Get UTC time
    **/
    getToolsNow(config?: AxiosRequestConfig): Promise<operations.GetToolsNowResponse>;
    /**
     * getToolsNowLocal - Get local time
     *
     * Get local time
    **/
    getToolsNowLocal(config?: AxiosRequestConfig): Promise<operations.GetToolsNowLocalResponse>;
    /**
     * getToolsUnknownSopClassAccepted - Is unknown SOP class accepted?
     *
     * Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?
    **/
    getToolsUnknownSopClassAccepted(config?: AxiosRequestConfig): Promise<operations.GetToolsUnknownSopClassAcceptedResponse>;
    /**
     * postInstances - Upload DICOM instances
     *
     * Upload DICOM instances
    **/
    postInstances(req: operations.PostInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesResponse>;
    /**
     * postInstancesIdAnonymize - Anonymize instance
     *
     * Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance
    **/
    postInstancesIdAnonymize(req: operations.PostInstancesIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAnonymizeResponse>;
    /**
     * postInstancesIdAttachmentsNameCompress - Compress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postInstancesIdAttachmentsNameCompress(req: operations.PostInstancesIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAttachmentsNameCompressResponse>;
    /**
     * postInstancesIdAttachmentsNameUncompress - Uncompress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postInstancesIdAttachmentsNameUncompress(req: operations.PostInstancesIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAttachmentsNameUncompressResponse>;
    /**
     * postInstancesIdAttachmentsNameVerifyMd5 - Verify attachment
     *
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    postInstancesIdAttachmentsNameVerifyMd5(req: operations.PostInstancesIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdAttachmentsNameVerifyMd5Response>;
    /**
     * postInstancesIdExport - Write DICOM onto filesystem
     *
     * Write the DICOM file onto the filesystem where Orthanc is running
    **/
    postInstancesIdExport(req: operations.PostInstancesIdExportRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdExportResponse>;
    /**
     * postInstancesIdModify - Modify instance
     *
     * Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance
    **/
    postInstancesIdModify(req: operations.PostInstancesIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdModifyResponse>;
    /**
     * postInstancesIdReconstruct - Reconstruct tags of instance
     *
     * Reconstruct the main DICOM tags of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    postInstancesIdReconstruct(req: operations.PostInstancesIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostInstancesIdReconstructResponse>;
    /**
     * postJobsIdCancel - Cancel job
     *
     * Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    postJobsIdCancel(req: operations.PostJobsIdCancelRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdCancelResponse>;
    /**
     * postJobsIdPause - Pause job
     *
     * Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    postJobsIdPause(req: operations.PostJobsIdPauseRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdPauseResponse>;
    /**
     * postJobsIdResubmit - Resubmit job
     *
     * Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    postJobsIdResubmit(req: operations.PostJobsIdResubmitRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdResubmitResponse>;
    /**
     * postJobsIdResume - Resume job
     *
     * Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
    **/
    postJobsIdResume(req: operations.PostJobsIdResumeRequest, config?: AxiosRequestConfig): Promise<operations.PostJobsIdResumeResponse>;
    /**
     * postModalitiesIdEcho - Trigger C-ECHO SCU
     *
     * Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo
    **/
    postModalitiesIdEcho(req: operations.PostModalitiesIdEchoRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdEchoResponse>;
    /**
     * postModalitiesIdFind - Hierarchical C-FIND SCU
     *
     * Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.
    **/
    postModalitiesIdFind(req: operations.PostModalitiesIdFindRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindResponse>;
    /**
     * postModalitiesIdFindInstance - C-FIND SCU for instances
     *
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.
    **/
    postModalitiesIdFindInstance(req: operations.PostModalitiesIdFindInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindInstanceResponse>;
    /**
     * postModalitiesIdFindPatient - C-FIND SCU for patients
     *
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.
    **/
    postModalitiesIdFindPatient(req: operations.PostModalitiesIdFindPatientRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindPatientResponse>;
    /**
     * postModalitiesIdFindSeries - C-FIND SCU for series
     *
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.
    **/
    postModalitiesIdFindSeries(req: operations.PostModalitiesIdFindSeriesRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindSeriesResponse>;
    /**
     * postModalitiesIdFindStudy - C-FIND SCU for studies
     *
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.
    **/
    postModalitiesIdFindStudy(req: operations.PostModalitiesIdFindStudyRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindStudyResponse>;
    /**
     * postModalitiesIdFindWorklist - C-FIND SCU for worklist
     *
     * Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL
    **/
    postModalitiesIdFindWorklist(req: operations.PostModalitiesIdFindWorklistRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdFindWorklistResponse>;
    /**
     * postModalitiesIdMove - Trigger C-MOVE SCU
     *
     * Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move
    **/
    postModalitiesIdMove(req: operations.PostModalitiesIdMoveRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdMoveResponse>;
    /**
     * postModalitiesIdQuery - Trigger C-FIND SCU
     *
     * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
    **/
    postModalitiesIdQuery(req: operations.PostModalitiesIdQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdQueryResponse>;
    /**
     * postModalitiesIdStorageCommitment - Trigger storage commitment request
     *
     * Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
    **/
    postModalitiesIdStorageCommitment(req: operations.PostModalitiesIdStorageCommitmentRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdStorageCommitmentResponse>;
    /**
     * postModalitiesIdStore - Trigger C-STORE SCU
     *
     * Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu
    **/
    postModalitiesIdStore(req: operations.PostModalitiesIdStoreRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdStoreResponse>;
    /**
     * postModalitiesIdStoreStraight - Straight C-STORE SCU
     *
     * Synchronously send the DICOM instance in the POST body to the remote DICOM modality whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `storescu` from DCMTK or dcm4che.
    **/
    postModalitiesIdStoreStraight(req: operations.PostModalitiesIdStoreStraightRequest, config?: AxiosRequestConfig): Promise<operations.PostModalitiesIdStoreStraightResponse>;
    /**
     * postPatientsIdAnonymize - Anonymize patient
     *
     * Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
    **/
    postPatientsIdAnonymize(req: operations.PostPatientsIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAnonymizeResponse>;
    /**
     * postPatientsIdArchive - Create ZIP archive
     *
     * Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    postPatientsIdArchive(req: operations.PostPatientsIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdArchiveResponse>;
    /**
     * postPatientsIdAttachmentsNameCompress - Compress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postPatientsIdAttachmentsNameCompress(req: operations.PostPatientsIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAttachmentsNameCompressResponse>;
    /**
     * postPatientsIdAttachmentsNameUncompress - Uncompress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postPatientsIdAttachmentsNameUncompress(req: operations.PostPatientsIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAttachmentsNameUncompressResponse>;
    /**
     * postPatientsIdAttachmentsNameVerifyMd5 - Verify attachment
     *
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    postPatientsIdAttachmentsNameVerifyMd5(req: operations.PostPatientsIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdAttachmentsNameVerifyMd5Response>;
    /**
     * postPatientsIdMedia - Create DICOMDIR media
     *
     * Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL
    **/
    postPatientsIdMedia(req: operations.PostPatientsIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdMediaResponse>;
    /**
     * postPatientsIdModify - Modify patient
     *
     * Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
    **/
    postPatientsIdModify(req: operations.PostPatientsIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdModifyResponse>;
    /**
     * postPatientsIdReconstruct - Reconstruct tags of patient
     *
     * Reconstruct the main DICOM tags of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    postPatientsIdReconstruct(req: operations.PostPatientsIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostPatientsIdReconstructResponse>;
    /**
     * postPeersIdStore - Send to Orthanc peer
     *
     * Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource
    **/
    postPeersIdStore(req: operations.PostPeersIdStoreRequest, config?: AxiosRequestConfig): Promise<operations.PostPeersIdStoreResponse>;
    /**
     * postPeersIdStoreStraight - Straight store to peer
     *
     * Synchronously send the DICOM instance in the POST body to the Orthanc peer whose identifier is provided in URL, without having to first store it locally within Orthanc. This is an alternative to command-line tools such as `curl`.
    **/
    postPeersIdStoreStraight(req: operations.PostPeersIdStoreStraightRequest, config?: AxiosRequestConfig): Promise<operations.PostPeersIdStoreStraightResponse>;
    /**
     * postQueriesIdAnswersIndexQueryInstances - Query the child instances of an answer
     *
     * Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
    **/
    postQueriesIdAnswersIndexQueryInstances(req: operations.PostQueriesIdAnswersIndexQueryInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexQueryInstancesResponse>;
    /**
     * postQueriesIdAnswersIndexQuerySeries - Query the child series of an answer
     *
     * Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
    **/
    postQueriesIdAnswersIndexQuerySeries(req: operations.PostQueriesIdAnswersIndexQuerySeriesRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexQuerySeriesResponse>;
    /**
     * postQueriesIdAnswersIndexQueryStudies - Query the child studies of an answer
     *
     * Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
    **/
    postQueriesIdAnswersIndexQueryStudies(req: operations.PostQueriesIdAnswersIndexQueryStudiesRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexQueryStudiesResponse>;
    /**
     * postQueriesIdAnswersIndexRetrieve - Retrieve one answer
     *
     * Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
    **/
    postQueriesIdAnswersIndexRetrieve(req: operations.PostQueriesIdAnswersIndexRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdAnswersIndexRetrieveResponse>;
    /**
     * postQueriesIdRetrieve - Retrieve all answers
     *
     * Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
    **/
    postQueriesIdRetrieve(req: operations.PostQueriesIdRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PostQueriesIdRetrieveResponse>;
    /**
     * postSeriesIdAnonymize - Anonymize series
     *
     * Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
    **/
    postSeriesIdAnonymize(req: operations.PostSeriesIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAnonymizeResponse>;
    /**
     * postSeriesIdArchive - Create ZIP archive
     *
     * Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL
    **/
    postSeriesIdArchive(req: operations.PostSeriesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdArchiveResponse>;
    /**
     * postSeriesIdAttachmentsNameCompress - Compress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postSeriesIdAttachmentsNameCompress(req: operations.PostSeriesIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAttachmentsNameCompressResponse>;
    /**
     * postSeriesIdAttachmentsNameUncompress - Uncompress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postSeriesIdAttachmentsNameUncompress(req: operations.PostSeriesIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAttachmentsNameUncompressResponse>;
    /**
     * postSeriesIdAttachmentsNameVerifyMd5 - Verify attachment
     *
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    postSeriesIdAttachmentsNameVerifyMd5(req: operations.PostSeriesIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdAttachmentsNameVerifyMd5Response>;
    /**
     * postSeriesIdMedia - Create DICOMDIR media
     *
     * Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL
    **/
    postSeriesIdMedia(req: operations.PostSeriesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdMediaResponse>;
    /**
     * postSeriesIdModify - Modify series
     *
     * Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
    **/
    postSeriesIdModify(req: operations.PostSeriesIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdModifyResponse>;
    /**
     * postSeriesIdReconstruct - Reconstruct tags of series
     *
     * Reconstruct the main DICOM tags of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    postSeriesIdReconstruct(req: operations.PostSeriesIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostSeriesIdReconstructResponse>;
    /**
     * postStorageCommitmentIdRemove - Remove after storage commitment
     *
     * Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances
    **/
    postStorageCommitmentIdRemove(req: operations.PostStorageCommitmentIdRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostStorageCommitmentIdRemoveResponse>;
    /**
     * postStudiesIdAnonymize - Anonymize study
     *
     * Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
    **/
    postStudiesIdAnonymize(req: operations.PostStudiesIdAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAnonymizeResponse>;
    /**
     * postStudiesIdArchive - Create ZIP archive
     *
     * Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL
    **/
    postStudiesIdArchive(req: operations.PostStudiesIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdArchiveResponse>;
    /**
     * postStudiesIdAttachmentsNameCompress - Compress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postStudiesIdAttachmentsNameCompress(req: operations.PostStudiesIdAttachmentsNameCompressRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAttachmentsNameCompressResponse>;
    /**
     * postStudiesIdAttachmentsNameUncompress - Uncompress attachment
     *
     * Change the compression scheme that is used to store an attachment.
    **/
    postStudiesIdAttachmentsNameUncompress(req: operations.PostStudiesIdAttachmentsNameUncompressRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAttachmentsNameUncompressResponse>;
    /**
     * postStudiesIdAttachmentsNameVerifyMd5 - Verify attachment
     *
     * Verify that the attachment is not corrupted, by validating its MD5 hash
    **/
    postStudiesIdAttachmentsNameVerifyMd5(req: operations.PostStudiesIdAttachmentsNameVerifyMd5Request, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdAttachmentsNameVerifyMd5Response>;
    /**
     * postStudiesIdMedia - Create DICOMDIR media
     *
     * Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL
    **/
    postStudiesIdMedia(req: operations.PostStudiesIdMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdMediaResponse>;
    /**
     * postStudiesIdMerge - Merge study
     *
     * Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging
    **/
    postStudiesIdMerge(req: operations.PostStudiesIdMergeRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdMergeResponse>;
    /**
     * postStudiesIdModify - Modify study
     *
     * Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
    **/
    postStudiesIdModify(req: operations.PostStudiesIdModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdModifyResponse>;
    /**
     * postStudiesIdReconstruct - Reconstruct tags of study
     *
     * Reconstruct the main DICOM tags of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
    **/
    postStudiesIdReconstruct(req: operations.PostStudiesIdReconstructRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdReconstructResponse>;
    /**
     * postStudiesIdSplit - Split study
     *
     * Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting
    **/
    postStudiesIdSplit(req: operations.PostStudiesIdSplitRequest, config?: AxiosRequestConfig): Promise<operations.PostStudiesIdSplitResponse>;
    /**
     * postToolsBulkAnonymize - Anonymize a set of resources
     *
     * Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
    **/
    postToolsBulkAnonymize(req: operations.PostToolsBulkAnonymizeRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkAnonymizeResponse>;
    /**
     * postToolsBulkContent - Describe a set of instances
     *
     * Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.
    **/
    postToolsBulkContent(req: operations.PostToolsBulkContentRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkContentResponse>;
    /**
     * postToolsBulkDelete - Delete a set of instances
     *
     * Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
    **/
    postToolsBulkDelete(req: operations.PostToolsBulkDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkDeleteResponse>;
    /**
     * postToolsBulkModify - Modify a set of resources
     *
     * Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
    **/
    postToolsBulkModify(req: operations.PostToolsBulkModifyRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsBulkModifyResponse>;
    /**
     * postToolsCreateArchive - Create ZIP archive
     *
     * Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
    **/
    postToolsCreateArchive(req: operations.PostToolsCreateArchiveRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateArchiveResponse>;
    /**
     * postToolsCreateDicom - Create one DICOM instance
     *
     * Create one DICOM instance, and store it into Orthanc
    **/
    postToolsCreateDicom(req: operations.PostToolsCreateDicomRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateDicomResponse>;
    /**
     * postToolsCreateMedia - Create DICOMDIR media
     *
     * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
    **/
    postToolsCreateMedia(req: operations.PostToolsCreateMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateMediaResponse>;
    /**
     * postToolsCreateMediaExtended - Create DICOMDIR media
     *
     * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
    **/
    postToolsCreateMediaExtended(req: operations.PostToolsCreateMediaExtendedRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsCreateMediaExtendedResponse>;
    /**
     * postToolsDicomEcho - Trigger C-ECHO SCU
     *
     * Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)
    **/
    postToolsDicomEcho(req: operations.PostToolsDicomEchoRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsDicomEchoResponse>;
    /**
     * postToolsExecuteScript - Execute Lua script
     *
     * Execute the provided Lua script by the Orthanc server. This is very insecure for Orthanc servers that are remotely accessible, cf. configuration option `ExecuteLuaEnabled`
    **/
    postToolsExecuteScript(req: operations.PostToolsExecuteScriptRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsExecuteScriptResponse>;
    /**
     * postToolsFind - Look for local resources
     *
     * This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc
    **/
    postToolsFind(req: operations.PostToolsFindRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsFindResponse>;
    /**
     * postToolsInvalidateTags - Invalidate DICOM-as-JSON summaries
     *
     * Remove all the attachments of the type "DICOM-as-JSON" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area
    **/
    postToolsInvalidateTags(config?: AxiosRequestConfig): Promise<operations.PostToolsInvalidateTagsResponse>;
    /**
     * postToolsLookup - Look for DICOM identifiers
     *
     * This URI can be used to convert one DICOM identifier to a list of matching Orthanc resources
    **/
    postToolsLookup(req: operations.PostToolsLookupRequest, config?: AxiosRequestConfig): Promise<operations.PostToolsLookupResponse>;
    /**
     * postToolsReconstruct - Reconstruct all the index
     *
     * Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated.
    **/
    postToolsReconstruct(config?: AxiosRequestConfig): Promise<operations.PostToolsReconstructResponse>;
    /**
     * postToolsReset - Restart Orthanc
     *
     * Restart Orthanc
    **/
    postToolsReset(config?: AxiosRequestConfig): Promise<operations.PostToolsResetResponse>;
    /**
     * postToolsShutdown - Shutdown Orthanc
     *
     * Shutdown Orthanc
    **/
    postToolsShutdown(config?: AxiosRequestConfig): Promise<operations.PostToolsShutdownResponse>;
    /**
     * putInstancesIdAttachmentsName - Set attachment
     *
     * Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    putInstancesIdAttachmentsName(req: operations.PutInstancesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutInstancesIdAttachmentsNameResponse>;
    /**
     * putInstancesIdMetadataName - Set metadata
     *
     * Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    putInstancesIdMetadataName(req: operations.PutInstancesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutInstancesIdMetadataNameResponse>;
    /**
     * putModalitiesId - Update DICOM modality
     *
     * Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    putModalitiesId(req: operations.PutModalitiesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutModalitiesIdResponse>;
    /**
     * putPatientsIdAttachmentsName - Set attachment
     *
     * Attach a file to the given DICOM patient. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    putPatientsIdAttachmentsName(req: operations.PutPatientsIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutPatientsIdAttachmentsNameResponse>;
    /**
     * putPatientsIdMetadataName - Set metadata
     *
     * Set the value of some metadata in the given DICOM patient. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    putPatientsIdMetadataName(req: operations.PutPatientsIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutPatientsIdMetadataNameResponse>;
    /**
     * putPatientsIdProtected - Protect one patient against recycling
     *
     * Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`
    **/
    putPatientsIdProtected(req: operations.PutPatientsIdProtectedRequest, config?: AxiosRequestConfig): Promise<operations.PutPatientsIdProtectedResponse>;
    /**
     * putPeersId - Update Orthanc peer
     *
     * Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
    **/
    putPeersId(req: operations.PutPeersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPeersIdResponse>;
    /**
     * putSeriesIdAttachmentsName - Set attachment
     *
     * Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    putSeriesIdAttachmentsName(req: operations.PutSeriesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSeriesIdAttachmentsNameResponse>;
    /**
     * putSeriesIdMetadataName - Set metadata
     *
     * Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    putSeriesIdMetadataName(req: operations.PutSeriesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSeriesIdMetadataNameResponse>;
    /**
     * putStudiesIdAttachmentsName - Set attachment
     *
     * Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).
    **/
    putStudiesIdAttachmentsName(req: operations.PutStudiesIdAttachmentsNameRequest, config?: AxiosRequestConfig): Promise<operations.PutStudiesIdAttachmentsNameResponse>;
    /**
     * putStudiesIdMetadataName - Set metadata
     *
     * Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).
    **/
    putStudiesIdMetadataName(req: operations.PutStudiesIdMetadataNameRequest, config?: AxiosRequestConfig): Promise<operations.PutStudiesIdMetadataNameResponse>;
    /**
     * putToolsAcceptedTransferSyntaxes - Set accepted transfer syntaxes
     *
     * Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP
    **/
    putToolsAcceptedTransferSyntaxes(req: operations.PutToolsAcceptedTransferSyntaxesRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsAcceptedTransferSyntaxesResponse>;
    /**
     * putToolsDefaultEncoding - Set default encoding
     *
     * Change the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
    **/
    putToolsDefaultEncoding(req: operations.PutToolsDefaultEncodingRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsDefaultEncodingResponse>;
    /**
     * putToolsLogLevel - Set main log level
     *
     * Set the main log level of Orthanc
    **/
    putToolsLogLevel(req: operations.PutToolsLogLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelResponse>;
    /**
     * putToolsLogLevelDicom - Set log level for `dicom`
     *
     * Set the log level of the log category `dicom`
    **/
    putToolsLogLevelDicom(req: operations.PutToolsLogLevelDicomRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelDicomResponse>;
    /**
     * putToolsLogLevelGeneric - Set log level for `generic`
     *
     * Set the log level of the log category `generic`
    **/
    putToolsLogLevelGeneric(req: operations.PutToolsLogLevelGenericRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelGenericResponse>;
    /**
     * putToolsLogLevelHttp - Set log level for `http`
     *
     * Set the log level of the log category `http`
    **/
    putToolsLogLevelHttp(req: operations.PutToolsLogLevelHttpRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelHttpResponse>;
    /**
     * putToolsLogLevelJobs - Set log level for `jobs`
     *
     * Set the log level of the log category `jobs`
    **/
    putToolsLogLevelJobs(req: operations.PutToolsLogLevelJobsRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelJobsResponse>;
    /**
     * putToolsLogLevelLua - Set log level for `lua`
     *
     * Set the log level of the log category `lua`
    **/
    putToolsLogLevelLua(req: operations.PutToolsLogLevelLuaRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelLuaResponse>;
    /**
     * putToolsLogLevelPlugins - Set log level for `plugins`
     *
     * Set the log level of the log category `plugins`
    **/
    putToolsLogLevelPlugins(req: operations.PutToolsLogLevelPluginsRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelPluginsResponse>;
    /**
     * putToolsLogLevelSqlite - Set log level for `sqlite`
     *
     * Set the log level of the log category `sqlite`
    **/
    putToolsLogLevelSqlite(req: operations.PutToolsLogLevelSqliteRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsLogLevelSqliteResponse>;
    /**
     * putToolsMetrics - Enable collection of metrics
     *
     * Enable or disable the collection and publication of metrics at `/tools/metrics-prometheus`
    **/
    putToolsMetrics(req: operations.PutToolsMetricsRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsMetricsResponse>;
    /**
     * putToolsUnknownSopClassAccepted - Set unknown SOP class accepted
     *
     * Set whether Orthanc C-STORE SCP should accept DICOM instances with an unknown SOP class UID
    **/
    putToolsUnknownSopClassAccepted(req: operations.PutToolsUnknownSopClassAcceptedRequest, config?: AxiosRequestConfig): Promise<operations.PutToolsUnknownSopClassAcceptedResponse>;
}
export {};
