package shared



type TruncatableString struct {
    TruncatedByteCount *int32 `json:"truncatedByteCount,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

