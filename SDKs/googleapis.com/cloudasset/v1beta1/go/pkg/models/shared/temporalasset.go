package shared

type TemporalAsset struct {
	Asset   *Asset      `json:"asset"`
	Deleted *bool       `json:"deleted"`
	Window  *TimeWindow `json:"window"`
}
