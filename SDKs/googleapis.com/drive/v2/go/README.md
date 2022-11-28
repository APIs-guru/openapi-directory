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
    
    req := operations.DriveAboutGetRequest{
        Security: operations.DriveAboutGetSecurity{
            Option1: &operations.DriveAboutGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.DriveAboutGetQueryParams{
            Alt: "json",
            Fields: "impedit",
            IncludeSubscribed: false,
            Key: "voluptatem",
            MaxChangeIDCount: "nesciunt",
            OauthToken: "maiores",
            PrettyPrint: true,
            QuotaUser: "repellat",
            StartChangeID: "dolor",
            UserIP: "accusantium",
        },
    }
    
    res, err := s.About.DriveAboutGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.About != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### about

* `DriveAboutGet` - Gets the information about the current user along with Drive API settings

### apps

* `DriveAppsGet` - Gets a specific app.
* `DriveAppsList` - Lists a user's installed apps.

### changes

* `DriveChangesGet` - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* `DriveChangesGetStartPageToken` - Gets the starting pageToken for listing future changes.
* `DriveChangesList` - Lists the changes for a user or shared drive.
* `DriveChangesWatch` - Subscribe to changes for a user.

### channels

* `DriveChannelsStop` - Stop watching resources through this channel

### children

* `DriveChildrenDelete` - Removes a child from a folder.
* `DriveChildrenGet` - Gets a specific child reference.
* `DriveChildrenInsert` - Inserts a file into a folder.
* `DriveChildrenList` - Lists a folder's children.

### comments

* `DriveCommentsDelete` - Deletes a comment.
* `DriveCommentsGet` - Gets a comment by ID.
* `DriveCommentsInsert` - Creates a new comment on the given file.
* `DriveCommentsList` - Lists a file's comments.
* `DriveCommentsPatch` - Updates an existing comment.
* `DriveCommentsUpdate` - Updates an existing comment.

### drives

* `DriveDrivesDelete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `DriveDrivesGet` - Gets a shared drive's metadata by ID.
* `DriveDrivesHide` - Hides a shared drive from the default view.
* `DriveDrivesInsert` - Creates a new shared drive.
* `DriveDrivesList` - Lists the user's shared drives.
* `DriveDrivesUnhide` - Restores a shared drive to the default view.
* `DriveDrivesUpdate` - Updates the metadata for a shared drive.

### files

* `DriveFilesCopy` - Creates a copy of the specified file. Folders cannot be copied.
* `DriveFilesDelete` - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* `DriveFilesEmptyTrash` - Permanently deletes all of the user's trashed files.
* `DriveFilesExport` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `DriveFilesGenerateIds` - Generates a set of file IDs which can be provided in insert or copy requests.
* `DriveFilesGet` - Gets a file's metadata or content by ID.
* `DriveFilesInsert` - Insert a new file.
* `DriveFilesList` - Lists the user's files.
* `DriveFilesListLabels` - Lists the labels on a file.
* `DriveFilesModifyLabels` - Modifies the set of labels on a file.
* `DriveFilesPatch` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `DriveFilesTouch` - Set the file's updated time to the current server time.
* `DriveFilesTrash` - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* `DriveFilesUntrash` - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* `DriveFilesUpdate` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* `DriveFilesWatch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### parents

* `DriveParentsDelete` - Removes a parent from a file.
* `DriveParentsGet` - Gets a specific parent reference.
* `DriveParentsInsert` - Adds a parent folder for a file.
* `DriveParentsList` - Lists a file's parents.

### permissions

* `DrivePermissionsDelete` - Deletes a permission from a file or shared drive.
* `DrivePermissionsGet` - Gets a permission by ID.
* `DrivePermissionsGetIDForEmail` - Returns the permission ID for an email address.
* `DrivePermissionsInsert` - Inserts a permission for a file or shared drive.
* `DrivePermissionsList` - Lists a file's or shared drive's permissions.
* `DrivePermissionsPatch` - Updates a permission using patch semantics.
* `DrivePermissionsUpdate` - Updates a permission.

### properties

* `DrivePropertiesDelete` - Deletes a property.
* `DrivePropertiesGet` - Gets a property by its key.
* `DrivePropertiesInsert` - Adds a property to a file, or updates it if it already exists.
* `DrivePropertiesList` - Lists a file's properties.
* `DrivePropertiesPatch` - Updates a property.
* `DrivePropertiesUpdate` - Updates a property.

### replies

* `DriveRepliesDelete` - Deletes a reply.
* `DriveRepliesGet` - Gets a reply.
* `DriveRepliesInsert` - Creates a new reply to the given comment.
* `DriveRepliesList` - Lists all of the replies to a comment.
* `DriveRepliesPatch` - Updates an existing reply.
* `DriveRepliesUpdate` - Updates an existing reply.

### revisions

* `DriveRevisionsDelete` - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `DriveRevisionsGet` - Gets a specific revision.
* `DriveRevisionsList` - Lists a file's revisions.
* `DriveRevisionsPatch` - Updates a revision.
* `DriveRevisionsUpdate` - Updates a revision.

### teamdrives

* `DriveTeamdrivesDelete` - Deprecated use drives.delete instead.
* `DriveTeamdrivesGet` - Deprecated use drives.get instead.
* `DriveTeamdrivesInsert` - Deprecated use drives.insert instead.
* `DriveTeamdrivesList` - Deprecated use drives.list instead.
* `DriveTeamdrivesUpdate` - Deprecated use drives.update instead.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
