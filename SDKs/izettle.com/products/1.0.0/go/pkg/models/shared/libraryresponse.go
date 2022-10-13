package shared

type LibraryResponse struct {
	DeletedDiscounts  []string           `json:"deletedDiscounts"`
	DeletedProducts   []string           `json:"deletedProducts"`
	Discounts         []DiscountResponse `json:"discounts"`
	FromEventLogUUID  *string            `json:"fromEventLogUuid"`
	Products          []ProductResponse  `json:"products"`
	UntilEventLogUUID *string            `json:"untilEventLogUuid"`
}
