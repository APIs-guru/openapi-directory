package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentEnvironmentsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentEnvironmentsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentEnvironmentsListSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentEnvironmentsListRequest struct {
	PathParams  DialogflowProjectsLocationsAgentEnvironmentsListPathParams
	QueryParams DialogflowProjectsLocationsAgentEnvironmentsListQueryParams
	Security    DialogflowProjectsLocationsAgentEnvironmentsListSecurity
}

type DialogflowProjectsLocationsAgentEnvironmentsListResponse struct {
	ContentType                                     string
	GoogleCloudDialogflowV2ListEnvironmentsResponse *shared.GoogleCloudDialogflowV2ListEnvironmentsResponse
	StatusCode                                      int64
}
