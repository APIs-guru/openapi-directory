package shared

type TimeSeriesRatio struct {
	BadServiceFilter   *string `json:"badServiceFilter"`
	GoodServiceFilter  *string `json:"goodServiceFilter"`
	TotalServiceFilter *string `json:"totalServiceFilter"`
}
