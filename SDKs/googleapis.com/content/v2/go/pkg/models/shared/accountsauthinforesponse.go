package shared

type AccountsAuthInfoResponse struct {
	AccountIdentifiers []AccountIdentifier `json:"accountIdentifiers"`
	Kind               *string             `json:"kind"`
}
