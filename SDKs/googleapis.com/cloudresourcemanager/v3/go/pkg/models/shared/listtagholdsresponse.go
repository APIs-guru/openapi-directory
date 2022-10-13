package shared

type ListTagHoldsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	TagHolds      []TagHold `json:"tagHolds"`
}
