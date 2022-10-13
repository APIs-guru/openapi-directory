package shared

type GoogleAppsDriveLabelsV2Field struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2FieldAppliedCapabilities `json:"appliedCapabilities"`
	CreateTime          *string                                          `json:"createTime"`
	Creator             *GoogleAppsDriveLabelsV2UserInfo                 `json:"creator"`
	DateOptions         *GoogleAppsDriveLabelsV2FieldDateOptions         `json:"dateOptions"`
	DisableTime         *string                                          `json:"disableTime"`
	Disabler            *GoogleAppsDriveLabelsV2UserInfo                 `json:"disabler"`
	DisplayHints        *GoogleAppsDriveLabelsV2FieldDisplayHints        `json:"displayHints"`
	ID                  *string                                          `json:"id"`
	IntegerOptions      *GoogleAppsDriveLabelsV2FieldIntegerOptions      `json:"integerOptions"`
	Lifecycle           *GoogleAppsDriveLabelsV2Lifecycle                `json:"lifecycle"`
	LockStatus          *GoogleAppsDriveLabelsV2LockStatus               `json:"lockStatus"`
	Properties          *GoogleAppsDriveLabelsV2FieldProperties          `json:"properties"`
	Publisher           *GoogleAppsDriveLabelsV2UserInfo                 `json:"publisher"`
	QueryKey            *string                                          `json:"queryKey"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2FieldSchemaCapabilities  `json:"schemaCapabilities"`
	SelectionOptions    *GoogleAppsDriveLabelsV2FieldSelectionOptions    `json:"selectionOptions"`
	TextOptions         *GoogleAppsDriveLabelsV2FieldTextOptions         `json:"textOptions"`
	UpdateTime          *string                                          `json:"updateTime"`
	Updater             *GoogleAppsDriveLabelsV2UserInfo                 `json:"updater"`
	UserOptions         *GoogleAppsDriveLabelsV2FieldUserOptions         `json:"userOptions"`
}
