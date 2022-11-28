package shared

type LdapsSettingsStateEnum string

const (
	LdapsSettingsStateEnumStateUnspecified LdapsSettingsStateEnum = "STATE_UNSPECIFIED"
	LdapsSettingsStateEnumUpdating         LdapsSettingsStateEnum = "UPDATING"
	LdapsSettingsStateEnumActive           LdapsSettingsStateEnum = "ACTIVE"
	LdapsSettingsStateEnumFailed           LdapsSettingsStateEnum = "FAILED"
)

// LdapsSettingsInput
// LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type LdapsSettingsInput struct {
	Certificate         *Certificate `json:"certificate,omitempty"`
	CertificatePassword *string      `json:"certificatePassword,omitempty"`
	CertificatePfx      *string      `json:"certificatePfx,omitempty"`
	Name                *string      `json:"name,omitempty"`
}

// LdapsSettings
// LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
type LdapsSettings struct {
	Certificate         *Certificate            `json:"certificate,omitempty"`
	CertificatePassword *string                 `json:"certificatePassword,omitempty"`
	CertificatePfx      *string                 `json:"certificatePfx,omitempty"`
	Name                *string                 `json:"name,omitempty"`
	State               *LdapsSettingsStateEnum `json:"state,omitempty"`
	UpdateTime          *string                 `json:"updateTime,omitempty"`
}
