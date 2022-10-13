package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingOrderDocumentsListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DfareportingOrderDocumentsListSortFieldEnum string

const (
	DfareportingOrderDocumentsListSortFieldEnumID   DfareportingOrderDocumentsListSortFieldEnum = "ID"
	DfareportingOrderDocumentsListSortFieldEnumName DfareportingOrderDocumentsListSortFieldEnum = "NAME"
)

type DfareportingOrderDocumentsListSortOrderEnum string

const (
	DfareportingOrderDocumentsListSortOrderEnumAscending  DfareportingOrderDocumentsListSortOrderEnum = "ASCENDING"
	DfareportingOrderDocumentsListSortOrderEnumDescending DfareportingOrderDocumentsListSortOrderEnum = "DESCENDING"
)

type DfareportingOrderDocumentsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                      `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                              `queryParam:"style=form,explode=true,name=alt"`
	Approved       *bool                                        `queryParam:"style=form,explode=true,name=approved"`
	Callback       *string                                      `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                      `queryParam:"style=form,explode=true,name=fields"`
	Ids            []string                                     `queryParam:"style=form,explode=true,name=ids"`
	Key            *string                                      `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                       `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                                      `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderID        []string                                     `queryParam:"style=form,explode=true,name=orderId"`
	PageToken      *string                                      `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                      `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString   *string                                      `queryParam:"style=form,explode=true,name=searchString"`
	SiteID         []string                                     `queryParam:"style=form,explode=true,name=siteId"`
	SortField      *DfareportingOrderDocumentsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingOrderDocumentsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                      `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingOrderDocumentsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingOrderDocumentsListRequest struct {
	PathParams  DfareportingOrderDocumentsListPathParams
	QueryParams DfareportingOrderDocumentsListQueryParams
	Security    DfareportingOrderDocumentsListSecurity
}

type DfareportingOrderDocumentsListResponse struct {
	ContentType                string
	OrderDocumentsListResponse *shared.OrderDocumentsListResponse
	StatusCode                 int64
}
