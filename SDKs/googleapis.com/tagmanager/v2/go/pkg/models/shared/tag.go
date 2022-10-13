package shared

type TagTagFiringOptionEnum string

const (
	TagTagFiringOptionEnumTagFiringOptionUnspecified TagTagFiringOptionEnum = "tagFiringOptionUnspecified"
	TagTagFiringOptionEnumUnlimited                  TagTagFiringOptionEnum = "unlimited"
	TagTagFiringOptionEnumOncePerEvent               TagTagFiringOptionEnum = "oncePerEvent"
	TagTagFiringOptionEnumOncePerLoad                TagTagFiringOptionEnum = "oncePerLoad"
)

type Tag struct {
	AccountID                    *string                 `json:"accountId"`
	BlockingRuleID               []string                `json:"blockingRuleId"`
	BlockingTriggerID            []string                `json:"blockingTriggerId"`
	ConsentSettings              *TagConsentSetting      `json:"consentSettings"`
	ContainerID                  *string                 `json:"containerId"`
	Fingerprint                  *string                 `json:"fingerprint"`
	FiringRuleID                 []string                `json:"firingRuleId"`
	FiringTriggerID              []string                `json:"firingTriggerId"`
	LiveOnly                     *bool                   `json:"liveOnly"`
	MonitoringMetadata           *Parameter              `json:"monitoringMetadata"`
	MonitoringMetadataTagNameKey *string                 `json:"monitoringMetadataTagNameKey"`
	Name                         *string                 `json:"name"`
	Notes                        *string                 `json:"notes"`
	Parameter                    []Parameter             `json:"parameter"`
	ParentFolderID               *string                 `json:"parentFolderId"`
	Path                         *string                 `json:"path"`
	Paused                       *bool                   `json:"paused"`
	Priority                     *Parameter              `json:"priority"`
	ScheduleEndMs                *string                 `json:"scheduleEndMs"`
	ScheduleStartMs              *string                 `json:"scheduleStartMs"`
	SetupTag                     []SetupTag              `json:"setupTag"`
	TagFiringOption              *TagTagFiringOptionEnum `json:"tagFiringOption"`
	TagID                        *string                 `json:"tagId"`
	TagManagerURL                *string                 `json:"tagManagerUrl"`
	TeardownTag                  []TeardownTag           `json:"teardownTag"`
	Type                         *string                 `json:"type"`
	WorkspaceID                  *string                 `json:"workspaceId"`
}
