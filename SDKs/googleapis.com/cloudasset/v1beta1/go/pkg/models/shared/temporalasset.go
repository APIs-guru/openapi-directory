package shared

// TemporalAsset
// An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
type TemporalAsset struct {
	Asset   *Asset      `json:"asset,omitempty"`
	Deleted *bool       `json:"deleted,omitempty"`
	Window  *TimeWindow `json:"window,omitempty"`
}
