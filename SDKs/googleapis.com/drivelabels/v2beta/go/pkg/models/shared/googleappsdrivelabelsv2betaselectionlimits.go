package shared

type GoogleAppsDriveLabelsV2betaSelectionLimits struct {
	ListLimits           *GoogleAppsDriveLabelsV2betaListLimits `json:"listLimits"`
	MaxChoices           *int32                                 `json:"maxChoices"`
	MaxDeletedChoices    *int32                                 `json:"maxDeletedChoices"`
	MaxDisplayNameLength *int32                                 `json:"maxDisplayNameLength"`
	MaxIDLength          *int32                                 `json:"maxIdLength"`
}
