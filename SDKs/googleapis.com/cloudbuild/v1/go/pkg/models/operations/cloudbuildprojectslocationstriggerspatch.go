package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbuildProjectsLocationsTriggersPatchPathParams struct {
	ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
}

type CloudbuildProjectsLocationsTriggersPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProjectID      *string           `queryParam:"style=form,explode=true,name=projectId"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	TriggerID      *string           `queryParam:"style=form,explode=true,name=triggerId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudbuildProjectsLocationsTriggersPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbuildProjectsLocationsTriggersPatchRequest struct {
	PathParams  CloudbuildProjectsLocationsTriggersPatchPathParams
	QueryParams CloudbuildProjectsLocationsTriggersPatchQueryParams
	Request     *shared.BuildTriggerInput `request:"mediaType=application/json"`
	Security    CloudbuildProjectsLocationsTriggersPatchSecurity
}

type CloudbuildProjectsLocationsTriggersPatchResponse struct {
	BuildTrigger *shared.BuildTrigger
	ContentType  string
	StatusCode   int64
}
