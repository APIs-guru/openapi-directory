package shared

type ObjectStorageKeyBucketAccessPermissionsEnum string

const (
	ObjectStorageKeyBucketAccessPermissionsEnumReadWrite ObjectStorageKeyBucketAccessPermissionsEnum = "read_write"
	ObjectStorageKeyBucketAccessPermissionsEnumReadOnly  ObjectStorageKeyBucketAccessPermissionsEnum = "read_only"
)

type ObjectStorageKeyBucketAccess struct {
	BucketName  *string                                      `json:"bucket_name,omitempty"`
	Cluster     *string                                      `json:"cluster,omitempty"`
	Permissions *ObjectStorageKeyBucketAccessPermissionsEnum `json:"permissions,omitempty"`
}

// ObjectStorageKeyInput
// A keypair used to communicate with the Object Storage S3 API.
type ObjectStorageKeyInput struct {
	BucketAccess []ObjectStorageKeyBucketAccess `json:"bucket_access,omitempty"`
	Label        *string                        `json:"label,omitempty"`
}

// ObjectStorageKey
// A keypair used to communicate with the Object Storage S3 API.
type ObjectStorageKey struct {
	AccessKey    *string                        `json:"access_key,omitempty"`
	BucketAccess []ObjectStorageKeyBucketAccess `json:"bucket_access,omitempty"`
	ID           *int64                         `json:"id,omitempty"`
	Label        *string                        `json:"label,omitempty"`
	Limited      *bool                          `json:"limited,omitempty"`
	SecretKey    *string                        `json:"secret_key,omitempty"`
}
