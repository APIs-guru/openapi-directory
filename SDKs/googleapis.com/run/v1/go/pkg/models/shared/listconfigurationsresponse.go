package shared



type ListConfigurationsResponse struct {
    APIVersion *string `json:"apiVersion,omitempty"`
    Items []Configuration `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Metadata *ListMeta `json:"metadata,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

