package shared

type JwtLocation struct {
	Cookie      *string `json:"cookie"`
	Header      *string `json:"header"`
	Query       *string `json:"query"`
	ValuePrefix *string `json:"valuePrefix"`
}
