package shared



type KeyRange struct {
    EndClosed []interface{} `json:"endClosed,omitempty"`
    EndOpen []interface{} `json:"endOpen,omitempty"`
    StartClosed []interface{} `json:"startClosed,omitempty"`
    StartOpen []interface{} `json:"startOpen,omitempty"`
    
}

