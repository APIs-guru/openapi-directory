package shared

type UdprnToAddressResponseSchema struct {
	Code    *int32   `json:"code"`
	Message *string  `json:"message"`
	Result  *Address `json:"result"`
}
