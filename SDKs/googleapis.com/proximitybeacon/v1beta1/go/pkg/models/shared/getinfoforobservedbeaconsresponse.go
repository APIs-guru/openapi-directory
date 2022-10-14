package shared

type GetInfoForObservedBeaconsResponse struct {
	Beacons []BeaconInfo `json:"beacons,omitempty"`
}
