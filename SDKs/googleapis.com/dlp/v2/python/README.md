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
    
req = operations.DlpInfoTypesListRequest(
    security=operations.DlpInfoTypesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.DlpInfoTypesListQueryParams(
        dollar_xgafv="2",
        access_token="laborum",
        alt="proto",
        callback="temporibus",
        fields="nemo",
        filter="odio",
        key="possimus",
        language_code="aspernatur",
        location_id="eaque",
        oauth_token="nostrum",
        parent="qui",
        pretty_print=False,
        quota_user="quas",
        upload_type="commodi",
        upload_protocol="quas",
    ),
)
    
res = s.info_types.dlp_info_types_list(req)

if res.google_privacy_dlp_v2_list_info_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### infoTypes

* `dlp_info_types_list` - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### locations

* `dlp_locations_info_types_list` - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### projects

* `dlp_projects_locations_content_deidentify` - De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `dlp_projects_locations_content_inspect` - Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
* `dlp_projects_locations_content_reidentify` - Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
* `dlp_projects_locations_deidentify_templates_create` - Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* `dlp_projects_locations_deidentify_templates_list` - Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* `dlp_projects_locations_dlp_jobs_cancel` - Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* `dlp_projects_locations_dlp_jobs_create` - Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `dlp_projects_locations_dlp_jobs_finish` - Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
* `dlp_projects_locations_dlp_jobs_list` - Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* `dlp_projects_locations_image_redact` - Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `dlp_projects_locations_inspect_templates_create` - Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* `dlp_projects_locations_inspect_templates_list` - Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* `dlp_projects_locations_job_triggers_activate` - Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
* `dlp_projects_locations_job_triggers_create` - Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* `dlp_projects_locations_job_triggers_hybrid_inspect` - Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
* `dlp_projects_locations_job_triggers_list` - Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* `dlp_projects_stored_info_types_create` - Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlp_projects_stored_info_types_delete` - Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlp_projects_stored_info_types_get` - Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlp_projects_stored_info_types_list` - Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlp_projects_stored_info_types_patch` - Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
