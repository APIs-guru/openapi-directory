package shared

type GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum string

const (
	GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumLabelTypeUnspecified GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumShared               GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = "SHARED"
	GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumAdmin                GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = "ADMIN"
)

type GoogleAppsDriveLabelsV2betaLabel struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities `json:"appliedCapabilities"`
	AppliedLabelPolicy  *GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy  `json:"appliedLabelPolicy"`
	CreateTime          *string                                              `json:"createTime"`
	Creator             *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"creator"`
	DisableTime         *string                                              `json:"disableTime"`
	Disabler            *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"disabler"`
	DisplayHints        *GoogleAppsDriveLabelsV2betaLabelDisplayHints        `json:"displayHints"`
	Fields              []GoogleAppsDriveLabelsV2betaField                   `json:"fields"`
	ID                  *string                                              `json:"id"`
	LabelType           *GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum       `json:"labelType"`
	LearnMoreURI        *string                                              `json:"learnMoreUri"`
	Lifecycle           *GoogleAppsDriveLabelsV2betaLifecycle                `json:"lifecycle"`
	LockStatus          *GoogleAppsDriveLabelsV2betaLockStatus               `json:"lockStatus"`
	Name                *string                                              `json:"name"`
	Properties          *GoogleAppsDriveLabelsV2betaLabelProperties          `json:"properties"`
	PublishTime         *string                                              `json:"publishTime"`
	Publisher           *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"publisher"`
	RevisionCreateTime  *string                                              `json:"revisionCreateTime"`
	RevisionCreator     *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"revisionCreator"`
	RevisionID          *string                                              `json:"revisionId"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities  `json:"schemaCapabilities"`
}
