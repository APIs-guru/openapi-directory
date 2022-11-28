package shared

// TransactionAuthorisation
// Content of the body of a transaction authorisation request
type TransactionAuthorisation struct {
	ScaAuthenticationData string `json:"scaAuthenticationData"`
}
