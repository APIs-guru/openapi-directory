package shared

// AuthorisationConfirmation
// Content of the body of an authorisation confirmation request
type AuthorisationConfirmation struct {
	ConfirmationCode string `json:"confirmationCode"`
}
