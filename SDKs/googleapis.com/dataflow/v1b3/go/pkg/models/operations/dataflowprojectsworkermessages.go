package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsWorkerMessagesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsWorkerMessagesQueryParams struct {
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

type DataflowProjectsWorkerMessagesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsWorkerMessagesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsWorkerMessagesSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsWorkerMessagesSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsWorkerMessagesSecurity struct {
	Option1 *DataflowProjectsWorkerMessagesSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsWorkerMessagesSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsWorkerMessagesSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsWorkerMessagesSecurityOption4 `security:"option"`
}

type DataflowProjectsWorkerMessagesRequest struct {
	PathParams  DataflowProjectsWorkerMessagesPathParams
	QueryParams DataflowProjectsWorkerMessagesQueryParams
	Request     *shared.SendWorkerMessagesRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsWorkerMessagesSecurity
}

type DataflowProjectsWorkerMessagesResponse struct {
	ContentType                string
	SendWorkerMessagesResponse *shared.SendWorkerMessagesResponse
	StatusCode                 int64
}
