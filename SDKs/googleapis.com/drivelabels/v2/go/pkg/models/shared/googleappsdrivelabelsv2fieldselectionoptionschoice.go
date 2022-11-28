package shared

// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice
// Selection field choice.
type GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities `json:"appliedCapabilities,omitempty"`
	CreateTime          *string                                                                `json:"createTime,omitempty"`
	Creator             *GoogleAppsDriveLabelsV2UserInfo                                       `json:"creator,omitempty"`
	DisableTime         *string                                                                `json:"disableTime,omitempty"`
	Disabler            *GoogleAppsDriveLabelsV2UserInfo                                       `json:"disabler,omitempty"`
	DisplayHints        *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints        `json:"displayHints,omitempty"`
	ID                  *string                                                                `json:"id,omitempty"`
	Lifecycle           *GoogleAppsDriveLabelsV2Lifecycle                                      `json:"lifecycle,omitempty"`
	LockStatus          *GoogleAppsDriveLabelsV2LockStatus                                     `json:"lockStatus,omitempty"`
	Properties          *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties          `json:"properties,omitempty"`
	PublishTime         *string                                                                `json:"publishTime,omitempty"`
	Publisher           *GoogleAppsDriveLabelsV2UserInfo                                       `json:"publisher,omitempty"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities  `json:"schemaCapabilities,omitempty"`
	UpdateTime          *string                                                                `json:"updateTime,omitempty"`
	Updater             *GoogleAppsDriveLabelsV2UserInfo                                       `json:"updater,omitempty"`
}
