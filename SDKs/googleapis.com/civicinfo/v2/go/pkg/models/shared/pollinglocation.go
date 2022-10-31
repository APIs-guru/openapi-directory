package shared

type PollingLocation struct {
	Address       *SimpleAddressType `json:"address,omitempty"`
	EndDate       *string            `json:"endDate,omitempty"`
	Latitude      *float64           `json:"latitude,omitempty"`
	Longitude     *float64           `json:"longitude,omitempty"`
	Name          *string            `json:"name,omitempty"`
	Notes         *string            `json:"notes,omitempty"`
	PollingHours  *string            `json:"pollingHours,omitempty"`
	Sources       []Source           `json:"sources,omitempty"`
	StartDate     *string            `json:"startDate,omitempty"`
	VoterServices *string            `json:"voterServices,omitempty"`
}
