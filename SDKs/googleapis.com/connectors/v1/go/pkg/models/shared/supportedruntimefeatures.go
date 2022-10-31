package shared



type SupportedRuntimeFeatures struct {
    ActionApis *bool `json:"actionApis,omitempty"`
    EntityApis *bool `json:"entityApis,omitempty"`
    SQLQuery *bool `json:"sqlQuery,omitempty"`
    
}

