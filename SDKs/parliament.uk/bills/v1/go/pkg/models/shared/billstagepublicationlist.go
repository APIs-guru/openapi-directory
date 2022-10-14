package shared

type BillStagePublicationList struct {
	BillStageID  *int32                            `json:"billStageId,omitempty"`
	Publications []Publication                     `json:"publications,omitempty"`
	Sittings     []BillStageSittingPublicationList `json:"sittings,omitempty"`
}
