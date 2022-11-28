package shared

// Rewrite
// A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
type Rewrite struct {
	DynamicLinks   *bool            `json:"dynamicLinks,omitempty"`
	Function       *string          `json:"function,omitempty"`
	FunctionRegion *string          `json:"functionRegion,omitempty"`
	Glob           *string          `json:"glob,omitempty"`
	Path           *string          `json:"path,omitempty"`
	Regex          *string          `json:"regex,omitempty"`
	Run            *CloudRunRewrite `json:"run,omitempty"`
}
