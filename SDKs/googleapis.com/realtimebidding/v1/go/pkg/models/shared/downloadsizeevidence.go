package shared

type DownloadSizeEvidence struct {
	TopURLDownloadSizeBreakdowns []URLDownloadSize `json:"topUrlDownloadSizeBreakdowns"`
	TotalDownloadSizeKb          *int32            `json:"totalDownloadSizeKb"`
}
