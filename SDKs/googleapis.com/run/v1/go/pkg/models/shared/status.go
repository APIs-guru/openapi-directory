package shared

// Status
// Status is a return value for calls that don't return other objects.
type Status struct {
	Code     *int32         `json:"code,omitempty"`
	Details  *StatusDetails `json:"details,omitempty"`
	Message  *string        `json:"message,omitempty"`
	Metadata *ListMeta      `json:"metadata,omitempty"`
	Reason   *string        `json:"reason,omitempty"`
	Status   *string        `json:"status,omitempty"`
}
