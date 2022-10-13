package shared

type Licensee struct {
	Address   *string        `json:"address"`
	CreatedAt *string        `json:"createdAt"`
	Daily     *LicenseeDaily `json:"daily"`
	ID        *string        `json:"id"`
	Key       *string        `json:"key"`
	Name      *string        `json:"name"`
	Postcode  *string        `json:"postcode"`
	Whitelist []string       `json:"whitelist"`
}
