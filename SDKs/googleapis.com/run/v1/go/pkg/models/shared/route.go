package shared

type Route struct {
	APIVersion *string      `json:"apiVersion"`
	Kind       *string      `json:"kind"`
	Metadata   *ObjectMeta  `json:"metadata"`
	Spec       *RouteSpec   `json:"spec"`
	Status     *RouteStatus `json:"status"`
}
