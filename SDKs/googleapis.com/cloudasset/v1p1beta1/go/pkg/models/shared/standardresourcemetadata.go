package shared



type StandardResourceMetadata struct {
    AdditionalAttributes []string `json:"additionalAttributes,omitempty"`
    AssetType *string `json:"assetType,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkTags []string `json:"networkTags,omitempty"`
    Project *string `json:"project,omitempty"`
    
}

