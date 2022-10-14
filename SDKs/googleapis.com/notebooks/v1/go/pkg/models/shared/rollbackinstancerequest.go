package shared

type RollbackInstanceRequest struct {
	TargetSnapshot *string `json:"targetSnapshot,omitempty"`
}
