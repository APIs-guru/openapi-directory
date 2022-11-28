package shared

type PlacementGroupActiveStatusEnum string

const (
	PlacementGroupActiveStatusEnumPlacementStatusUnknown             PlacementGroupActiveStatusEnum = "PLACEMENT_STATUS_UNKNOWN"
	PlacementGroupActiveStatusEnumPlacementStatusActive              PlacementGroupActiveStatusEnum = "PLACEMENT_STATUS_ACTIVE"
	PlacementGroupActiveStatusEnumPlacementStatusInactive            PlacementGroupActiveStatusEnum = "PLACEMENT_STATUS_INACTIVE"
	PlacementGroupActiveStatusEnumPlacementStatusArchived            PlacementGroupActiveStatusEnum = "PLACEMENT_STATUS_ARCHIVED"
	PlacementGroupActiveStatusEnumPlacementStatusPermanentlyArchived PlacementGroupActiveStatusEnum = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
)

type PlacementGroupPlacementGroupTypeEnum string

const (
	PlacementGroupPlacementGroupTypeEnumPlacementPackage   PlacementGroupPlacementGroupTypeEnum = "PLACEMENT_PACKAGE"
	PlacementGroupPlacementGroupTypeEnumPlacementRoadblock PlacementGroupPlacementGroupTypeEnum = "PLACEMENT_ROADBLOCK"
)

// PlacementGroup
// Contains properties of a package or roadblock.
type PlacementGroup struct {
	AccountID                        *string                               `json:"accountId,omitempty"`
	ActiveStatus                     *PlacementGroupActiveStatusEnum       `json:"activeStatus,omitempty"`
	AdvertiserID                     *string                               `json:"advertiserId,omitempty"`
	AdvertiserIDDimensionValue       *DimensionValue                       `json:"advertiserIdDimensionValue,omitempty"`
	CampaignID                       *string                               `json:"campaignId,omitempty"`
	CampaignIDDimensionValue         *DimensionValue                       `json:"campaignIdDimensionValue,omitempty"`
	ChildPlacementIds                []string                              `json:"childPlacementIds,omitempty"`
	Comment                          *string                               `json:"comment,omitempty"`
	ContentCategoryID                *string                               `json:"contentCategoryId,omitempty"`
	CreateInfo                       *LastModifiedInfo                     `json:"createInfo,omitempty"`
	DirectorySiteID                  *string                               `json:"directorySiteId,omitempty"`
	DirectorySiteIDDimensionValue    *DimensionValue                       `json:"directorySiteIdDimensionValue,omitempty"`
	ExternalID                       *string                               `json:"externalId,omitempty"`
	ID                               *string                               `json:"id,omitempty"`
	IDDimensionValue                 *DimensionValue                       `json:"idDimensionValue,omitempty"`
	Kind                             *string                               `json:"kind,omitempty"`
	LastModifiedInfo                 *LastModifiedInfo                     `json:"lastModifiedInfo,omitempty"`
	Name                             *string                               `json:"name,omitempty"`
	PlacementGroupType               *PlacementGroupPlacementGroupTypeEnum `json:"placementGroupType,omitempty"`
	PlacementStrategyID              *string                               `json:"placementStrategyId,omitempty"`
	PricingSchedule                  *PricingSchedule                      `json:"pricingSchedule,omitempty"`
	PrimaryPlacementID               *string                               `json:"primaryPlacementId,omitempty"`
	PrimaryPlacementIDDimensionValue *DimensionValue                       `json:"primaryPlacementIdDimensionValue,omitempty"`
	SiteID                           *string                               `json:"siteId,omitempty"`
	SiteIDDimensionValue             *DimensionValue                       `json:"siteIdDimensionValue,omitempty"`
	SubaccountID                     *string                               `json:"subaccountId,omitempty"`
}
