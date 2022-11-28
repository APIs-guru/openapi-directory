package shared

// GetAncestryResponse
// Response from the projects.getAncestry method.
type GetAncestryResponse struct {
	Ancestor []Ancestor `json:"ancestor,omitempty"`
}
