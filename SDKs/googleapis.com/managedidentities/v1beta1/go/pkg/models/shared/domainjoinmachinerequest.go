package shared

// DomainJoinMachineRequest
// DomainJoinMachineRequest is the request message for DomainJoinMachine method
type DomainJoinMachineRequest struct {
	OuName    *string `json:"ouName,omitempty"`
	VMIDToken *string `json:"vmIdToken,omitempty"`
}
