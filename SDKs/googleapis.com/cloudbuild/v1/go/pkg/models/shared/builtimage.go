package shared

// BuiltImage
// An image built by the pipeline.
type BuiltImage struct {
	Digest     *string   `json:"digest,omitempty"`
	Name       *string   `json:"name,omitempty"`
	PushTiming *TimeSpan `json:"pushTiming,omitempty"`
}
