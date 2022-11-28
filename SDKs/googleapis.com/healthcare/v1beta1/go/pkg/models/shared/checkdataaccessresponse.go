package shared

// CheckDataAccessResponse
// Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
type CheckDataAccessResponse struct {
	ConsentDetails map[string]ConsentEvaluation `json:"consentDetails,omitempty"`
	Consented      *bool                        `json:"consented,omitempty"`
}
