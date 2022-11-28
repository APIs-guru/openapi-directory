package shared

// ProductDetail
// A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
type ProductDetail struct {
	AttributeName  *string `json:"attributeName,omitempty"`
	AttributeValue *string `json:"attributeValue,omitempty"`
	SectionName    *string `json:"sectionName,omitempty"`
}
