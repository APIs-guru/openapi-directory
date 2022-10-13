package shared

type ListHotTabletsResponse struct {
	HotTablets    []HotTablet `json:"hotTablets"`
	NextPageToken *string     `json:"nextPageToken"`
}
