package shared

type ReturnPolicyPolicy struct {
	LastReturnDate *string `json:"lastReturnDate"`
	NumberOfDays   *string `json:"numberOfDays"`
	Type           *string `json:"type"`
}
