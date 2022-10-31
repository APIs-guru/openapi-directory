package shared

type Route struct {
	APIVersion *string      `json:"apiVersion,omitempty"`
	Kind       *string      `json:"kind,omitempty"`
	Metadata   *ObjectMeta  `json:"metadata,omitempty"`
	Spec       *RouteSpec   `json:"spec,omitempty"`
	Status     *RouteStatus `json:"status,omitempty"`
}
