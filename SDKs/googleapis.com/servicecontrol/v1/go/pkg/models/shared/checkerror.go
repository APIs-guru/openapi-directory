package shared




type CheckErrorCodeEnum string

const (
    CheckErrorCodeEnumErrorCodeUnspecified CheckErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
CheckErrorCodeEnumNotFound CheckErrorCodeEnum = "NOT_FOUND"
CheckErrorCodeEnumPermissionDenied CheckErrorCodeEnum = "PERMISSION_DENIED"
CheckErrorCodeEnumResourceExhausted CheckErrorCodeEnum = "RESOURCE_EXHAUSTED"
CheckErrorCodeEnumBudgetExceeded CheckErrorCodeEnum = "BUDGET_EXCEEDED"
CheckErrorCodeEnumDenialOfServiceDetected CheckErrorCodeEnum = "DENIAL_OF_SERVICE_DETECTED"
CheckErrorCodeEnumLoadShedding CheckErrorCodeEnum = "LOAD_SHEDDING"
CheckErrorCodeEnumAbuserDetected CheckErrorCodeEnum = "ABUSER_DETECTED"
CheckErrorCodeEnumServiceNotActivated CheckErrorCodeEnum = "SERVICE_NOT_ACTIVATED"
CheckErrorCodeEnumVisibilityDenied CheckErrorCodeEnum = "VISIBILITY_DENIED"
CheckErrorCodeEnumBillingDisabled CheckErrorCodeEnum = "BILLING_DISABLED"
CheckErrorCodeEnumProjectDeleted CheckErrorCodeEnum = "PROJECT_DELETED"
CheckErrorCodeEnumProjectInvalid CheckErrorCodeEnum = "PROJECT_INVALID"
CheckErrorCodeEnumConsumerInvalid CheckErrorCodeEnum = "CONSUMER_INVALID"
CheckErrorCodeEnumIPAddressBlocked CheckErrorCodeEnum = "IP_ADDRESS_BLOCKED"
CheckErrorCodeEnumRefererBlocked CheckErrorCodeEnum = "REFERER_BLOCKED"
CheckErrorCodeEnumClientAppBlocked CheckErrorCodeEnum = "CLIENT_APP_BLOCKED"
CheckErrorCodeEnumAPITargetBlocked CheckErrorCodeEnum = "API_TARGET_BLOCKED"
CheckErrorCodeEnumAPIKeyInvalid CheckErrorCodeEnum = "API_KEY_INVALID"
CheckErrorCodeEnumAPIKeyExpired CheckErrorCodeEnum = "API_KEY_EXPIRED"
CheckErrorCodeEnumAPIKeyNotFound CheckErrorCodeEnum = "API_KEY_NOT_FOUND"
CheckErrorCodeEnumSpatulaHeaderInvalid CheckErrorCodeEnum = "SPATULA_HEADER_INVALID"
CheckErrorCodeEnumLoasRoleInvalid CheckErrorCodeEnum = "LOAS_ROLE_INVALID"
CheckErrorCodeEnumNoLoasProject CheckErrorCodeEnum = "NO_LOAS_PROJECT"
CheckErrorCodeEnumLoasProjectDisabled CheckErrorCodeEnum = "LOAS_PROJECT_DISABLED"
CheckErrorCodeEnumSecurityPolicyViolated CheckErrorCodeEnum = "SECURITY_POLICY_VIOLATED"
CheckErrorCodeEnumInvalidCredential CheckErrorCodeEnum = "INVALID_CREDENTIAL"
CheckErrorCodeEnumLocationPolicyViolated CheckErrorCodeEnum = "LOCATION_POLICY_VIOLATED"
CheckErrorCodeEnumNamespaceLookupUnavailable CheckErrorCodeEnum = "NAMESPACE_LOOKUP_UNAVAILABLE"
CheckErrorCodeEnumServiceStatusUnavailable CheckErrorCodeEnum = "SERVICE_STATUS_UNAVAILABLE"
CheckErrorCodeEnumBillingStatusUnavailable CheckErrorCodeEnum = "BILLING_STATUS_UNAVAILABLE"
CheckErrorCodeEnumQuotaCheckUnavailable CheckErrorCodeEnum = "QUOTA_CHECK_UNAVAILABLE"
CheckErrorCodeEnumLoasProjectLookupUnavailable CheckErrorCodeEnum = "LOAS_PROJECT_LOOKUP_UNAVAILABLE"
CheckErrorCodeEnumCloudResourceManagerBackendUnavailable CheckErrorCodeEnum = "CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE"
CheckErrorCodeEnumSecurityPolicyBackendUnavailable CheckErrorCodeEnum = "SECURITY_POLICY_BACKEND_UNAVAILABLE"
CheckErrorCodeEnumLocationPolicyBackendUnavailable CheckErrorCodeEnum = "LOCATION_POLICY_BACKEND_UNAVAILABLE"
CheckErrorCodeEnumInjectedError CheckErrorCodeEnum = "INJECTED_ERROR"
)


type CheckError struct {
    Code *CheckErrorCodeEnum `json:"code,omitempty"`
    Detail *string `json:"detail,omitempty"`
    Status *Status `json:"status,omitempty"`
    Subject *string `json:"subject,omitempty"`
    
}

