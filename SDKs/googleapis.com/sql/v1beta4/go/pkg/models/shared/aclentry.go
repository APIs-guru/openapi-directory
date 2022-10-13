package shared

type ACLEntry struct {
	ExpirationTime *string `json:"expirationTime"`
	Kind           *string `json:"kind"`
	Name           *string `json:"name"`
	Value          *string `json:"value"`
}
