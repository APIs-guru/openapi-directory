package shared

// HTTPRouteRequestMirrorPolicy
// Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
type HTTPRouteRequestMirrorPolicy struct {
	Destination *HTTPRouteDestination `json:"destination,omitempty"`
}
