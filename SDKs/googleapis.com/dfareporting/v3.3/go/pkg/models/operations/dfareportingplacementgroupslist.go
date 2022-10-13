package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingPlacementGroupsListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingPlacementGroupsListPlacementGroupTypeEnum string

const (
	DfareportingPlacementGroupsListPlacementGroupTypeEnumPlacementPackage   DfareportingPlacementGroupsListPlacementGroupTypeEnum = "PLACEMENT_PACKAGE"
	DfareportingPlacementGroupsListPlacementGroupTypeEnumPlacementRoadblock DfareportingPlacementGroupsListPlacementGroupTypeEnum = "PLACEMENT_ROADBLOCK"
)

type DfareportingPlacementGroupsListPricingTypesEnum string

const (
	DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpm                 DfareportingPlacementGroupsListPricingTypesEnum = "PRICING_TYPE_CPM"
	DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpc                 DfareportingPlacementGroupsListPricingTypesEnum = "PRICING_TYPE_CPC"
	DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpa                 DfareportingPlacementGroupsListPricingTypesEnum = "PRICING_TYPE_CPA"
	DfareportingPlacementGroupsListPricingTypesEnumPricingTypeFlatRateImpressions DfareportingPlacementGroupsListPricingTypesEnum = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
	DfareportingPlacementGroupsListPricingTypesEnumPricingTypeFlatRateClicks      DfareportingPlacementGroupsListPricingTypesEnum = "PRICING_TYPE_FLAT_RATE_CLICKS"
	DfareportingPlacementGroupsListPricingTypesEnumPricingTypeCpmActiveview       DfareportingPlacementGroupsListPricingTypesEnum = "PRICING_TYPE_CPM_ACTIVEVIEW"
)

type DfareportingPlacementGroupsListSortFieldEnum string

const (
	DfareportingPlacementGroupsListSortFieldEnumID   DfareportingPlacementGroupsListSortFieldEnum = "ID"
	DfareportingPlacementGroupsListSortFieldEnumName DfareportingPlacementGroupsListSortFieldEnum = "NAME"
)

type DfareportingPlacementGroupsListSortOrderEnum string

const (
	DfareportingPlacementGroupsListSortOrderEnumAscending  DfareportingPlacementGroupsListSortOrderEnum = "ASCENDING"
	DfareportingPlacementGroupsListSortOrderEnumDescending DfareportingPlacementGroupsListSortOrderEnum = "DESCENDING"
)

type DfareportingPlacementGroupsListQueryParams struct {
	DollarXgafv          *shared.XgafvEnum                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken          *string                                                `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserIds        []string                                               `queryParam:"style=form,explode=true,name=advertiserIds"`
	Alt                  *shared.AltEnum                                        `queryParam:"style=form,explode=true,name=alt"`
	Archived             *bool                                                  `queryParam:"style=form,explode=true,name=archived"`
	Callback             *string                                                `queryParam:"style=form,explode=true,name=callback"`
	CampaignIds          []string                                               `queryParam:"style=form,explode=true,name=campaignIds"`
	ContentCategoryIds   []string                                               `queryParam:"style=form,explode=true,name=contentCategoryIds"`
	DirectorySiteIds     []string                                               `queryParam:"style=form,explode=true,name=directorySiteIds"`
	Fields               *string                                                `queryParam:"style=form,explode=true,name=fields"`
	Ids                  []string                                               `queryParam:"style=form,explode=true,name=ids"`
	Key                  *string                                                `queryParam:"style=form,explode=true,name=key"`
	MaxEndDate           *string                                                `queryParam:"style=form,explode=true,name=maxEndDate"`
	MaxResults           *int64                                                 `queryParam:"style=form,explode=true,name=maxResults"`
	MaxStartDate         *string                                                `queryParam:"style=form,explode=true,name=maxStartDate"`
	MinEndDate           *string                                                `queryParam:"style=form,explode=true,name=minEndDate"`
	MinStartDate         *string                                                `queryParam:"style=form,explode=true,name=minStartDate"`
	OauthToken           *string                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken            *string                                                `queryParam:"style=form,explode=true,name=pageToken"`
	PlacementGroupType   *DfareportingPlacementGroupsListPlacementGroupTypeEnum `queryParam:"style=form,explode=true,name=placementGroupType"`
	PlacementStrategyIds []string                                               `queryParam:"style=form,explode=true,name=placementStrategyIds"`
	PrettyPrint          *bool                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	PricingTypes         []DfareportingPlacementGroupsListPricingTypesEnum      `queryParam:"style=form,explode=true,name=pricingTypes"`
	QuotaUser            *string                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString         *string                                                `queryParam:"style=form,explode=true,name=searchString"`
	SiteIds              []string                                               `queryParam:"style=form,explode=true,name=siteIds"`
	SortField            *DfareportingPlacementGroupsListSortFieldEnum          `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder            *DfareportingPlacementGroupsListSortOrderEnum          `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType           *string                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol       *string                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingPlacementGroupsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingPlacementGroupsListRequest struct {
	PathParams  DfareportingPlacementGroupsListPathParams
	QueryParams DfareportingPlacementGroupsListQueryParams
	Security    DfareportingPlacementGroupsListSecurity
}

type DfareportingPlacementGroupsListResponse struct {
	ContentType                 string
	PlacementGroupsListResponse *shared.PlacementGroupsListResponse
	StatusCode                  int64
}
