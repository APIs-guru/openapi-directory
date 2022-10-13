package shared

type ChangeStatusEnum string

const (
	ChangeStatusEnumPending ChangeStatusEnum = "PENDING"
	ChangeStatusEnumDone    ChangeStatusEnum = "DONE"
)

type Change struct {
	Additions []ResourceRecordSet `json:"additions"`
	Deletions []ResourceRecordSet `json:"deletions"`
	ID        *string             `json:"id"`
	IsServing *bool               `json:"isServing"`
	Kind      *string             `json:"kind"`
	StartTime *string             `json:"startTime"`
	Status    *ChangeStatusEnum   `json:"status"`
}
