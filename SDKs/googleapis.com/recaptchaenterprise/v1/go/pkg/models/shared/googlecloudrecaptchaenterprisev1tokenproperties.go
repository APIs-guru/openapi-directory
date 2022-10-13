package shared

type GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum string

const (
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumInvalidReasonUnspecified GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "INVALID_REASON_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumUnknownInvalidReason     GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "UNKNOWN_INVALID_REASON"
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumMalformed                GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "MALFORMED"
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumExpired                  GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "EXPIRED"
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumDupe                     GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "DUPE"
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumMissing                  GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "MISSING"
	GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnumBrowserError             GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = "BROWSER_ERROR"
)

type GoogleCloudRecaptchaenterpriseV1TokenProperties struct {
	Action        *string                                                           `json:"action"`
	CreateTime    *string                                                           `json:"createTime"`
	Hostname      *string                                                           `json:"hostname"`
	InvalidReason *GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum `json:"invalidReason"`
	Valid         *bool                                                             `json:"valid"`
}
