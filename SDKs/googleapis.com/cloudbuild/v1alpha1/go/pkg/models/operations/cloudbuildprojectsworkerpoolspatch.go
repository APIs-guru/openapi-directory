package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbuildProjectsWorkerPoolsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudbuildProjectsWorkerPoolsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudbuildProjectsWorkerPoolsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbuildProjectsWorkerPoolsPatchRequest struct {
	PathParams  CloudbuildProjectsWorkerPoolsPatchPathParams
	QueryParams CloudbuildProjectsWorkerPoolsPatchQueryParams
	Request     *shared.WorkerPool `request:"mediaType=application/json"`
	Security    CloudbuildProjectsWorkerPoolsPatchSecurity
}

type CloudbuildProjectsWorkerPoolsPatchResponse struct {
	ContentType string
	StatusCode  int64
	WorkerPool  *shared.WorkerPool
}
