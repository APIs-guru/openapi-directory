package shared

type GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription struct {
	AcknowledgementRequired *bool   `json:"acknowledgementRequired"`
	Field                   *string `json:"field"`
	NoticeMessage           *string `json:"noticeMessage"`
	NoticeValue             *string `json:"noticeValue"`
}
