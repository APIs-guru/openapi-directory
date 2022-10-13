package shared

import (
	"time"
)

type WritablePowerFeedPhasePhaseEnum string

const (
	WritablePowerFeedPhasePhaseEnumSinglePhase WritablePowerFeedPhasePhaseEnum = "single-phase"
	WritablePowerFeedPhasePhaseEnumThreePhase  WritablePowerFeedPhasePhaseEnum = "three-phase"
)

type WritablePowerFeedStatusStatusEnum string

const (
	WritablePowerFeedStatusStatusEnumOffline WritablePowerFeedStatusStatusEnum = "offline"
	WritablePowerFeedStatusStatusEnumActive  WritablePowerFeedStatusStatusEnum = "active"
	WritablePowerFeedStatusStatusEnumPlanned WritablePowerFeedStatusStatusEnum = "planned"
	WritablePowerFeedStatusStatusEnumFailed  WritablePowerFeedStatusStatusEnum = "failed"
)

type WritablePowerFeedSupplySupplyEnum string

const (
	WritablePowerFeedSupplySupplyEnumAc WritablePowerFeedSupplySupplyEnum = "ac"
	WritablePowerFeedSupplySupplyEnumDc WritablePowerFeedSupplySupplyEnum = "dc"
)

type WritablePowerFeedTypeTypeEnum string

const (
	WritablePowerFeedTypeTypeEnumPrimary   WritablePowerFeedTypeTypeEnum = "primary"
	WritablePowerFeedTypeTypeEnumRedundant WritablePowerFeedTypeTypeEnum = "redundant"
)

type WritablePowerFeed struct {
	Amperage       *int64                             `json:"amperage"`
	Comments       *string                            `json:"comments"`
	Created        *time.Time                         `json:"created"`
	CustomFields   map[string]interface{}             `json:"custom_fields"`
	ID             *int64                             `json:"id"`
	LastUpdated    *time.Time                         `json:"last_updated"`
	MaxUtilization *int64                             `json:"max_utilization"`
	Name           string                             `json:"name"`
	Phase          *WritablePowerFeedPhasePhaseEnum   `json:"phase"`
	PowerPanel     int64                              `json:"power_panel"`
	Rack           *int64                             `json:"rack"`
	Status         *WritablePowerFeedStatusStatusEnum `json:"status"`
	Supply         *WritablePowerFeedSupplySupplyEnum `json:"supply"`
	Tags           []string                           `json:"tags"`
	Type           *WritablePowerFeedTypeTypeEnum     `json:"type"`
	Voltage        *int64                             `json:"voltage"`
}
