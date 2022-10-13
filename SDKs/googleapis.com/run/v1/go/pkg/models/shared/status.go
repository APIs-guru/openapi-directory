package shared

type Status struct {
	Code     *int32         `json:"code"`
	Details  *StatusDetails `json:"details"`
	Message  *string        `json:"message"`
	Metadata *ListMeta      `json:"metadata"`
	Reason   *string        `json:"reason"`
	Status   *string        `json:"status"`
}
