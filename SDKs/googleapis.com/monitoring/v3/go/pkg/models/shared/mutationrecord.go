package shared

// MutationRecord
// Describes a change made to a configuration.
type MutationRecord struct {
	MutateTime *string `json:"mutateTime,omitempty"`
	MutatedBy  *string `json:"mutatedBy,omitempty"`
}
