package shared

type TokenPayloadExternal struct {
	AccountDetails  *AccountDetails  `json:"accountDetails"`
	AppIntegrity    *AppIntegrity    `json:"appIntegrity"`
	DeviceIntegrity *DeviceIntegrity `json:"deviceIntegrity"`
	RequestDetails  *RequestDetails  `json:"requestDetails"`
	TestingDetails  *TestingDetails  `json:"testingDetails"`
}
