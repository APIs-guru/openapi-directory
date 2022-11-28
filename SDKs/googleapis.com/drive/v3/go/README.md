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
            Fields: "dolores",
            Key: "sed",
            OauthToken: "possimus",
            PrettyPrint: true,
            QuotaUser: "voluptas",
            UserIP: "rerum",
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

* `DriveAboutGet` - Gets information about the user, the user's Drive, and system capabilities.

### changes

* `DriveChangesGetStartPageToken` - Gets the starting pageToken for listing future changes.
* `DriveChangesList` - Lists the changes for a user or shared drive.
* `DriveChangesWatch` - Subscribes to changes for a user.

### channels

* `DriveChannelsStop` - Stop watching resources through this channel

### comments

* `DriveCommentsCreate` - Creates a new comment on a file.
* `DriveCommentsDelete` - Deletes a comment.
* `DriveCommentsGet` - Gets a comment by ID.
* `DriveCommentsList` - Lists a file's comments.
* `DriveCommentsUpdate` - Updates a comment with patch semantics.

### drives

* `DriveDrivesCreate` - Creates a new shared drive.
* `DriveDrivesDelete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `DriveDrivesGet` - Gets a shared drive's metadata by ID.
* `DriveDrivesHide` - Hides a shared drive from the default view.
* `DriveDrivesList` - Lists the user's shared drives.
* `DriveDrivesUnhide` - Restores a shared drive to the default view.
* `DriveDrivesUpdate` - Updates the metadate for a shared drive.

### files

* `DriveFilesCopy` - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* `DriveFilesCreate` - Creates a new file.
* `DriveFilesDelete` - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* `DriveFilesEmptyTrash` - Permanently deletes all of the user's trashed files.
* `DriveFilesExport` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `DriveFilesGenerateIds` - Generates a set of file IDs which can be provided in create or copy requests.
* `DriveFilesGet` - Gets a file's metadata or content by ID.
* `DriveFilesList` - Lists or searches files.
* `DriveFilesListLabels` - Lists the labels on a file.
* `DriveFilesModifyLabels` - Modifies the set of labels on a file.
* `DriveFilesUpdate` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `DriveFilesWatch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### permissions

* `DrivePermissionsCreate` - Creates a permission for a file or shared drive.
* `DrivePermissionsDelete` - Deletes a permission.
* `DrivePermissionsGet` - Gets a permission by ID.
* `DrivePermissionsList` - Lists a file's or shared drive's permissions.
* `DrivePermissionsUpdate` - Updates a permission with patch semantics.

### replies

* `DriveRepliesCreate` - Creates a new reply to a comment.
* `DriveRepliesDelete` - Deletes a reply.
* `DriveRepliesGet` - Gets a reply by ID.
* `DriveRepliesList` - Lists a comment's replies.
* `DriveRepliesUpdate` - Updates a reply with patch semantics.

### revisions

* `DriveRevisionsDelete` - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `DriveRevisionsGet` - Gets a revision's metadata or content by ID.
* `DriveRevisionsList` - Lists a file's revisions.
* `DriveRevisionsUpdate` - Updates a revision with patch semantics.

### teamdrives

* `DriveTeamdrivesCreate` - Deprecated use drives.create instead.
* `DriveTeamdrivesDelete` - Deprecated use drives.delete instead.
* `DriveTeamdrivesGet` - Deprecated use drives.get instead.
* `DriveTeamdrivesList` - Deprecated use drives.list instead.
* `DriveTeamdrivesUpdate` - Deprecated use drives.update instead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
