package operations

type UpdateOrganizationLoginSecurityPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationLoginSecurityRequestBody struct {
	AccountLockoutAttempts    *int64   `json:"accountLockoutAttempts"`
	EnforceAccountLockout     *bool    `json:"enforceAccountLockout"`
	EnforceDifferentPasswords *bool    `json:"enforceDifferentPasswords"`
	EnforceIdleTimeout        *bool    `json:"enforceIdleTimeout"`
	EnforceLoginIPRanges      *bool    `json:"enforceLoginIpRanges"`
	EnforcePasswordExpiration *bool    `json:"enforcePasswordExpiration"`
	EnforceStrongPasswords    *bool    `json:"enforceStrongPasswords"`
	EnforceTwoFactorAuth      *bool    `json:"enforceTwoFactorAuth"`
	IdleTimeoutMinutes        *int64   `json:"idleTimeoutMinutes"`
	LoginIPRanges             []string `json:"loginIpRanges"`
	NumDifferentPasswords     *int64   `json:"numDifferentPasswords"`
	PasswordExpirationDays    *int64   `json:"passwordExpirationDays"`
}

type UpdateOrganizationLoginSecurityRequest struct {
	PathParams UpdateOrganizationLoginSecurityPathParams
	Request    *UpdateOrganizationLoginSecurityRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationLoginSecurityResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateOrganizationLoginSecurity200ApplicationJSONObject map[string]interface{}
}
