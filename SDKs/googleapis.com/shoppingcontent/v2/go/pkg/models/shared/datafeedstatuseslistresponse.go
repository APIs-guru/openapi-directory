package shared

type DatafeedstatusesListResponse struct {
	Kind          *string          `json:"kind"`
	NextPageToken *string          `json:"nextPageToken"`
	Resources     []DatafeedStatus `json:"resources"`
}
