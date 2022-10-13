package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListQueryParams struct {
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

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListPathParams
	QueryParams DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListQueryParams
	Security    DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse struct {
	ContentType                                           string
	GoogleCloudDialogflowCxV3beta1ListExperimentsResponse *shared.GoogleCloudDialogflowCxV3beta1ListExperimentsResponse
	StatusCode                                            int64
}
