package shared

// Header
// A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
type Header struct {
	Glob    *string           `json:"glob,omitempty"`
	Headers map[string]string `json:"headers,omitempty"`
	Regex   *string           `json:"regex,omitempty"`
}
