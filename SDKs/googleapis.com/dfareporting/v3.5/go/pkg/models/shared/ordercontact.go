package shared




type OrderContactContactTypeEnum string

const (
    OrderContactContactTypeEnumPlanningOrderContactBuyerContact OrderContactContactTypeEnum = "PLANNING_ORDER_CONTACT_BUYER_CONTACT"
OrderContactContactTypeEnumPlanningOrderContactBuyerBillingContact OrderContactContactTypeEnum = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"
OrderContactContactTypeEnumPlanningOrderContactSellerContact OrderContactContactTypeEnum = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
)


type OrderContact struct {
    ContactInfo *string `json:"contactInfo,omitempty"`
    ContactName *string `json:"contactName,omitempty"`
    ContactTitle *string `json:"contactTitle,omitempty"`
    ContactType *OrderContactContactTypeEnum `json:"contactType,omitempty"`
    SignatureUserProfileID *string `json:"signatureUserProfileId,omitempty"`
    
}

