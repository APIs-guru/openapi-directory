package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams struct {
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

type DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest struct {
	PathParams  DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams
	QueryParams DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams
	Security    DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity
}

type DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse struct {
	ContentType         string
	GoogleProtobufEmpty map[string]interface{}
	StatusCode          int64
}
