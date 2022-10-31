package shared



type Filter struct {
    Action *FilterAction `json:"action,omitempty"`
    Criteria *FilterCriteria `json:"criteria,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

