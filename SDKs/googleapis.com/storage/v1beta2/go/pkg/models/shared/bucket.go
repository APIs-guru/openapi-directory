package shared

import (
	"time"
)

type BucketCors struct {
	MaxAgeSeconds  *int32   `json:"maxAgeSeconds"`
	Method         []string `json:"method"`
	Origin         []string `json:"origin"`
	ResponseHeader []string `json:"responseHeader"`
}

type BucketLifecycleRuleAction struct {
	Type *string `json:"type"`
}

type BucketLifecycleRuleCondition struct {
	Age              *int32     `json:"age"`
	CreatedBefore    *time.Time `json:"createdBefore"`
	IsLive           *bool      `json:"isLive"`
	NumNewerVersions *int32     `json:"numNewerVersions"`
}

type BucketLifecycleRule struct {
	Action    *BucketLifecycleRuleAction    `json:"action"`
	Condition *BucketLifecycleRuleCondition `json:"condition"`
}

type BucketLifecycle struct {
	Rule []BucketLifecycleRule `json:"rule"`
}

type BucketLogging struct {
	LogBucket       *string `json:"logBucket"`
	LogObjectPrefix *string `json:"logObjectPrefix"`
}

type BucketOwner struct {
	Entity   *string `json:"entity"`
	EntityID *string `json:"entityId"`
}

type BucketVersioning struct {
	Enabled *bool `json:"enabled"`
}

type BucketWebsite struct {
	MainPageSuffix *string `json:"mainPageSuffix"`
	NotFoundPage   *string `json:"notFoundPage"`
}

type Bucket struct {
	ACL              []BucketAccessControl `json:"acl"`
	Cors             []BucketCors          `json:"cors"`
	DefaultObjectACL []ObjectAccessControl `json:"defaultObjectAcl"`
	Etag             *string               `json:"etag"`
	ID               *string               `json:"id"`
	Kind             *string               `json:"kind"`
	Lifecycle        *BucketLifecycle      `json:"lifecycle"`
	Location         *string               `json:"location"`
	Logging          *BucketLogging        `json:"logging"`
	Metageneration   *string               `json:"metageneration"`
	Name             *string               `json:"name"`
	Owner            *BucketOwner          `json:"owner"`
	SelfLink         *string               `json:"selfLink"`
	StorageClass     *string               `json:"storageClass"`
	TimeCreated      *time.Time            `json:"timeCreated"`
	Versioning       *BucketVersioning     `json:"versioning"`
	Website          *BucketWebsite        `json:"website"`
}
