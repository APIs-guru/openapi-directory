package shared

type BillAgent struct {
	Address *string `json:"address,omitempty"`
	Email   *string `json:"email,omitempty"`
	Name    *string `json:"name,omitempty"`
	PhoneNo *string `json:"phoneNo,omitempty"`
	Website *string `json:"website,omitempty"`
}
