package shared

type ResourceRepresentation struct {
	Attributes         map[string]interface{} `json:"attributes,omitempty"`
	DisplayName        *string                `json:"displayName,omitempty"`
	IconURI            *string                `json:"icon_uri,omitempty"`
	ID                 *string                `json:"id,omitempty"`
	Name               *string                `json:"name,omitempty"`
	OwnerManagedAccess *bool                  `json:"ownerManagedAccess,omitempty"`
	Scopes             []ScopeRepresentation  `json:"scopes,omitempty"`
	Type               *string                `json:"type,omitempty"`
	Uris               []string               `json:"uris,omitempty"`
}
