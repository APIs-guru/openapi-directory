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
import { DriveAboutGetRequest, DriveAboutGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DriveAboutGetRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  queryParams: {
    alt: "json",
    fields: "dolores",
    key: "sed",
    oauthToken: "possimus",
    prettyPrint: true,
    quotaUser: "voluptas",
    userIp: "rerum",
  },
};

sdk.about.driveAboutGet(req).then((res: DriveAboutGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### about

* `driveAboutGet` - Gets information about the user, the user's Drive, and system capabilities.

### changes

* `driveChangesGetStartPageToken` - Gets the starting pageToken for listing future changes.
* `driveChangesList` - Lists the changes for a user or shared drive.
* `driveChangesWatch` - Subscribes to changes for a user.

### channels

* `driveChannelsStop` - Stop watching resources through this channel

### comments

* `driveCommentsCreate` - Creates a new comment on a file.
* `driveCommentsDelete` - Deletes a comment.
* `driveCommentsGet` - Gets a comment by ID.
* `driveCommentsList` - Lists a file's comments.
* `driveCommentsUpdate` - Updates a comment with patch semantics.

### drives

* `driveDrivesCreate` - Creates a new shared drive.
* `driveDrivesDelete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `driveDrivesGet` - Gets a shared drive's metadata by ID.
* `driveDrivesHide` - Hides a shared drive from the default view.
* `driveDrivesList` - Lists the user's shared drives.
* `driveDrivesUnhide` - Restores a shared drive to the default view.
* `driveDrivesUpdate` - Updates the metadate for a shared drive.

### files

* `driveFilesCopy` - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* `driveFilesCreate` - Creates a new file.
* `driveFilesDelete` - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* `driveFilesEmptyTrash` - Permanently deletes all of the user's trashed files.
* `driveFilesExport` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `driveFilesGenerateIds` - Generates a set of file IDs which can be provided in create or copy requests.
* `driveFilesGet` - Gets a file's metadata or content by ID.
* `driveFilesList` - Lists or searches files.
* `driveFilesListLabels` - Lists the labels on a file.
* `driveFilesModifyLabels` - Modifies the set of labels on a file.
* `driveFilesUpdate` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `driveFilesWatch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### permissions

* `drivePermissionsCreate` - Creates a permission for a file or shared drive.
* `drivePermissionsDelete` - Deletes a permission.
* `drivePermissionsGet` - Gets a permission by ID.
* `drivePermissionsList` - Lists a file's or shared drive's permissions.
* `drivePermissionsUpdate` - Updates a permission with patch semantics.

### replies

* `driveRepliesCreate` - Creates a new reply to a comment.
* `driveRepliesDelete` - Deletes a reply.
* `driveRepliesGet` - Gets a reply by ID.
* `driveRepliesList` - Lists a comment's replies.
* `driveRepliesUpdate` - Updates a reply with patch semantics.

### revisions

* `driveRevisionsDelete` - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `driveRevisionsGet` - Gets a revision's metadata or content by ID.
* `driveRevisionsList` - Lists a file's revisions.
* `driveRevisionsUpdate` - Updates a revision with patch semantics.

### teamdrives

* `driveTeamdrivesCreate` - Deprecated use drives.create instead.
* `driveTeamdrivesDelete` - Deprecated use drives.delete instead.
* `driveTeamdrivesGet` - Deprecated use drives.get instead.
* `driveTeamdrivesList` - Deprecated use drives.list instead.
* `driveTeamdrivesUpdate` - Deprecated use drives.update instead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
