package shared

type QuotaErrorCodeEnum string

const (
	QuotaErrorCodeEnumUnspecified              QuotaErrorCodeEnum = "UNSPECIFIED"
	QuotaErrorCodeEnumResourceExhausted        QuotaErrorCodeEnum = "RESOURCE_EXHAUSTED"
	QuotaErrorCodeEnumOutOfRange               QuotaErrorCodeEnum = "OUT_OF_RANGE"
	QuotaErrorCodeEnumBillingNotActive         QuotaErrorCodeEnum = "BILLING_NOT_ACTIVE"
	QuotaErrorCodeEnumProjectDeleted           QuotaErrorCodeEnum = "PROJECT_DELETED"
	QuotaErrorCodeEnumAPIKeyInvalid            QuotaErrorCodeEnum = "API_KEY_INVALID"
	QuotaErrorCodeEnumAPIKeyExpired            QuotaErrorCodeEnum = "API_KEY_EXPIRED"
	QuotaErrorCodeEnumSpatulaHeaderInvalid     QuotaErrorCodeEnum = "SPATULA_HEADER_INVALID"
	QuotaErrorCodeEnumLoasRoleInvalid          QuotaErrorCodeEnum = "LOAS_ROLE_INVALID"
	QuotaErrorCodeEnumNoLoasProject            QuotaErrorCodeEnum = "NO_LOAS_PROJECT"
	QuotaErrorCodeEnumProjectStatusUnavailable QuotaErrorCodeEnum = "PROJECT_STATUS_UNAVAILABLE"
	QuotaErrorCodeEnumServiceStatusUnavailable QuotaErrorCodeEnum = "SERVICE_STATUS_UNAVAILABLE"
	QuotaErrorCodeEnumBillingStatusUnavailable QuotaErrorCodeEnum = "BILLING_STATUS_UNAVAILABLE"
	QuotaErrorCodeEnumQuotaSystemUnavailable   QuotaErrorCodeEnum = "QUOTA_SYSTEM_UNAVAILABLE"
)

// QuotaError
// Represents error information for QuotaOperation.
type QuotaError struct {
	Code        *QuotaErrorCodeEnum `json:"code,omitempty"`
	Description *string             `json:"description,omitempty"`
	Status      *Status             `json:"status,omitempty"`
	Subject     *string             `json:"subject,omitempty"`
}
