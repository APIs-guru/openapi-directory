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

// GoogleIdentityAccesscontextmanagerV1DevicePolicy
// `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
type GoogleIdentityAccesscontextmanagerV1DevicePolicy struct {
	AllowedDeviceManagementLevels []GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum `json:"allowedDeviceManagementLevels,omitempty"`
	AllowedEncryptionStatuses     []GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum     `json:"allowedEncryptionStatuses,omitempty"`
	OsConstraints                 []GoogleIdentityAccesscontextmanagerV1OsConstraint                                  `json:"osConstraints,omitempty"`
	RequireAdminApproval          *bool                                                                               `json:"requireAdminApproval,omitempty"`
	RequireCorpOwned              *bool                                                                               `json:"requireCorpOwned,omitempty"`
	RequireScreenlock             *bool                                                                               `json:"requireScreenlock,omitempty"`
}
