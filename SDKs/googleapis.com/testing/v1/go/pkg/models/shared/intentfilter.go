package shared

type IntentFilter struct {
	ActionNames   []string `json:"actionNames"`
	CategoryNames []string `json:"categoryNames"`
	MimeType      *string  `json:"mimeType"`
}
