package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsJobsBatchDeletePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsJobsBatchDeleteQueryParams struct {
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

type JobsProjectsJobsBatchDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsJobsBatchDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsJobsBatchDeleteSecurity struct {
	Option1 *JobsProjectsJobsBatchDeleteSecurityOption1 `security:"option"`
	Option2 *JobsProjectsJobsBatchDeleteSecurityOption2 `security:"option"`
}

type JobsProjectsJobsBatchDeleteRequest struct {
	PathParams  JobsProjectsJobsBatchDeletePathParams
	QueryParams JobsProjectsJobsBatchDeleteQueryParams
	Request     *shared.BatchDeleteJobsRequest `request:"mediaType=application/json"`
	Security    JobsProjectsJobsBatchDeleteSecurity
}

type JobsProjectsJobsBatchDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
