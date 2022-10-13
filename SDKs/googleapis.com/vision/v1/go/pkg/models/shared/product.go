package shared

type Product struct {
	Description     *string    `json:"description"`
	DisplayName     *string    `json:"displayName"`
	Name            *string    `json:"name"`
	ProductCategory *string    `json:"productCategory"`
	ProductLabels   []KeyValue `json:"productLabels"`
}
