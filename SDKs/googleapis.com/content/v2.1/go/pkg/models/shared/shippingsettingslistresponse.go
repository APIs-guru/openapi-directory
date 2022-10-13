package shared

type ShippingsettingsListResponse struct {
	Kind          *string            `json:"kind"`
	NextPageToken *string            `json:"nextPageToken"`
	Resources     []ShippingSettings `json:"resources"`
}
