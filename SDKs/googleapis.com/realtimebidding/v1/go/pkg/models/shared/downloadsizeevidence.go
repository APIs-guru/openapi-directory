package shared



type DownloadSizeEvidence struct {
    TopURLDownloadSizeBreakdowns []URLDownloadSize `json:"topUrlDownloadSizeBreakdowns,omitempty"`
    TotalDownloadSizeKb *int32 `json:"totalDownloadSizeKb,omitempty"`
    
}

