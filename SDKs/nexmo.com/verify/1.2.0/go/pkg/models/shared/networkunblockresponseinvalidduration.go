package shared

type NetworkUnblockResponseInvalidDuration struct {
	Detail            *string       `json:"detail"`
	Instance          *string       `json:"instance"`
	InvalidParameters []interface{} `json:"invalid_parameters"`
	Title             *string       `json:"title"`
	Type              *string       `json:"type"`
}
