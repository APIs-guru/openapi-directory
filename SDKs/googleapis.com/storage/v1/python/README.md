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
    
req = operations.StorageBucketAccessControlsDeleteRequest(
    security=operations.StorageBucketAccessControlsDeleteSecurity(
        option1=operations.StorageBucketAccessControlsDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.StorageBucketAccessControlsDeletePathParams(
        bucket="debitis",
        entity="asperiores",
    ),
    query_params=operations.StorageBucketAccessControlsDeleteQueryParams(
        alt="json",
        fields="in",
        key="esse",
        oauth_token="et",
        pretty_print=True,
        quota_user="et",
        upload_type="alias",
        user_ip="repudiandae",
        user_project="dolorem",
    ),
)
    
res = s.bucket_access_controls.storage_bucket_access_controls_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bucketAccessControls

* `storage_bucket_access_controls_delete` - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* `storage_bucket_access_controls_get` - Returns the ACL entry for the specified entity on the specified bucket.
* `storage_bucket_access_controls_insert` - Creates a new ACL entry on the specified bucket.
* `storage_bucket_access_controls_list` - Retrieves ACL entries on the specified bucket.
* `storage_bucket_access_controls_patch` - Patches an ACL entry on the specified bucket.
* `storage_bucket_access_controls_update` - Updates an ACL entry on the specified bucket.

### buckets

* `storage_buckets_delete` - Permanently deletes an empty bucket.
* `storage_buckets_get` - Returns metadata for the specified bucket.
* `storage_buckets_get_iam_policy` - Returns an IAM policy for the specified bucket.
* `storage_buckets_insert` - Creates a new bucket.
* `storage_buckets_list` - Retrieves a list of buckets for a given project.
* `storage_buckets_lock_retention_policy` - Locks retention policy on a bucket.
* `storage_buckets_patch` - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* `storage_buckets_set_iam_policy` - Updates an IAM policy for the specified bucket.
* `storage_buckets_test_iam_permissions` - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* `storage_buckets_update` - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### channels

* `storage_channels_stop` - Stop watching resources through this channel

### defaultObjectAccessControls

* `storage_default_object_access_controls_delete` - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* `storage_default_object_access_controls_get` - Returns the default object ACL entry for the specified entity on the specified bucket.
* `storage_default_object_access_controls_insert` - Creates a new default object ACL entry on the specified bucket.
* `storage_default_object_access_controls_list` - Retrieves default object ACL entries on the specified bucket.
* `storage_default_object_access_controls_patch` - Patches a default object ACL entry on the specified bucket.
* `storage_default_object_access_controls_update` - Updates a default object ACL entry on the specified bucket.

### notifications

* `storage_notifications_delete` - Permanently deletes a notification subscription.
* `storage_notifications_get` - View a notification configuration.
* `storage_notifications_insert` - Creates a notification subscription for a given bucket.
* `storage_notifications_list` - Retrieves a list of notification subscriptions for a given bucket.

### objectAccessControls

* `storage_object_access_controls_delete` - Permanently deletes the ACL entry for the specified entity on the specified object.
* `storage_object_access_controls_get` - Returns the ACL entry for the specified entity on the specified object.
* `storage_object_access_controls_insert` - Creates a new ACL entry on the specified object.
* `storage_object_access_controls_list` - Retrieves ACL entries on the specified object.
* `storage_object_access_controls_patch` - Patches an ACL entry on the specified object.
* `storage_object_access_controls_update` - Updates an ACL entry on the specified object.

### objects

* `storage_objects_compose` - Concatenates a list of existing objects into a new object in the same bucket.
* `storage_objects_copy` - Copies a source object to a destination object. Optionally overrides metadata.
* `storage_objects_delete` - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* `storage_objects_get` - Retrieves an object or its metadata.
* `storage_objects_get_iam_policy` - Returns an IAM policy for the specified object.
* `storage_objects_insert` - Stores a new object and metadata.
* `storage_objects_list` - Retrieves a list of objects matching the criteria.
* `storage_objects_patch` - Patches an object's metadata.
* `storage_objects_rewrite` - Rewrites a source object to a destination object. Optionally overrides metadata.
* `storage_objects_set_iam_policy` - Updates an IAM policy for the specified object.
* `storage_objects_test_iam_permissions` - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* `storage_objects_update` - Updates an object's metadata.
* `storage_objects_watch_all` - Watch for changes on all objects in a bucket.

### projects

* `storage_projects_hmac_keys_create` - Creates a new HMAC key for the specified service account.
* `storage_projects_hmac_keys_delete` - Deletes an HMAC key.
* `storage_projects_hmac_keys_get` - Retrieves an HMAC key's metadata
* `storage_projects_hmac_keys_list` - Retrieves a list of HMAC keys matching the criteria.
* `storage_projects_hmac_keys_update` - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* `storage_projects_service_account_get` - Get the email address of this project's Google Cloud Storage service account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
