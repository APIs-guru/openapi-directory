package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsFlexTemplatesLaunchPathParams struct {
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsFlexTemplatesLaunchQueryParams struct {
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

type DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsFlexTemplatesLaunchSecurity struct {
	Option1 *DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsFlexTemplatesLaunchRequest struct {
	PathParams  DataflowProjectsLocationsFlexTemplatesLaunchPathParams
	QueryParams DataflowProjectsLocationsFlexTemplatesLaunchQueryParams
	Request     *shared.LaunchFlexTemplateRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsFlexTemplatesLaunchSecurity
}

type DataflowProjectsLocationsFlexTemplatesLaunchResponse struct {
	ContentType                string
	LaunchFlexTemplateResponse *shared.LaunchFlexTemplateResponse
	StatusCode                 int64
}
