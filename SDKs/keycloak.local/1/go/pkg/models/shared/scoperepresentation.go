package shared

type ScopeRepresentation struct {
	DisplayName *string                  `json:"displayName"`
	IconURI     *string                  `json:"iconUri"`
	ID          *string                  `json:"id"`
	Name        *string                  `json:"name"`
	Policies    []PolicyRepresentation   `json:"policies"`
	Resources   []ResourceRepresentation `json:"resources"`
}
