package shared



type GoogleChromeManagementV1MemoryInfo struct {
    AvailableRAMBytes *string `json:"availableRamBytes,omitempty"`
    TotalMemoryEncryption *GoogleChromeManagementV1TotalMemoryEncryptionInfo `json:"totalMemoryEncryption,omitempty"`
    TotalRAMBytes *string `json:"totalRamBytes,omitempty"`
    
}

