package shared

type ReturnPolicyPolicy struct {
	LastReturnDate *string `json:"lastReturnDate,omitempty"`
	NumberOfDays   *string `json:"numberOfDays,omitempty"`
	Type           *string `json:"type,omitempty"`
}
