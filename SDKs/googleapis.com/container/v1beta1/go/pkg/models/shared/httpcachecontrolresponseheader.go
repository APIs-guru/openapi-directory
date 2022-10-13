package shared

type HTTPCacheControlResponseHeader struct {
	Age       *string `json:"age"`
	Directive *string `json:"directive"`
	Expires   *string `json:"expires"`
}
