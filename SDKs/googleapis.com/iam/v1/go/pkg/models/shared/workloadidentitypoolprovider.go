package shared

type WorkloadIdentityPoolProviderStateEnum string

const (
	WorkloadIdentityPoolProviderStateEnumStateUnspecified WorkloadIdentityPoolProviderStateEnum = "STATE_UNSPECIFIED"
	WorkloadIdentityPoolProviderStateEnumActive           WorkloadIdentityPoolProviderStateEnum = "ACTIVE"
	WorkloadIdentityPoolProviderStateEnumDeleted          WorkloadIdentityPoolProviderStateEnum = "DELETED"
)

type WorkloadIdentityPoolProvider struct {
	AttributeCondition *string                                `json:"attributeCondition"`
	AttributeMapping   map[string]string                      `json:"attributeMapping"`
	Aws                *Aws                                   `json:"aws"`
	Description        *string                                `json:"description"`
	Disabled           *bool                                  `json:"disabled"`
	DisplayName        *string                                `json:"displayName"`
	Name               *string                                `json:"name"`
	Oidc               *Oidc                                  `json:"oidc"`
	Saml               *Saml                                  `json:"saml"`
	State              *WorkloadIdentityPoolProviderStateEnum `json:"state"`
}
