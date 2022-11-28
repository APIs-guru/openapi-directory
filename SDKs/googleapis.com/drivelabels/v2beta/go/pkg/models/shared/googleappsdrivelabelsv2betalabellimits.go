package shared

// GoogleAppsDriveLabelsV2betaLabelLimits
// Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
type GoogleAppsDriveLabelsV2betaLabelLimits struct {
	FieldLimits          *GoogleAppsDriveLabelsV2betaFieldLimits `json:"fieldLimits,omitempty"`
	MaxDeletedFields     *int32                                  `json:"maxDeletedFields,omitempty"`
	MaxDescriptionLength *int32                                  `json:"maxDescriptionLength,omitempty"`
	MaxDraftRevisions    *int32                                  `json:"maxDraftRevisions,omitempty"`
	MaxFields            *int32                                  `json:"maxFields,omitempty"`
	MaxTitleLength       *int32                                  `json:"maxTitleLength,omitempty"`
	Name                 *string                                 `json:"name,omitempty"`
}
