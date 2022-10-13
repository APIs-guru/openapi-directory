package operations

import (
	"openapi/pkg/models/shared"
)

type CloudbuildProjectsTriggersRunPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TriggerID string `pathParam:"style=simple,explode=false,name=triggerId"`
}

type CloudbuildProjectsTriggersRunQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Name           *string           `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudbuildProjectsTriggersRunSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudbuildProjectsTriggersRunRequest struct {
	PathParams  CloudbuildProjectsTriggersRunPathParams
	QueryParams CloudbuildProjectsTriggersRunQueryParams
	Request     *shared.RepoSource `request:"mediaType=application/json"`
	Security    CloudbuildProjectsTriggersRunSecurity
}

type CloudbuildProjectsTriggersRunResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
