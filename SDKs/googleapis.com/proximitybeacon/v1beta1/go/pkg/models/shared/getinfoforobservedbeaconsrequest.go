package shared

// GetInfoForObservedBeaconsRequest
// Request for beacon and attachment information about beacons that a mobile client has encountered "in the wild".
type GetInfoForObservedBeaconsRequest struct {
	NamespacedTypes []string      `json:"namespacedTypes,omitempty"`
	Observations    []Observation `json:"observations,omitempty"`
}
