package shared

type CollectionStatusDestinationStatus struct {
	ApprovedCountries    []string `json:"approvedCountries"`
	Destination          *string  `json:"destination"`
	DisapprovedCountries []string `json:"disapprovedCountries"`
	PendingCountries     []string `json:"pendingCountries"`
	Status               *string  `json:"status"`
}
