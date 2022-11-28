package shared

// ListLocationAdminsResponse
// Response message for AccessControl.ListLocationAdmins.
type ListLocationAdminsResponse struct {
	Admins []Admin `json:"admins,omitempty"`
}
