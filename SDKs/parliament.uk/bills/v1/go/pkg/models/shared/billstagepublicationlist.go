package shared

type BillStagePublicationList struct {
	BillStageID  *int32                            `json:"billStageId"`
	Publications []Publication                     `json:"publications"`
	Sittings     []BillStageSittingPublicationList `json:"sittings"`
}
