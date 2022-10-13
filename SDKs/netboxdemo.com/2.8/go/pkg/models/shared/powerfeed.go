package shared

import (
	"time"
)

type PowerFeedPhaseLabelEnum string

const (
	PowerFeedPhaseLabelEnumSinglePhase PowerFeedPhaseLabelEnum = "Single phase"
	PowerFeedPhaseLabelEnumThreePhase  PowerFeedPhaseLabelEnum = "Three-phase"
)

type PowerFeedPhaseValueEnum string

const (
	PowerFeedPhaseValueEnumSinglePhase PowerFeedPhaseValueEnum = "single-phase"
	PowerFeedPhaseValueEnumThreePhase  PowerFeedPhaseValueEnum = "three-phase"
)

type PowerFeedPhasePhase struct {
	Label PowerFeedPhaseLabelEnum `json:"label"`
	Value PowerFeedPhaseValueEnum `json:"value"`
}

type PowerFeedStatusLabelEnum string

const (
	PowerFeedStatusLabelEnumOffline PowerFeedStatusLabelEnum = "Offline"
	PowerFeedStatusLabelEnumActive  PowerFeedStatusLabelEnum = "Active"
	PowerFeedStatusLabelEnumPlanned PowerFeedStatusLabelEnum = "Planned"
	PowerFeedStatusLabelEnumFailed  PowerFeedStatusLabelEnum = "Failed"
)

type PowerFeedStatusValueEnum string

const (
	PowerFeedStatusValueEnumOffline PowerFeedStatusValueEnum = "offline"
	PowerFeedStatusValueEnumActive  PowerFeedStatusValueEnum = "active"
	PowerFeedStatusValueEnumPlanned PowerFeedStatusValueEnum = "planned"
	PowerFeedStatusValueEnumFailed  PowerFeedStatusValueEnum = "failed"
)

type PowerFeedStatusStatus struct {
	Label PowerFeedStatusLabelEnum `json:"label"`
	Value PowerFeedStatusValueEnum `json:"value"`
}

type PowerFeedSupplyLabelEnum string

const (
	PowerFeedSupplyLabelEnumAc PowerFeedSupplyLabelEnum = "AC"
	PowerFeedSupplyLabelEnumDc PowerFeedSupplyLabelEnum = "DC"
)

type PowerFeedSupplyValueEnum string

const (
	PowerFeedSupplyValueEnumAc PowerFeedSupplyValueEnum = "ac"
	PowerFeedSupplyValueEnumDc PowerFeedSupplyValueEnum = "dc"
)

type PowerFeedSupplySupply struct {
	Label PowerFeedSupplyLabelEnum `json:"label"`
	Value PowerFeedSupplyValueEnum `json:"value"`
}

type PowerFeedTypeLabelEnum string

const (
	PowerFeedTypeLabelEnumPrimary   PowerFeedTypeLabelEnum = "Primary"
	PowerFeedTypeLabelEnumRedundant PowerFeedTypeLabelEnum = "Redundant"
)

type PowerFeedTypeValueEnum string

const (
	PowerFeedTypeValueEnumPrimary   PowerFeedTypeValueEnum = "primary"
	PowerFeedTypeValueEnumRedundant PowerFeedTypeValueEnum = "redundant"
)

type PowerFeedTypeType struct {
	Label PowerFeedTypeLabelEnum `json:"label"`
	Value PowerFeedTypeValueEnum `json:"value"`
}

type PowerFeed struct {
	Amperage       *int64                 `json:"amperage"`
	Comments       *string                `json:"comments"`
	Created        *time.Time             `json:"created"`
	CustomFields   map[string]interface{} `json:"custom_fields"`
	ID             *int64                 `json:"id"`
	LastUpdated    *time.Time             `json:"last_updated"`
	MaxUtilization *int64                 `json:"max_utilization"`
	Name           string                 `json:"name"`
	Phase          *PowerFeedPhasePhase   `json:"phase"`
	PowerPanel     NestedPowerPanel       `json:"power_panel"`
	Rack           *NestedRack            `json:"rack"`
	Status         *PowerFeedStatusStatus `json:"status"`
	Supply         *PowerFeedSupplySupply `json:"supply"`
	Tags           []string               `json:"tags"`
	Type           *PowerFeedTypeType     `json:"type"`
	Voltage        *int64                 `json:"voltage"`
}
