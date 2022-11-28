package shared

// GoogleCloudDocumentaiV1beta2DocumentRevision
// Contains past or forward revisions of this document.
type GoogleCloudDocumentaiV1beta2DocumentRevision struct {
	Agent       *string                                                  `json:"agent,omitempty"`
	CreateTime  *string                                                  `json:"createTime,omitempty"`
	HumanReview *GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview `json:"humanReview,omitempty"`
	ID          *string                                                  `json:"id,omitempty"`
	Parent      []int32                                                  `json:"parent,omitempty"`
	ParentIds   []string                                                 `json:"parentIds,omitempty"`
	Processor   *string                                                  `json:"processor,omitempty"`
}
