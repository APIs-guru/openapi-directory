package shared

type ObjectStorageKeyBucketAccessPermissionsEnum string

const (
	ObjectStorageKeyBucketAccessPermissionsEnumReadWrite ObjectStorageKeyBucketAccessPermissionsEnum = "read_write"
	ObjectStorageKeyBucketAccessPermissionsEnumReadOnly  ObjectStorageKeyBucketAccessPermissionsEnum = "read_only"
)

type ObjectStorageKeyBucketAccess struct {
	BucketName  *string                                      `json:"bucket_name"`
	Cluster     *string                                      `json:"cluster"`
	Permissions *ObjectStorageKeyBucketAccessPermissionsEnum `json:"permissions"`
}

type ObjectStorageKey struct {
	AccessKey    *string                        `json:"access_key"`
	BucketAccess []ObjectStorageKeyBucketAccess `json:"bucket_access"`
	ID           *int64                         `json:"id"`
	Label        *string                        `json:"label"`
	Limited      *bool                          `json:"limited"`
	SecretKey    *string                        `json:"secret_key"`
}
