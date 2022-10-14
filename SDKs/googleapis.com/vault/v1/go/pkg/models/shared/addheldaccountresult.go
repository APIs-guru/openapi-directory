package shared

type AddHeldAccountResult struct {
	Account *HeldAccount `json:"account,omitempty"`
	Status  *Status      `json:"status,omitempty"`
}
