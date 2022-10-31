package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsTemplatesCreatePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsTemplatesCreateQueryParams struct {
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

type DataflowProjectsTemplatesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsTemplatesCreateSecurity struct {
	Option1 *DataflowProjectsTemplatesCreateSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsTemplatesCreateSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsTemplatesCreateSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsTemplatesCreateSecurityOption4 `security:"option"`
}

type DataflowProjectsTemplatesCreateRequest struct {
	PathParams  DataflowProjectsTemplatesCreatePathParams
	QueryParams DataflowProjectsTemplatesCreateQueryParams
	Request     *shared.CreateJobFromTemplateRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsTemplatesCreateSecurity
}

type DataflowProjectsTemplatesCreateResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
