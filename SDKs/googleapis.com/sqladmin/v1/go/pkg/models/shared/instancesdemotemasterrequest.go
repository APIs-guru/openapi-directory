package shared

// InstancesDemoteMasterRequest
// Database demote primary instance request.
type InstancesDemoteMasterRequest struct {
	DemoteMasterContext *DemoteMasterContext `json:"demoteMasterContext,omitempty"`
}
