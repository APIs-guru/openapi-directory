package shared

type Form struct {
	ActionURI *string  `json:"actionUri"`
	Fields    []string `json:"fields"`
}
