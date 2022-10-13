package shared

type GetInfoForObservedBeaconsRequest struct {
	NamespacedTypes []string      `json:"namespacedTypes"`
	Observations    []Observation `json:"observations"`
}
