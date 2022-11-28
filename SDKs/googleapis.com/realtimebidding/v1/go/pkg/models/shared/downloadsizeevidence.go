package shared

// DownloadSizeEvidence
// Total download size and URL-level download size breakdown for resources in a creative.
type DownloadSizeEvidence struct {
	TopURLDownloadSizeBreakdowns []URLDownloadSize `json:"topUrlDownloadSizeBreakdowns,omitempty"`
	TotalDownloadSizeKb          *int32            `json:"totalDownloadSizeKb,omitempty"`
}
