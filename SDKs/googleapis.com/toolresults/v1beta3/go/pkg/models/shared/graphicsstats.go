package shared

type GraphicsStats struct {
	Buckets               []GraphicsStatsBucket `json:"buckets"`
	HighInputLatencyCount *string               `json:"highInputLatencyCount"`
	JankyFrames           *string               `json:"jankyFrames"`
	MissedVsyncCount      *string               `json:"missedVsyncCount"`
	P50Millis             *string               `json:"p50Millis"`
	P90Millis             *string               `json:"p90Millis"`
	P95Millis             *string               `json:"p95Millis"`
	P99Millis             *string               `json:"p99Millis"`
	SlowBitmapUploadCount *string               `json:"slowBitmapUploadCount"`
	SlowDrawCount         *string               `json:"slowDrawCount"`
	SlowUIThreadCount     *string               `json:"slowUiThreadCount"`
	TotalFrames           *string               `json:"totalFrames"`
}
