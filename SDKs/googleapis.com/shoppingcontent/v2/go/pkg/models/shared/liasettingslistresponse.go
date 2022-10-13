package shared

type LiasettingsListResponse struct {
	Kind          *string       `json:"kind"`
	NextPageToken *string       `json:"nextPageToken"`
	Resources     []LiaSettings `json:"resources"`
}
