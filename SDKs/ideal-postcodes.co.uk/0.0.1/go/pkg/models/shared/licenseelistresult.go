package shared

type LicenseeListResult struct {
	HasMore   *bool      `json:"hasMore"`
	Licensees []Licensee `json:"licensees"`
}
