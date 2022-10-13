package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentVersionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentVersionsCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentVersionsCreateSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentVersionsCreateRequest struct {
	PathParams  DialogflowProjectsLocationsAgentVersionsCreatePathParams
	QueryParams DialogflowProjectsLocationsAgentVersionsCreateQueryParams
	Request     *shared.GoogleCloudDialogflowV2Version `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentVersionsCreateSecurity
}

type DialogflowProjectsLocationsAgentVersionsCreateResponse struct {
	ContentType                    string
	GoogleCloudDialogflowV2Version *shared.GoogleCloudDialogflowV2Version
	StatusCode                     int64
}
