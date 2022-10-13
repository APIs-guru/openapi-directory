package shared

type IPAddressInterface struct {
	Device         *NestedDevice         `json:"device"`
	ID             *int64                `json:"id"`
	Name           string                `json:"name"`
	URL            *string               `json:"url"`
	VirtualMachine *NestedVirtualMachine `json:"virtual_machine"`
}
