package shared

// GqlQuery
// A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
type GqlQuery struct {
	AllowLiterals      *bool                        `json:"allowLiterals,omitempty"`
	NamedBindings      map[string]GqlQueryParameter `json:"namedBindings,omitempty"`
	PositionalBindings []GqlQueryParameter          `json:"positionalBindings,omitempty"`
	QueryString        *string                      `json:"queryString,omitempty"`
}
