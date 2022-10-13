package operations

import (
	"openapi/pkg/models/shared"
)

type VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum string

const (
	VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnumUtilizationReportViewUnspecified VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum = "UTILIZATION_REPORT_VIEW_UNSPECIFIED"
	VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnumBasic                            VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum = "BASIC"
	VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnumFull                             VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum = "FULL"
)

type VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                            `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                            `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                                            `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string                                                            `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64                                                             `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                            `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest struct {
	PathParams  VmmigrationProjectsLocationsSourcesUtilizationReportsListPathParams
	QueryParams VmmigrationProjectsLocationsSourcesUtilizationReportsListQueryParams
	Security    VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse struct {
	ContentType                    string
	ListUtilizationReportsResponse *shared.ListUtilizationReportsResponse
	StatusCode                     int64
}
