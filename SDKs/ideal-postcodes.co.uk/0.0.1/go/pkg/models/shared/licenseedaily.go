package shared

type LicenseeDaily struct {
	Count     *float64 `json:"count"`
	Limit     *float64 `json:"limit"`
	UpdatedAt *string  `json:"updatedAt"`
}
