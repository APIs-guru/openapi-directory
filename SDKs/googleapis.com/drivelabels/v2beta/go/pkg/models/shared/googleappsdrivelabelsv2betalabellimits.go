package shared

type GoogleAppsDriveLabelsV2betaLabelLimits struct {
	FieldLimits          *GoogleAppsDriveLabelsV2betaFieldLimits `json:"fieldLimits"`
	MaxDeletedFields     *int32                                  `json:"maxDeletedFields"`
	MaxDescriptionLength *int32                                  `json:"maxDescriptionLength"`
	MaxDraftRevisions    *int32                                  `json:"maxDraftRevisions"`
	MaxFields            *int32                                  `json:"maxFields"`
	MaxTitleLength       *int32                                  `json:"maxTitleLength"`
	Name                 *string                                 `json:"name"`
}
