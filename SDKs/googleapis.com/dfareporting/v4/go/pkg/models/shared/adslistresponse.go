package shared

type AdsListResponse struct {
	Ads           []Ad    `json:"ads"`
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
}
