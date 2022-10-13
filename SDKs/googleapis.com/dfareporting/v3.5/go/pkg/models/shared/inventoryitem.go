package shared

type InventoryItemTypeEnum string

const (
	InventoryItemTypeEnumPlanningPlacementTypeRegular InventoryItemTypeEnum = "PLANNING_PLACEMENT_TYPE_REGULAR"
	InventoryItemTypeEnumPlanningPlacementTypeCredit  InventoryItemTypeEnum = "PLANNING_PLACEMENT_TYPE_CREDIT"
)

type InventoryItem struct {
	AccountID                 *string                `json:"accountId"`
	AdSlots                   []AdSlot               `json:"adSlots"`
	AdvertiserID              *string                `json:"advertiserId"`
	ContentCategoryID         *string                `json:"contentCategoryId"`
	EstimatedClickThroughRate *string                `json:"estimatedClickThroughRate"`
	EstimatedConversionRate   *string                `json:"estimatedConversionRate"`
	ID                        *string                `json:"id"`
	InPlan                    *bool                  `json:"inPlan"`
	Kind                      *string                `json:"kind"`
	LastModifiedInfo          *LastModifiedInfo      `json:"lastModifiedInfo"`
	Name                      *string                `json:"name"`
	NegotiationChannelID      *string                `json:"negotiationChannelId"`
	OrderID                   *string                `json:"orderId"`
	PlacementStrategyID       *string                `json:"placementStrategyId"`
	Pricing                   *Pricing               `json:"pricing"`
	ProjectID                 *string                `json:"projectId"`
	RfpID                     *string                `json:"rfpId"`
	SiteID                    *string                `json:"siteId"`
	SubaccountID              *string                `json:"subaccountId"`
	Type                      *InventoryItemTypeEnum `json:"type"`
}
