package shared

type ServiceItem struct {
	FreeFormServiceItem   *FreeFormServiceItem   `json:"freeFormServiceItem"`
	Price                 *Money                 `json:"price"`
	StructuredServiceItem *StructuredServiceItem `json:"structuredServiceItem"`
}
