package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingOrdersListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DfareportingOrdersListSortFieldEnum string

const (
	DfareportingOrdersListSortFieldEnumID   DfareportingOrdersListSortFieldEnum = "ID"
	DfareportingOrdersListSortFieldEnumName DfareportingOrdersListSortFieldEnum = "NAME"
)

type DfareportingOrdersListSortOrderEnum string

const (
	DfareportingOrdersListSortOrderEnumAscending  DfareportingOrdersListSortOrderEnum = "ASCENDING"
	DfareportingOrdersListSortOrderEnumDescending DfareportingOrdersListSortOrderEnum = "DESCENDING"
)

type DfareportingOrdersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                              `queryParam:"style=form,explode=true,name=fields"`
	Ids            []string                             `queryParam:"style=form,explode=true,name=ids"`
	Key            *string                              `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                               `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString   *string                              `queryParam:"style=form,explode=true,name=searchString"`
	SiteID         []string                             `queryParam:"style=form,explode=true,name=siteId"`
	SortField      *DfareportingOrdersListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingOrdersListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingOrdersListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingOrdersListRequest struct {
	PathParams  DfareportingOrdersListPathParams
	QueryParams DfareportingOrdersListQueryParams
	Security    DfareportingOrdersListSecurity
}

type DfareportingOrdersListResponse struct {
	ContentType        string
	OrdersListResponse *shared.OrdersListResponse
	StatusCode         int64
}
