package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubereportingJobsDeletePathParams struct {
	JobID string `pathParam:"style=simple,explode=false,name=jobId"`
}

type YoutubereportingJobsDeleteQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubereportingJobsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubereportingJobsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubereportingJobsDeleteSecurity struct {
	Option1 *YoutubereportingJobsDeleteSecurityOption1 `security:"option"`
	Option2 *YoutubereportingJobsDeleteSecurityOption2 `security:"option"`
}

type YoutubereportingJobsDeleteRequest struct {
	PathParams  YoutubereportingJobsDeletePathParams
	QueryParams YoutubereportingJobsDeleteQueryParams
	Security    YoutubereportingJobsDeleteSecurity
}

type YoutubereportingJobsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
