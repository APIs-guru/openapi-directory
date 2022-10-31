package shared

type GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum string

const (
	GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumLabelTypeUnspecified GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumShared               GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = "SHARED"
	GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumAdmin                GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum = "ADMIN"
)

type GoogleAppsDriveLabelsV2betaLabel struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities `json:"appliedCapabilities,omitempty"`
	AppliedLabelPolicy  *GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy  `json:"appliedLabelPolicy,omitempty"`
	CreateTime          *string                                              `json:"createTime,omitempty"`
	Creator             *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"creator,omitempty"`
	DisableTime         *string                                              `json:"disableTime,omitempty"`
	Disabler            *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"disabler,omitempty"`
	DisplayHints        *GoogleAppsDriveLabelsV2betaLabelDisplayHints        `json:"displayHints,omitempty"`
	Fields              []GoogleAppsDriveLabelsV2betaField                   `json:"fields,omitempty"`
	ID                  *string                                              `json:"id,omitempty"`
	LabelType           *GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum       `json:"labelType,omitempty"`
	LearnMoreURI        *string                                              `json:"learnMoreUri,omitempty"`
	Lifecycle           *GoogleAppsDriveLabelsV2betaLifecycle                `json:"lifecycle,omitempty"`
	LockStatus          *GoogleAppsDriveLabelsV2betaLockStatus               `json:"lockStatus,omitempty"`
	Name                *string                                              `json:"name,omitempty"`
	Properties          *GoogleAppsDriveLabelsV2betaLabelProperties          `json:"properties,omitempty"`
	PublishTime         *string                                              `json:"publishTime,omitempty"`
	Publisher           *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"publisher,omitempty"`
	RevisionCreateTime  *string                                              `json:"revisionCreateTime,omitempty"`
	RevisionCreator     *GoogleAppsDriveLabelsV2betaUserInfo                 `json:"revisionCreator,omitempty"`
	RevisionID          *string                                              `json:"revisionId,omitempty"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities  `json:"schemaCapabilities,omitempty"`
}
