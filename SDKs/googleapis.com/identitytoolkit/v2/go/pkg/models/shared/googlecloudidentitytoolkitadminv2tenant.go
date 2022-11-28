package shared

// GoogleCloudIdentitytoolkitAdminV2Tenant
// A Tenant contains configuration for the tenant in a multi-tenant project.
type GoogleCloudIdentitytoolkitAdminV2Tenant struct {
	AllowPasswordSignup      *bool                                                    `json:"allowPasswordSignup,omitempty"`
	AutodeleteAnonymousUsers *bool                                                    `json:"autodeleteAnonymousUsers,omitempty"`
	Client                   *GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig `json:"client,omitempty"`
	DisableAuth              *bool                                                    `json:"disableAuth,omitempty"`
	DisplayName              *string                                                  `json:"displayName,omitempty"`
	EmailPrivacyConfig       *GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig     `json:"emailPrivacyConfig,omitempty"`
	EnableAnonymousUser      *bool                                                    `json:"enableAnonymousUser,omitempty"`
	EnableEmailLinkSignin    *bool                                                    `json:"enableEmailLinkSignin,omitempty"`
	HashConfig               *GoogleCloudIdentitytoolkitAdminV2HashConfig             `json:"hashConfig,omitempty"`
	Inheritance              *GoogleCloudIdentitytoolkitAdminV2Inheritance            `json:"inheritance,omitempty"`
	MfaConfig                *GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig  `json:"mfaConfig,omitempty"`
	Monitoring               *GoogleCloudIdentitytoolkitAdminV2MonitoringConfig       `json:"monitoring,omitempty"`
	Name                     *string                                                  `json:"name,omitempty"`
	SmsRegionConfig          *GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig        `json:"smsRegionConfig,omitempty"`
	TestPhoneNumbers         map[string]string                                        `json:"testPhoneNumbers,omitempty"`
}

// GoogleCloudIdentitytoolkitAdminV2TenantInput
// A Tenant contains configuration for the tenant in a multi-tenant project.
type GoogleCloudIdentitytoolkitAdminV2TenantInput struct {
	AllowPasswordSignup      *bool                                                    `json:"allowPasswordSignup,omitempty"`
	AutodeleteAnonymousUsers *bool                                                    `json:"autodeleteAnonymousUsers,omitempty"`
	Client                   *GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig `json:"client,omitempty"`
	DisableAuth              *bool                                                    `json:"disableAuth,omitempty"`
	DisplayName              *string                                                  `json:"displayName,omitempty"`
	EmailPrivacyConfig       *GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig     `json:"emailPrivacyConfig,omitempty"`
	EnableAnonymousUser      *bool                                                    `json:"enableAnonymousUser,omitempty"`
	EnableEmailLinkSignin    *bool                                                    `json:"enableEmailLinkSignin,omitempty"`
	Inheritance              *GoogleCloudIdentitytoolkitAdminV2Inheritance            `json:"inheritance,omitempty"`
	MfaConfig                *GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig  `json:"mfaConfig,omitempty"`
	Monitoring               *GoogleCloudIdentitytoolkitAdminV2MonitoringConfig       `json:"monitoring,omitempty"`
	SmsRegionConfig          *GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig        `json:"smsRegionConfig,omitempty"`
	TestPhoneNumbers         map[string]string                                        `json:"testPhoneNumbers,omitempty"`
}
