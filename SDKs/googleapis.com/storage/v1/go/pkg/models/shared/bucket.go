package shared

import (
	"time"
)

type BucketAutoclass struct {
	Enabled    *bool      `json:"enabled"`
	ToggleTime *time.Time `json:"toggleTime"`
}

type BucketBilling struct {
	RequesterPays *bool `json:"requesterPays"`
}

type BucketCors struct {
	MaxAgeSeconds  *int32   `json:"maxAgeSeconds"`
	Method         []string `json:"method"`
	Origin         []string `json:"origin"`
	ResponseHeader []string `json:"responseHeader"`
}

type BucketCustomPlacementConfig struct {
	DataLocations []string `json:"dataLocations"`
}

type BucketEncryption struct {
	DefaultKmsKeyName *string `json:"defaultKmsKeyName"`
}

type BucketIamConfigurationBucketPolicyOnly struct {
	Enabled    *bool      `json:"enabled"`
	LockedTime *time.Time `json:"lockedTime"`
}

type BucketIamConfigurationUniformBucketLevelAccess struct {
	Enabled    *bool      `json:"enabled"`
	LockedTime *time.Time `json:"lockedTime"`
}

type BucketIamConfiguration struct {
	BucketPolicyOnly         *BucketIamConfigurationBucketPolicyOnly         `json:"bucketPolicyOnly"`
	PublicAccessPrevention   *string                                         `json:"publicAccessPrevention"`
	UniformBucketLevelAccess *BucketIamConfigurationUniformBucketLevelAccess `json:"uniformBucketLevelAccess"`
}

type BucketLifecycleRuleAction struct {
	StorageClass *string `json:"storageClass"`
	Type         *string `json:"type"`
}

type BucketLifecycleRuleCondition struct {
	Age                     *int32     `json:"age"`
	CreatedBefore           *time.Time `json:"createdBefore"`
	CustomTimeBefore        *time.Time `json:"customTimeBefore"`
	DaysSinceCustomTime     *int32     `json:"daysSinceCustomTime"`
	DaysSinceNoncurrentTime *int32     `json:"daysSinceNoncurrentTime"`
	IsLive                  *bool      `json:"isLive"`
	MatchesPattern          *string    `json:"matchesPattern"`
	MatchesPrefix           []string   `json:"matchesPrefix"`
	MatchesStorageClass     []string   `json:"matchesStorageClass"`
	MatchesSuffix           []string   `json:"matchesSuffix"`
	NoncurrentTimeBefore    *time.Time `json:"noncurrentTimeBefore"`
	NumNewerVersions        *int32     `json:"numNewerVersions"`
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

type BucketRetentionPolicy struct {
	EffectiveTime   *time.Time `json:"effectiveTime"`
	IsLocked        *bool      `json:"isLocked"`
	RetentionPeriod *string    `json:"retentionPeriod"`
}

type BucketVersioning struct {
	Enabled *bool `json:"enabled"`
}

type BucketWebsite struct {
	MainPageSuffix *string `json:"mainPageSuffix"`
	NotFoundPage   *string `json:"notFoundPage"`
}

type Bucket struct {
	ACL                   []BucketAccessControl        `json:"acl"`
	Autoclass             *BucketAutoclass             `json:"autoclass"`
	Billing               *BucketBilling               `json:"billing"`
	Cors                  []BucketCors                 `json:"cors"`
	CustomPlacementConfig *BucketCustomPlacementConfig `json:"customPlacementConfig"`
	DefaultEventBasedHold *bool                        `json:"defaultEventBasedHold"`
	DefaultObjectACL      []ObjectAccessControl        `json:"defaultObjectAcl"`
	Encryption            *BucketEncryption            `json:"encryption"`
	Etag                  *string                      `json:"etag"`
	IamConfiguration      *BucketIamConfiguration      `json:"iamConfiguration"`
	ID                    *string                      `json:"id"`
	Kind                  *string                      `json:"kind"`
	Labels                map[string]string            `json:"labels"`
	Lifecycle             *BucketLifecycle             `json:"lifecycle"`
	Location              *string                      `json:"location"`
	LocationType          *string                      `json:"locationType"`
	Logging               *BucketLogging               `json:"logging"`
	Metageneration        *string                      `json:"metageneration"`
	Name                  *string                      `json:"name"`
	Owner                 *BucketOwner                 `json:"owner"`
	ProjectNumber         *string                      `json:"projectNumber"`
	RetentionPolicy       *BucketRetentionPolicy       `json:"retentionPolicy"`
	Rpo                   *string                      `json:"rpo"`
	SatisfiesPzs          *bool                        `json:"satisfiesPZS"`
	SelfLink              *string                      `json:"selfLink"`
	StorageClass          *string                      `json:"storageClass"`
	TimeCreated           *time.Time                   `json:"timeCreated"`
	Updated               *time.Time                   `json:"updated"`
	Versioning            *BucketVersioning            `json:"versioning"`
	Website               *BucketWebsite               `json:"website"`
}
