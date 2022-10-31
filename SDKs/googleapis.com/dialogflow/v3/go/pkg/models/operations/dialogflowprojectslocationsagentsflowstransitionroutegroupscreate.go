package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreatePathParams
	QueryParams DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3TransitionRouteGroup `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateSecurity
}

type DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse struct {
	ContentType                                   string
	GoogleCloudDialogflowCxV3TransitionRouteGroup *shared.GoogleCloudDialogflowCxV3TransitionRouteGroup
	StatusCode                                    int64
}
