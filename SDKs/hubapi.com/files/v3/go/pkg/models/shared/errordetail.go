package shared



type ErrorDetail struct {
    Code *string `json:"code,omitempty"`
    Context map[string][]string `json:"context,omitempty"`
    In *string `json:"in,omitempty"`
    Message string `json:"message"`
    SubCategory *string `json:"subCategory,omitempty"`
    
}

