package shared

type GetInfoForObservedBeaconsRequest struct {
	NamespacedTypes []string      `json:"namespacedTypes,omitempty"`
	Observations    []Observation `json:"observations,omitempty"`
}
