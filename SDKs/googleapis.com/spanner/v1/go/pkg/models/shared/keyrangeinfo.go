package shared



type KeyRangeInfo struct {
    ContextValues []ContextValue `json:"contextValues,omitempty"`
    EndKeyIndex *int32 `json:"endKeyIndex,omitempty"`
    Info *LocalizedString `json:"info,omitempty"`
    KeysCount *string `json:"keysCount,omitempty"`
    Metric *LocalizedString `json:"metric,omitempty"`
    StartKeyIndex *int32 `json:"startKeyIndex,omitempty"`
    TimeOffset *string `json:"timeOffset,omitempty"`
    Unit *LocalizedString `json:"unit,omitempty"`
    Value *float32 `json:"value,omitempty"`
    
}

