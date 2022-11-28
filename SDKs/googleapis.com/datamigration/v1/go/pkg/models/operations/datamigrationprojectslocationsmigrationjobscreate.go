package operations

import (
	"openapi/pkg/models/shared"
)

type DatamigrationProjectsLocationsMigrationJobsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatamigrationProjectsLocationsMigrationJobsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MigrationJobID *string           `queryParam:"style=form,explode=true,name=migrationJobId"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatamigrationProjectsLocationsMigrationJobsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatamigrationProjectsLocationsMigrationJobsCreateRequest struct {
	PathParams  DatamigrationProjectsLocationsMigrationJobsCreatePathParams
	QueryParams DatamigrationProjectsLocationsMigrationJobsCreateQueryParams
	Request     *shared.MigrationJobInput `request:"mediaType=application/json"`
	Security    DatamigrationProjectsLocationsMigrationJobsCreateSecurity
}

type DatamigrationProjectsLocationsMigrationJobsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
