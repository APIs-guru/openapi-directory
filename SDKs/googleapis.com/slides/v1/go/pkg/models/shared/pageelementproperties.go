package shared

type PageElementProperties struct {
	PageObjectID *string          `json:"pageObjectId"`
	Size         *Size            `json:"size"`
	Transform    *AffineTransform `json:"transform"`
}
