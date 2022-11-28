package shared

// UpdateInfo
// UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
type UpdateInfo struct {
	BlueGreenInfo *BlueGreenInfo `json:"blueGreenInfo,omitempty"`
}
