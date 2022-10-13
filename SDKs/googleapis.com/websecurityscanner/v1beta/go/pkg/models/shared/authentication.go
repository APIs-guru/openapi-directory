package shared

type Authentication struct {
	CustomAccount *CustomAccount `json:"customAccount"`
	GoogleAccount *GoogleAccount `json:"googleAccount"`
	IapCredential *IapCredential `json:"iapCredential"`
}
