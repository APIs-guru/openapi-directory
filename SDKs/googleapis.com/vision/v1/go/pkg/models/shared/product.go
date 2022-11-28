package shared

// Product
// A Product contains ReferenceImages.
type Product struct {
	Description     *string    `json:"description,omitempty"`
	DisplayName     *string    `json:"displayName,omitempty"`
	Name            *string    `json:"name,omitempty"`
	ProductCategory *string    `json:"productCategory,omitempty"`
	ProductLabels   []KeyValue `json:"productLabels,omitempty"`
}
