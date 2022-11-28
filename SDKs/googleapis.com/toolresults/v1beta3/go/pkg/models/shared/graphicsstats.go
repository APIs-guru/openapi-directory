package shared

// GraphicsStats
// Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
type GraphicsStats struct {
	Buckets               []GraphicsStatsBucket `json:"buckets,omitempty"`
	HighInputLatencyCount *string               `json:"highInputLatencyCount,omitempty"`
	JankyFrames           *string               `json:"jankyFrames,omitempty"`
	MissedVsyncCount      *string               `json:"missedVsyncCount,omitempty"`
	P50Millis             *string               `json:"p50Millis,omitempty"`
	P90Millis             *string               `json:"p90Millis,omitempty"`
	P95Millis             *string               `json:"p95Millis,omitempty"`
	P99Millis             *string               `json:"p99Millis,omitempty"`
	SlowBitmapUploadCount *string               `json:"slowBitmapUploadCount,omitempty"`
	SlowDrawCount         *string               `json:"slowDrawCount,omitempty"`
	SlowUIThreadCount     *string               `json:"slowUiThreadCount,omitempty"`
	TotalFrames           *string               `json:"totalFrames,omitempty"`
}
