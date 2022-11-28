package shared

// GetInfoForObservedBeaconsResponse
// Information about the requested beacons, optionally including attachment data.
type GetInfoForObservedBeaconsResponse struct {
	Beacons []BeaconInfo `json:"beacons,omitempty"`
}
