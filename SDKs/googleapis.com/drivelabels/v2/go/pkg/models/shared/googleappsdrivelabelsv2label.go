package shared

type GoogleAppsDriveLabelsV2LabelLabelTypeEnum string

const (
	GoogleAppsDriveLabelsV2LabelLabelTypeEnumLabelTypeUnspecified GoogleAppsDriveLabelsV2LabelLabelTypeEnum = "LABEL_TYPE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2LabelLabelTypeEnumShared               GoogleAppsDriveLabelsV2LabelLabelTypeEnum = "SHARED"
	GoogleAppsDriveLabelsV2LabelLabelTypeEnumAdmin                GoogleAppsDriveLabelsV2LabelLabelTypeEnum = "ADMIN"
)

type GoogleAppsDriveLabelsV2Label struct {
	AppliedCapabilities *GoogleAppsDriveLabelsV2LabelAppliedCapabilities `json:"appliedCapabilities"`
	AppliedLabelPolicy  *GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy  `json:"appliedLabelPolicy"`
	CreateTime          *string                                          `json:"createTime"`
	Creator             *GoogleAppsDriveLabelsV2UserInfo                 `json:"creator"`
	DisableTime         *string                                          `json:"disableTime"`
	Disabler            *GoogleAppsDriveLabelsV2UserInfo                 `json:"disabler"`
	DisplayHints        *GoogleAppsDriveLabelsV2LabelDisplayHints        `json:"displayHints"`
	Fields              []GoogleAppsDriveLabelsV2Field                   `json:"fields"`
	ID                  *string                                          `json:"id"`
	LabelType           *GoogleAppsDriveLabelsV2LabelLabelTypeEnum       `json:"labelType"`
	LearnMoreURI        *string                                          `json:"learnMoreUri"`
	Lifecycle           *GoogleAppsDriveLabelsV2Lifecycle                `json:"lifecycle"`
	LockStatus          *GoogleAppsDriveLabelsV2LockStatus               `json:"lockStatus"`
	Name                *string                                          `json:"name"`
	Properties          *GoogleAppsDriveLabelsV2LabelProperties          `json:"properties"`
	PublishTime         *string                                          `json:"publishTime"`
	Publisher           *GoogleAppsDriveLabelsV2UserInfo                 `json:"publisher"`
	RevisionCreateTime  *string                                          `json:"revisionCreateTime"`
	RevisionCreator     *GoogleAppsDriveLabelsV2UserInfo                 `json:"revisionCreator"`
	RevisionID          *string                                          `json:"revisionId"`
	SchemaCapabilities  *GoogleAppsDriveLabelsV2LabelSchemaCapabilities  `json:"schemaCapabilities"`
}
