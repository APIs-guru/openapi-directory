package shared

import (
"time")

type ObjectOwner struct {
    Entity *string `json:"entity,omitempty"`
    EntityID *string `json:"entityId,omitempty"`
    
}

type Object struct {
    ACL []ObjectAccessControl `json:"acl,omitempty"`
    Bucket *string `json:"bucket,omitempty"`
    CacheControl *string `json:"cacheControl,omitempty"`
    ComponentCount *int32 `json:"componentCount,omitempty"`
    ContentDisposition *string `json:"contentDisposition,omitempty"`
    ContentEncoding *string `json:"contentEncoding,omitempty"`
    ContentLanguage *string `json:"contentLanguage,omitempty"`
    ContentType *string `json:"contentType,omitempty"`
    Crc32c *string `json:"crc32c,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Generation *string `json:"generation,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Md5Hash *string `json:"md5Hash,omitempty"`
    MediaLink *string `json:"mediaLink,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Metageneration *string `json:"metageneration,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *ObjectOwner `json:"owner,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Size *string `json:"size,omitempty"`
    StorageClass *string `json:"storageClass,omitempty"`
    TimeDeleted *time.Time `json:"timeDeleted,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

