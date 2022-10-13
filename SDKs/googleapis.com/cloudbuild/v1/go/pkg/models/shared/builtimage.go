package shared

type BuiltImage struct {
	Digest     *string   `json:"digest"`
	Name       *string   `json:"name"`
	PushTiming *TimeSpan `json:"pushTiming"`
}
