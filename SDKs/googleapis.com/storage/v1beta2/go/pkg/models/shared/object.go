package shared

import (
	"time"
)

type ObjectOwner struct {
	Entity   *string `json:"entity"`
	EntityID *string `json:"entityId"`
}

type Object struct {
	ACL                []ObjectAccessControl `json:"acl"`
	Bucket             *string               `json:"bucket"`
	CacheControl       *string               `json:"cacheControl"`
	ComponentCount     *int32                `json:"componentCount"`
	ContentDisposition *string               `json:"contentDisposition"`
	ContentEncoding    *string               `json:"contentEncoding"`
	ContentLanguage    *string               `json:"contentLanguage"`
	ContentType        *string               `json:"contentType"`
	Crc32c             *string               `json:"crc32c"`
	Etag               *string               `json:"etag"`
	Generation         *string               `json:"generation"`
	ID                 *string               `json:"id"`
	Kind               *string               `json:"kind"`
	Md5Hash            *string               `json:"md5Hash"`
	MediaLink          *string               `json:"mediaLink"`
	Metadata           map[string]string     `json:"metadata"`
	Metageneration     *string               `json:"metageneration"`
	Name               *string               `json:"name"`
	Owner              *ObjectOwner          `json:"owner"`
	SelfLink           *string               `json:"selfLink"`
	Size               *string               `json:"size"`
	StorageClass       *string               `json:"storageClass"`
	TimeDeleted        *time.Time            `json:"timeDeleted"`
	Updated            *time.Time            `json:"updated"`
}
