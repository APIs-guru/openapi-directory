package shared

type GoogleAppsDriveLabelsV2betaField struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities `json:"appliedCapabilities,omitempty"`
	CreateTime          *string                                              `json:"createTime,omitempty"`
	Creator             *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"creator,omitempty"`
	DateOptions         *GoogleAppsDriveLabelsV2betaFieldDateOptions         `json:"dateOptions,omitempty"`
	DisableTime         *string                                              `json:"disableTime,omitempty"`
	Disabler            *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"disabler,omitempty"`
	DisplayHints        *GoogleAppsDriveLabelsV2betaFieldDisplayHints        `json:"displayHints,omitempty"`
	ID                  *string                                              `json:"id,omitempty"`
	IntegerOptions      *GoogleAppsDriveLabelsV2betaFieldIntegerOptions      `json:"integerOptions,omitempty"`
	Lifecycle           *GoogleAppsDriveLabelsV2betaLifecycle                `json:"lifecycle,omitempty"`
	LockStatus          *GoogleAppsDriveLabelsV2betaLockStatus               `json:"lockStatus,omitempty"`
	Properties          *GoogleAppsDriveLabelsV2betaFieldProperties          `json:"properties,omitempty"`
	Publisher           *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"publisher,omitempty"`
	QueryKey            *string                                              `json:"queryKey,omitempty"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities  `json:"schemaCapabilities,omitempty"`
	SelectionOptions    *GoogleAppsDriveLabelsV2betaFieldSelectionOptions    `json:"selectionOptions,omitempty"`
	TextOptions         *GoogleAppsDriveLabelsV2betaFieldTextOptions         `json:"textOptions,omitempty"`
	UpdateTime          *string                                              `json:"updateTime,omitempty"`
	Updater             *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"updater,omitempty"`
	UserOptions         *GoogleAppsDriveLabelsV2betaFieldUserOptions         `json:"userOptions,omitempty"`
}
