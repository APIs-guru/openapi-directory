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
    
req = operations.DriveAboutGetRequest(
    security=operations.DriveAboutGetSecurity(
        option1=operations.DriveAboutGetSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.DriveAboutGetQueryParams(
        alt="json",
        fields="dolores",
        key="sed",
        oauth_token="possimus",
        pretty_print=True,
        quota_user="voluptas",
        user_ip="rerum",
    ),
)
    
res = s.about.drive_about_get(req)

if res.about is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### about

* `drive_about_get` - Gets information about the user, the user's Drive, and system capabilities.

### changes

* `drive_changes_get_start_page_token` - Gets the starting pageToken for listing future changes.
* `drive_changes_list` - Lists the changes for a user or shared drive.
* `drive_changes_watch` - Subscribes to changes for a user.

### channels

* `drive_channels_stop` - Stop watching resources through this channel

### comments

* `drive_comments_create` - Creates a new comment on a file.
* `drive_comments_delete` - Deletes a comment.
* `drive_comments_get` - Gets a comment by ID.
* `drive_comments_list` - Lists a file's comments.
* `drive_comments_update` - Updates a comment with patch semantics.

### drives

* `drive_drives_create` - Creates a new shared drive.
* `drive_drives_delete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `drive_drives_get` - Gets a shared drive's metadata by ID.
* `drive_drives_hide` - Hides a shared drive from the default view.
* `drive_drives_list` - Lists the user's shared drives.
* `drive_drives_unhide` - Restores a shared drive to the default view.
* `drive_drives_update` - Updates the metadate for a shared drive.

### files

* `drive_files_copy` - Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
* `drive_files_create` - Creates a new file.
* `drive_files_delete` - Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
* `drive_files_empty_trash` - Permanently deletes all of the user's trashed files.
* `drive_files_export` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `drive_files_generate_ids` - Generates a set of file IDs which can be provided in create or copy requests.
* `drive_files_get` - Gets a file's metadata or content by ID.
* `drive_files_list` - Lists or searches files.
* `drive_files_list_labels` - Lists the labels on a file.
* `drive_files_modify_labels` - Modifies the set of labels on a file.
* `drive_files_update` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `drive_files_watch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### permissions

* `drive_permissions_create` - Creates a permission for a file or shared drive.
* `drive_permissions_delete` - Deletes a permission.
* `drive_permissions_get` - Gets a permission by ID.
* `drive_permissions_list` - Lists a file's or shared drive's permissions.
* `drive_permissions_update` - Updates a permission with patch semantics.

### replies

* `drive_replies_create` - Creates a new reply to a comment.
* `drive_replies_delete` - Deletes a reply.
* `drive_replies_get` - Gets a reply by ID.
* `drive_replies_list` - Lists a comment's replies.
* `drive_replies_update` - Updates a reply with patch semantics.

### revisions

* `drive_revisions_delete` - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `drive_revisions_get` - Gets a revision's metadata or content by ID.
* `drive_revisions_list` - Lists a file's revisions.
* `drive_revisions_update` - Updates a revision with patch semantics.

### teamdrives

* `drive_teamdrives_create` - Deprecated use drives.create instead.
* `drive_teamdrives_delete` - Deprecated use drives.delete instead.
* `drive_teamdrives_get` - Deprecated use drives.get instead.
* `drive_teamdrives_list` - Deprecated use drives.list instead.
* `drive_teamdrives_update` - Deprecated use drives.update instead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
