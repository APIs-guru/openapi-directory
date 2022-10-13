package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestPathParams struct {
	Environment string `pathParam:"style=simple,explode=false,name=environment"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestQueryParams struct {
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

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestPathParams
	QueryParams DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity
}

type DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}
