package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingAdvertisersListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingAdvertisersListSortFieldEnum string

const (
	DfareportingAdvertisersListSortFieldEnumID   DfareportingAdvertisersListSortFieldEnum = "ID"
	DfareportingAdvertisersListSortFieldEnumName DfareportingAdvertisersListSortFieldEnum = "NAME"
)

type DfareportingAdvertisersListSortOrderEnum string

const (
	DfareportingAdvertisersListSortOrderEnumAscending  DfareportingAdvertisersListSortOrderEnum = "ASCENDING"
	DfareportingAdvertisersListSortOrderEnumDescending DfareportingAdvertisersListSortOrderEnum = "DESCENDING"
)

type DfareportingAdvertisersListStatusEnum string

const (
	DfareportingAdvertisersListStatusEnumApproved DfareportingAdvertisersListStatusEnum = "APPROVED"
	DfareportingAdvertisersListStatusEnumOnHold   DfareportingAdvertisersListStatusEnum = "ON_HOLD"
)

type DfareportingAdvertisersListQueryParams struct {
	DollarXgafv                         *shared.XgafvEnum                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                         *string                                   `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserGroupIds                  []string                                  `queryParam:"style=form,explode=true,name=advertiserGroupIds"`
	Alt                                 *shared.AltEnum                           `queryParam:"style=form,explode=true,name=alt"`
	Callback                            *string                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields                              *string                                   `queryParam:"style=form,explode=true,name=fields"`
	FloodlightConfigurationIds          []string                                  `queryParam:"style=form,explode=true,name=floodlightConfigurationIds"`
	Ids                                 []string                                  `queryParam:"style=form,explode=true,name=ids"`
	IncludeAdvertisersWithoutGroupsOnly *bool                                     `queryParam:"style=form,explode=true,name=includeAdvertisersWithoutGroupsOnly"`
	Key                                 *string                                   `queryParam:"style=form,explode=true,name=key"`
	MaxResults                          *int64                                    `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken                          *string                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	OnlyParent                          *bool                                     `queryParam:"style=form,explode=true,name=onlyParent"`
	PageToken                           *string                                   `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                         *bool                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                           *string                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString                        *string                                   `queryParam:"style=form,explode=true,name=searchString"`
	SortField                           *DfareportingAdvertisersListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder                           *DfareportingAdvertisersListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	Status                              *DfareportingAdvertisersListStatusEnum    `queryParam:"style=form,explode=true,name=status"`
	SubaccountID                        *string                                   `queryParam:"style=form,explode=true,name=subaccountId"`
	UploadType                          *string                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                      *string                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingAdvertisersListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingAdvertisersListRequest struct {
	PathParams  DfareportingAdvertisersListPathParams
	QueryParams DfareportingAdvertisersListQueryParams
	Security    DfareportingAdvertisersListSecurity
}

type DfareportingAdvertisersListResponse struct {
	AdvertisersListResponse *shared.AdvertisersListResponse
	ContentType             string
	StatusCode              int64
}
