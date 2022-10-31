package shared



type ValueMatcher struct {
    BoolMatch *bool `json:"boolMatch,omitempty"`
    DoubleMatch *DoubleMatcher `json:"doubleMatch,omitempty"`
    ListMatch *ListMatcher `json:"listMatch,omitempty"`
    NullMatch map[string]interface{} `json:"nullMatch,omitempty"`
    PresentMatch *bool `json:"presentMatch,omitempty"`
    StringMatch *StringMatcher `json:"stringMatch,omitempty"`
    
}

