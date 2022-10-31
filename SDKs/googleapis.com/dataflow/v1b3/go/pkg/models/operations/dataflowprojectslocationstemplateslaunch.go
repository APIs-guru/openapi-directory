package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsTemplatesLaunchPathParams struct {
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsTemplatesLaunchQueryParams struct {
	DollarXgafv                    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                       *string           `queryParam:"style=form,explode=true,name=callback"`
	DynamicTemplateGcsPath         *string           `queryParam:"style=form,explode=true,name=dynamicTemplate.gcsPath"`
	DynamicTemplateStagingLocation *string           `queryParam:"style=form,explode=true,name=dynamicTemplate.stagingLocation"`
	Fields                         *string           `queryParam:"style=form,explode=true,name=fields"`
	GcsPath                        *string           `queryParam:"style=form,explode=true,name=gcsPath"`
	Key                            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                 *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	ValidateOnly                   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
}

type DataflowProjectsLocationsTemplatesLaunchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesLaunchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesLaunchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesLaunchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesLaunchSecurity struct {
	Option1 *DataflowProjectsLocationsTemplatesLaunchSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsTemplatesLaunchSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsTemplatesLaunchSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsTemplatesLaunchSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsTemplatesLaunchRequest struct {
	PathParams  DataflowProjectsLocationsTemplatesLaunchPathParams
	QueryParams DataflowProjectsLocationsTemplatesLaunchQueryParams
	Request     *shared.LaunchTemplateParameters `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsTemplatesLaunchSecurity
}

type DataflowProjectsLocationsTemplatesLaunchResponse struct {
	ContentType            string
	LaunchTemplateResponse *shared.LaunchTemplateResponse
	StatusCode             int64
}
