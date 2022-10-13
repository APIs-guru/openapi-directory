package shared

type FailoverInstanceRequestDataProtectionModeEnum string

const (
	FailoverInstanceRequestDataProtectionModeEnumDataProtectionModeUnspecified FailoverInstanceRequestDataProtectionModeEnum = "DATA_PROTECTION_MODE_UNSPECIFIED"
	FailoverInstanceRequestDataProtectionModeEnumLimitedDataLoss               FailoverInstanceRequestDataProtectionModeEnum = "LIMITED_DATA_LOSS"
	FailoverInstanceRequestDataProtectionModeEnumForceDataLoss                 FailoverInstanceRequestDataProtectionModeEnum = "FORCE_DATA_LOSS"
)

type FailoverInstanceRequest struct {
	DataProtectionMode *FailoverInstanceRequestDataProtectionModeEnum `json:"dataProtectionMode"`
}
