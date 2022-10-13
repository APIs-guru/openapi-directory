package operations

import (
	"openapi/pkg/models/shared"
)

type ToolresultsProjectsHistoriesCreatePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ToolresultsProjectsHistoriesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ToolresultsProjectsHistoriesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ToolresultsProjectsHistoriesCreateRequest struct {
	PathParams  ToolresultsProjectsHistoriesCreatePathParams
	QueryParams ToolresultsProjectsHistoriesCreateQueryParams
	Request     *shared.History `request:"mediaType=application/json"`
	Security    ToolresultsProjectsHistoriesCreateSecurity
}

type ToolresultsProjectsHistoriesCreateResponse struct {
	ContentType string
	History     *shared.History
	StatusCode  int64
}
