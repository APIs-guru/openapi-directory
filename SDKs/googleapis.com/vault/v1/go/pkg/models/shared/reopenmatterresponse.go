package shared

// ReopenMatterResponse
// Response to a ReopenMatterRequest.
type ReopenMatterResponse struct {
	Matter *Matter `json:"matter,omitempty"`
}
