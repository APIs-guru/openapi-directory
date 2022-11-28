package shared

// ListForwardingAddressesResponse
// Response for the ListForwardingAddresses method.
type ListForwardingAddressesResponse struct {
	ForwardingAddresses []ForwardingAddress `json:"forwardingAddresses,omitempty"`
}
