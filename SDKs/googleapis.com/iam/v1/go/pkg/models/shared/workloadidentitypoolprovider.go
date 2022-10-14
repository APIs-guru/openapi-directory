package shared

type WorkloadIdentityPoolProviderStateEnum string

const (
	WorkloadIdentityPoolProviderStateEnumStateUnspecified WorkloadIdentityPoolProviderStateEnum = "STATE_UNSPECIFIED"
	WorkloadIdentityPoolProviderStateEnumActive           WorkloadIdentityPoolProviderStateEnum = "ACTIVE"
	WorkloadIdentityPoolProviderStateEnumDeleted          WorkloadIdentityPoolProviderStateEnum = "DELETED"
)

type WorkloadIdentityPoolProvider struct {
	AttributeCondition *string                                `json:"attributeCondition,omitempty"`
	AttributeMapping   map[string]string                      `json:"attributeMapping,omitempty"`
	Aws                *Aws                                   `json:"aws,omitempty"`
	Description        *string                                `json:"description,omitempty"`
	Disabled           *bool                                  `json:"disabled,omitempty"`
	DisplayName        *string                                `json:"displayName,omitempty"`
	Name               *string                                `json:"name,omitempty"`
	Oidc               *Oidc                                  `json:"oidc,omitempty"`
	Saml               *Saml                                  `json:"saml,omitempty"`
	State              *WorkloadIdentityPoolProviderStateEnum `json:"state,omitempty"`
}
