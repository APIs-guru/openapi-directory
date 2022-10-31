package shared

type GoogleAppsDriveLabelsV2betaSelectionLimits struct {
	ListLimits           *GoogleAppsDriveLabelsV2betaListLimits `json:"listLimits,omitempty"`
	MaxChoices           *int32                                 `json:"maxChoices,omitempty"`
	MaxDeletedChoices    *int32                                 `json:"maxDeletedChoices,omitempty"`
	MaxDisplayNameLength *int32                                 `json:"maxDisplayNameLength,omitempty"`
	MaxIDLength          *int32                                 `json:"maxIdLength,omitempty"`
}
