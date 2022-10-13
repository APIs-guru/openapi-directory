package shared

type UpdateCallRequestTransferNccoDestination struct {
	Ncco []map[string]interface{} `json:"ncco"`
	Type string                   `json:"type"`
}

type UpdateCallRequestTransferNcco struct {
	Action      RequestTransferActionParamEnum           `json:"action"`
	Destination UpdateCallRequestTransferNccoDestination `json:"destination"`
}
