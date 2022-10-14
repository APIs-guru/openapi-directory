package shared

type StageSummary struct {
	Abbreviation  *string            `json:"abbreviation,omitempty"`
	Description   *string            `json:"description,omitempty"`
	House         *HouseEnum         `json:"house,omitempty"`
	ID            *int32             `json:"id,omitempty"`
	SessionID     *int32             `json:"sessionId,omitempty"`
	SortOrder     *int32             `json:"sortOrder,omitempty"`
	StageID       *int32             `json:"stageId,omitempty"`
	StageSittings []BillStageSitting `json:"stageSittings,omitempty"`
}
