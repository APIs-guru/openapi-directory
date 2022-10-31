package shared



type TypedValue struct {
    BoolValue *bool `json:"boolValue,omitempty"`
    DistributionValue *Distribution `json:"distributionValue,omitempty"`
    DoubleValue *float64 `json:"doubleValue,omitempty"`
    Int64Value *string `json:"int64Value,omitempty"`
    StringValue *string `json:"stringValue,omitempty"`
    
}

