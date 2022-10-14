package shared

import (
	"time"
)

type BucketCors struct {
	MaxAgeSeconds  *int32   `json:"maxAgeSeconds,omitempty"`
	Method         []string `json:"method,omitempty"`
	Origin         []string `json:"origin,omitempty"`
	ResponseHeader []string `json:"responseHeader,omitempty"`
}

type BucketLifecycleRuleAction struct {
	Type *string `json:"type,omitempty"`
}

type BucketLifecycleRuleCondition struct {
	Age              *int32     `json:"age,omitempty"`
	CreatedBefore    *time.Time `json:"createdBefore,omitempty"`
	IsLive           *bool      `json:"isLive,omitempty"`
	NumNewerVersions *int32     `json:"numNewerVersions,omitempty"`
}

type BucketLifecycleRule struct {
	Action    *BucketLifecycleRuleAction    `json:"action,omitempty"`
	Condition *BucketLifecycleRuleCondition `json:"condition,omitempty"`
}

type BucketLifecycle struct {
	Rule []BucketLifecycleRule `json:"rule,omitempty"`
}

type BucketLogging struct {
	LogBucket       *string `json:"logBucket,omitempty"`
	LogObjectPrefix *string `json:"logObjectPrefix,omitempty"`
}

type BucketOwner struct {
	Entity   *string `json:"entity,omitempty"`
	EntityID *string `json:"entityId,omitempty"`
}

type BucketVersioning struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type BucketWebsite struct {
	MainPageSuffix *string `json:"mainPageSuffix,omitempty"`
	NotFoundPage   *string `json:"notFoundPage,omitempty"`
}

type Bucket struct {
	ACL              []BucketAccessControl `json:"acl,omitempty"`
	Cors             []BucketCors          `json:"cors,omitempty"`
	DefaultObjectACL []ObjectAccessControl `json:"defaultObjectAcl,omitempty"`
	Etag             *string               `json:"etag,omitempty"`
	ID               *string               `json:"id,omitempty"`
	Kind             *string               `json:"kind,omitempty"`
	Lifecycle        *BucketLifecycle      `json:"lifecycle,omitempty"`
	Location         *string               `json:"location,omitempty"`
	Logging          *BucketLogging        `json:"logging,omitempty"`
	Metageneration   *string               `json:"metageneration,omitempty"`
	Name             *string               `json:"name,omitempty"`
	Owner            *BucketOwner          `json:"owner,omitempty"`
	SelfLink         *string               `json:"selfLink,omitempty"`
	StorageClass     *string               `json:"storageClass,omitempty"`
	TimeCreated      *time.Time            `json:"timeCreated,omitempty"`
	Versioning       *BucketVersioning     `json:"versioning,omitempty"`
	Website          *BucketWebsite        `json:"website,omitempty"`
}
