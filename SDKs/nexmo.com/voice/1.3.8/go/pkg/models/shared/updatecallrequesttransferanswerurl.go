package shared

type UpdateCallRequestTransferAnswerURLDestination struct {
	Type string   `json:"type"`
	URL  []string `json:"url"`
}

type UpdateCallRequestTransferAnswerURL struct {
	Action      RequestTransferActionParamEnum                `json:"action"`
	Destination UpdateCallRequestTransferAnswerURLDestination `json:"destination"`
}
