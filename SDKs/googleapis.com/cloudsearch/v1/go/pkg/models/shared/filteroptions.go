package shared

// FilterOptions
// Filter options to be applied on query.
type FilterOptions struct {
	Filter     *Filter `json:"filter,omitempty"`
	ObjectType *string `json:"objectType,omitempty"`
}
