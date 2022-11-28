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
    
    req := operations.CloudresourcemanagerEffectiveTagsListRequest{
        Security: operations.CloudresourcemanagerEffectiveTagsListSecurity{
            Option1: &operations.CloudresourcemanagerEffectiveTagsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.CloudresourcemanagerEffectiveTagsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "est",
            Alt: "media",
            Callback: "magnam",
            Fields: "nihil",
            Key: "sint",
            OauthToken: "est",
            PageSize: 1587585381886736164,
            PageToken: "veritatis",
            Parent: "quisquam",
            PrettyPrint: false,
            QuotaUser: "et",
            UploadType: "autem",
            UploadProtocol: "nisi",
        },
    }
    
    res, err := s.EffectiveTags.CloudresourcemanagerEffectiveTagsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEffectiveTagsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### effectiveTags

* `CloudresourcemanagerEffectiveTagsList` - Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.

### folders

* `CloudresourcemanagerFoldersCreate` - Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
* `CloudresourcemanagerFoldersList` - Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
* `CloudresourcemanagerFoldersSearch` - Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.

### liens

* `CloudresourcemanagerLiensCreate` - Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
* `CloudresourcemanagerLiensList` - List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.

### organizations

* `CloudresourcemanagerOrganizationsSearch` - Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

### projects

* `CloudresourcemanagerProjectsCreate` - Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.
* `CloudresourcemanagerProjectsList` - Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.
* `CloudresourcemanagerProjectsMove` - Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project. 
* `CloudresourcemanagerProjectsSearch` - Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.
* `CloudresourcemanagerProjectsUndelete` - Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

### tagBindings

* `CloudresourcemanagerTagBindingsCreate` - Creates a TagBinding between a TagValue and a Google Cloud resource.
* `CloudresourcemanagerTagBindingsList` - Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name

### tagKeys

* `CloudresourcemanagerTagKeysCreate` - Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
* `CloudresourcemanagerTagKeysList` - Lists all TagKeys for a parent resource.

### tagValues

* `CloudresourcemanagerTagValuesCreate` - Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
* `CloudresourcemanagerTagValuesGet` - Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* `CloudresourcemanagerTagValuesGetIamPolicy` - Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
* `CloudresourcemanagerTagValuesList` - Lists all TagValues for a specific TagKey.
* `CloudresourcemanagerTagValuesPatch` - Updates the attributes of the TagValue resource.
* `CloudresourcemanagerTagValuesSetIamPolicy` - Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
* `CloudresourcemanagerTagValuesTagHoldsCreate` - Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
* `CloudresourcemanagerTagValuesTagHoldsDelete` - Deletes a TagHold.
* `CloudresourcemanagerTagValuesTagHoldsList` - Lists TagHolds under a TagValue.
* `CloudresourcemanagerTagValuesTestIamPermissions` - Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
