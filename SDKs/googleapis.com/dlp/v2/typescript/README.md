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
import { DlpInfoTypesListRequest, DlpInfoTypesListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DlpInfoTypesListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "laborum",
    alt: "proto",
    callback: "temporibus",
    fields: "nemo",
    filter: "odio",
    key: "possimus",
    languageCode: "aspernatur",
    locationId: "eaque",
    oauthToken: "nostrum",
    parent: "qui",
    prettyPrint: false,
    quotaUser: "quas",
    uploadType: "commodi",
    uploadProtocol: "quas",
  },
};

sdk.infoTypes.dlpInfoTypesList(req).then((res: DlpInfoTypesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### infoTypes

* `dlpInfoTypesList` - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### locations

* `dlpLocationsInfoTypesList` - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### projects

* `dlpProjectsLocationsContentDeidentify` - De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `dlpProjectsLocationsContentInspect` - Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
* `dlpProjectsLocationsContentReidentify` - Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
* `dlpProjectsLocationsDeidentifyTemplatesCreate` - Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* `dlpProjectsLocationsDeidentifyTemplatesList` - Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
* `dlpProjectsLocationsDlpJobsCancel` - Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* `dlpProjectsLocationsDlpJobsCreate` - Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `dlpProjectsLocationsDlpJobsFinish` - Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
* `dlpProjectsLocationsDlpJobsList` - Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
* `dlpProjectsLocationsImageRedact` - Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
* `dlpProjectsLocationsInspectTemplatesCreate` - Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* `dlpProjectsLocationsInspectTemplatesList` - Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
* `dlpProjectsLocationsJobTriggersActivate` - Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
* `dlpProjectsLocationsJobTriggersCreate` - Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* `dlpProjectsLocationsJobTriggersHybridInspect` - Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
* `dlpProjectsLocationsJobTriggersList` - Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
* `dlpProjectsStoredInfoTypesCreate` - Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlpProjectsStoredInfoTypesDelete` - Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlpProjectsStoredInfoTypesGet` - Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlpProjectsStoredInfoTypesList` - Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
* `dlpProjectsStoredInfoTypesPatch` - Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
