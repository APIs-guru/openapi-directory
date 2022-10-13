package shared

type GoogleCloudIdentitytoolkitAdminV2Tenant struct {
	AllowPasswordSignup      *bool                                                    `json:"allowPasswordSignup"`
	AutodeleteAnonymousUsers *bool                                                    `json:"autodeleteAnonymousUsers"`
	Client                   *GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig `json:"client"`
	DisableAuth              *bool                                                    `json:"disableAuth"`
	DisplayName              *string                                                  `json:"displayName"`
	EnableAnonymousUser      *bool                                                    `json:"enableAnonymousUser"`
	EnableEmailLinkSignin    *bool                                                    `json:"enableEmailLinkSignin"`
	HashConfig               *GoogleCloudIdentitytoolkitAdminV2HashConfig             `json:"hashConfig"`
	Inheritance              *GoogleCloudIdentitytoolkitAdminV2Inheritance            `json:"inheritance"`
	MfaConfig                *GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig  `json:"mfaConfig"`
	Monitoring               *GoogleCloudIdentitytoolkitAdminV2MonitoringConfig       `json:"monitoring"`
	Name                     *string                                                  `json:"name"`
	SmsRegionConfig          *GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig        `json:"smsRegionConfig"`
	TestPhoneNumbers         map[string]string                                        `json:"testPhoneNumbers"`
}
