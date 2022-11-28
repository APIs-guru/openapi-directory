package shared

// Brand
// Brand fields. Values are only set for fields requested explicitly in the request's search query.
type Brand struct {
	Name *string `json:"name,omitempty"`
}
