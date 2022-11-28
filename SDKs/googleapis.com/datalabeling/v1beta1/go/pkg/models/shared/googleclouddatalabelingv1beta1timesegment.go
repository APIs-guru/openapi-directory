package shared

// GoogleCloudDatalabelingV1beta1TimeSegment
// A time period inside of an example that has a time dimension (e.g. video).
type GoogleCloudDatalabelingV1beta1TimeSegment struct {
	EndTimeOffset   *string `json:"endTimeOffset,omitempty"`
	StartTimeOffset *string `json:"startTimeOffset,omitempty"`
}
