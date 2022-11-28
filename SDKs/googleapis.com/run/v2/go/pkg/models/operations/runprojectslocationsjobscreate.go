package operations

import (
	"openapi/pkg/models/shared"
)

type RunProjectsLocationsJobsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type RunProjectsLocationsJobsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	JobID          *string           `queryParam:"style=form,explode=true,name=jobId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type RunProjectsLocationsJobsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type RunProjectsLocationsJobsCreateRequest struct {
	PathParams  RunProjectsLocationsJobsCreatePathParams
	QueryParams RunProjectsLocationsJobsCreateQueryParams
	Request     *shared.GoogleCloudRunV2JobInput `request:"mediaType=application/json"`
	Security    RunProjectsLocationsJobsCreateSecurity
}

type RunProjectsLocationsJobsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
