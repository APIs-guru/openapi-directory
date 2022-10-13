package shared

type MutationRecord struct {
	MutateTime *string `json:"mutateTime"`
	MutatedBy  *string `json:"mutatedBy"`
}
