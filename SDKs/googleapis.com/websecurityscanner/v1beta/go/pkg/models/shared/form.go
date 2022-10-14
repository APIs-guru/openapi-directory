package shared

type Form struct {
	ActionURI *string  `json:"actionUri,omitempty"`
	Fields    []string `json:"fields,omitempty"`
}
