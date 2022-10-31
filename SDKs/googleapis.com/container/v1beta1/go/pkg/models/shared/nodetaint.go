package shared




type NodeTaintEffectEnum string

const (
    NodeTaintEffectEnumEffectUnspecified NodeTaintEffectEnum = "EFFECT_UNSPECIFIED"
NodeTaintEffectEnumNoSchedule NodeTaintEffectEnum = "NO_SCHEDULE"
NodeTaintEffectEnumPreferNoSchedule NodeTaintEffectEnum = "PREFER_NO_SCHEDULE"
NodeTaintEffectEnumNoExecute NodeTaintEffectEnum = "NO_EXECUTE"
)


type NodeTaint struct {
    Effect *NodeTaintEffectEnum `json:"effect,omitempty"`
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

