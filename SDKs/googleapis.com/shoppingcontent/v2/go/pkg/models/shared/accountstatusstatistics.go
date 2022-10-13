package shared

type AccountStatusStatistics struct {
	Active      *string `json:"active"`
	Disapproved *string `json:"disapproved"`
	Expiring    *string `json:"expiring"`
	Pending     *string `json:"pending"`
}
