package shared

type GoogleChromeManagementV1MemoryInfo struct {
	AvailableRAMBytes     *string                                            `json:"availableRamBytes"`
	TotalMemoryEncryption *GoogleChromeManagementV1TotalMemoryEncryptionInfo `json:"totalMemoryEncryption"`
	TotalRAMBytes         *string                                            `json:"totalRamBytes"`
}
