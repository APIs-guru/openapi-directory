package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsTemplatesCreatePathParams struct {
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsTemplatesCreateQueryParams struct {
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

type DataflowProjectsLocationsTemplatesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsTemplatesCreateSecurity struct {
	Option1 *DataflowProjectsLocationsTemplatesCreateSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsTemplatesCreateSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsTemplatesCreateSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsTemplatesCreateSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsTemplatesCreateRequest struct {
	PathParams  DataflowProjectsLocationsTemplatesCreatePathParams
	QueryParams DataflowProjectsLocationsTemplatesCreateQueryParams
	Request     *shared.CreateJobFromTemplateRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsTemplatesCreateSecurity
}

type DataflowProjectsLocationsTemplatesCreateResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
