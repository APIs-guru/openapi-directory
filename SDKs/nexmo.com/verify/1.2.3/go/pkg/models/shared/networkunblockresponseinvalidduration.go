package shared

type NetworkUnblockResponseInvalidDurationInvalidParameters struct {
	Name   *string `json:"name"`
	Reason *string `json:"reason"`
}

type NetworkUnblockResponseInvalidDuration struct {
	Detail            *string                                                  `json:"detail"`
	Instance          *string                                                  `json:"instance"`
	InvalidParameters []NetworkUnblockResponseInvalidDurationInvalidParameters `json:"invalid_parameters"`
	Title             *string                                                  `json:"title"`
	Type              *string                                                  `json:"type"`
}
