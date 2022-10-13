package shared

type OrderContactContactTypeEnum string

const (
	OrderContactContactTypeEnumPlanningOrderContactBuyerContact        OrderContactContactTypeEnum = "PLANNING_ORDER_CONTACT_BUYER_CONTACT"
	OrderContactContactTypeEnumPlanningOrderContactBuyerBillingContact OrderContactContactTypeEnum = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"
	OrderContactContactTypeEnumPlanningOrderContactSellerContact       OrderContactContactTypeEnum = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
)

type OrderContact struct {
	ContactInfo            *string                      `json:"contactInfo"`
	ContactName            *string                      `json:"contactName"`
	ContactTitle           *string                      `json:"contactTitle"`
	ContactType            *OrderContactContactTypeEnum `json:"contactType"`
	SignatureUserProfileID *string                      `json:"signatureUserProfileId"`
}
