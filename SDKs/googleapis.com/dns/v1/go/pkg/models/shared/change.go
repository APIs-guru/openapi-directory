package shared

type ChangeStatusEnum string

const (
	ChangeStatusEnumPending ChangeStatusEnum = "pending"
	ChangeStatusEnumDone    ChangeStatusEnum = "done"
)

// Change
// A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
type Change struct {
	Additions []ResourceRecordSet `json:"additions,omitempty"`
	Deletions []ResourceRecordSet `json:"deletions,omitempty"`
	ID        *string             `json:"id,omitempty"`
	IsServing *bool               `json:"isServing,omitempty"`
	Kind      *string             `json:"kind,omitempty"`
	StartTime *string             `json:"startTime,omitempty"`
	Status    *ChangeStatusEnum   `json:"status,omitempty"`
}
