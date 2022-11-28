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
    
    req := operations.FirebaseAvailableProjectsListRequest{
        Security: operations.FirebaseAvailableProjectsListSecurity{
            Option1: &operations.FirebaseAvailableProjectsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.FirebaseAvailableProjectsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "media",
            Callback: "blanditiis",
            Fields: "et",
            Key: "fuga",
            OauthToken: "alias",
            PageSize: 161973394064896100,
            PageToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "at",
            UploadType: "voluptas",
            UploadProtocol: "adipisci",
        },
    }
    
    res, err := s.AvailableProjects.FirebaseAvailableProjectsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableProjectsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### availableProjects

* `FirebaseAvailableProjectsList` - Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

### projects

* `FirebaseProjectsAddFirebase` - Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
* `FirebaseProjectsAddGoogleAnalytics` - Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
* `FirebaseProjectsAndroidAppsCreate` - Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* `FirebaseProjectsAndroidAppsList` - Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* `FirebaseProjectsAndroidAppsShaCreate` - Adds a ShaCertificate to the specified AndroidApp.
* `FirebaseProjectsAndroidAppsShaDelete` - Removes a ShaCertificate from the specified AndroidApp.
* `FirebaseProjectsAndroidAppsShaList` - Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
* `FirebaseProjectsAvailableLocationsList` - Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
* `FirebaseProjectsDefaultLocationFinalize` - Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
* `FirebaseProjectsIosAppsCreate` - Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* `FirebaseProjectsIosAppsList` - Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* `FirebaseProjectsList` - Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
* `FirebaseProjectsRemoveAnalytics` - Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
* `FirebaseProjectsSearchApps` - Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
* `FirebaseProjectsWebAppsCreate` - Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* `FirebaseProjectsWebAppsGetConfig` - Gets the configuration artifact associated with the specified WebApp.
* `FirebaseProjectsWebAppsList` - Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* `FirebaseProjectsWebAppsPatch` - Updates the attributes of the specified WebApp.
* `FirebaseProjectsWebAppsRemove` - Removes the specified WebApp from the FirebaseProject.
* `FirebaseProjectsWebAppsUndelete` - Restores the specified WebApp to the FirebaseProject.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
