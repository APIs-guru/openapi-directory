package shared

// ServiceItem
// A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
type ServiceItem struct {
	FreeFormServiceItem   *FreeFormServiceItem   `json:"freeFormServiceItem,omitempty"`
	Price                 *Money                 `json:"price,omitempty"`
	StructuredServiceItem *StructuredServiceItem `json:"structuredServiceItem,omitempty"`
}
