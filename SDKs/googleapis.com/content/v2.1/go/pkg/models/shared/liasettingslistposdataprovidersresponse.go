package shared

type LiasettingsListPosDataProvidersResponse struct {
	Kind             *string            `json:"kind,omitempty"`
	PosDataProviders []PosDataProviders `json:"posDataProviders,omitempty"`
}
