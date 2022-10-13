package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingDirectorySitesListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingDirectorySitesListSortFieldEnum string

const (
	DfareportingDirectorySitesListSortFieldEnumID   DfareportingDirectorySitesListSortFieldEnum = "ID"
	DfareportingDirectorySitesListSortFieldEnumName DfareportingDirectorySitesListSortFieldEnum = "NAME"
)

type DfareportingDirectorySitesListSortOrderEnum string

const (
	DfareportingDirectorySitesListSortOrderEnumAscending  DfareportingDirectorySitesListSortOrderEnum = "ASCENDING"
	DfareportingDirectorySitesListSortOrderEnumDescending DfareportingDirectorySitesListSortOrderEnum = "DESCENDING"
)

type DfareportingDirectorySitesListQueryParams struct {
	DollarXgafv                    *shared.XgafvEnum                            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AcceptsInStreamVideoPlacements *bool                                        `queryParam:"style=form,explode=true,name=acceptsInStreamVideoPlacements"`
	AcceptsInterstitialPlacements  *bool                                        `queryParam:"style=form,explode=true,name=acceptsInterstitialPlacements"`
	AcceptsPublisherPaidPlacements *bool                                        `queryParam:"style=form,explode=true,name=acceptsPublisherPaidPlacements"`
	AccessToken                    *string                                      `queryParam:"style=form,explode=true,name=access_token"`
	Active                         *bool                                        `queryParam:"style=form,explode=true,name=active"`
	Alt                            *shared.AltEnum                              `queryParam:"style=form,explode=true,name=alt"`
	Callback                       *string                                      `queryParam:"style=form,explode=true,name=callback"`
	DfpNetworkCode                 *string                                      `queryParam:"style=form,explode=true,name=dfpNetworkCode"`
	Fields                         *string                                      `queryParam:"style=form,explode=true,name=fields"`
	Ids                            []string                                     `queryParam:"style=form,explode=true,name=ids"`
	Key                            *string                                      `queryParam:"style=form,explode=true,name=key"`
	MaxResults                     *int64                                       `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken                     *string                                      `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken                      *string                                      `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                    *bool                                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                      *string                                      `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString                   *string                                      `queryParam:"style=form,explode=true,name=searchString"`
	SortField                      *DfareportingDirectorySitesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder                      *DfareportingDirectorySitesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType                     *string                                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                 *string                                      `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingDirectorySitesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingDirectorySitesListRequest struct {
	PathParams  DfareportingDirectorySitesListPathParams
	QueryParams DfareportingDirectorySitesListQueryParams
	Security    DfareportingDirectorySitesListSecurity
}

type DfareportingDirectorySitesListResponse struct {
	ContentType                string
	DirectorySitesListResponse *shared.DirectorySitesListResponse
	StatusCode                 int64
}
