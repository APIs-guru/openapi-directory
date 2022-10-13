package shared

type HTTPRouteURLRewrite struct {
	HostRewrite       *string `json:"hostRewrite"`
	PathPrefixRewrite *string `json:"pathPrefixRewrite"`
}
