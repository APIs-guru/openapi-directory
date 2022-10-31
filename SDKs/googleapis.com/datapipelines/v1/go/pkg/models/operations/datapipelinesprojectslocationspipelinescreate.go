package operations

import (
	"openapi/pkg/models/shared"
)

type DatapipelinesProjectsLocationsPipelinesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatapipelinesProjectsLocationsPipelinesCreateQueryParams struct {
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

type DatapipelinesProjectsLocationsPipelinesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatapipelinesProjectsLocationsPipelinesCreateRequest struct {
	PathParams  DatapipelinesProjectsLocationsPipelinesCreatePathParams
	QueryParams DatapipelinesProjectsLocationsPipelinesCreateQueryParams
	Request     *shared.GoogleCloudDatapipelinesV1Pipeline `request:"mediaType=application/json"`
	Security    DatapipelinesProjectsLocationsPipelinesCreateSecurity
}

type DatapipelinesProjectsLocationsPipelinesCreateResponse struct {
	ContentType                        string
	GoogleCloudDatapipelinesV1Pipeline *shared.GoogleCloudDatapipelinesV1Pipeline
	StatusCode                         int64
}
