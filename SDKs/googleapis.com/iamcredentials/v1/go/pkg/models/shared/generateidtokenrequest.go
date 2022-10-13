package shared

type GenerateIDTokenRequest struct {
	Audience     *string  `json:"audience"`
	Delegates    []string `json:"delegates"`
	IncludeEmail *bool    `json:"includeEmail"`
}
