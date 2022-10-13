package shared

type BillStageSittingPublicationList struct {
	Publications []Publication `json:"publications"`
	SittingID    *int32        `json:"sittingId"`
}
