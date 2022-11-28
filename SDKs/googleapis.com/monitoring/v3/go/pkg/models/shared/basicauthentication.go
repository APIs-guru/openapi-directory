package shared

// BasicAuthentication
// The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.
type BasicAuthentication struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
