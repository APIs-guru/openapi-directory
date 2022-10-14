package shared

type QuotaPropertiesQuotaModeEnum string

const (
	QuotaPropertiesQuotaModeEnumAcquire           QuotaPropertiesQuotaModeEnum = "ACQUIRE"
	QuotaPropertiesQuotaModeEnumAcquireBestEffort QuotaPropertiesQuotaModeEnum = "ACQUIRE_BEST_EFFORT"
	QuotaPropertiesQuotaModeEnumCheck             QuotaPropertiesQuotaModeEnum = "CHECK"
	QuotaPropertiesQuotaModeEnumRelease           QuotaPropertiesQuotaModeEnum = "RELEASE"
)

type QuotaProperties struct {
	QuotaMode *QuotaPropertiesQuotaModeEnum `json:"quotaMode,omitempty"`
}
