package shared

type GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities `json:"appliedCapabilities"`
	CreateTime          *string                                                                `json:"createTime"`
	Creator             *GoogleAppsDriveLabelsV2UserInfo                                       `json:"creator"`
	DisableTime         *string                                                                `json:"disableTime"`
	Disabler            *GoogleAppsDriveLabelsV2UserInfo                                       `json:"disabler"`
	DisplayHints        *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints        `json:"displayHints"`
	ID                  *string                                                                `json:"id"`
	Lifecycle           *GoogleAppsDriveLabelsV2Lifecycle                                      `json:"lifecycle"`
	LockStatus          *GoogleAppsDriveLabelsV2LockStatus                                     `json:"lockStatus"`
	Properties          *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties          `json:"properties"`
	PublishTime         *string                                                                `json:"publishTime"`
	Publisher           *GoogleAppsDriveLabelsV2UserInfo                                       `json:"publisher"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities  `json:"schemaCapabilities"`
	UpdateTime          *string                                                                `json:"updateTime"`
	Updater             *GoogleAppsDriveLabelsV2UserInfo                                       `json:"updater"`
}
