package shared



type HTTPRouteURLRewrite struct {
    HostRewrite *string `json:"hostRewrite,omitempty"`
    PathPrefixRewrite *string `json:"pathPrefixRewrite,omitempty"`
    
}

