package shared

import (
	"time"
)

// BucketAutoclass
// The bucket's Autoclass configuration.
type BucketAutoclass struct {
	Enabled    *bool      `json:"enabled,omitempty"`
	ToggleTime *time.Time `json:"toggleTime,omitempty"`
}

// BucketBilling
// The bucket's billing configuration.
type BucketBilling struct {
	RequesterPays *bool `json:"requesterPays,omitempty"`
}

type BucketCors struct {
	MaxAgeSeconds  *int32   `json:"maxAgeSeconds,omitempty"`
	Method         []string `json:"method,omitempty"`
	Origin         []string `json:"origin,omitempty"`
	ResponseHeader []string `json:"responseHeader,omitempty"`
}

// BucketCustomPlacementConfig
// The bucket's custom placement configuration for Custom Dual Regions.
type BucketCustomPlacementConfig struct {
	DataLocations []string `json:"dataLocations,omitempty"`
}

// BucketEncryption
// Encryption configuration for a bucket.
type BucketEncryption struct {
	DefaultKmsKeyName *string `json:"defaultKmsKeyName,omitempty"`
}

// BucketIamConfigurationBucketPolicyOnly
// The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.
type BucketIamConfigurationBucketPolicyOnly struct {
	Enabled    *bool      `json:"enabled,omitempty"`
	LockedTime *time.Time `json:"lockedTime,omitempty"`
}

// BucketIamConfigurationUniformBucketLevelAccess
// The bucket's uniform bucket-level access configuration.
type BucketIamConfigurationUniformBucketLevelAccess struct {
	Enabled    *bool      `json:"enabled,omitempty"`
	LockedTime *time.Time `json:"lockedTime,omitempty"`
}

// BucketIamConfiguration
// The bucket's IAM configuration.
type BucketIamConfiguration struct {
	BucketPolicyOnly         *BucketIamConfigurationBucketPolicyOnly         `json:"bucketPolicyOnly,omitempty"`
	PublicAccessPrevention   *string                                         `json:"publicAccessPrevention,omitempty"`
	UniformBucketLevelAccess *BucketIamConfigurationUniformBucketLevelAccess `json:"uniformBucketLevelAccess,omitempty"`
}

// BucketLifecycleRuleAction
// The action to take.
type BucketLifecycleRuleAction struct {
	StorageClass *string `json:"storageClass,omitempty"`
	Type         *string `json:"type,omitempty"`
}

// BucketLifecycleRuleCondition
// The condition(s) under which the action will be taken.
type BucketLifecycleRuleCondition struct {
	Age                     *int32     `json:"age,omitempty"`
	CreatedBefore           *time.Time `json:"createdBefore,omitempty"`
	CustomTimeBefore        *time.Time `json:"customTimeBefore,omitempty"`
	DaysSinceCustomTime     *int32     `json:"daysSinceCustomTime,omitempty"`
	DaysSinceNoncurrentTime *int32     `json:"daysSinceNoncurrentTime,omitempty"`
	IsLive                  *bool      `json:"isLive,omitempty"`
	MatchesPattern          *string    `json:"matchesPattern,omitempty"`
	MatchesPrefix           []string   `json:"matchesPrefix,omitempty"`
	MatchesStorageClass     []string   `json:"matchesStorageClass,omitempty"`
	MatchesSuffix           []string   `json:"matchesSuffix,omitempty"`
	NoncurrentTimeBefore    *time.Time `json:"noncurrentTimeBefore,omitempty"`
	NumNewerVersions        *int32     `json:"numNewerVersions,omitempty"`
}

type BucketLifecycleRule struct {
	Action    *BucketLifecycleRuleAction    `json:"action,omitempty"`
	Condition *BucketLifecycleRuleCondition `json:"condition,omitempty"`
}

// BucketLifecycle
// The bucket's lifecycle configuration. See lifecycle management for more information.
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

// BucketRetentionPolicy
// The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
type BucketRetentionPolicy struct {
	EffectiveTime   *time.Time `json:"effectiveTime,omitempty"`
	IsLocked        *bool      `json:"isLocked,omitempty"`
	RetentionPeriod *string    `json:"retentionPeriod,omitempty"`
}

// BucketVersioning
// The bucket's versioning configuration.
type BucketVersioning struct {
	Enabled *bool `json:"enabled,omitempty"`
}

// BucketWebsite
// The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.
type BucketWebsite struct {
	MainPageSuffix *string `json:"mainPageSuffix,omitempty"`
	NotFoundPage   *string `json:"notFoundPage,omitempty"`
}

// Bucket
// A bucket.
type Bucket struct {
	ACL                   []BucketAccessControl        `json:"acl,omitempty"`
	Autoclass             *BucketAutoclass             `json:"autoclass,omitempty"`
	Billing               *BucketBilling               `json:"billing,omitempty"`
	Cors                  []BucketCors                 `json:"cors,omitempty"`
	CustomPlacementConfig *BucketCustomPlacementConfig `json:"customPlacementConfig,omitempty"`
	DefaultEventBasedHold *bool                        `json:"defaultEventBasedHold,omitempty"`
	DefaultObjectACL      []ObjectAccessControl        `json:"defaultObjectAcl,omitempty"`
	Encryption            *BucketEncryption            `json:"encryption,omitempty"`
	Etag                  *string                      `json:"etag,omitempty"`
	IamConfiguration      *BucketIamConfiguration      `json:"iamConfiguration,omitempty"`
	ID                    *string                      `json:"id,omitempty"`
	Kind                  *string                      `json:"kind,omitempty"`
	Labels                map[string]string            `json:"labels,omitempty"`
	Lifecycle             *BucketLifecycle             `json:"lifecycle,omitempty"`
	Location              *string                      `json:"location,omitempty"`
	LocationType          *string                      `json:"locationType,omitempty"`
	Logging               *BucketLogging               `json:"logging,omitempty"`
	Metageneration        *string                      `json:"metageneration,omitempty"`
	Name                  *string                      `json:"name,omitempty"`
	Owner                 *BucketOwner                 `json:"owner,omitempty"`
	ProjectNumber         *string                      `json:"projectNumber,omitempty"`
	RetentionPolicy       *BucketRetentionPolicy       `json:"retentionPolicy,omitempty"`
	Rpo                   *string                      `json:"rpo,omitempty"`
	SatisfiesPzs          *bool                        `json:"satisfiesPZS,omitempty"`
	SelfLink              *string                      `json:"selfLink,omitempty"`
	StorageClass          *string                      `json:"storageClass,omitempty"`
	TimeCreated           *time.Time                   `json:"timeCreated,omitempty"`
	Updated               *time.Time                   `json:"updated,omitempty"`
	Versioning            *BucketVersioning            `json:"versioning,omitempty"`
	Website               *BucketWebsite               `json:"website,omitempty"`
}
