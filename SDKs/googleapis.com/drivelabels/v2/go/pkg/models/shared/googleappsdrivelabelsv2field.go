package shared

type GoogleAppsDriveLabelsV2Field struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2FieldAppliedCapabilities `json:"appliedCapabilities,omitempty"`
	CreateTime          *string                                          `json:"createTime,omitempty"`
	Creator             *GoogleAppsDriveLabelsV2UserInfo                 `json:"creator,omitempty"`
	DateOptions         *GoogleAppsDriveLabelsV2FieldDateOptions         `json:"dateOptions,omitempty"`
	DisableTime         *string                                          `json:"disableTime,omitempty"`
	Disabler            *GoogleAppsDriveLabelsV2UserInfo                 `json:"disabler,omitempty"`
	DisplayHints        *GoogleAppsDriveLabelsV2FieldDisplayHints        `json:"displayHints,omitempty"`
	ID                  *string                                          `json:"id,omitempty"`
	IntegerOptions      *GoogleAppsDriveLabelsV2FieldIntegerOptions      `json:"integerOptions,omitempty"`
	Lifecycle           *GoogleAppsDriveLabelsV2Lifecycle                `json:"lifecycle,omitempty"`
	LockStatus          *GoogleAppsDriveLabelsV2LockStatus               `json:"lockStatus,omitempty"`
	Properties          *GoogleAppsDriveLabelsV2FieldProperties          `json:"properties,omitempty"`
	Publisher           *GoogleAppsDriveLabelsV2UserInfo                 `json:"publisher,omitempty"`
	QueryKey            *string                                          `json:"queryKey,omitempty"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2FieldSchemaCapabilities  `json:"schemaCapabilities,omitempty"`
	SelectionOptions    *GoogleAppsDriveLabelsV2FieldSelectionOptions    `json:"selectionOptions,omitempty"`
	TextOptions         *GoogleAppsDriveLabelsV2FieldTextOptions         `json:"textOptions,omitempty"`
	UpdateTime          *string                                          `json:"updateTime,omitempty"`
	Updater             *GoogleAppsDriveLabelsV2UserInfo                 `json:"updater,omitempty"`
	UserOptions         *GoogleAppsDriveLabelsV2FieldUserOptions         `json:"userOptions,omitempty"`
}
