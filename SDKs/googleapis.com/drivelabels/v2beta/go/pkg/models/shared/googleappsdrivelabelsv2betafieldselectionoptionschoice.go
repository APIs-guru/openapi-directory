package shared

type GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities `json:"appliedCapabilities"`
	CreateTime          *string                                                                    `json:"createTime"`
	Creator             *GoogleAppsDriveLabelsV2betaUserInfo                                       `json:"creator"`
	DisableTime         *string                                                                    `json:"disableTime"`
	Disabler            *GoogleAppsDriveLabelsV2betaUserInfo                                       `json:"disabler"`
	DisplayHints        *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints        `json:"displayHints"`
	ID                  *string                                                                    `json:"id"`
	Lifecycle           *GoogleAppsDriveLabelsV2betaLifecycle                                      `json:"lifecycle"`
	LockStatus          *GoogleAppsDriveLabelsV2betaLockStatus                                     `json:"lockStatus"`
	Properties          *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties          `json:"properties"`
	PublishTime         *string                                                                    `json:"publishTime"`
	Publisher           *GoogleAppsDriveLabelsV2betaUserInfo                                       `json:"publisher"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities  `json:"schemaCapabilities"`
	UpdateTime          *string                                                                    `json:"updateTime"`
	Updater             *GoogleAppsDriveLabelsV2betaUserInfo                                       `json:"updater"`
}
