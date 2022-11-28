package shared

// HTTPRouteURLRewrite
// The specification for modifying the URL of the request, prior to forwarding the request to the destination.
type HTTPRouteURLRewrite struct {
	HostRewrite       *string `json:"hostRewrite,omitempty"`
	PathPrefixRewrite *string `json:"pathPrefixRewrite,omitempty"`
}
