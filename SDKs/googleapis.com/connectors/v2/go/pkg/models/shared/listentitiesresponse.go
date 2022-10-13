package shared

type ListEntitiesResponse struct {
	Entities      []Entity `json:"entities"`
	NextPageToken *string  `json:"nextPageToken"`
}
