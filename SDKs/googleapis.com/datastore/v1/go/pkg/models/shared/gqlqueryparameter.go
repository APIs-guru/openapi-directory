package shared

// GqlQueryParameter
// A binding parameter for a GQL query.
type GqlQueryParameter struct {
	Cursor *string `json:"cursor,omitempty"`
	Value  *Value  `json:"value,omitempty"`
}
