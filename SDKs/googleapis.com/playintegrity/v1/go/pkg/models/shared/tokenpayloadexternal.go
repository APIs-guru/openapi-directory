package shared

// TokenPayloadExternal
// Contains basic app information and integrity signals like device attestation and licensing details.
type TokenPayloadExternal struct {
	AccountDetails  *AccountDetails  `json:"accountDetails,omitempty"`
	AppIntegrity    *AppIntegrity    `json:"appIntegrity,omitempty"`
	DeviceIntegrity *DeviceIntegrity `json:"deviceIntegrity,omitempty"`
	RequestDetails  *RequestDetails  `json:"requestDetails,omitempty"`
	TestingDetails  *TestingDetails  `json:"testingDetails,omitempty"`
}
