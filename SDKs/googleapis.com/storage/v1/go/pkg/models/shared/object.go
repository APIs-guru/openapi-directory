package shared

import (
	"time"
)

type ObjectCustomerEncryption struct {
	EncryptionAlgorithm *string `json:"encryptionAlgorithm"`
	KeySha256           *string `json:"keySha256"`
}

type ObjectOwner struct {
	Entity   *string `json:"entity"`
	EntityID *string `json:"entityId"`
}

type Object struct {
	ACL                     []ObjectAccessControl     `json:"acl"`
	Bucket                  *string                   `json:"bucket"`
	CacheControl            *string                   `json:"cacheControl"`
	ComponentCount          *int32                    `json:"componentCount"`
	ContentDisposition      *string                   `json:"contentDisposition"`
	ContentEncoding         *string                   `json:"contentEncoding"`
	ContentLanguage         *string                   `json:"contentLanguage"`
	ContentType             *string                   `json:"contentType"`
	Crc32c                  *string                   `json:"crc32c"`
	CustomTime              *time.Time                `json:"customTime"`
	CustomerEncryption      *ObjectCustomerEncryption `json:"customerEncryption"`
	Etag                    *string                   `json:"etag"`
	EventBasedHold          *bool                     `json:"eventBasedHold"`
	Generation              *string                   `json:"generation"`
	ID                      *string                   `json:"id"`
	Kind                    *string                   `json:"kind"`
	KmsKeyName              *string                   `json:"kmsKeyName"`
	Md5Hash                 *string                   `json:"md5Hash"`
	MediaLink               *string                   `json:"mediaLink"`
	Metadata                map[string]string         `json:"metadata"`
	Metageneration          *string                   `json:"metageneration"`
	Name                    *string                   `json:"name"`
	Owner                   *ObjectOwner              `json:"owner"`
	RetentionExpirationTime *time.Time                `json:"retentionExpirationTime"`
	SelfLink                *string                   `json:"selfLink"`
	Size                    *string                   `json:"size"`
	StorageClass            *string                   `json:"storageClass"`
	TemporaryHold           *bool                     `json:"temporaryHold"`
	TimeCreated             *time.Time                `json:"timeCreated"`
	TimeDeleted             *time.Time                `json:"timeDeleted"`
	TimeStorageClassUpdated *time.Time                `json:"timeStorageClassUpdated"`
	Updated                 *time.Time                `json:"updated"`
}
