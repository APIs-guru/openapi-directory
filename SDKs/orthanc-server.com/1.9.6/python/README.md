# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.sdk.delete_changes()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_changes` - Clear changes
* `delete_exports` - Clear exports
* `delete_instances_id_` - Delete some instance
* `delete_instances_id_attachments_name_` - Delete attachment
* `delete_instances_id_metadata_name_` - Delete metadata
* `delete_modalities_id_` - Delete DICOM modality
* `delete_patients_id_` - Delete some patient
* `delete_patients_id_attachments_name_` - Delete attachment
* `delete_patients_id_metadata_name_` - Delete metadata
* `delete_peers_id_` - Delete Orthanc peer
* `delete_queries_id_` - Delete a query
* `delete_series_id_` - Delete some series
* `delete_series_id_attachments_name_` - Delete attachment
* `delete_series_id_metadata_name_` - Delete metadata
* `delete_studies_id_` - Delete some study
* `delete_studies_id_attachments_name_` - Delete attachment
* `delete_studies_id_metadata_name_` - Delete metadata
* `get_changes` - List changes
* `get_exports` - List exports
* `get_instances` - List the available instances
* `get_instances_id_` - Get information about some instance
* `get_instances_id_attachments` - List attachments
* `get_instances_id_attachments_name_` - List operations on attachments
* `get_instances_id_attachments_name_compressed_data` - Get attachment (no decompression)
* `get_instances_id_attachments_name_compressed_md5` - Get MD5 of attachment on disk
* `get_instances_id_attachments_name_compressed_size` - Get size of attachment on disk
* `get_instances_id_attachments_name_data` - Get attachment
* `get_instances_id_attachments_name_is_compressed` - Is attachment compressed?
* `get_instances_id_attachments_name_md5` - Get MD5 of attachment
* `get_instances_id_attachments_name_size` - Get size of attachment
* `get_instances_id_content` - Get raw tag
* `get_instances_id_file` - Download DICOM
* `get_instances_id_frames` - List available frames
* `get_instances_id_frames_frame_` - List operations
* `get_instances_id_frames_frame_image_int16` - Decode a frame (int16)
* `get_instances_id_frames_frame_image_uint16` - Decode a frame (uint16)
* `get_instances_id_frames_frame_image_uint8` - Decode a frame (uint8)
* `get_instances_id_frames_frame_matlab` - Decode frame for Matlab
* `get_instances_id_frames_frame_preview` - Decode a frame (preview)
* `get_instances_id_frames_frame_raw` - Access raw frame
* `get_instances_id_frames_frame_raw_gz` - Access raw frame (compressed)
* `get_instances_id_frames_frame_rendered` - Render a frame
* `get_instances_id_header` - Get DICOM meta-header
* `get_instances_id_image_int16` - Decode an image (int16)
* `get_instances_id_image_uint16` - Decode an image (uint16)
* `get_instances_id_image_uint8` - Decode an image (uint8)
* `get_instances_id_matlab` - Decode frame for Matlab
* `get_instances_id_metadata` - List metadata
* `get_instances_id_metadata_name_` - Get metadata
* `get_instances_id_module` - Get instance module
* `get_instances_id_patient` - Get parent patient
* `get_instances_id_pdf` - Get embedded PDF
* `get_instances_id_preview` - Decode an image (preview)
* `get_instances_id_rendered` - Render an image
* `get_instances_id_series` - Get parent series
* `get_instances_id_simplified_tags` - Get human-readable tags
* `get_instances_id_statistics` - Get instance statistics
* `get_instances_id_study` - Get parent study
* `get_instances_id_tags` - Get DICOM tags
* `get_jobs` - List jobs
* `get_jobs_id_` - Get job
* `get_jobs_id_key_` - Get job output
* `get_modalities` - List DICOM modalities
* `get_modalities_id_` - List operations on modality
* `get_modalities_id_configuration` - Get modality configuration
* `get_patients` - List the available patients
* `get_patients_id_` - Get information about some patient
* `get_patients_id_archive` - Create ZIP archive
* `get_patients_id_attachments` - List attachments
* `get_patients_id_attachments_name_` - List operations on attachments
* `get_patients_id_attachments_name_compressed_data` - Get attachment (no decompression)
* `get_patients_id_attachments_name_compressed_md5` - Get MD5 of attachment on disk
* `get_patients_id_attachments_name_compressed_size` - Get size of attachment on disk
* `get_patients_id_attachments_name_data` - Get attachment
* `get_patients_id_attachments_name_is_compressed` - Is attachment compressed?
* `get_patients_id_attachments_name_md5` - Get MD5 of attachment
* `get_patients_id_attachments_name_size` - Get size of attachment
* `get_patients_id_instances` - Get child instances
* `get_patients_id_instances_tags` - Get tags of instances
* `get_patients_id_media` - Create DICOMDIR media
* `get_patients_id_metadata` - List metadata
* `get_patients_id_metadata_name_` - Get metadata
* `get_patients_id_module` - Get patient module
* `get_patients_id_protected` - Is the patient protected against recycling?
* `get_patients_id_series` - Get child series
* `get_patients_id_shared_tags` - Get shared tags
* `get_patients_id_statistics` - Get patient statistics
* `get_patients_id_studies` - Get child studies
* `get_peers` - List Orthanc peers
* `get_peers_id_` - List operations on peer
* `get_peers_id_configuration` - Get peer configuration
* `get_peers_id_system` - Get peer system information
* `get_plugins` - List plugins
* `get_plugins_explorer_js` - JavaScript extensions to Orthanc Explorer
* `get_plugins_id_` - Get plugin
* `get_queries` - List query/retrieve operations
* `get_queries_id_` - List operations on a query
* `get_queries_id_answers` - List answers to a query
* `get_queries_id_answers_index_` - List operations on an answer
* `get_queries_id_answers_index_content` - Get one answer
* `get_queries_id_level` - Get level of original query
* `get_queries_id_modality` - Get modality of original query
* `get_queries_id_query` - Get original query arguments
* `get_series` - List the available series
* `get_series_id_` - Get information about some series
* `get_series_id_archive` - Create ZIP archive
* `get_series_id_attachments` - List attachments
* `get_series_id_attachments_name_` - List operations on attachments
* `get_series_id_attachments_name_compressed_data` - Get attachment (no decompression)
* `get_series_id_attachments_name_compressed_md5` - Get MD5 of attachment on disk
* `get_series_id_attachments_name_compressed_size` - Get size of attachment on disk
* `get_series_id_attachments_name_data` - Get attachment
* `get_series_id_attachments_name_is_compressed` - Is attachment compressed?
* `get_series_id_attachments_name_md5` - Get MD5 of attachment
* `get_series_id_attachments_name_size` - Get size of attachment
* `get_series_id_instances` - Get child instances
* `get_series_id_instances_tags` - Get tags of instances
* `get_series_id_media` - Create DICOMDIR media
* `get_series_id_metadata` - List metadata
* `get_series_id_metadata_name_` - Get metadata
* `get_series_id_module` - Get series module
* `get_series_id_ordered_slices` - Order the slices
* `get_series_id_patient` - Get parent patient
* `get_series_id_shared_tags` - Get shared tags
* `get_series_id_statistics` - Get series statistics
* `get_series_id_study` - Get parent study
* `get_statistics` - Get database statistics
* `get_storage_commitment_id_` - Get storage commitment report
* `get_studies` - List the available studies
* `get_studies_id_` - Get information about some study
* `get_studies_id_archive` - Create ZIP archive
* `get_studies_id_attachments` - List attachments
* `get_studies_id_attachments_name_` - List operations on attachments
* `get_studies_id_attachments_name_compressed_data` - Get attachment (no decompression)
* `get_studies_id_attachments_name_compressed_md5` - Get MD5 of attachment on disk
* `get_studies_id_attachments_name_compressed_size` - Get size of attachment on disk
* `get_studies_id_attachments_name_data` - Get attachment
* `get_studies_id_attachments_name_is_compressed` - Is attachment compressed?
* `get_studies_id_attachments_name_md5` - Get MD5 of attachment
* `get_studies_id_attachments_name_size` - Get size of attachment
* `get_studies_id_instances` - Get child instances
* `get_studies_id_instances_tags` - Get tags of instances
* `get_studies_id_media` - Create DICOMDIR media
* `get_studies_id_metadata` - List metadata
* `get_studies_id_metadata_name_` - Get metadata
* `get_studies_id_module` - Get study module
* `get_studies_id_module_patient` - Get patient module of study
* `get_studies_id_patient` - Get parent patient
* `get_studies_id_series` - Get child series
* `get_studies_id_shared_tags` - Get shared tags
* `get_studies_id_statistics` - Get study statistics
* `get_system` - Get system information
* `get_tools` - List operations
* `get_tools_accepted_transfer_syntaxes` - Get accepted transfer syntaxes
* `get_tools_default_encoding` - Get default encoding
* `get_tools_dicom_conformance` - Get DICOM conformance
* `get_tools_generate_uid` - Generate an identifier
* `get_tools_log_level` - Get main log level
* `get_tools_log_level_dicom` - Get log level for `dicom`
* `get_tools_log_level_generic` - Get log level for `generic`
* `get_tools_log_level_http` - Get log level for `http`
* `get_tools_log_level_jobs` - Get log level for `jobs`
* `get_tools_log_level_lua` - Get log level for `lua`
* `get_tools_log_level_plugins` - Get log level for `plugins`
* `get_tools_log_level_sqlite` - Get log level for `sqlite`
* `get_tools_metrics` - Are metrics collected?
* `get_tools_metrics_prometheus` - Get usage metrics
* `get_tools_now` - Get UTC time
* `get_tools_now_local` - Get local time
* `get_tools_unknown_sop_class_accepted` - Is unknown SOP class accepted?
* `post_instances` - Upload DICOM instances
* `post_instances_id_anonymize` - Anonymize instance
* `post_instances_id_attachments_name_compress` - Compress attachment
* `post_instances_id_attachments_name_uncompress` - Uncompress attachment
* `post_instances_id_attachments_name_verify_md5` - Verify attachment
* `post_instances_id_export` - Write DICOM onto filesystem
* `post_instances_id_modify` - Modify instance
* `post_instances_id_reconstruct` - Reconstruct tags of instance
* `post_jobs_id_cancel` - Cancel job
* `post_jobs_id_pause` - Pause job
* `post_jobs_id_resubmit` - Resubmit job
* `post_jobs_id_resume` - Resume job
* `post_modalities_id_echo` - Trigger C-ECHO SCU
* `post_modalities_id_find` - Hierarchical C-FIND SCU
* `post_modalities_id_find_instance` - C-FIND SCU for instances
* `post_modalities_id_find_patient` - C-FIND SCU for patients
* `post_modalities_id_find_series` - C-FIND SCU for series
* `post_modalities_id_find_study` - C-FIND SCU for studies
* `post_modalities_id_find_worklist` - C-FIND SCU for worklist
* `post_modalities_id_move` - Trigger C-MOVE SCU
* `post_modalities_id_query` - Trigger C-FIND SCU
* `post_modalities_id_storage_commitment` - Trigger storage commitment request
* `post_modalities_id_store` - Trigger C-STORE SCU
* `post_modalities_id_store_straight` - Straight C-STORE SCU
* `post_patients_id_anonymize` - Anonymize patient
* `post_patients_id_archive` - Create ZIP archive
* `post_patients_id_attachments_name_compress` - Compress attachment
* `post_patients_id_attachments_name_uncompress` - Uncompress attachment
* `post_patients_id_attachments_name_verify_md5` - Verify attachment
* `post_patients_id_media` - Create DICOMDIR media
* `post_patients_id_modify` - Modify patient
* `post_patients_id_reconstruct` - Reconstruct tags of patient
* `post_peers_id_store` - Send to Orthanc peer
* `post_peers_id_store_straight` - Straight store to peer
* `post_queries_id_answers_index_query_instances` - Query the child instances of an answer
* `post_queries_id_answers_index_query_series` - Query the child series of an answer
* `post_queries_id_answers_index_query_studies` - Query the child studies of an answer
* `post_queries_id_answers_index_retrieve` - Retrieve one answer
* `post_queries_id_retrieve` - Retrieve all answers
* `post_series_id_anonymize` - Anonymize series
* `post_series_id_archive` - Create ZIP archive
* `post_series_id_attachments_name_compress` - Compress attachment
* `post_series_id_attachments_name_uncompress` - Uncompress attachment
* `post_series_id_attachments_name_verify_md5` - Verify attachment
* `post_series_id_media` - Create DICOMDIR media
* `post_series_id_modify` - Modify series
* `post_series_id_reconstruct` - Reconstruct tags of series
* `post_storage_commitment_id_remove` - Remove after storage commitment
* `post_studies_id_anonymize` - Anonymize study
* `post_studies_id_archive` - Create ZIP archive
* `post_studies_id_attachments_name_compress` - Compress attachment
* `post_studies_id_attachments_name_uncompress` - Uncompress attachment
* `post_studies_id_attachments_name_verify_md5` - Verify attachment
* `post_studies_id_media` - Create DICOMDIR media
* `post_studies_id_merge` - Merge study
* `post_studies_id_modify` - Modify study
* `post_studies_id_reconstruct` - Reconstruct tags of study
* `post_studies_id_split` - Split study
* `post_tools_bulk_anonymize` - Anonymize a set of resources
* `post_tools_bulk_content` - Describe a set of instances
* `post_tools_bulk_delete` - Delete a set of instances
* `post_tools_bulk_modify` - Modify a set of resources
* `post_tools_create_archive` - Create ZIP archive
* `post_tools_create_dicom` - Create one DICOM instance
* `post_tools_create_media` - Create DICOMDIR media
* `post_tools_create_media_extended` - Create DICOMDIR media
* `post_tools_dicom_echo` - Trigger C-ECHO SCU
* `post_tools_execute_script` - Execute Lua script
* `post_tools_find` - Look for local resources
* `post_tools_invalidate_tags` - Invalidate DICOM-as-JSON summaries
* `post_tools_lookup` - Look for DICOM identifiers
* `post_tools_reconstruct` - Reconstruct all the index
* `post_tools_reset` - Restart Orthanc
* `post_tools_shutdown` - Shutdown Orthanc
* `put_instances_id_attachments_name_` - Set attachment
* `put_instances_id_metadata_name_` - Set metadata
* `put_modalities_id_` - Update DICOM modality
* `put_patients_id_attachments_name_` - Set attachment
* `put_patients_id_metadata_name_` - Set metadata
* `put_patients_id_protected` - Protect one patient against recycling
* `put_peers_id_` - Update Orthanc peer
* `put_series_id_attachments_name_` - Set attachment
* `put_series_id_metadata_name_` - Set metadata
* `put_studies_id_attachments_name_` - Set attachment
* `put_studies_id_metadata_name_` - Set metadata
* `put_tools_accepted_transfer_syntaxes` - Set accepted transfer syntaxes
* `put_tools_default_encoding` - Set default encoding
* `put_tools_log_level` - Set main log level
* `put_tools_log_level_dicom` - Set log level for `dicom`
* `put_tools_log_level_generic` - Set log level for `generic`
* `put_tools_log_level_http` - Set log level for `http`
* `put_tools_log_level_jobs` - Set log level for `jobs`
* `put_tools_log_level_lua` - Set log level for `lua`
* `put_tools_log_level_plugins` - Set log level for `plugins`
* `put_tools_log_level_sqlite` - Set log level for `sqlite`
* `put_tools_metrics` - Enable collection of metrics
* `put_tools_unknown_sop_class_accepted` - Set unknown SOP class accepted

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
