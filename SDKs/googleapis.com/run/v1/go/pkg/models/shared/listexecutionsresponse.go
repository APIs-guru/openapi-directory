package shared



type ListExecutionsResponse struct {
    APIVersion *string `json:"apiVersion,omitempty"`
    Items []Execution `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Metadata *ListMeta `json:"metadata,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

