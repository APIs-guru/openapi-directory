package shared

type ServiceItem struct {
	FreeFormServiceItem   *FreeFormServiceItem   `json:"freeFormServiceItem,omitempty"`
	Price                 *Money                 `json:"price,omitempty"`
	StructuredServiceItem *StructuredServiceItem `json:"structuredServiceItem,omitempty"`
}
