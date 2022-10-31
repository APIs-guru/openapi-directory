package shared

import (
"time")


type PowerFeedPhaseLabelEnum string

const (
    PowerFeedPhaseLabelEnumSinglePhase PowerFeedPhaseLabelEnum = "Single phase"
PowerFeedPhaseLabelEnumThreePhase PowerFeedPhaseLabelEnum = "Three-phase"
)



type PowerFeedPhaseValueEnum string

const (
    PowerFeedPhaseValueEnumSinglePhase PowerFeedPhaseValueEnum = "single-phase"
PowerFeedPhaseValueEnumThreePhase PowerFeedPhaseValueEnum = "three-phase"
)


type PowerFeedPhase struct {
    Label PowerFeedPhaseLabelEnum `json:"label"`
    Value PowerFeedPhaseValueEnum `json:"value"`
    
}


type PowerFeedStatusLabelEnum string

const (
    PowerFeedStatusLabelEnumOffline PowerFeedStatusLabelEnum = "Offline"
PowerFeedStatusLabelEnumActive PowerFeedStatusLabelEnum = "Active"
PowerFeedStatusLabelEnumPlanned PowerFeedStatusLabelEnum = "Planned"
PowerFeedStatusLabelEnumFailed PowerFeedStatusLabelEnum = "Failed"
)



type PowerFeedStatusValueEnum string

const (
    PowerFeedStatusValueEnumOffline PowerFeedStatusValueEnum = "offline"
PowerFeedStatusValueEnumActive PowerFeedStatusValueEnum = "active"
PowerFeedStatusValueEnumPlanned PowerFeedStatusValueEnum = "planned"
PowerFeedStatusValueEnumFailed PowerFeedStatusValueEnum = "failed"
)


type PowerFeedStatus struct {
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


type PowerFeedSupply struct {
    Label PowerFeedSupplyLabelEnum `json:"label"`
    Value PowerFeedSupplyValueEnum `json:"value"`
    
}


type PowerFeedTypeLabelEnum string

const (
    PowerFeedTypeLabelEnumPrimary PowerFeedTypeLabelEnum = "Primary"
PowerFeedTypeLabelEnumRedundant PowerFeedTypeLabelEnum = "Redundant"
)



type PowerFeedTypeValueEnum string

const (
    PowerFeedTypeValueEnumPrimary PowerFeedTypeValueEnum = "primary"
PowerFeedTypeValueEnumRedundant PowerFeedTypeValueEnum = "redundant"
)


type PowerFeedType struct {
    Label PowerFeedTypeLabelEnum `json:"label"`
    Value PowerFeedTypeValueEnum `json:"value"`
    
}

type PowerFeed struct {
    Amperage *int64 `json:"amperage,omitempty"`
    Comments *string `json:"comments,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    MaxUtilization *int64 `json:"max_utilization,omitempty"`
    Name string `json:"name"`
    Phase *PowerFeedPhase `json:"phase,omitempty"`
    PowerPanel NestedPowerPanel `json:"power_panel"`
    Rack *NestedRack `json:"rack,omitempty"`
    Status *PowerFeedStatus `json:"status,omitempty"`
    Supply *PowerFeedSupply `json:"supply,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type *PowerFeedType `json:"type,omitempty"`
    Voltage *int64 `json:"voltage,omitempty"`
    
}

