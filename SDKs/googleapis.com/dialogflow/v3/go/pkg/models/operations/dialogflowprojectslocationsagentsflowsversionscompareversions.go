package operations

import (
	"openapi/pkg/models/shared"
)

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams struct {
	BaseVersion string `pathParam:"style=simple,explode=false,name=baseVersion"`
}

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams struct {
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

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity struct {
	Option1 *DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1 `security:"option"`
	Option2 *DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2 `security:"option"`
}

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest struct {
	PathParams  DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams
	QueryParams DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams
	Request     *shared.GoogleCloudDialogflowCxV3CompareVersionsRequest `request:"mediaType=application/json"`
	Security    DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity
}

type DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse struct {
	ContentType                                      string
	GoogleCloudDialogflowCxV3CompareVersionsResponse *shared.GoogleCloudDialogflowCxV3CompareVersionsResponse
	StatusCode                                       int64
}
