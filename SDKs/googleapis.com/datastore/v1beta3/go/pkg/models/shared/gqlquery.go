package shared

type GqlQuery struct {
	AllowLiterals      *bool                        `json:"allowLiterals"`
	NamedBindings      map[string]GqlQueryParameter `json:"namedBindings"`
	PositionalBindings []GqlQueryParameter          `json:"positionalBindings"`
	QueryString        *string                      `json:"queryString"`
}
