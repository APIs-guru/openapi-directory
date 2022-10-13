package shared

type GqlQueryParameter struct {
	Cursor *string `json:"cursor"`
	Value  *Value  `json:"value"`
}
