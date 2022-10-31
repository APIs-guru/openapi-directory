package shared



type OrgPolicy struct {
    BooleanPolicy *BooleanPolicy `json:"booleanPolicy,omitempty"`
    Constraint *string `json:"constraint,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ListPolicy *ListPolicy `json:"listPolicy,omitempty"`
    RestoreDefault map[string]interface{} `json:"restoreDefault,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Version *int32 `json:"version,omitempty"`
    
}

