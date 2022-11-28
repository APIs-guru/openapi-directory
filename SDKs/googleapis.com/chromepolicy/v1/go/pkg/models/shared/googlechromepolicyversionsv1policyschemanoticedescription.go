package shared

// GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription
// Provides special notice messages related to a particular value in a field that is part of a PolicySchema.
type GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription struct {
	AcknowledgementRequired *bool   `json:"acknowledgementRequired,omitempty"`
	Field                   *string `json:"field,omitempty"`
	NoticeMessage           *string `json:"noticeMessage,omitempty"`
	NoticeValue             *string `json:"noticeValue,omitempty"`
}
