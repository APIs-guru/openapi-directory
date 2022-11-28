package shared

type ManualTriggerStateEnum string

const (
	ManualTriggerStateEnumStateUnspecified ManualTriggerStateEnum = "STATE_UNSPECIFIED"
	ManualTriggerStateEnumInactive         ManualTriggerStateEnum = "INACTIVE"
	ManualTriggerStateEnumActive           ManualTriggerStateEnum = "ACTIVE"
)

// ManualTriggerInput
// A single manual trigger in Display & Video 360.
type ManualTriggerInput struct {
	ActivationDurationMinutes *string `json:"activationDurationMinutes,omitempty"`
	AdvertiserID              *string `json:"advertiserId,omitempty"`
	DisplayName               *string `json:"displayName,omitempty"`
}

// ManualTrigger
// A single manual trigger in Display & Video 360.
type ManualTrigger struct {
	ActivationDurationMinutes *string                 `json:"activationDurationMinutes,omitempty"`
	AdvertiserID              *string                 `json:"advertiserId,omitempty"`
	DisplayName               *string                 `json:"displayName,omitempty"`
	LatestActivationTime      *string                 `json:"latestActivationTime,omitempty"`
	Name                      *string                 `json:"name,omitempty"`
	State                     *ManualTriggerStateEnum `json:"state,omitempty"`
	TriggerID                 *string                 `json:"triggerId,omitempty"`
}
