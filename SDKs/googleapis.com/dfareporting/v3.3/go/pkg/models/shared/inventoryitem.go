package shared




type InventoryItemTypeEnum string

const (
    InventoryItemTypeEnumPlanningPlacementTypeRegular InventoryItemTypeEnum = "PLANNING_PLACEMENT_TYPE_REGULAR"
InventoryItemTypeEnumPlanningPlacementTypeCredit InventoryItemTypeEnum = "PLANNING_PLACEMENT_TYPE_CREDIT"
)


type InventoryItem struct {
    AccountID *string `json:"accountId,omitempty"`
    AdSlots []AdSlot `json:"adSlots,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    ContentCategoryID *string `json:"contentCategoryId,omitempty"`
    EstimatedClickThroughRate *string `json:"estimatedClickThroughRate,omitempty"`
    EstimatedConversionRate *string `json:"estimatedConversionRate,omitempty"`
    ID *string `json:"id,omitempty"`
    InPlan *bool `json:"inPlan,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastModifiedInfo *LastModifiedInfo `json:"lastModifiedInfo,omitempty"`
    Name *string `json:"name,omitempty"`
    NegotiationChannelID *string `json:"negotiationChannelId,omitempty"`
    OrderID *string `json:"orderId,omitempty"`
    PlacementStrategyID *string `json:"placementStrategyId,omitempty"`
    Pricing *Pricing `json:"pricing,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    RfpID *string `json:"rfpId,omitempty"`
    SiteID *string `json:"siteId,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    Type *InventoryItemTypeEnum `json:"type,omitempty"`
    
}

