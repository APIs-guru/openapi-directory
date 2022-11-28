package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentEnvironmentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentEnvironmentsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EnvironmentID  *string           `queryParam:"style=form,explode=true,name=environmentId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentEnvironmentsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentEnvironmentsCreatePathParams
	QueryParams DialogflowProjectsLocationsAgentEnvironmentsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1EnvironmentInput `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity
}

type DialogflowProjectsLocationsAgentEnvironmentsCreateResponse struct {
	ContentType                             string
	GoogleCloudDialogflowV2beta1Environment *shared.GoogleCloudDialogflowV2beta1Environment
	StatusCode                              int64
}
