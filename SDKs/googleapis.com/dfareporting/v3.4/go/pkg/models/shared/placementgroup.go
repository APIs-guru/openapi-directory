package shared

type PlacementGroupPlacementGroupTypeEnum string

const (
	PlacementGroupPlacementGroupTypeEnumPlacementPackage   PlacementGroupPlacementGroupTypeEnum = "PLACEMENT_PACKAGE"
	PlacementGroupPlacementGroupTypeEnumPlacementRoadblock PlacementGroupPlacementGroupTypeEnum = "PLACEMENT_ROADBLOCK"
)

type PlacementGroup struct {
	AccountID                        *string                               `json:"accountId"`
	AdvertiserID                     *string                               `json:"advertiserId"`
	AdvertiserIDDimensionValue       *DimensionValue                       `json:"advertiserIdDimensionValue"`
	Archived                         *bool                                 `json:"archived"`
	CampaignID                       *string                               `json:"campaignId"`
	CampaignIDDimensionValue         *DimensionValue                       `json:"campaignIdDimensionValue"`
	ChildPlacementIds                []string                              `json:"childPlacementIds"`
	Comment                          *string                               `json:"comment"`
	ContentCategoryID                *string                               `json:"contentCategoryId"`
	CreateInfo                       *LastModifiedInfo                     `json:"createInfo"`
	DirectorySiteID                  *string                               `json:"directorySiteId"`
	DirectorySiteIDDimensionValue    *DimensionValue                       `json:"directorySiteIdDimensionValue"`
	ExternalID                       *string                               `json:"externalId"`
	ID                               *string                               `json:"id"`
	IDDimensionValue                 *DimensionValue                       `json:"idDimensionValue"`
	Kind                             *string                               `json:"kind"`
	LastModifiedInfo                 *LastModifiedInfo                     `json:"lastModifiedInfo"`
	Name                             *string                               `json:"name"`
	PlacementGroupType               *PlacementGroupPlacementGroupTypeEnum `json:"placementGroupType"`
	PlacementStrategyID              *string                               `json:"placementStrategyId"`
	PricingSchedule                  *PricingSchedule                      `json:"pricingSchedule"`
	PrimaryPlacementID               *string                               `json:"primaryPlacementId"`
	PrimaryPlacementIDDimensionValue *DimensionValue                       `json:"primaryPlacementIdDimensionValue"`
	SiteID                           *string                               `json:"siteId"`
	SiteIDDimensionValue             *DimensionValue                       `json:"siteIdDimensionValue"`
	SubaccountID                     *string                               `json:"subaccountId"`
}
