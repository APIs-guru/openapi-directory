package shared

// HTTPCacheControlResponseHeader
// RFC-2616: cache control support
type HTTPCacheControlResponseHeader struct {
	Age       *string `json:"age,omitempty"`
	Directive *string `json:"directive,omitempty"`
	Expires   *string `json:"expires,omitempty"`
}
