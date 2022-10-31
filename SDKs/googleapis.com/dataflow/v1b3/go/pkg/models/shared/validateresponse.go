package shared



type ValidateResponse struct {
    ErrorMessage *string `json:"errorMessage,omitempty"`
    QueryInfo *QueryInfo `json:"queryInfo,omitempty"`
    
}

