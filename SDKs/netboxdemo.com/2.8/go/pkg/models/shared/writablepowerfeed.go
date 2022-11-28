package shared

type WritablePowerFeedPhaseEnum string

const (
	WritablePowerFeedPhaseEnumSinglePhase WritablePowerFeedPhaseEnum = "single-phase"
	WritablePowerFeedPhaseEnumThreePhase  WritablePowerFeedPhaseEnum = "three-phase"
)

type WritablePowerFeedStatusEnum string

const (
	WritablePowerFeedStatusEnumOffline WritablePowerFeedStatusEnum = "offline"
	WritablePowerFeedStatusEnumActive  WritablePowerFeedStatusEnum = "active"
	WritablePowerFeedStatusEnumPlanned WritablePowerFeedStatusEnum = "planned"
	WritablePowerFeedStatusEnumFailed  WritablePowerFeedStatusEnum = "failed"
)

type WritablePowerFeedSupplyEnum string

const (
	WritablePowerFeedSupplyEnumAc WritablePowerFeedSupplyEnum = "ac"
	WritablePowerFeedSupplyEnumDc WritablePowerFeedSupplyEnum = "dc"
)

type WritablePowerFeedTypeEnum string

const (
	WritablePowerFeedTypeEnumPrimary   WritablePowerFeedTypeEnum = "primary"
	WritablePowerFeedTypeEnumRedundant WritablePowerFeedTypeEnum = "redundant"
)

type WritablePowerFeedInput struct {
	Amperage       *int64                       `json:"amperage,omitempty"`
	Comments       *string                      `json:"comments,omitempty"`
	CustomFields   map[string]interface{}       `json:"custom_fields,omitempty"`
	MaxUtilization *int64                       `json:"max_utilization,omitempty"`
	Name           string                       `json:"name"`
	Phase          *WritablePowerFeedPhaseEnum  `json:"phase,omitempty"`
	PowerPanel     int64                        `json:"power_panel"`
	Rack           *int64                       `json:"rack,omitempty"`
	Status         *WritablePowerFeedStatusEnum `json:"status,omitempty"`
	Supply         *WritablePowerFeedSupplyEnum `json:"supply,omitempty"`
	Tags           []string                     `json:"tags,omitempty"`
	Type           *WritablePowerFeedTypeEnum   `json:"type,omitempty"`
	Voltage        *int64                       `json:"voltage,omitempty"`
}
