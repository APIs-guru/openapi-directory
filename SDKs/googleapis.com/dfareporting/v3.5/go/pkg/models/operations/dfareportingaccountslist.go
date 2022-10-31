package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingAccountsListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingAccountsListSortFieldEnum string

const (
	DfareportingAccountsListSortFieldEnumID   DfareportingAccountsListSortFieldEnum = "ID"
	DfareportingAccountsListSortFieldEnumName DfareportingAccountsListSortFieldEnum = "NAME"
)

type DfareportingAccountsListSortOrderEnum string

const (
	DfareportingAccountsListSortOrderEnumAscending  DfareportingAccountsListSortOrderEnum = "ASCENDING"
	DfareportingAccountsListSortOrderEnumDescending DfareportingAccountsListSortOrderEnum = "DESCENDING"
)

type DfareportingAccountsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                `queryParam:"style=form,explode=true,name=access_token"`
	Active         *bool                                  `queryParam:"style=form,explode=true,name=active"`
	Alt            *shared.AltEnum                        `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                `queryParam:"style=form,explode=true,name=fields"`
	Ids            []string                               `queryParam:"style=form,explode=true,name=ids"`
	Key            *string                                `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                 `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                                `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                `queryParam:"style=form,explode=true,name=quotaUser"`
	SearchString   *string                                `queryParam:"style=form,explode=true,name=searchString"`
	SortField      *DfareportingAccountsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingAccountsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingAccountsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingAccountsListRequest struct {
	PathParams  DfareportingAccountsListPathParams
	QueryParams DfareportingAccountsListQueryParams
	Security    DfareportingAccountsListSecurity
}

type DfareportingAccountsListResponse struct {
	AccountsListResponse *shared.AccountsListResponse
	ContentType          string
	StatusCode           int64
}
