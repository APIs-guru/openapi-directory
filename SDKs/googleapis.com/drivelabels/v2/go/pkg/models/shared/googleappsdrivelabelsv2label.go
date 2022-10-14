package shared

type GoogleAppsDriveLabelsV2LabelLabelTypeEnum string

const (
	GoogleAppsDriveLabelsV2LabelLabelTypeEnumLabelTypeUnspecified GoogleAppsDriveLabelsV2LabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2LabelLabelTypeEnumShared               GoogleAppsDriveLabelsV2LabelLabelTypeEnum = "SHARED"
	GoogleAppsDriveLabelsV2LabelLabelTypeEnumAdmin                GoogleAppsDriveLabelsV2LabelLabelTypeEnum = "ADMIN"
)

type GoogleAppsDriveLabelsV2Label struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2LabelAppliedCapabilities `json:"appliedCapabilities,omitempty"`
	AppliedLabelPolicy  *GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy  `json:"appliedLabelPolicy,omitempty"`
	CreateTime          *string                                          `json:"createTime,omitempty"`
	Creator             *GoogleAppsDriveLabelsV2UserInfo                 `json:"creator,omitempty"`
	DisableTime         *string                                          `json:"disableTime,omitempty"`
	Disabler            *GoogleAppsDriveLabelsV2UserInfo                 `json:"disabler,omitempty"`
	DisplayHints        *GoogleAppsDriveLabelsV2LabelDisplayHints        `json:"displayHints,omitempty"`
	Fields              []GoogleAppsDriveLabelsV2Field                   `json:"fields,omitempty"`
	ID                  *string                                          `json:"id,omitempty"`
	LabelType           *GoogleAppsDriveLabelsV2LabelLabelTypeEnum       `json:"labelType,omitempty"`
	LearnMoreURI        *string                                          `json:"learnMoreUri,omitempty"`
	Lifecycle           *GoogleAppsDriveLabelsV2Lifecycle                `json:"lifecycle,omitempty"`
	LockStatus          *GoogleAppsDriveLabelsV2LockStatus               `json:"lockStatus,omitempty"`
	Name                *string                                          `json:"name,omitempty"`
	Properties          *GoogleAppsDriveLabelsV2LabelProperties          `json:"properties,omitempty"`
	PublishTime         *string                                          `json:"publishTime,omitempty"`
	Publisher           *GoogleAppsDriveLabelsV2UserInfo                 `json:"publisher,omitempty"`
	RevisionCreateTime  *string                                          `json:"revisionCreateTime,omitempty"`
	RevisionCreator     *GoogleAppsDriveLabelsV2UserInfo                 `json:"revisionCreator,omitempty"`
	RevisionID          *string                                          `json:"revisionId,omitempty"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2LabelSchemaCapabilities  `json:"schemaCapabilities,omitempty"`
}
