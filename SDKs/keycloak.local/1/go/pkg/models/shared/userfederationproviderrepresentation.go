package shared



type UserFederationProviderRepresentation struct {
    ChangedSyncPeriod *int32 `json:"changedSyncPeriod,omitempty"`
    Config map[string]interface{} `json:"config,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    FullSyncPeriod *int32 `json:"fullSyncPeriod,omitempty"`
    ID *string `json:"id,omitempty"`
    LastSync *int32 `json:"lastSync,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    ProviderName *string `json:"providerName,omitempty"`
    
}

