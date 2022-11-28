package shared

// RollbackInstanceRequest
// Request for rollbacking a notebook instance
type RollbackInstanceRequest struct {
	TargetSnapshot *string `json:"targetSnapshot,omitempty"`
}
