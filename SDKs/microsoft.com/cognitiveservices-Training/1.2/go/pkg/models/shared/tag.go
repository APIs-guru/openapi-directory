package shared

// Tag
// Represents a Tag
type Tag struct {
	Description *string `json:"Description,omitempty"`
	ID          *string `json:"Id,omitempty"`
	ImageCount  *int32  `json:"ImageCount,omitempty"`
	Name        *string `json:"Name,omitempty"`
}

// TagInput
// Represents a Tag
type TagInput struct {
	Description *string `json:"Description,omitempty" form:"name=Description"`
	Name        *string `json:"Name,omitempty" form:"name=Name"`
}
