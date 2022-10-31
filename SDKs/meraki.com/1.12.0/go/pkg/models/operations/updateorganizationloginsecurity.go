package operations



type UpdateOrganizationLoginSecurityPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationLoginSecurityRequestBody struct {
    AccountLockoutAttempts *int64 `json:"accountLockoutAttempts,omitempty"`
    EnforceAccountLockout *bool `json:"enforceAccountLockout,omitempty"`
    EnforceDifferentPasswords *bool `json:"enforceDifferentPasswords,omitempty"`
    EnforceIdleTimeout *bool `json:"enforceIdleTimeout,omitempty"`
    EnforceLoginIPRanges *bool `json:"enforceLoginIpRanges,omitempty"`
    EnforcePasswordExpiration *bool `json:"enforcePasswordExpiration,omitempty"`
    EnforceStrongPasswords *bool `json:"enforceStrongPasswords,omitempty"`
    EnforceTwoFactorAuth *bool `json:"enforceTwoFactorAuth,omitempty"`
    IdleTimeoutMinutes *int64 `json:"idleTimeoutMinutes,omitempty"`
    LoginIPRanges []string `json:"loginIpRanges,omitempty"`
    NumDifferentPasswords *int64 `json:"numDifferentPasswords,omitempty"`
    PasswordExpirationDays *int64 `json:"passwordExpirationDays,omitempty"`
    
}

type UpdateOrganizationLoginSecurityRequest struct {
    PathParams UpdateOrganizationLoginSecurityPathParams 
    Request *UpdateOrganizationLoginSecurityRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationLoginSecurityResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationLoginSecurity200ApplicationJSONObject map[string]interface{} 
    
}

