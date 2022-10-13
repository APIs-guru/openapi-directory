package shared

type GoogleChromeManagementV1MemoryStatusReport struct {
	PageFaults         *int32  `json:"pageFaults"`
	ReportTime         *string `json:"reportTime"`
	SampleFrequency    *string `json:"sampleFrequency"`
	SystemRAMFreeBytes *string `json:"systemRamFreeBytes"`
}
