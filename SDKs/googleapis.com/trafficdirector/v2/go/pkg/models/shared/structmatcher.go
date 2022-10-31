package shared



type StructMatcher struct {
    Path []PathSegment `json:"path,omitempty"`
    Value *ValueMatcher `json:"value,omitempty"`
    
}

