package shared




type ErrorModelStatusEnum string

const (
    ErrorModelStatusEnumError ErrorModelStatusEnum = "error"
)


type ErrorModel struct {
    API *string `json:"api,omitempty"`
    Method *string `json:"method,omitempty"`
    Response *string `json:"response,omitempty"`
    Status *ErrorModelStatusEnum `json:"status,omitempty"`
    
}

