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
    
    req := operations.StorageBucketAccessControlsDeleteRequest{
        Security: operations.StorageBucketAccessControlsDeleteSecurity{
            Option1: &operations.StorageBucketAccessControlsDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.StorageBucketAccessControlsDeletePathParams{
            Bucket: "debitis",
            Entity: "asperiores",
        },
        QueryParams: operations.StorageBucketAccessControlsDeleteQueryParams{
            Alt: "json",
            Fields: "in",
            Key: "esse",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "alias",
            UserIP: "repudiandae",
            UserProject: "dolorem",
        },
    }
    
    res, err := s.BucketAccessControls.StorageBucketAccessControlsDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bucketAccessControls

* `StorageBucketAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* `StorageBucketAccessControlsGet` - Returns the ACL entry for the specified entity on the specified bucket.
* `StorageBucketAccessControlsInsert` - Creates a new ACL entry on the specified bucket.
* `StorageBucketAccessControlsList` - Retrieves ACL entries on the specified bucket.
* `StorageBucketAccessControlsPatch` - Patches an ACL entry on the specified bucket.
* `StorageBucketAccessControlsUpdate` - Updates an ACL entry on the specified bucket.

### buckets

* `StorageBucketsDelete` - Permanently deletes an empty bucket.
* `StorageBucketsGet` - Returns metadata for the specified bucket.
* `StorageBucketsGetIamPolicy` - Returns an IAM policy for the specified bucket.
* `StorageBucketsInsert` - Creates a new bucket.
* `StorageBucketsList` - Retrieves a list of buckets for a given project.
* `StorageBucketsLockRetentionPolicy` - Locks retention policy on a bucket.
* `StorageBucketsPatch` - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* `StorageBucketsSetIamPolicy` - Updates an IAM policy for the specified bucket.
* `StorageBucketsTestIamPermissions` - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* `StorageBucketsUpdate` - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### channels

* `StorageChannelsStop` - Stop watching resources through this channel

### defaultObjectAccessControls

* `StorageDefaultObjectAccessControlsDelete` - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* `StorageDefaultObjectAccessControlsGet` - Returns the default object ACL entry for the specified entity on the specified bucket.
* `StorageDefaultObjectAccessControlsInsert` - Creates a new default object ACL entry on the specified bucket.
* `StorageDefaultObjectAccessControlsList` - Retrieves default object ACL entries on the specified bucket.
* `StorageDefaultObjectAccessControlsPatch` - Patches a default object ACL entry on the specified bucket.
* `StorageDefaultObjectAccessControlsUpdate` - Updates a default object ACL entry on the specified bucket.

### notifications

* `StorageNotificationsDelete` - Permanently deletes a notification subscription.
* `StorageNotificationsGet` - View a notification configuration.
* `StorageNotificationsInsert` - Creates a notification subscription for a given bucket.
* `StorageNotificationsList` - Retrieves a list of notification subscriptions for a given bucket.

### objectAccessControls

* `StorageObjectAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified object.
* `StorageObjectAccessControlsGet` - Returns the ACL entry for the specified entity on the specified object.
* `StorageObjectAccessControlsInsert` - Creates a new ACL entry on the specified object.
* `StorageObjectAccessControlsList` - Retrieves ACL entries on the specified object.
* `StorageObjectAccessControlsPatch` - Patches an ACL entry on the specified object.
* `StorageObjectAccessControlsUpdate` - Updates an ACL entry on the specified object.

### objects

* `StorageObjectsCompose` - Concatenates a list of existing objects into a new object in the same bucket.
* `StorageObjectsCopy` - Copies a source object to a destination object. Optionally overrides metadata.
* `StorageObjectsDelete` - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* `StorageObjectsGet` - Retrieves an object or its metadata.
* `StorageObjectsGetIamPolicy` - Returns an IAM policy for the specified object.
* `StorageObjectsInsert` - Stores a new object and metadata.
* `StorageObjectsList` - Retrieves a list of objects matching the criteria.
* `StorageObjectsPatch` - Patches an object's metadata.
* `StorageObjectsRewrite` - Rewrites a source object to a destination object. Optionally overrides metadata.
* `StorageObjectsSetIamPolicy` - Updates an IAM policy for the specified object.
* `StorageObjectsTestIamPermissions` - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* `StorageObjectsUpdate` - Updates an object's metadata.
* `StorageObjectsWatchAll` - Watch for changes on all objects in a bucket.

### projects

* `StorageProjectsHmacKeysCreate` - Creates a new HMAC key for the specified service account.
* `StorageProjectsHmacKeysDelete` - Deletes an HMAC key.
* `StorageProjectsHmacKeysGet` - Retrieves an HMAC key's metadata
* `StorageProjectsHmacKeysList` - Retrieves a list of HMAC keys matching the criteria.
* `StorageProjectsHmacKeysUpdate` - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* `StorageProjectsServiceAccountGet` - Get the email address of this project's Google Cloud Storage service account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
