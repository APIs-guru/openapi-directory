package shared

import (
	"time"
)

type BucketAutoclass struct {
	Enabled    *bool      `json:"enabled,omitempty"`
	ToggleTime *time.Time `json:"toggleTime,omitempty"`
}

type BucketBilling struct {
	RequesterPays *bool `json:"requesterPays,omitempty"`
}

type BucketCors struct {
	MaxAgeSeconds  *int32   `json:"maxAgeSeconds,omitempty"`
	Method         []string `json:"method,omitempty"`
	Origin         []string `json:"origin,omitempty"`
	ResponseHeader []string `json:"responseHeader,omitempty"`
}

type BucketCustomPlacementConfig struct {
	DataLocations []string `json:"dataLocations,omitempty"`
}

type BucketEncryption struct {
	DefaultKmsKeyName *string `json:"defaultKmsKeyName,omitempty"`
}

type BucketIamConfigurationBucketPolicyOnly struct {
	Enabled    *bool      `json:"enabled,omitempty"`
	LockedTime *time.Time `json:"lockedTime,omitempty"`
}

type BucketIamConfigurationUniformBucketLevelAccess struct {
	Enabled    *bool      `json:"enabled,omitempty"`
	LockedTime *time.Time `json:"lockedTime,omitempty"`
}

type BucketIamConfiguration struct {
	BucketPolicyOnly         *BucketIamConfigurationBucketPolicyOnly         `json:"bucketPolicyOnly,omitempty"`
	PublicAccessPrevention   *string                                         `json:"publicAccessPrevention,omitempty"`
	UniformBucketLevelAccess *BucketIamConfigurationUniformBucketLevelAccess `json:"uniformBucketLevelAccess,omitempty"`
}

type BucketLifecycleRuleAction struct {
	StorageClass *string `json:"storageClass,omitempty"`
	Type         *string `json:"type,omitempty"`
}

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

type BucketRetentionPolicy struct {
	EffectiveTime   *time.Time `json:"effectiveTime,omitempty"`
	IsLocked        *bool      `json:"isLocked,omitempty"`
	RetentionPeriod *string    `json:"retentionPeriod,omitempty"`
}

type BucketVersioning struct {
	Enabled *bool `json:"enabled,omitempty"`
}

type BucketWebsite struct {
	MainPageSuffix *string `json:"mainPageSuffix,omitempty"`
	NotFoundPage   *string `json:"notFoundPage,omitempty"`
}

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
