package shared

// UpdatePageElementAltTextRequest
// Updates the alt text title and/or description of a page element.
type UpdatePageElementAltTextRequest struct {
	Description *string `json:"description,omitempty"`
	ObjectID    *string `json:"objectId,omitempty"`
	Title       *string `json:"title,omitempty"`
}
