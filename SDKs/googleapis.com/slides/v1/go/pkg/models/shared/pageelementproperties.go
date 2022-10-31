package shared

type PageElementProperties struct {
	PageObjectID *string          `json:"pageObjectId,omitempty"`
	Size         *Size            `json:"size,omitempty"`
	Transform    *AffineTransform `json:"transform,omitempty"`
}
