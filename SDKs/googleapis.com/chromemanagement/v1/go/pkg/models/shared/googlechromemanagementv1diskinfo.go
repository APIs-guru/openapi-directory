package shared

type GoogleChromeManagementV1DiskInfo struct {
	BytesReadThisSession    *string  `json:"bytesReadThisSession"`
	BytesWrittenThisSession *string  `json:"bytesWrittenThisSession"`
	DiscardTimeThisSession  *string  `json:"discardTimeThisSession"`
	Health                  *string  `json:"health"`
	IoTimeThisSession       *string  `json:"ioTimeThisSession"`
	Manufacturer            *string  `json:"manufacturer"`
	Model                   *string  `json:"model"`
	ReadTimeThisSession     *string  `json:"readTimeThisSession"`
	SerialNumber            *string  `json:"serialNumber"`
	SizeBytes               *string  `json:"sizeBytes"`
	Type                    *string  `json:"type"`
	VolumeIds               []string `json:"volumeIds"`
	WriteTimeThisSession    *string  `json:"writeTimeThisSession"`
}
