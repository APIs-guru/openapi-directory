# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    res, err := s.Sdk.DeleteChanges(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteChanges` - Clear changes
* `DeleteExports` - Clear exports
* `DeleteInstancesID` - Delete some instance
* `DeleteInstancesIDAttachmentsName` - Delete attachment
* `DeleteInstancesIDMetadataName` - Delete metadata
* `DeleteModalitiesID` - Delete DICOM modality
* `DeletePatientsID` - Delete some patient
* `DeletePatientsIDAttachmentsName` - Delete attachment
* `DeletePatientsIDMetadataName` - Delete metadata
* `DeletePeersID` - Delete Orthanc peer
* `DeleteQueriesID` - Delete a query
* `DeleteSeriesID` - Delete some series
* `DeleteSeriesIDAttachmentsName` - Delete attachment
* `DeleteSeriesIDMetadataName` - Delete metadata
* `DeleteStudiesID` - Delete some study
* `DeleteStudiesIDAttachmentsName` - Delete attachment
* `DeleteStudiesIDMetadataName` - Delete metadata
* `GetChanges` - List changes
* `GetExports` - List exports
* `GetInstances` - List the available instances
* `GetInstancesID` - Get information about some instance
* `GetInstancesIDAttachments` - List attachments
* `GetInstancesIDAttachmentsName` - List operations on attachments
* `GetInstancesIDAttachmentsNameCompressedData` - Get attachment (no decompression)
* `GetInstancesIDAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `GetInstancesIDAttachmentsNameCompressedSize` - Get size of attachment on disk
* `GetInstancesIDAttachmentsNameData` - Get attachment
* `GetInstancesIDAttachmentsNameIsCompressed` - Is attachment compressed?
* `GetInstancesIDAttachmentsNameMd5` - Get MD5 of attachment
* `GetInstancesIDAttachmentsNameSize` - Get size of attachment
* `GetInstancesIDContent` - Get raw tag
* `GetInstancesIDFile` - Download DICOM
* `GetInstancesIDFrames` - List available frames
* `GetInstancesIDFramesFrame` - List operations
* `GetInstancesIDFramesFrameImageInt16` - Decode a frame (int16)
* `GetInstancesIDFramesFrameImageUint16` - Decode a frame (uint16)
* `GetInstancesIDFramesFrameImageUint8` - Decode a frame (uint8)
* `GetInstancesIDFramesFrameMatlab` - Decode frame for Matlab
* `GetInstancesIDFramesFramePreview` - Decode a frame (preview)
* `GetInstancesIDFramesFrameRaw` - Access raw frame
* `GetInstancesIDFramesFrameRawGz` - Access raw frame (compressed)
* `GetInstancesIDFramesFrameRendered` - Render a frame
* `GetInstancesIDHeader` - Get DICOM meta-header
* `GetInstancesIDImageInt16` - Decode an image (int16)
* `GetInstancesIDImageUint16` - Decode an image (uint16)
* `GetInstancesIDImageUint8` - Decode an image (uint8)
* `GetInstancesIDMatlab` - Decode frame for Matlab
* `GetInstancesIDMetadata` - List metadata
* `GetInstancesIDMetadataName` - Get metadata
* `GetInstancesIDModule` - Get instance module
* `GetInstancesIDPatient` - Get parent patient
* `GetInstancesIDPdf` - Get embedded PDF
* `GetInstancesIDPreview` - Decode an image (preview)
* `GetInstancesIDRendered` - Render an image
* `GetInstancesIDSeries` - Get parent series
* `GetInstancesIDSimplifiedTags` - Get human-readable tags
* `GetInstancesIDStatistics` - Get instance statistics
* `GetInstancesIDStudy` - Get parent study
* `GetInstancesIDTags` - Get DICOM tags
* `GetJobs` - List jobs
* `GetJobsID` - Get job
* `GetJobsIDKey` - Get job output
* `GetModalities` - List DICOM modalities
* `GetModalitiesID` - List operations on modality
* `GetModalitiesIDConfiguration` - Get modality configuration
* `GetPatients` - List the available patients
* `GetPatientsID` - Get information about some patient
* `GetPatientsIDArchive` - Create ZIP archive
* `GetPatientsIDAttachments` - List attachments
* `GetPatientsIDAttachmentsName` - List operations on attachments
* `GetPatientsIDAttachmentsNameCompressedData` - Get attachment (no decompression)
* `GetPatientsIDAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `GetPatientsIDAttachmentsNameCompressedSize` - Get size of attachment on disk
* `GetPatientsIDAttachmentsNameData` - Get attachment
* `GetPatientsIDAttachmentsNameIsCompressed` - Is attachment compressed?
* `GetPatientsIDAttachmentsNameMd5` - Get MD5 of attachment
* `GetPatientsIDAttachmentsNameSize` - Get size of attachment
* `GetPatientsIDInstances` - Get child instances
* `GetPatientsIDInstancesTags` - Get tags of instances
* `GetPatientsIDMedia` - Create DICOMDIR media
* `GetPatientsIDMetadata` - List metadata
* `GetPatientsIDMetadataName` - Get metadata
* `GetPatientsIDModule` - Get patient module
* `GetPatientsIDProtected` - Is the patient protected against recycling?
* `GetPatientsIDSeries` - Get child series
* `GetPatientsIDSharedTags` - Get shared tags
* `GetPatientsIDStatistics` - Get patient statistics
* `GetPatientsIDStudies` - Get child studies
* `GetPeers` - List Orthanc peers
* `GetPeersID` - List operations on peer
* `GetPeersIDConfiguration` - Get peer configuration
* `GetPeersIDSystem` - Get peer system information
* `GetPlugins` - List plugins
* `GetPluginsExplorerJs` - JavaScript extensions to Orthanc Explorer
* `GetPluginsID` - Get plugin
* `GetQueries` - List query/retrieve operations
* `GetQueriesID` - List operations on a query
* `GetQueriesIDAnswers` - List answers to a query
* `GetQueriesIDAnswersIndex` - List operations on an answer
* `GetQueriesIDAnswersIndexContent` - Get one answer
* `GetQueriesIDLevel` - Get level of original query
* `GetQueriesIDModality` - Get modality of original query
* `GetQueriesIDQuery` - Get original query arguments
* `GetSeries` - List the available series
* `GetSeriesID` - Get information about some series
* `GetSeriesIDArchive` - Create ZIP archive
* `GetSeriesIDAttachments` - List attachments
* `GetSeriesIDAttachmentsName` - List operations on attachments
* `GetSeriesIDAttachmentsNameCompressedData` - Get attachment (no decompression)
* `GetSeriesIDAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `GetSeriesIDAttachmentsNameCompressedSize` - Get size of attachment on disk
* `GetSeriesIDAttachmentsNameData` - Get attachment
* `GetSeriesIDAttachmentsNameIsCompressed` - Is attachment compressed?
* `GetSeriesIDAttachmentsNameMd5` - Get MD5 of attachment
* `GetSeriesIDAttachmentsNameSize` - Get size of attachment
* `GetSeriesIDInstances` - Get child instances
* `GetSeriesIDInstancesTags` - Get tags of instances
* `GetSeriesIDMedia` - Create DICOMDIR media
* `GetSeriesIDMetadata` - List metadata
* `GetSeriesIDMetadataName` - Get metadata
* `GetSeriesIDModule` - Get series module
* `GetSeriesIDOrderedSlices` - Order the slices
* `GetSeriesIDPatient` - Get parent patient
* `GetSeriesIDSharedTags` - Get shared tags
* `GetSeriesIDStatistics` - Get series statistics
* `GetSeriesIDStudy` - Get parent study
* `GetStatistics` - Get database statistics
* `GetStorageCommitmentID` - Get storage commitment report
* `GetStudies` - List the available studies
* `GetStudiesID` - Get information about some study
* `GetStudiesIDArchive` - Create ZIP archive
* `GetStudiesIDAttachments` - List attachments
* `GetStudiesIDAttachmentsName` - List operations on attachments
* `GetStudiesIDAttachmentsNameCompressedData` - Get attachment (no decompression)
* `GetStudiesIDAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `GetStudiesIDAttachmentsNameCompressedSize` - Get size of attachment on disk
* `GetStudiesIDAttachmentsNameData` - Get attachment
* `GetStudiesIDAttachmentsNameIsCompressed` - Is attachment compressed?
* `GetStudiesIDAttachmentsNameMd5` - Get MD5 of attachment
* `GetStudiesIDAttachmentsNameSize` - Get size of attachment
* `GetStudiesIDInstances` - Get child instances
* `GetStudiesIDInstancesTags` - Get tags of instances
* `GetStudiesIDMedia` - Create DICOMDIR media
* `GetStudiesIDMetadata` - List metadata
* `GetStudiesIDMetadataName` - Get metadata
* `GetStudiesIDModule` - Get study module
* `GetStudiesIDModulePatient` - Get patient module of study
* `GetStudiesIDPatient` - Get parent patient
* `GetStudiesIDSeries` - Get child series
* `GetStudiesIDSharedTags` - Get shared tags
* `GetStudiesIDStatistics` - Get study statistics
* `GetSystem` - Get system information
* `GetTools` - List operations
* `GetToolsAcceptedTransferSyntaxes` - Get accepted transfer syntaxes
* `GetToolsDefaultEncoding` - Get default encoding
* `GetToolsDicomConformance` - Get DICOM conformance
* `GetToolsGenerateUID` - Generate an identifier
* `GetToolsLogLevel` - Get main log level
* `GetToolsLogLevelDicom` - Get log level for `dicom`
* `GetToolsLogLevelGeneric` - Get log level for `generic`
* `GetToolsLogLevelHTTP` - Get log level for `http`
* `GetToolsLogLevelJobs` - Get log level for `jobs`
* `GetToolsLogLevelLua` - Get log level for `lua`
* `GetToolsLogLevelPlugins` - Get log level for `plugins`
* `GetToolsLogLevelSqlite` - Get log level for `sqlite`
* `GetToolsMetrics` - Are metrics collected?
* `GetToolsMetricsPrometheus` - Get usage metrics
* `GetToolsNow` - Get UTC time
* `GetToolsNowLocal` - Get local time
* `GetToolsUnknownSopClassAccepted` - Is unknown SOP class accepted?
* `PostInstances` - Upload DICOM instances
* `PostInstancesIDAnonymize` - Anonymize instance
* `PostInstancesIDAttachmentsNameCompress` - Compress attachment
* `PostInstancesIDAttachmentsNameUncompress` - Uncompress attachment
* `PostInstancesIDAttachmentsNameVerifyMd5` - Verify attachment
* `PostInstancesIDExport` - Write DICOM onto filesystem
* `PostInstancesIDModify` - Modify instance
* `PostInstancesIDReconstruct` - Reconstruct tags of instance
* `PostJobsIDCancel` - Cancel job
* `PostJobsIDPause` - Pause job
* `PostJobsIDResubmit` - Resubmit job
* `PostJobsIDResume` - Resume job
* `PostModalitiesIDEcho` - Trigger C-ECHO SCU
* `PostModalitiesIDFind` - Hierarchical C-FIND SCU
* `PostModalitiesIDFindInstance` - C-FIND SCU for instances
* `PostModalitiesIDFindPatient` - C-FIND SCU for patients
* `PostModalitiesIDFindSeries` - C-FIND SCU for series
* `PostModalitiesIDFindStudy` - C-FIND SCU for studies
* `PostModalitiesIDFindWorklist` - C-FIND SCU for worklist
* `PostModalitiesIDMove` - Trigger C-MOVE SCU
* `PostModalitiesIDQuery` - Trigger C-FIND SCU
* `PostModalitiesIDStorageCommitment` - Trigger storage commitment request
* `PostModalitiesIDStore` - Trigger C-STORE SCU
* `PostModalitiesIDStoreStraight` - Straight C-STORE SCU
* `PostPatientsIDAnonymize` - Anonymize patient
* `PostPatientsIDArchive` - Create ZIP archive
* `PostPatientsIDAttachmentsNameCompress` - Compress attachment
* `PostPatientsIDAttachmentsNameUncompress` - Uncompress attachment
* `PostPatientsIDAttachmentsNameVerifyMd5` - Verify attachment
* `PostPatientsIDMedia` - Create DICOMDIR media
* `PostPatientsIDModify` - Modify patient
* `PostPatientsIDReconstruct` - Reconstruct tags of patient
* `PostPeersIDStore` - Send to Orthanc peer
* `PostPeersIDStoreStraight` - Straight store to peer
* `PostQueriesIDAnswersIndexQueryInstances` - Query the child instances of an answer
* `PostQueriesIDAnswersIndexQuerySeries` - Query the child series of an answer
* `PostQueriesIDAnswersIndexQueryStudies` - Query the child studies of an answer
* `PostQueriesIDAnswersIndexRetrieve` - Retrieve one answer
* `PostQueriesIDRetrieve` - Retrieve all answers
* `PostSeriesIDAnonymize` - Anonymize series
* `PostSeriesIDArchive` - Create ZIP archive
* `PostSeriesIDAttachmentsNameCompress` - Compress attachment
* `PostSeriesIDAttachmentsNameUncompress` - Uncompress attachment
* `PostSeriesIDAttachmentsNameVerifyMd5` - Verify attachment
* `PostSeriesIDMedia` - Create DICOMDIR media
* `PostSeriesIDModify` - Modify series
* `PostSeriesIDReconstruct` - Reconstruct tags of series
* `PostStorageCommitmentIDRemove` - Remove after storage commitment
* `PostStudiesIDAnonymize` - Anonymize study
* `PostStudiesIDArchive` - Create ZIP archive
* `PostStudiesIDAttachmentsNameCompress` - Compress attachment
* `PostStudiesIDAttachmentsNameUncompress` - Uncompress attachment
* `PostStudiesIDAttachmentsNameVerifyMd5` - Verify attachment
* `PostStudiesIDMedia` - Create DICOMDIR media
* `PostStudiesIDMerge` - Merge study
* `PostStudiesIDModify` - Modify study
* `PostStudiesIDReconstruct` - Reconstruct tags of study
* `PostStudiesIDSplit` - Split study
* `PostToolsBulkAnonymize` - Anonymize a set of resources
* `PostToolsBulkContent` - Describe a set of instances
* `PostToolsBulkDelete` - Delete a set of instances
* `PostToolsBulkModify` - Modify a set of resources
* `PostToolsCreateArchive` - Create ZIP archive
* `PostToolsCreateDicom` - Create one DICOM instance
* `PostToolsCreateMedia` - Create DICOMDIR media
* `PostToolsCreateMediaExtended` - Create DICOMDIR media
* `PostToolsDicomEcho` - Trigger C-ECHO SCU
* `PostToolsExecuteScript` - Execute Lua script
* `PostToolsFind` - Look for local resources
* `PostToolsInvalidateTags` - Invalidate DICOM-as-JSON summaries
* `PostToolsLookup` - Look for DICOM identifiers
* `PostToolsReconstruct` - Reconstruct all the index
* `PostToolsReset` - Restart Orthanc
* `PostToolsShutdown` - Shutdown Orthanc
* `PutInstancesIDAttachmentsName` - Set attachment
* `PutInstancesIDMetadataName` - Set metadata
* `PutModalitiesID` - Update DICOM modality
* `PutPatientsIDAttachmentsName` - Set attachment
* `PutPatientsIDMetadataName` - Set metadata
* `PutPatientsIDProtected` - Protect one patient against recycling
* `PutPeersID` - Update Orthanc peer
* `PutSeriesIDAttachmentsName` - Set attachment
* `PutSeriesIDMetadataName` - Set metadata
* `PutStudiesIDAttachmentsName` - Set attachment
* `PutStudiesIDMetadataName` - Set metadata
* `PutToolsAcceptedTransferSyntaxes` - Set accepted transfer syntaxes
* `PutToolsDefaultEncoding` - Set default encoding
* `PutToolsLogLevel` - Set main log level
* `PutToolsLogLevelDicom` - Set log level for `dicom`
* `PutToolsLogLevelGeneric` - Set log level for `generic`
* `PutToolsLogLevelHTTP` - Set log level for `http`
* `PutToolsLogLevelJobs` - Set log level for `jobs`
* `PutToolsLogLevelLua` - Set log level for `lua`
* `PutToolsLogLevelPlugins` - Set log level for `plugins`
* `PutToolsLogLevelSqlite` - Set log level for `sqlite`
* `PutToolsMetrics` - Enable collection of metrics
* `PutToolsUnknownSopClassAccepted` - Set unknown SOP class accepted

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
