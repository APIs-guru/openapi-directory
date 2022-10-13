package shared

type Prediction struct {
	BoundingBox *BoundingBox `json:"boundingBox"`
	Probability *float32     `json:"probability"`
	TagID       *string      `json:"tagId"`
	TagName     *string      `json:"tagName"`
}
