package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingContentCategoriesListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingContentCategoriesListSortFieldEnum string

const (
	DfareportingContentCategoriesListSortFieldEnumID   DfareportingContentCategoriesListSortFieldEnum = "ID"
	DfareportingContentCategoriesListSortFieldEnumName DfareportingContentCategoriesListSortFieldEnum = "NAME"
)

type DfareportingContentCategoriesListSortOrderEnum string

const (
	DfareportingContentCategoriesListSortOrderEnumAscending  DfareportingContentCategoriesListSortOrderEnum = "ASCENDING"
	DfareportingContentCategoriesListSortOrderEnumDescending DfareportingContentCategoriesListSortOrderEnum = "DESCENDING"
)

type DfareportingContentCategoriesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                         `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                         `queryParam:"style=form,explode=true,name=fields"`
	Ids            []string                                        `queryParam:"style=form,explode=true,name=ids"`
	Key            *string                                         `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                                         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString   *string                                         `queryParam:"style=form,explode=true,name=searchString"`
	SortField      *DfareportingContentCategoriesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingContentCategoriesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingContentCategoriesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingContentCategoriesListRequest struct {
	PathParams  DfareportingContentCategoriesListPathParams
	QueryParams DfareportingContentCategoriesListQueryParams
	Security    DfareportingContentCategoriesListSecurity
}

type DfareportingContentCategoriesListResponse struct {
	ContentCategoriesListResponse *shared.ContentCategoriesListResponse
	ContentType                   string
	StatusCode                    int64
}
