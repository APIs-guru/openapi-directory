package shared

type VirtualMachineIPAddress struct {
	Address string  `json:"address"`
	Family  *int64  `json:"family"`
	ID      *int64  `json:"id"`
	URL     *string `json:"url"`
}
