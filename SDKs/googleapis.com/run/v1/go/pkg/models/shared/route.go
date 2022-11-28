package shared

// Route
// Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration.
type Route struct {
	APIVersion *string      `json:"apiVersion,omitempty"`
	Kind       *string      `json:"kind,omitempty"`
	Metadata   *ObjectMeta  `json:"metadata,omitempty"`
	Spec       *RouteSpec   `json:"spec,omitempty"`
	Status     *RouteStatus `json:"status,omitempty"`
}
