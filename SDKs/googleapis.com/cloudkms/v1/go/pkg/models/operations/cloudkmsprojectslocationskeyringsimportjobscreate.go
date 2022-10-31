package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	ImportJobID    *string           `queryParam:"style=form,explode=true,name=importJobId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity struct {
	Option1 *CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest struct {
	PathParams  CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams
	QueryParams CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams
	Request     *shared.ImportJob `request:"mediaType=application/json"`
	Security    CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity
}

type CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse struct {
	ContentType string
	ImportJob   *shared.ImportJob
	StatusCode  int64
}
