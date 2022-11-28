package shared

// GoogleChromeManagementV1MemoryInfo
// Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A
type GoogleChromeManagementV1MemoryInfo struct {
	AvailableRAMBytes     *string                                            `json:"availableRamBytes,omitempty"`
	TotalMemoryEncryption *GoogleChromeManagementV1TotalMemoryEncryptionInfo `json:"totalMemoryEncryption,omitempty"`
	TotalRAMBytes         *string                                            `json:"totalRamBytes,omitempty"`
}
