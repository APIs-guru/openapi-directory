package shared

type NetworkUnblockResponseUnprocessableNetworkInvalidParameters struct {
	Name   *string `json:"name"`
	Reason *string `json:"reason"`
}

type NetworkUnblockResponseUnprocessableNetwork struct {
	Detail            *string                                                       `json:"detail"`
	Instance          *string                                                       `json:"instance"`
	InvalidParameters []NetworkUnblockResponseUnprocessableNetworkInvalidParameters `json:"invalid_parameters"`
	Title             *string                                                       `json:"title"`
	Type              *string                                                       `json:"type"`
}
