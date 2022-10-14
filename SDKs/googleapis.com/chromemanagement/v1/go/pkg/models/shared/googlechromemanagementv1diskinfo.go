package shared

type GoogleChromeManagementV1DiskInfo struct {
	BytesReadThisSession    *string  `json:"bytesReadThisSession,omitempty"`
	BytesWrittenThisSession *string  `json:"bytesWrittenThisSession,omitempty"`
	DiscardTimeThisSession  *string  `json:"discardTimeThisSession,omitempty"`
	Health                  *string  `json:"health,omitempty"`
	IoTimeThisSession       *string  `json:"ioTimeThisSession,omitempty"`
	Manufacturer            *string  `json:"manufacturer,omitempty"`
	Model                   *string  `json:"model,omitempty"`
	ReadTimeThisSession     *string  `json:"readTimeThisSession,omitempty"`
	SerialNumber            *string  `json:"serialNumber,omitempty"`
	SizeBytes               *string  `json:"sizeBytes,omitempty"`
	Type                    *string  `json:"type,omitempty"`
	VolumeIds               []string `json:"volumeIds,omitempty"`
	WriteTimeThisSession    *string  `json:"writeTimeThisSession,omitempty"`
}
