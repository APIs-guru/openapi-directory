package shared



type SystemParameter struct {
    HTTPHeader *string `json:"httpHeader,omitempty"`
    Name *string `json:"name,omitempty"`
    URLQueryParameter *string `json:"urlQueryParameter,omitempty"`
    
}

