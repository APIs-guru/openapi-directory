package shared

type UpdateLicenseeSchema struct {
	Address   *string              `json:"address"`
	Daily     *CreateLicenseeDaily `json:"daily"`
	Postcode  *string              `json:"postcode"`
	Whitelist []string             `json:"whitelist"`
}
