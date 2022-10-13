package shared

type MemberListResponse struct {
	Etag            *string                `json:"etag"`
	EventID         *string                `json:"eventId"`
	Items           []Member               `json:"items"`
	Kind            *string                `json:"kind"`
	NextPageToken   *string                `json:"nextPageToken"`
	PageInfo        *PageInfo              `json:"pageInfo"`
	TokenPagination map[string]interface{} `json:"tokenPagination"`
	VisitorID       *string                `json:"visitorId"`
}
