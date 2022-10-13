package shared

type CreateLicenseeSchema struct {
	Address   string               `json:"address"`
	Daily     *CreateLicenseeDaily `json:"daily"`
	Name      string               `json:"name"`
	Postcode  string               `json:"postcode"`
	Whitelist []string             `json:"whitelist"`
}
