package shared

// MembershipsLevel
// A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
type MembershipsLevel struct {
	Etag    *string                  `json:"etag,omitempty"`
	ID      *string                  `json:"id,omitempty"`
	Kind    *string                  `json:"kind,omitempty"`
	Snippet *MembershipsLevelSnippet `json:"snippet,omitempty"`
}
