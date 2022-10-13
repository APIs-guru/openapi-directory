package shared

type UsageRule struct {
	AllowUnregisteredCalls *bool   `json:"allowUnregisteredCalls"`
	Selector               *string `json:"selector"`
	SkipServiceControl     *bool   `json:"skipServiceControl"`
}
