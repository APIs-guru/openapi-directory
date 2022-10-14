package shared

type GqlQueryParameter struct {
	Cursor *string `json:"cursor,omitempty"`
	Value  *Value  `json:"value,omitempty"`
}
