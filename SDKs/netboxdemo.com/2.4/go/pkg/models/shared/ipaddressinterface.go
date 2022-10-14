package shared

type IPAddressInterface struct {
	Device         *NestedDevice         `json:"device,omitempty"`
	ID             *int64                `json:"id,omitempty"`
	Name           string                `json:"name"`
	URL            *string               `json:"url,omitempty"`
	VirtualMachine *NestedVirtualMachine `json:"virtual_machine,omitempty"`
}
