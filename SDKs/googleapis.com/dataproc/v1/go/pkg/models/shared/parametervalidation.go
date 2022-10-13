package shared

type ParameterValidation struct {
	Regex  *RegexValidation `json:"regex"`
	Values *ValueValidation `json:"values"`
}
