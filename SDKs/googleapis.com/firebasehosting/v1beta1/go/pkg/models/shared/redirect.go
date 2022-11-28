package shared

// Redirect
// A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
type Redirect struct {
	Glob       *string `json:"glob,omitempty"`
	Location   *string `json:"location,omitempty"`
	Regex      *string `json:"regex,omitempty"`
	StatusCode *int32  `json:"statusCode,omitempty"`
}
