package shared

// ContactToCreateInput
// A wrapper that contains the person data to populate a newly created source.
type ContactToCreateInput struct {
	ContactPerson *PersonInput `json:"contactPerson,omitempty"`
}
