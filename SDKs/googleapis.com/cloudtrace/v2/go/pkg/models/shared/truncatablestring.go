package shared

type TruncatableString struct {
	TruncatedByteCount *int32  `json:"truncatedByteCount"`
	Value              *string `json:"value"`
}
