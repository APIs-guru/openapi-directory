package shared

type WritableServiceInput struct {
	CustomFields   map[string]interface{} `json:"custom_fields,omitempty"`
	Description    *string                `json:"description,omitempty"`
	Device         *int64                 `json:"device,omitempty"`
	Ipaddresses    []int64                `json:"ipaddresses,omitempty"`
	Name           string                 `json:"name"`
	Port           int64                  `json:"port"`
	Protocol       int64                  `json:"protocol"`
	VirtualMachine *int64                 `json:"virtual_machine,omitempty"`
}
