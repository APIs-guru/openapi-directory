package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsFlowsValidatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DialogflowProjectsLocationsAgentsFlowsValidateQueryParams struct {
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

type DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsValidateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsFlowsValidateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsFlowsValidateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsFlowsValidatePathParams
	QueryParams DialogflowProjectsLocationsAgentsFlowsValidateQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3ValidateFlowRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsFlowsValidateSecurity
}

type DialogflowProjectsLocationsAgentsFlowsValidateResponse struct {
	ContentType                                   string
	GoogleCloudDialogflowCxV3FlowValidationResult *shared.GoogleCloudDialogflowCxV3FlowValidationResult
	StatusCode                                    int64
}
