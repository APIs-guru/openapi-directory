package shared




type InboundSsoAssignmentSsoModeEnum string

const (
    InboundSsoAssignmentSsoModeEnumSsoModeUnspecified InboundSsoAssignmentSsoModeEnum = "SSO_MODE_UNSPECIFIED"
InboundSsoAssignmentSsoModeEnumSsoOff InboundSsoAssignmentSsoModeEnum = "SSO_OFF"
InboundSsoAssignmentSsoModeEnumSamlSso InboundSsoAssignmentSsoModeEnum = "SAML_SSO"
InboundSsoAssignmentSsoModeEnumDomainWideSamlIfEnabled InboundSsoAssignmentSsoModeEnum = "DOMAIN_WIDE_SAML_IF_ENABLED"
)


type InboundSsoAssignment struct {
    Customer *string `json:"customer,omitempty"`
    Name *string `json:"name,omitempty"`
    Rank *int32 `json:"rank,omitempty"`
    SamlSsoInfo *SamlSsoInfo `json:"samlSsoInfo,omitempty"`
    SignInBehavior *SignInBehavior `json:"signInBehavior,omitempty"`
    SsoMode *InboundSsoAssignmentSsoModeEnum `json:"ssoMode,omitempty"`
    TargetGroup *string `json:"targetGroup,omitempty"`
    TargetOrgUnit *string `json:"targetOrgUnit,omitempty"`
    
}

