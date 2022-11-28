package shared

// Tag
// Represents a Tag
type Tag struct {
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	ImageCount  *int32  `json:"imageCount,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// TagInput
// Represents a Tag
type TagInput struct {
	Description *string `json:"description,omitempty" form:"name=description"`
	Name        *string `json:"name,omitempty" form:"name=name"`
}
