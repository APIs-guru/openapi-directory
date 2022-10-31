package shared



type CreativeAssetSelection struct {
    DefaultAssetID *string `json:"defaultAssetId,omitempty"`
    Rules []Rule `json:"rules,omitempty"`
    
}

