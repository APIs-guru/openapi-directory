package shared

type GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum string

const (
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum = "MANAGEMENT_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnumNone                  GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum = "NONE"
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnumBasic                 GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum = "BASIC"
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnumComplete              GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum = "COMPLETE"
)

type GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum string

const (
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnspecified GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum = "ENCRYPTION_UNSPECIFIED"
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum = "ENCRYPTION_UNSUPPORTED"
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnumUnencrypted           GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum = "UNENCRYPTED"
	GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnumEncrypted             GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum = "ENCRYPTED"
)

type GoogleIdentityAccesscontextmanagerV1DevicePolicy struct {
	AllowedDeviceManagementLevels []GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum `json:"allowedDeviceManagementLevels"`
	AllowedEncryptionStatuses     []GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum     `json:"allowedEncryptionStatuses"`
	OsConstraints                 []GoogleIdentityAccesscontextmanagerV1OsConstraint                                  `json:"osConstraints"`
	RequireAdminApproval          *bool                                                                               `json:"requireAdminApproval"`
	RequireCorpOwned              *bool                                                                               `json:"requireCorpOwned"`
	RequireScreenlock             *bool                                                                               `json:"requireScreenlock"`
}
