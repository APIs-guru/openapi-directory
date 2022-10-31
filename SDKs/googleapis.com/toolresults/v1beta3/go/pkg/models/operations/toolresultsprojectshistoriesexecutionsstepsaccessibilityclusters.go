package operations

import (
	"openapi/pkg/models/shared"
)

type ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Locale         *string           `queryParam:"style=form,explode=true,name=locale"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest struct {
	PathParams  ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams
	QueryParams ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams
	Security    ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity
}

type ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse struct {
	ContentType                           string
	ListStepAccessibilityClustersResponse *shared.ListStepAccessibilityClustersResponse
	StatusCode                            int64
}
