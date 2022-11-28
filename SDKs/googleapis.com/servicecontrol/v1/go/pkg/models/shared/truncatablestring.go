package shared

// TruncatableString
// Represents a string that might be shortened to a specified length.
type TruncatableString struct {
	TruncatedByteCount *int32  `json:"truncatedByteCount,omitempty"`
	Value              *string `json:"value,omitempty"`
}
