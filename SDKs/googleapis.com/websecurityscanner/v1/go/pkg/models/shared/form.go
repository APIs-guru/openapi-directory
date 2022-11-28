package shared

// Form
// ! Information about a vulnerability with an HTML.
type Form struct {
	ActionURI *string  `json:"actionUri,omitempty"`
	Fields    []string `json:"fields,omitempty"`
}
