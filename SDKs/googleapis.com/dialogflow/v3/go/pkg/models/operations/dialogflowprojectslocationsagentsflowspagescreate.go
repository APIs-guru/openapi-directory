package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsFlowsPagesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsFlowsPagesCreatePathParams
	QueryParams DialogflowProjectsLocationsAgentsFlowsPagesCreateQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3Page `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsFlowsPagesCreateSecurity
}

type DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse struct {
	ContentType                   string
	GoogleCloudDialogflowCxV3Page *shared.GoogleCloudDialogflowCxV3Page
	StatusCode                    int64
}
