package shared

type ResourceRepresentation struct {
	Attributes         map[string]interface{} `json:"attributes"`
	DisplayName        *string                `json:"displayName"`
	IconURI            *string                `json:"icon_uri"`
	ID                 *string                `json:"id"`
	Name               *string                `json:"name"`
	OwnerManagedAccess *bool                  `json:"ownerManagedAccess"`
	Scopes             []ScopeRepresentation  `json:"scopes"`
	Type               *string                `json:"type"`
	Uris               []string               `json:"uris"`
}
