package shared

type AddHeldAccountResult struct {
	Account *HeldAccount `json:"account"`
	Status  *Status      `json:"status"`
}
