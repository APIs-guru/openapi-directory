package shared

type InboundSsoAssignmentSsoModeEnum string

const (
	InboundSsoAssignmentSsoModeEnumSsoModeUnspecified      InboundSsoAssignmentSsoModeEnum = "SSO_MODE_UNSPECIFIED"
	InboundSsoAssignmentSsoModeEnumSsoOff                  InboundSsoAssignmentSsoModeEnum = "SSO_OFF"
	InboundSsoAssignmentSsoModeEnumSamlSso                 InboundSsoAssignmentSsoModeEnum = "SAML_SSO"
	InboundSsoAssignmentSsoModeEnumDomainWideSamlIfEnabled InboundSsoAssignmentSsoModeEnum = "DOMAIN_WIDE_SAML_IF_ENABLED"
)

type InboundSsoAssignment struct {
	Customer       *string                          `json:"customer"`
	Name           *string                          `json:"name"`
	Rank           *int32                           `json:"rank"`
	SamlSsoInfo    *SamlSsoInfo                     `json:"samlSsoInfo"`
	SignInBehavior *SignInBehavior                  `json:"signInBehavior"`
	SsoMode        *InboundSsoAssignmentSsoModeEnum `json:"ssoMode"`
	TargetGroup    *string                          `json:"targetGroup"`
	TargetOrgUnit  *string                          `json:"targetOrgUnit"`
}
