package shared

type PollingLocation struct {
	Address       *SimpleAddressType `json:"address"`
	EndDate       *string            `json:"endDate"`
	Latitude      *float64           `json:"latitude"`
	Longitude     *float64           `json:"longitude"`
	Name          *string            `json:"name"`
	Notes         *string            `json:"notes"`
	PollingHours  *string            `json:"pollingHours"`
	Sources       []Source           `json:"sources"`
	StartDate     *string            `json:"startDate"`
	VoterServices *string            `json:"voterServices"`
}
