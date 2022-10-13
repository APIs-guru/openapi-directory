package shared

type ProductStatusDestinationStatus struct {
	ApprovedCountries    []string `json:"approvedCountries"`
	Destination          *string  `json:"destination"`
	DisapprovedCountries []string `json:"disapprovedCountries"`
	PendingCountries     []string `json:"pendingCountries"`
	Status               *string  `json:"status"`
}
