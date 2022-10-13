package shared

type TagTagFiringOptionEnum string

const (
	TagTagFiringOptionEnumUnlimited    TagTagFiringOptionEnum = "unlimited"
	TagTagFiringOptionEnumOncePerEvent TagTagFiringOptionEnum = "oncePerEvent"
	TagTagFiringOptionEnumOncePerLoad  TagTagFiringOptionEnum = "oncePerLoad"
)

type Tag struct {
	AccountID         *string                 `json:"accountId"`
	BlockingRuleID    []string                `json:"blockingRuleId"`
	BlockingTriggerID []string                `json:"blockingTriggerId"`
	ContainerID       *string                 `json:"containerId"`
	Fingerprint       *string                 `json:"fingerprint"`
	FiringRuleID      []string                `json:"firingRuleId"`
	FiringTriggerID   []string                `json:"firingTriggerId"`
	LiveOnly          *bool                   `json:"liveOnly"`
	Name              *string                 `json:"name"`
	Notes             *string                 `json:"notes"`
	Parameter         []Parameter             `json:"parameter"`
	ParentFolderID    *string                 `json:"parentFolderId"`
	Paused            *bool                   `json:"paused"`
	Priority          *Parameter              `json:"priority"`
	ScheduleEndMs     *string                 `json:"scheduleEndMs"`
	ScheduleStartMs   *string                 `json:"scheduleStartMs"`
	SetupTag          []SetupTag              `json:"setupTag"`
	TagFiringOption   *TagTagFiringOptionEnum `json:"tagFiringOption"`
	TagID             *string                 `json:"tagId"`
	TeardownTag       []TeardownTag           `json:"teardownTag"`
	Type              *string                 `json:"type"`
}
