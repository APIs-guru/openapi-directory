package shared

type UserFederationProviderRepresentation struct {
	ChangedSyncPeriod *int32                 `json:"changedSyncPeriod"`
	Config            map[string]interface{} `json:"config"`
	DisplayName       *string                `json:"displayName"`
	FullSyncPeriod    *int32                 `json:"fullSyncPeriod"`
	ID                *string                `json:"id"`
	LastSync          *int32                 `json:"lastSync"`
	Priority          *int32                 `json:"priority"`
	ProviderName      *string                `json:"providerName"`
}
