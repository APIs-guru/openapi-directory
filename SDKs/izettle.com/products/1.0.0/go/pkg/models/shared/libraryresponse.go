package shared



type LibraryResponse struct {
    DeletedDiscounts []string `json:"deletedDiscounts,omitempty"`
    DeletedProducts []string `json:"deletedProducts,omitempty"`
    Discounts []DiscountResponse `json:"discounts,omitempty"`
    FromEventLogUUID *string `json:"fromEventLogUuid,omitempty"`
    Products []ProductResponse `json:"products,omitempty"`
    UntilEventLogUUID *string `json:"untilEventLogUuid,omitempty"`
    
}

