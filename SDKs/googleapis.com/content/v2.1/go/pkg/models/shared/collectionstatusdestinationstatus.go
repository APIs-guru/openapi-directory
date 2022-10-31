package shared



type CollectionStatusDestinationStatus struct {
    ApprovedCountries []string `json:"approvedCountries,omitempty"`
    Destination *string `json:"destination,omitempty"`
    DisapprovedCountries []string `json:"disapprovedCountries,omitempty"`
    PendingCountries []string `json:"pendingCountries,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

