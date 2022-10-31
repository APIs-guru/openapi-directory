package shared



type GoogleChromeManagementV1MemoryStatusReport struct {
    PageFaults *int32 `json:"pageFaults,omitempty"`
    ReportTime *string `json:"reportTime,omitempty"`
    SampleFrequency *string `json:"sampleFrequency,omitempty"`
    SystemRAMFreeBytes *string `json:"systemRamFreeBytes,omitempty"`
    
}

