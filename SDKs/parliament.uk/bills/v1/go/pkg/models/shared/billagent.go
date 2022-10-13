package shared

type BillAgent struct {
	Address *string `json:"address"`
	Email   *string `json:"email"`
	Name    *string `json:"name"`
	PhoneNo *string `json:"phoneNo"`
	Website *string `json:"website"`
}
