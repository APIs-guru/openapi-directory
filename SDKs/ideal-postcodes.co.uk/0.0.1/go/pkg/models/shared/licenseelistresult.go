package shared

type LicenseeListResult struct {
	HasMore   *bool      `json:"hasMore,omitempty"`
	Licensees []Licensee `json:"licensees,omitempty"`
}
