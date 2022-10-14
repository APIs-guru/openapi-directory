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
	Amperage       *int64                             `json:"amperage,omitempty"`
	Comments       *string                            `json:"comments,omitempty"`
	Created        *time.Time                         `json:"created,omitempty"`
	CustomFields   map[string]interface{}             `json:"custom_fields,omitempty"`
	ID             *int64                             `json:"id,omitempty"`
	LastUpdated    *time.Time                         `json:"last_updated,omitempty"`
	MaxUtilization *int64                             `json:"max_utilization,omitempty"`
	Name           string                             `json:"name"`
	Phase          *WritablePowerFeedPhasePhaseEnum   `json:"phase,omitempty"`
	PowerPanel     int64                              `json:"power_panel"`
	Rack           *int64                             `json:"rack,omitempty"`
	Status         *WritablePowerFeedStatusStatusEnum `json:"status,omitempty"`
	Supply         *WritablePowerFeedSupplySupplyEnum `json:"supply,omitempty"`
	Tags           []string                           `json:"tags,omitempty"`
	Type           *WritablePowerFeedTypeTypeEnum     `json:"type,omitempty"`
	Voltage        *int64                             `json:"voltage,omitempty"`
}
