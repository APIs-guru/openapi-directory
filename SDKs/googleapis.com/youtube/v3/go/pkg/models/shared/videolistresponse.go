package shared

type VideoListResponse struct {
	Etag            *string                `json:"etag"`
	EventID         *string                `json:"eventId"`
	Items           []Video                `json:"items"`
	Kind            *string                `json:"kind"`
	NextPageToken   *string                `json:"nextPageToken"`
	PageInfo        *PageInfo              `json:"pageInfo"`
	PrevPageToken   *string                `json:"prevPageToken"`
	TokenPagination map[string]interface{} `json:"tokenPagination"`
	VisitorID       *string                `json:"visitorId"`
}
