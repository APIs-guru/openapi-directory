package shared

type CreateInstanceRequest struct {
	Instance   *Instance `json:"instance"`
	InstanceID *string   `json:"instanceId"`
}
