package shared

type GoogleAppsDriveLabelsV2betaField struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities `json:"appliedCapabilities"`
	CreateTime          *string                                              `json:"createTime"`
	Creator             *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"creator"`
	DateOptions         *GoogleAppsDriveLabelsV2betaFieldDateOptions         `json:"dateOptions"`
	DisableTime         *string                                              `json:"disableTime"`
	Disabler            *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"disabler"`
	DisplayHints        *GoogleAppsDriveLabelsV2betaFieldDisplayHints        `json:"displayHints"`
	ID                  *string                                              `json:"id"`
	IntegerOptions      *GoogleAppsDriveLabelsV2betaFieldIntegerOptions      `json:"integerOptions"`
	Lifecycle           *GoogleAppsDriveLabelsV2betaLifecycle                `json:"lifecycle"`
	LockStatus          *GoogleAppsDriveLabelsV2betaLockStatus               `json:"lockStatus"`
	Properties          *GoogleAppsDriveLabelsV2betaFieldProperties          `json:"properties"`
	Publisher           *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"publisher"`
	QueryKey            *string                                              `json:"queryKey"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities  `json:"schemaCapabilities"`
	SelectionOptions    *GoogleAppsDriveLabelsV2betaFieldSelectionOptions    `json:"selectionOptions"`
	TextOptions         *GoogleAppsDriveLabelsV2betaFieldTextOptions         `json:"textOptions"`
	UpdateTime          *string                                              `json:"updateTime"`
	Updater             *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"updater"`
	UserOptions         *GoogleAppsDriveLabelsV2betaFieldUserOptions         `json:"userOptions"`
}
