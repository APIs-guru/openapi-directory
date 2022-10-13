package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsFlowsPagesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesListSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsFlowsPagesListRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsFlowsPagesListPathParams
	QueryParams DialogflowProjectsLocationsAgentsFlowsPagesListQueryParams
	Security    DialogflowProjectsLocationsAgentsFlowsPagesListSecurity
}

type DialogflowProjectsLocationsAgentsFlowsPagesListResponse struct {
	ContentType                                     string
	GoogleCloudDialogflowCxV3beta1ListPagesResponse *shared.GoogleCloudDialogflowCxV3beta1ListPagesResponse
	StatusCode                                      int64
}
