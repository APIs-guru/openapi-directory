package shared



type Point struct {
    Interval *TimeInterval `json:"interval,omitempty"`
    Value *TypedValue `json:"value,omitempty"`
    
}

