package shared

// PageElementProperties
// Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.
type PageElementProperties struct {
	PageObjectID *string          `json:"pageObjectId,omitempty"`
	Size         *Size            `json:"size,omitempty"`
	Transform    *AffineTransform `json:"transform,omitempty"`
}
