package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams struct {
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

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryPathParams
	QueryParams DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryQueryParams
	Security    DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistorySecurity
}

type DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse struct {
	ContentType                                               string
	GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse *shared.GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse
	StatusCode                                                int64
}
