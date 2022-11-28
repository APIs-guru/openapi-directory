package shared

// CloseMatterResponse
// Response to a CloseMatterRequest.
type CloseMatterResponse struct {
	Matter *Matter `json:"matter,omitempty"`
}
