package operations

import (
	"openapi/pkg/models/shared"
)

type JobsProjectsClientEventsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type JobsProjectsClientEventsCreateQueryParams struct {
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

type JobsProjectsClientEventsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsClientEventsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type JobsProjectsClientEventsCreateSecurity struct {
	Option1 *JobsProjectsClientEventsCreateSecurityOption1 `security:"option"`
	Option2 *JobsProjectsClientEventsCreateSecurityOption2 `security:"option"`
}

type JobsProjectsClientEventsCreateRequest struct {
	PathParams  JobsProjectsClientEventsCreatePathParams
	QueryParams JobsProjectsClientEventsCreateQueryParams
	Request     *shared.CreateClientEventRequest `request:"mediaType=application/json"`
	Security    JobsProjectsClientEventsCreateSecurity
}

type JobsProjectsClientEventsCreateResponse struct {
	ClientEvent *shared.ClientEvent
	ContentType string
	StatusCode  int64
}
