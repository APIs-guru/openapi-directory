# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteChangesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.sdk.deleteChanges().then((res: DeleteChangesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteChanges` - Clear changes
* `deleteExports` - Clear exports
* `deleteInstancesId` - Delete some instance
* `deleteInstancesIdAttachmentsName` - Delete attachment
* `deleteInstancesIdMetadataName` - Delete metadata
* `deleteModalitiesId` - Delete DICOM modality
* `deletePatientsId` - Delete some patient
* `deletePatientsIdAttachmentsName` - Delete attachment
* `deletePatientsIdMetadataName` - Delete metadata
* `deletePeersId` - Delete Orthanc peer
* `deleteQueriesId` - Delete a query
* `deleteSeriesId` - Delete some series
* `deleteSeriesIdAttachmentsName` - Delete attachment
* `deleteSeriesIdMetadataName` - Delete metadata
* `deleteStudiesId` - Delete some study
* `deleteStudiesIdAttachmentsName` - Delete attachment
* `deleteStudiesIdMetadataName` - Delete metadata
* `getChanges` - List changes
* `getExports` - List exports
* `getInstances` - List the available instances
* `getInstancesId` - Get information about some instance
* `getInstancesIdAttachments` - List attachments
* `getInstancesIdAttachmentsName` - List operations on attachments
* `getInstancesIdAttachmentsNameCompressedData` - Get attachment (no decompression)
* `getInstancesIdAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `getInstancesIdAttachmentsNameCompressedSize` - Get size of attachment on disk
* `getInstancesIdAttachmentsNameData` - Get attachment
* `getInstancesIdAttachmentsNameIsCompressed` - Is attachment compressed?
* `getInstancesIdAttachmentsNameMd5` - Get MD5 of attachment
* `getInstancesIdAttachmentsNameSize` - Get size of attachment
* `getInstancesIdContent` - Get raw tag
* `getInstancesIdFile` - Download DICOM
* `getInstancesIdFrames` - List available frames
* `getInstancesIdFramesFrame` - List operations
* `getInstancesIdFramesFrameImageInt16` - Decode a frame (int16)
* `getInstancesIdFramesFrameImageUint16` - Decode a frame (uint16)
* `getInstancesIdFramesFrameImageUint8` - Decode a frame (uint8)
* `getInstancesIdFramesFrameMatlab` - Decode frame for Matlab
* `getInstancesIdFramesFramePreview` - Decode a frame (preview)
* `getInstancesIdFramesFrameRaw` - Access raw frame
* `getInstancesIdFramesFrameRawGz` - Access raw frame (compressed)
* `getInstancesIdFramesFrameRendered` - Render a frame
* `getInstancesIdHeader` - Get DICOM meta-header
* `getInstancesIdImageInt16` - Decode an image (int16)
* `getInstancesIdImageUint16` - Decode an image (uint16)
* `getInstancesIdImageUint8` - Decode an image (uint8)
* `getInstancesIdMatlab` - Decode frame for Matlab
* `getInstancesIdMetadata` - List metadata
* `getInstancesIdMetadataName` - Get metadata
* `getInstancesIdModule` - Get instance module
* `getInstancesIdPatient` - Get parent patient
* `getInstancesIdPdf` - Get embedded PDF
* `getInstancesIdPreview` - Decode an image (preview)
* `getInstancesIdRendered` - Render an image
* `getInstancesIdSeries` - Get parent series
* `getInstancesIdSimplifiedTags` - Get human-readable tags
* `getInstancesIdStatistics` - Get instance statistics
* `getInstancesIdStudy` - Get parent study
* `getInstancesIdTags` - Get DICOM tags
* `getJobs` - List jobs
* `getJobsId` - Get job
* `getJobsIdKey` - Get job output
* `getModalities` - List DICOM modalities
* `getModalitiesId` - List operations on modality
* `getModalitiesIdConfiguration` - Get modality configuration
* `getPatients` - List the available patients
* `getPatientsId` - Get information about some patient
* `getPatientsIdArchive` - Create ZIP archive
* `getPatientsIdAttachments` - List attachments
* `getPatientsIdAttachmentsName` - List operations on attachments
* `getPatientsIdAttachmentsNameCompressedData` - Get attachment (no decompression)
* `getPatientsIdAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `getPatientsIdAttachmentsNameCompressedSize` - Get size of attachment on disk
* `getPatientsIdAttachmentsNameData` - Get attachment
* `getPatientsIdAttachmentsNameIsCompressed` - Is attachment compressed?
* `getPatientsIdAttachmentsNameMd5` - Get MD5 of attachment
* `getPatientsIdAttachmentsNameSize` - Get size of attachment
* `getPatientsIdInstances` - Get child instances
* `getPatientsIdInstancesTags` - Get tags of instances
* `getPatientsIdMedia` - Create DICOMDIR media
* `getPatientsIdMetadata` - List metadata
* `getPatientsIdMetadataName` - Get metadata
* `getPatientsIdModule` - Get patient module
* `getPatientsIdProtected` - Is the patient protected against recycling?
* `getPatientsIdSeries` - Get child series
* `getPatientsIdSharedTags` - Get shared tags
* `getPatientsIdStatistics` - Get patient statistics
* `getPatientsIdStudies` - Get child studies
* `getPeers` - List Orthanc peers
* `getPeersId` - List operations on peer
* `getPeersIdConfiguration` - Get peer configuration
* `getPeersIdSystem` - Get peer system information
* `getPlugins` - List plugins
* `getPluginsExplorerJs` - JavaScript extensions to Orthanc Explorer
* `getPluginsId` - Get plugin
* `getQueries` - List query/retrieve operations
* `getQueriesId` - List operations on a query
* `getQueriesIdAnswers` - List answers to a query
* `getQueriesIdAnswersIndex` - List operations on an answer
* `getQueriesIdAnswersIndexContent` - Get one answer
* `getQueriesIdLevel` - Get level of original query
* `getQueriesIdModality` - Get modality of original query
* `getQueriesIdQuery` - Get original query arguments
* `getSeries` - List the available series
* `getSeriesId` - Get information about some series
* `getSeriesIdArchive` - Create ZIP archive
* `getSeriesIdAttachments` - List attachments
* `getSeriesIdAttachmentsName` - List operations on attachments
* `getSeriesIdAttachmentsNameCompressedData` - Get attachment (no decompression)
* `getSeriesIdAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `getSeriesIdAttachmentsNameCompressedSize` - Get size of attachment on disk
* `getSeriesIdAttachmentsNameData` - Get attachment
* `getSeriesIdAttachmentsNameIsCompressed` - Is attachment compressed?
* `getSeriesIdAttachmentsNameMd5` - Get MD5 of attachment
* `getSeriesIdAttachmentsNameSize` - Get size of attachment
* `getSeriesIdInstances` - Get child instances
* `getSeriesIdInstancesTags` - Get tags of instances
* `getSeriesIdMedia` - Create DICOMDIR media
* `getSeriesIdMetadata` - List metadata
* `getSeriesIdMetadataName` - Get metadata
* `getSeriesIdModule` - Get series module
* `getSeriesIdOrderedSlices` - Order the slices
* `getSeriesIdPatient` - Get parent patient
* `getSeriesIdSharedTags` - Get shared tags
* `getSeriesIdStatistics` - Get series statistics
* `getSeriesIdStudy` - Get parent study
* `getStatistics` - Get database statistics
* `getStorageCommitmentId` - Get storage commitment report
* `getStudies` - List the available studies
* `getStudiesId` - Get information about some study
* `getStudiesIdArchive` - Create ZIP archive
* `getStudiesIdAttachments` - List attachments
* `getStudiesIdAttachmentsName` - List operations on attachments
* `getStudiesIdAttachmentsNameCompressedData` - Get attachment (no decompression)
* `getStudiesIdAttachmentsNameCompressedMd5` - Get MD5 of attachment on disk
* `getStudiesIdAttachmentsNameCompressedSize` - Get size of attachment on disk
* `getStudiesIdAttachmentsNameData` - Get attachment
* `getStudiesIdAttachmentsNameIsCompressed` - Is attachment compressed?
* `getStudiesIdAttachmentsNameMd5` - Get MD5 of attachment
* `getStudiesIdAttachmentsNameSize` - Get size of attachment
* `getStudiesIdInstances` - Get child instances
* `getStudiesIdInstancesTags` - Get tags of instances
* `getStudiesIdMedia` - Create DICOMDIR media
* `getStudiesIdMetadata` - List metadata
* `getStudiesIdMetadataName` - Get metadata
* `getStudiesIdModule` - Get study module
* `getStudiesIdModulePatient` - Get patient module of study
* `getStudiesIdPatient` - Get parent patient
* `getStudiesIdSeries` - Get child series
* `getStudiesIdSharedTags` - Get shared tags
* `getStudiesIdStatistics` - Get study statistics
* `getSystem` - Get system information
* `getTools` - List operations
* `getToolsAcceptedTransferSyntaxes` - Get accepted transfer syntaxes
* `getToolsDefaultEncoding` - Get default encoding
* `getToolsDicomConformance` - Get DICOM conformance
* `getToolsGenerateUid` - Generate an identifier
* `getToolsLogLevel` - Get main log level
* `getToolsLogLevelDicom` - Get log level for `dicom`
* `getToolsLogLevelGeneric` - Get log level for `generic`
* `getToolsLogLevelHttp` - Get log level for `http`
* `getToolsLogLevelJobs` - Get log level for `jobs`
* `getToolsLogLevelLua` - Get log level for `lua`
* `getToolsLogLevelPlugins` - Get log level for `plugins`
* `getToolsLogLevelSqlite` - Get log level for `sqlite`
* `getToolsMetrics` - Are metrics collected?
* `getToolsMetricsPrometheus` - Get usage metrics
* `getToolsNow` - Get UTC time
* `getToolsNowLocal` - Get local time
* `getToolsUnknownSopClassAccepted` - Is unknown SOP class accepted?
* `postInstances` - Upload DICOM instances
* `postInstancesIdAnonymize` - Anonymize instance
* `postInstancesIdAttachmentsNameCompress` - Compress attachment
* `postInstancesIdAttachmentsNameUncompress` - Uncompress attachment
* `postInstancesIdAttachmentsNameVerifyMd5` - Verify attachment
* `postInstancesIdExport` - Write DICOM onto filesystem
* `postInstancesIdModify` - Modify instance
* `postInstancesIdReconstruct` - Reconstruct tags of instance
* `postJobsIdCancel` - Cancel job
* `postJobsIdPause` - Pause job
* `postJobsIdResubmit` - Resubmit job
* `postJobsIdResume` - Resume job
* `postModalitiesIdEcho` - Trigger C-ECHO SCU
* `postModalitiesIdFind` - Hierarchical C-FIND SCU
* `postModalitiesIdFindInstance` - C-FIND SCU for instances
* `postModalitiesIdFindPatient` - C-FIND SCU for patients
* `postModalitiesIdFindSeries` - C-FIND SCU for series
* `postModalitiesIdFindStudy` - C-FIND SCU for studies
* `postModalitiesIdFindWorklist` - C-FIND SCU for worklist
* `postModalitiesIdMove` - Trigger C-MOVE SCU
* `postModalitiesIdQuery` - Trigger C-FIND SCU
* `postModalitiesIdStorageCommitment` - Trigger storage commitment request
* `postModalitiesIdStore` - Trigger C-STORE SCU
* `postModalitiesIdStoreStraight` - Straight C-STORE SCU
* `postPatientsIdAnonymize` - Anonymize patient
* `postPatientsIdArchive` - Create ZIP archive
* `postPatientsIdAttachmentsNameCompress` - Compress attachment
* `postPatientsIdAttachmentsNameUncompress` - Uncompress attachment
* `postPatientsIdAttachmentsNameVerifyMd5` - Verify attachment
* `postPatientsIdMedia` - Create DICOMDIR media
* `postPatientsIdModify` - Modify patient
* `postPatientsIdReconstruct` - Reconstruct tags of patient
* `postPeersIdStore` - Send to Orthanc peer
* `postPeersIdStoreStraight` - Straight store to peer
* `postQueriesIdAnswersIndexQueryInstances` - Query the child instances of an answer
* `postQueriesIdAnswersIndexQuerySeries` - Query the child series of an answer
* `postQueriesIdAnswersIndexQueryStudies` - Query the child studies of an answer
* `postQueriesIdAnswersIndexRetrieve` - Retrieve one answer
* `postQueriesIdRetrieve` - Retrieve all answers
* `postSeriesIdAnonymize` - Anonymize series
* `postSeriesIdArchive` - Create ZIP archive
* `postSeriesIdAttachmentsNameCompress` - Compress attachment
* `postSeriesIdAttachmentsNameUncompress` - Uncompress attachment
* `postSeriesIdAttachmentsNameVerifyMd5` - Verify attachment
* `postSeriesIdMedia` - Create DICOMDIR media
* `postSeriesIdModify` - Modify series
* `postSeriesIdReconstruct` - Reconstruct tags of series
* `postStorageCommitmentIdRemove` - Remove after storage commitment
* `postStudiesIdAnonymize` - Anonymize study
* `postStudiesIdArchive` - Create ZIP archive
* `postStudiesIdAttachmentsNameCompress` - Compress attachment
* `postStudiesIdAttachmentsNameUncompress` - Uncompress attachment
* `postStudiesIdAttachmentsNameVerifyMd5` - Verify attachment
* `postStudiesIdMedia` - Create DICOMDIR media
* `postStudiesIdMerge` - Merge study
* `postStudiesIdModify` - Modify study
* `postStudiesIdReconstruct` - Reconstruct tags of study
* `postStudiesIdSplit` - Split study
* `postToolsBulkAnonymize` - Anonymize a set of resources
* `postToolsBulkContent` - Describe a set of instances
* `postToolsBulkDelete` - Delete a set of instances
* `postToolsBulkModify` - Modify a set of resources
* `postToolsCreateArchive` - Create ZIP archive
* `postToolsCreateDicom` - Create one DICOM instance
* `postToolsCreateMedia` - Create DICOMDIR media
* `postToolsCreateMediaExtended` - Create DICOMDIR media
* `postToolsDicomEcho` - Trigger C-ECHO SCU
* `postToolsExecuteScript` - Execute Lua script
* `postToolsFind` - Look for local resources
* `postToolsInvalidateTags` - Invalidate DICOM-as-JSON summaries
* `postToolsLookup` - Look for DICOM identifiers
* `postToolsReconstruct` - Reconstruct all the index
* `postToolsReset` - Restart Orthanc
* `postToolsShutdown` - Shutdown Orthanc
* `putInstancesIdAttachmentsName` - Set attachment
* `putInstancesIdMetadataName` - Set metadata
* `putModalitiesId` - Update DICOM modality
* `putPatientsIdAttachmentsName` - Set attachment
* `putPatientsIdMetadataName` - Set metadata
* `putPatientsIdProtected` - Protect one patient against recycling
* `putPeersId` - Update Orthanc peer
* `putSeriesIdAttachmentsName` - Set attachment
* `putSeriesIdMetadataName` - Set metadata
* `putStudiesIdAttachmentsName` - Set attachment
* `putStudiesIdMetadataName` - Set metadata
* `putToolsAcceptedTransferSyntaxes` - Set accepted transfer syntaxes
* `putToolsDefaultEncoding` - Set default encoding
* `putToolsLogLevel` - Set main log level
* `putToolsLogLevelDicom` - Set log level for `dicom`
* `putToolsLogLevelGeneric` - Set log level for `generic`
* `putToolsLogLevelHttp` - Set log level for `http`
* `putToolsLogLevelJobs` - Set log level for `jobs`
* `putToolsLogLevelLua` - Set log level for `lua`
* `putToolsLogLevelPlugins` - Set log level for `plugins`
* `putToolsLogLevelSqlite` - Set log level for `sqlite`
* `putToolsMetrics` - Enable collection of metrics
* `putToolsUnknownSopClassAccepted` - Set unknown SOP class accepted

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
