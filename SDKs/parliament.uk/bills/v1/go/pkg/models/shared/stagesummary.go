package shared

type StageSummary struct {
	Abbreviation  *string            `json:"abbreviation"`
	Description   *string            `json:"description"`
	House         *HouseEnum         `json:"house"`
	ID            *int32             `json:"id"`
	SessionID     *int32             `json:"sessionId"`
	SortOrder     *int32             `json:"sortOrder"`
	StageID       *int32             `json:"stageId"`
	StageSittings []BillStageSitting `json:"stageSittings"`
}
