package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsSetAgentPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsSetAgentQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsSetAgentSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsSetAgentSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsSetAgentSecurity struct {
	Option1 *DialogflowProjectsLocationsSetAgentSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsSetAgentSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsSetAgentRequest struct {
	PathParams  DialogflowProjectsLocationsSetAgentPathParams
	QueryParams DialogflowProjectsLocationsSetAgentQueryParams
	Request     *shared.GoogleCloudDialogflowV2beta1Agent `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsSetAgentSecurity
}

type DialogflowProjectsLocationsSetAgentResponse struct {
	ContentType                       string
	GoogleCloudDialogflowV2beta1Agent *shared.GoogleCloudDialogflowV2beta1Agent
	StatusCode                        int64
}
