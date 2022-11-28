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
    fields: "impedit",
    includeSubscribed: false,
    key: "voluptatem",
    maxChangeIdCount: "nesciunt",
    oauthToken: "maiores",
    prettyPrint: true,
    quotaUser: "repellat",
    startChangeId: "dolor",
    userIp: "accusantium",
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

* `driveAboutGet` - Gets the information about the current user along with Drive API settings

### apps

* `driveAppsGet` - Gets a specific app.
* `driveAppsList` - Lists a user's installed apps.

### changes

* `driveChangesGet` - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* `driveChangesGetStartPageToken` - Gets the starting pageToken for listing future changes.
* `driveChangesList` - Lists the changes for a user or shared drive.
* `driveChangesWatch` - Subscribe to changes for a user.

### channels

* `driveChannelsStop` - Stop watching resources through this channel

### children

* `driveChildrenDelete` - Removes a child from a folder.
* `driveChildrenGet` - Gets a specific child reference.
* `driveChildrenInsert` - Inserts a file into a folder.
* `driveChildrenList` - Lists a folder's children.

### comments

* `driveCommentsDelete` - Deletes a comment.
* `driveCommentsGet` - Gets a comment by ID.
* `driveCommentsInsert` - Creates a new comment on the given file.
* `driveCommentsList` - Lists a file's comments.
* `driveCommentsPatch` - Updates an existing comment.
* `driveCommentsUpdate` - Updates an existing comment.

### drives

* `driveDrivesDelete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `driveDrivesGet` - Gets a shared drive's metadata by ID.
* `driveDrivesHide` - Hides a shared drive from the default view.
* `driveDrivesInsert` - Creates a new shared drive.
* `driveDrivesList` - Lists the user's shared drives.
* `driveDrivesUnhide` - Restores a shared drive to the default view.
* `driveDrivesUpdate` - Updates the metadata for a shared drive.

### files

* `driveFilesCopy` - Creates a copy of the specified file. Folders cannot be copied.
* `driveFilesDelete` - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* `driveFilesEmptyTrash` - Permanently deletes all of the user's trashed files.
* `driveFilesExport` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `driveFilesGenerateIds` - Generates a set of file IDs which can be provided in insert or copy requests.
* `driveFilesGet` - Gets a file's metadata or content by ID.
* `driveFilesInsert` - Insert a new file.
* `driveFilesList` - Lists the user's files.
* `driveFilesListLabels` - Lists the labels on a file.
* `driveFilesModifyLabels` - Modifies the set of labels on a file.
* `driveFilesPatch` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `driveFilesTouch` - Set the file's updated time to the current server time.
* `driveFilesTrash` - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* `driveFilesUntrash` - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* `driveFilesUpdate` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* `driveFilesWatch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### parents

* `driveParentsDelete` - Removes a parent from a file.
* `driveParentsGet` - Gets a specific parent reference.
* `driveParentsInsert` - Adds a parent folder for a file.
* `driveParentsList` - Lists a file's parents.

### permissions

* `drivePermissionsDelete` - Deletes a permission from a file or shared drive.
* `drivePermissionsGet` - Gets a permission by ID.
* `drivePermissionsGetIdForEmail` - Returns the permission ID for an email address.
* `drivePermissionsInsert` - Inserts a permission for a file or shared drive.
* `drivePermissionsList` - Lists a file's or shared drive's permissions.
* `drivePermissionsPatch` - Updates a permission using patch semantics.
* `drivePermissionsUpdate` - Updates a permission.

### properties

* `drivePropertiesDelete` - Deletes a property.
* `drivePropertiesGet` - Gets a property by its key.
* `drivePropertiesInsert` - Adds a property to a file, or updates it if it already exists.
* `drivePropertiesList` - Lists a file's properties.
* `drivePropertiesPatch` - Updates a property.
* `drivePropertiesUpdate` - Updates a property.

### replies

* `driveRepliesDelete` - Deletes a reply.
* `driveRepliesGet` - Gets a reply.
* `driveRepliesInsert` - Creates a new reply to the given comment.
* `driveRepliesList` - Lists all of the replies to a comment.
* `driveRepliesPatch` - Updates an existing reply.
* `driveRepliesUpdate` - Updates an existing reply.

### revisions

* `driveRevisionsDelete` - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `driveRevisionsGet` - Gets a specific revision.
* `driveRevisionsList` - Lists a file's revisions.
* `driveRevisionsPatch` - Updates a revision.
* `driveRevisionsUpdate` - Updates a revision.

### teamdrives

* `driveTeamdrivesDelete` - Deprecated use drives.delete instead.
* `driveTeamdrivesGet` - Deprecated use drives.get instead.
* `driveTeamdrivesInsert` - Deprecated use drives.insert instead.
* `driveTeamdrivesList` - Deprecated use drives.list instead.
* `driveTeamdrivesUpdate` - Deprecated use drives.update instead.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
