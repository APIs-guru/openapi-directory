package shared

type GoogleCloudDocumentaiV1beta2DocumentRevision struct {
	Agent       *string                                                  `json:"agent"`
	CreateTime  *string                                                  `json:"createTime"`
	HumanReview *GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview `json:"humanReview"`
	ID          *string                                                  `json:"id"`
	Parent      []int32                                                  `json:"parent"`
	ParentIds   []string                                                 `json:"parentIds"`
	Processor   *string                                                  `json:"processor"`
}
