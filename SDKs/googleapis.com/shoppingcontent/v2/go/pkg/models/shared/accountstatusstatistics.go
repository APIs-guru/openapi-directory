package shared

type AccountStatusStatistics struct {
	Active      *string `json:"active,omitempty"`
	Disapproved *string `json:"disapproved,omitempty"`
	Expiring    *string `json:"expiring,omitempty"`
	Pending     *string `json:"pending,omitempty"`
}
