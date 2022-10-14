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

type ObjectStorageKey struct {
	AccessKey    *string                        `json:"access_key,omitempty"`
	BucketAccess []ObjectStorageKeyBucketAccess `json:"bucket_access,omitempty"`
	ID           *int64                         `json:"id,omitempty"`
	Label        *string                        `json:"label,omitempty"`
	Limited      *bool                          `json:"limited,omitempty"`
	SecretKey    *string                        `json:"secret_key,omitempty"`
}
