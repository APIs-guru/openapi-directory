package shared

// ListEntitiesResponse
// Response message for EntityService.ListEntities
type ListEntitiesResponse struct {
	Entities      []Entity `json:"entities,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
