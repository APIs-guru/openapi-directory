package shared

type CreateInstanceRequest struct {
	Clusters   map[string]Cluster `json:"clusters"`
	Instance   *Instance          `json:"instance"`
	InstanceID *string            `json:"instanceId"`
	Parent     *string            `json:"parent"`
}
