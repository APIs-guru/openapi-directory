package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsWorkerMessagesPathParams struct {
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsWorkerMessagesQueryParams struct {
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

type DataflowProjectsLocationsWorkerMessagesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsWorkerMessagesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsWorkerMessagesSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsWorkerMessagesSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsWorkerMessagesSecurity struct {
	Option1 *DataflowProjectsLocationsWorkerMessagesSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsWorkerMessagesSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsWorkerMessagesSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsWorkerMessagesSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsWorkerMessagesRequest struct {
	PathParams  DataflowProjectsLocationsWorkerMessagesPathParams
	QueryParams DataflowProjectsLocationsWorkerMessagesQueryParams
	Request     *shared.SendWorkerMessagesRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsWorkerMessagesSecurity
}

type DataflowProjectsLocationsWorkerMessagesResponse struct {
	ContentType                string
	SendWorkerMessagesResponse *shared.SendWorkerMessagesResponse
	StatusCode                 int64
}
