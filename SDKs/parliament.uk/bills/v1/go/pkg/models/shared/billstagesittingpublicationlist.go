package shared

type BillStageSittingPublicationList struct {
	Publications []Publication `json:"publications,omitempty"`
	SittingID    *int32        `json:"sittingId,omitempty"`
}
