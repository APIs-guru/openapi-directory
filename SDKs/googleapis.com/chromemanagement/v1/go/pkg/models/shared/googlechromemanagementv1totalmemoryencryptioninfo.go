package shared

type GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum string

const (
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnumMemoryEncryptionAlgorithmUnspecified GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum = "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnumMemoryEncryptionAlgorithmUnknown     GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum = "MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnumMemoryEncryptionAlgorithmAesXts128   GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnumMemoryEncryptionAlgorithmAesXts256   GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256"
)

type GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum string

const (
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnumMemoryEncryptionStateUnspecified GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum = "MEMORY_ENCRYPTION_STATE_UNSPECIFIED"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnumMemoryEncryptionStateUnknown     GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum = "MEMORY_ENCRYPTION_STATE_UNKNOWN"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnumMemoryEncryptionStateDisabled    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum = "MEMORY_ENCRYPTION_STATE_DISABLED"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnumMemoryEncryptionStateTme         GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum = "MEMORY_ENCRYPTION_STATE_TME"
	GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnumMemoryEncryptionStateMktme       GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum = "MEMORY_ENCRYPTION_STATE_MKTME"
)

// GoogleChromeManagementV1TotalMemoryEncryptionInfo
// Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
type GoogleChromeManagementV1TotalMemoryEncryptionInfo struct {
	EncryptionAlgorithm *GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum `json:"encryptionAlgorithm,omitempty"`
	EncryptionState     *GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum     `json:"encryptionState,omitempty"`
	KeyLength           *string                                                                   `json:"keyLength,omitempty"`
	MaxKeys             *string                                                                   `json:"maxKeys,omitempty"`
}
