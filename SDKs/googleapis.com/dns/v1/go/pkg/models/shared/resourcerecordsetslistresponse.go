package shared

type ResourceRecordSetsListResponse struct {
	Header        *ResponseHeader     `json:"header"`
	Kind          *string             `json:"kind"`
	NextPageToken *string             `json:"nextPageToken"`
	Rrsets        []ResourceRecordSet `json:"rrsets"`
}
