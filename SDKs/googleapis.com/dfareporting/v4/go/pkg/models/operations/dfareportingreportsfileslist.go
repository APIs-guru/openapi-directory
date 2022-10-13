package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingReportsFilesListPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
	ReportID  string `pathParam:"style=simple,explode=false,name=reportId"`
}

type DfareportingReportsFilesListSortFieldEnum string

const (
	DfareportingReportsFilesListSortFieldEnumID               DfareportingReportsFilesListSortFieldEnum = "ID"
	DfareportingReportsFilesListSortFieldEnumLastModifiedTime DfareportingReportsFilesListSortFieldEnum = "LAST_MODIFIED_TIME"
)

type DfareportingReportsFilesListSortOrderEnum string

const (
	DfareportingReportsFilesListSortOrderEnumAscending  DfareportingReportsFilesListSortOrderEnum = "ASCENDING"
	DfareportingReportsFilesListSortOrderEnumDescending DfareportingReportsFilesListSortOrderEnum = "DESCENDING"
)

type DfareportingReportsFilesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                    `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                     `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string                                    `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	SortField      *DfareportingReportsFilesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
	SortOrder      *DfareportingReportsFilesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	UploadType     *string                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingReportsFilesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingReportsFilesListRequest struct {
	PathParams  DfareportingReportsFilesListPathParams
	QueryParams DfareportingReportsFilesListQueryParams
	Security    DfareportingReportsFilesListSecurity
}

type DfareportingReportsFilesListResponse struct {
	ContentType string
	FileList    *shared.FileList
	StatusCode  int64
}
