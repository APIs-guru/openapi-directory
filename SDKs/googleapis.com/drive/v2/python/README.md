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
        fields="impedit",
        include_subscribed=False,
        key="voluptatem",
        max_change_id_count="nesciunt",
        oauth_token="maiores",
        pretty_print=True,
        quota_user="repellat",
        start_change_id="dolor",
        user_ip="accusantium",
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

* `drive_about_get` - Gets the information about the current user along with Drive API settings

### apps

* `drive_apps_get` - Gets a specific app.
* `drive_apps_list` - Lists a user's installed apps.

### changes

* `drive_changes_get` - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* `drive_changes_get_start_page_token` - Gets the starting pageToken for listing future changes.
* `drive_changes_list` - Lists the changes for a user or shared drive.
* `drive_changes_watch` - Subscribe to changes for a user.

### channels

* `drive_channels_stop` - Stop watching resources through this channel

### children

* `drive_children_delete` - Removes a child from a folder.
* `drive_children_get` - Gets a specific child reference.
* `drive_children_insert` - Inserts a file into a folder.
* `drive_children_list` - Lists a folder's children.

### comments

* `drive_comments_delete` - Deletes a comment.
* `drive_comments_get` - Gets a comment by ID.
* `drive_comments_insert` - Creates a new comment on the given file.
* `drive_comments_list` - Lists a file's comments.
* `drive_comments_patch` - Updates an existing comment.
* `drive_comments_update` - Updates an existing comment.

### drives

* `drive_drives_delete` - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
* `drive_drives_get` - Gets a shared drive's metadata by ID.
* `drive_drives_hide` - Hides a shared drive from the default view.
* `drive_drives_insert` - Creates a new shared drive.
* `drive_drives_list` - Lists the user's shared drives.
* `drive_drives_unhide` - Restores a shared drive to the default view.
* `drive_drives_update` - Updates the metadata for a shared drive.

### files

* `drive_files_copy` - Creates a copy of the specified file. Folders cannot be copied.
* `drive_files_delete` - Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
* `drive_files_empty_trash` - Permanently deletes all of the user's trashed files.
* `drive_files_export` - Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
* `drive_files_generate_ids` - Generates a set of file IDs which can be provided in insert or copy requests.
* `drive_files_get` - Gets a file's metadata or content by ID.
* `drive_files_insert` - Insert a new file.
* `drive_files_list` - Lists the user's files.
* `drive_files_list_labels` - Lists the labels on a file.
* `drive_files_modify_labels` - Modifies the set of labels on a file.
* `drive_files_patch` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
* `drive_files_touch` - Set the file's updated time to the current server time.
* `drive_files_trash` - Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
* `drive_files_untrash` - Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
* `drive_files_update` - Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
* `drive_files_watch` - Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.

### parents

* `drive_parents_delete` - Removes a parent from a file.
* `drive_parents_get` - Gets a specific parent reference.
* `drive_parents_insert` - Adds a parent folder for a file.
* `drive_parents_list` - Lists a file's parents.

### permissions

* `drive_permissions_delete` - Deletes a permission from a file or shared drive.
* `drive_permissions_get` - Gets a permission by ID.
* `drive_permissions_get_id_for_email` - Returns the permission ID for an email address.
* `drive_permissions_insert` - Inserts a permission for a file or shared drive.
* `drive_permissions_list` - Lists a file's or shared drive's permissions.
* `drive_permissions_patch` - Updates a permission using patch semantics.
* `drive_permissions_update` - Updates a permission.

### properties

* `drive_properties_delete` - Deletes a property.
* `drive_properties_get` - Gets a property by its key.
* `drive_properties_insert` - Adds a property to a file, or updates it if it already exists.
* `drive_properties_list` - Lists a file's properties.
* `drive_properties_patch` - Updates a property.
* `drive_properties_update` - Updates a property.

### replies

* `drive_replies_delete` - Deletes a reply.
* `drive_replies_get` - Gets a reply.
* `drive_replies_insert` - Creates a new reply to the given comment.
* `drive_replies_list` - Lists all of the replies to a comment.
* `drive_replies_patch` - Updates an existing reply.
* `drive_replies_update` - Updates an existing reply.

### revisions

* `drive_revisions_delete` - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* `drive_revisions_get` - Gets a specific revision.
* `drive_revisions_list` - Lists a file's revisions.
* `drive_revisions_patch` - Updates a revision.
* `drive_revisions_update` - Updates a revision.

### teamdrives

* `drive_teamdrives_delete` - Deprecated use drives.delete instead.
* `drive_teamdrives_get` - Deprecated use drives.get instead.
* `drive_teamdrives_insert` - Deprecated use drives.insert instead.
* `drive_teamdrives_list` - Deprecated use drives.list instead.
* `drive_teamdrives_update` - Deprecated use drives.update instead.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
