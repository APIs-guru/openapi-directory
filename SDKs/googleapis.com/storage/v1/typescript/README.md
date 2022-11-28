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
import { StorageBucketAccessControlsDeleteRequest, StorageBucketAccessControlsDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: StorageBucketAccessControlsDeleteRequest = {
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
  pathParams: {
    bucket: "debitis",
    entity: "asperiores",
  },
  queryParams: {
    alt: "json",
    fields: "in",
    key: "esse",
    oauthToken: "et",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "alias",
    userIp: "repudiandae",
    userProject: "dolorem",
  },
};

sdk.bucketAccessControls.storageBucketAccessControlsDelete(req).then((res: StorageBucketAccessControlsDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bucketAccessControls

* `storageBucketAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified bucket.
* `storageBucketAccessControlsGet` - Returns the ACL entry for the specified entity on the specified bucket.
* `storageBucketAccessControlsInsert` - Creates a new ACL entry on the specified bucket.
* `storageBucketAccessControlsList` - Retrieves ACL entries on the specified bucket.
* `storageBucketAccessControlsPatch` - Patches an ACL entry on the specified bucket.
* `storageBucketAccessControlsUpdate` - Updates an ACL entry on the specified bucket.

### buckets

* `storageBucketsDelete` - Permanently deletes an empty bucket.
* `storageBucketsGet` - Returns metadata for the specified bucket.
* `storageBucketsGetIamPolicy` - Returns an IAM policy for the specified bucket.
* `storageBucketsInsert` - Creates a new bucket.
* `storageBucketsList` - Retrieves a list of buckets for a given project.
* `storageBucketsLockRetentionPolicy` - Locks retention policy on a bucket.
* `storageBucketsPatch` - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* `storageBucketsSetIamPolicy` - Updates an IAM policy for the specified bucket.
* `storageBucketsTestIamPermissions` - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* `storageBucketsUpdate` - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### channels

* `storageChannelsStop` - Stop watching resources through this channel

### defaultObjectAccessControls

* `storageDefaultObjectAccessControlsDelete` - Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
* `storageDefaultObjectAccessControlsGet` - Returns the default object ACL entry for the specified entity on the specified bucket.
* `storageDefaultObjectAccessControlsInsert` - Creates a new default object ACL entry on the specified bucket.
* `storageDefaultObjectAccessControlsList` - Retrieves default object ACL entries on the specified bucket.
* `storageDefaultObjectAccessControlsPatch` - Patches a default object ACL entry on the specified bucket.
* `storageDefaultObjectAccessControlsUpdate` - Updates a default object ACL entry on the specified bucket.

### notifications

* `storageNotificationsDelete` - Permanently deletes a notification subscription.
* `storageNotificationsGet` - View a notification configuration.
* `storageNotificationsInsert` - Creates a notification subscription for a given bucket.
* `storageNotificationsList` - Retrieves a list of notification subscriptions for a given bucket.

### objectAccessControls

* `storageObjectAccessControlsDelete` - Permanently deletes the ACL entry for the specified entity on the specified object.
* `storageObjectAccessControlsGet` - Returns the ACL entry for the specified entity on the specified object.
* `storageObjectAccessControlsInsert` - Creates a new ACL entry on the specified object.
* `storageObjectAccessControlsList` - Retrieves ACL entries on the specified object.
* `storageObjectAccessControlsPatch` - Patches an ACL entry on the specified object.
* `storageObjectAccessControlsUpdate` - Updates an ACL entry on the specified object.

### objects

* `storageObjectsCompose` - Concatenates a list of existing objects into a new object in the same bucket.
* `storageObjectsCopy` - Copies a source object to a destination object. Optionally overrides metadata.
* `storageObjectsDelete` - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* `storageObjectsGet` - Retrieves an object or its metadata.
* `storageObjectsGetIamPolicy` - Returns an IAM policy for the specified object.
* `storageObjectsInsert` - Stores a new object and metadata.
* `storageObjectsList` - Retrieves a list of objects matching the criteria.
* `storageObjectsPatch` - Patches an object's metadata.
* `storageObjectsRewrite` - Rewrites a source object to a destination object. Optionally overrides metadata.
* `storageObjectsSetIamPolicy` - Updates an IAM policy for the specified object.
* `storageObjectsTestIamPermissions` - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* `storageObjectsUpdate` - Updates an object's metadata.
* `storageObjectsWatchAll` - Watch for changes on all objects in a bucket.

### projects

* `storageProjectsHmacKeysCreate` - Creates a new HMAC key for the specified service account.
* `storageProjectsHmacKeysDelete` - Deletes an HMAC key.
* `storageProjectsHmacKeysGet` - Retrieves an HMAC key's metadata
* `storageProjectsHmacKeysList` - Retrieves a list of HMAC keys matching the criteria.
* `storageProjectsHmacKeysUpdate` - Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
* `storageProjectsServiceAccountGet` - Get the email address of this project's Google Cloud Storage service account.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
