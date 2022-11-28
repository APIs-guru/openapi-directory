package shared

type TagTagFiringOptionEnum string

const (
	TagTagFiringOptionEnumUnlimited    TagTagFiringOptionEnum = "unlimited"
	TagTagFiringOptionEnumOncePerEvent TagTagFiringOptionEnum = "oncePerEvent"
	TagTagFiringOptionEnumOncePerLoad  TagTagFiringOptionEnum = "oncePerLoad"
)

// Tag
// Represents a Google Tag Manager Tag.
type Tag struct {
	AccountID         *string                 `json:"accountId,omitempty"`
	BlockingRuleID    []string                `json:"blockingRuleId,omitempty"`
	BlockingTriggerID []string                `json:"blockingTriggerId,omitempty"`
	ContainerID       *string                 `json:"containerId,omitempty"`
	Fingerprint       *string                 `json:"fingerprint,omitempty"`
	FiringRuleID      []string                `json:"firingRuleId,omitempty"`
	FiringTriggerID   []string                `json:"firingTriggerId,omitempty"`
	LiveOnly          *bool                   `json:"liveOnly,omitempty"`
	Name              *string                 `json:"name,omitempty"`
	Notes             *string                 `json:"notes,omitempty"`
	Parameter         []Parameter             `json:"parameter,omitempty"`
	ParentFolderID    *string                 `json:"parentFolderId,omitempty"`
	Paused            *bool                   `json:"paused,omitempty"`
	Priority          *Parameter              `json:"priority,omitempty"`
	ScheduleEndMs     *string                 `json:"scheduleEndMs,omitempty"`
	ScheduleStartMs   *string                 `json:"scheduleStartMs,omitempty"`
	SetupTag          []SetupTag              `json:"setupTag,omitempty"`
	TagFiringOption   *TagTagFiringOptionEnum `json:"tagFiringOption,omitempty"`
	TagID             *string                 `json:"tagId,omitempty"`
	TeardownTag       []TeardownTag           `json:"teardownTag,omitempty"`
	Type              *string                 `json:"type,omitempty"`
}
