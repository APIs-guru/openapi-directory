package operations

import (
	"openapi/pkg/models/shared"
)

type VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams struct {
	DollarXgafv         *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields              *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID           *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType          *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	UtilizationReportID *string           `queryParam:"style=form,explode=true,name=utilizationReportId"`
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest struct {
	PathParams  VmmigrationProjectsLocationsSourcesUtilizationReportsCreatePathParams
	QueryParams VmmigrationProjectsLocationsSourcesUtilizationReportsCreateQueryParams
	Request     *shared.UtilizationReport `request:"mediaType=application/json"`
	Security    VmmigrationProjectsLocationsSourcesUtilizationReportsCreateSecurity
}

type VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
