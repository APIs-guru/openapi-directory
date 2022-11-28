package shared

// AddHeldAccountResult
// The status of each account creation, and the **HeldAccount**, if successful.
type AddHeldAccountResult struct {
	Account *HeldAccount `json:"account,omitempty"`
	Status  *Status      `json:"status,omitempty"`
}
