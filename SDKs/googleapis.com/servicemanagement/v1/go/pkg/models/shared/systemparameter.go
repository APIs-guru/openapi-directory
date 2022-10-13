package shared

type SystemParameter struct {
	HTTPHeader        *string `json:"httpHeader"`
	Name              *string `json:"name"`
	URLQueryParameter *string `json:"urlQueryParameter"`
}
