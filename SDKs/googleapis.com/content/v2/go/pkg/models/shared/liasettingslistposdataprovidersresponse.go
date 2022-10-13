package shared

type LiasettingsListPosDataProvidersResponse struct {
	Kind             *string            `json:"kind"`
	PosDataProviders []PosDataProviders `json:"posDataProviders"`
}
