package shared



type BatchUpdateFormRequest struct {
    IncludeFormInResponse *bool `json:"includeFormInResponse,omitempty"`
    Requests []Request `json:"requests,omitempty"`
    WriteControl *WriteControl `json:"writeControl,omitempty"`
    
}

