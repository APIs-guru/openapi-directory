package shared

type ManualTriggerStateEnum string

const (
	ManualTriggerStateEnumStateUnspecified ManualTriggerStateEnum = "STATE_UNSPECIFIED"
	ManualTriggerStateEnumInactive         ManualTriggerStateEnum = "INACTIVE"
	ManualTriggerStateEnumActive           ManualTriggerStateEnum = "ACTIVE"
)

type ManualTrigger struct {
	ActivationDurationMinutes *string                 `json:"activationDurationMinutes"`
	AdvertiserID              *string                 `json:"advertiserId"`
	DisplayName               *string                 `json:"displayName"`
	LatestActivationTime      *string                 `json:"latestActivationTime"`
	Name                      *string                 `json:"name"`
	State                     *ManualTriggerStateEnum `json:"state"`
	TriggerID                 *string                 `json:"triggerId"`
}
