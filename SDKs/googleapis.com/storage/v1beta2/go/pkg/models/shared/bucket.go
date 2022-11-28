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

// BucketLifecycleRuleAction
// The action to take.
type BucketLifecycleRuleAction struct {
	Type *string `json:"type,omitempty"`
}

// BucketLifecycleRuleCondition
// The condition(s) under which the action will be taken.
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

// BucketLifecycle
// The bucket's lifecycle configuration. See object lifecycle management for more information.
type BucketLifecycle struct {
	Rule []BucketLifecycleRule `json:"rule,omitempty"`
}

// BucketLogging
// The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
type BucketLogging struct {
	LogBucket       *string `json:"logBucket,omitempty"`
	LogObjectPrefix *string `json:"logObjectPrefix,omitempty"`
}

// BucketOwner
// The owner of the bucket. This is always the project team's owner group.
type BucketOwner struct {
	Entity   *string `json:"entity,omitempty"`
	EntityID *string `json:"entityId,omitempty"`
}

// BucketVersioning
// The bucket's versioning configuration.
type BucketVersioning struct {
	Enabled *bool `json:"enabled,omitempty"`
}

// BucketWebsite
// The bucket's website configuration.
type BucketWebsite struct {
	MainPageSuffix *string `json:"mainPageSuffix,omitempty"`
	NotFoundPage   *string `json:"notFoundPage,omitempty"`
}

// Bucket
// A bucket.
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
