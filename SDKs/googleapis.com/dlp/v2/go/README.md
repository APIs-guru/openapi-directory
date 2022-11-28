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
    
    req := operations.DlpInfoTypesListRequest{
        Security: operations.DlpInfoTypesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.DlpInfoTypesListQueryParams{
            DollarXgafv: "2",
            AccessToken: "laborum",
            Alt: "proto",
            Callback: "temporibus",
            Fields: "nemo",
            Filter: "odio",
            Key: "possimus",
            LanguageCode: "aspernatur",
            LocationID: "eaque",
            OauthToken: "nostrum",
            Parent: "qui",
            PrettyPrint: false,
            QuotaUser: "quas",
            UploadType: "commodi",
            UploadProtocol: "quas",
        },
    }
    
    res, err := s.InfoTypes.DlpInfoTypesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePrivacyDlpV2ListInfoTypesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### infoTypes

* `DlpInfoTypesList` - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### locations

* `DlpLocationsInfoTypesList` - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### projects

* `DlpProjectsLocationsContentDeidentify` - De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `DlpProjectsLocationsContentInspect` - Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
* `DlpProjectsLocationsContentReidentify` - Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
* `DlpProjectsLocationsDeidentifyTemplatesCreate` - Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* `DlpProjectsLocationsDeidentifyTemplatesList` - Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* `DlpProjectsLocationsDlpJobsCancel` - Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* `DlpProjectsLocationsDlpJobsCreate` - Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `DlpProjectsLocationsDlpJobsFinish` - Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
* `DlpProjectsLocationsDlpJobsList` - Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* `DlpProjectsLocationsImageRedact` - Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `DlpProjectsLocationsInspectTemplatesCreate` - Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* `DlpProjectsLocationsInspectTemplatesList` - Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* `DlpProjectsLocationsJobTriggersActivate` - Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
* `DlpProjectsLocationsJobTriggersCreate` - Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* `DlpProjectsLocationsJobTriggersHybridInspect` - Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
* `DlpProjectsLocationsJobTriggersList` - Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* `DlpProjectsStoredInfoTypesCreate` - Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `DlpProjectsStoredInfoTypesDelete` - Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `DlpProjectsStoredInfoTypesGet` - Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `DlpProjectsStoredInfoTypesList` - Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `DlpProjectsStoredInfoTypesPatch` - Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
