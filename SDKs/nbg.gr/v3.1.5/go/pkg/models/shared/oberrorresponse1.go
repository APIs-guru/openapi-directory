package shared



type ObErrorResponse1 struct {
    Code string `json:"Code"`
    Errors []ObError1 `json:"Errors"`
    ID *string `json:"Id,omitempty"`
    Message string `json:"Message"`
    
}

