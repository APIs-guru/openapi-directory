package shared

type Prediction struct {
	BoundingBox *BoundingBox `json:"boundingBox,omitempty"`
	Probability *float32     `json:"probability,omitempty"`
	TagID       *string      `json:"tagId,omitempty"`
	TagName     *string      `json:"tagName,omitempty"`
}
