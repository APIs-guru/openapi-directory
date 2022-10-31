package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingFilesListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingFilesListScopeEnum string

const (
	DfareportingFilesListScopeEnumAll          DfareportingFilesListScopeEnum = "ALL"
	DfareportingFilesListScopeEnumMine         DfareportingFilesListScopeEnum = "MINE"
	DfareportingFilesListScopeEnumSharedWithMe DfareportingFilesListScopeEnum = "SHARED_WITH_ME"
)

type DfareportingFilesListSortFieldEnum string

const (
	DfareportingFilesListSortFieldEnumID               DfareportingFilesListSortFieldEnum = "ID"
	DfareportingFilesListSortFieldEnumLastModifiedTime DfareportingFilesListSortFieldEnum = "LAST_MODIFIED_TIME"
)

type DfareportingFilesListSortOrderEnum string

const (
	DfareportingFilesListSortOrderEnumAscending  DfareportingFilesListSortOrderEnum = "ASCENDING"
	DfareportingFilesListSortOrderEnumDescending DfareportingFilesListSortOrderEnum = "DESCENDING"
)

type DfareportingFilesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                             `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                              `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                             `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                             `queryParam:"style=form,explode=true,name=quotaUser"`
	Scope          *DfareportingFilesListScopeEnum     `queryParam:"style=form,explode=true,name=scope"`
	SortField      *DfareportingFilesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingFilesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingFilesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingFilesListRequest struct {
	PathParams  DfareportingFilesListPathParams
	QueryParams DfareportingFilesListQueryParams
	Security    DfareportingFilesListSecurity
}

type DfareportingFilesListResponse struct {
	ContentType string
	FileList    *shared.FileList
	StatusCode  int64
}
