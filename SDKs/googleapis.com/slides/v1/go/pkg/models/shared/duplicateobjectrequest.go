package shared

// DuplicateObjectRequest
// Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.
type DuplicateObjectRequest struct {
	ObjectID  *string           `json:"objectId,omitempty"`
	ObjectIds map[string]string `json:"objectIds,omitempty"`
}
