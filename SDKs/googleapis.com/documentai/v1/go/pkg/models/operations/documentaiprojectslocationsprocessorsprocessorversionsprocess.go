package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams struct {
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

type DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest struct {
	PathParams  DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams
	QueryParams DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams
	Request     *shared.GoogleCloudDocumentaiV1ProcessRequest `request:"mediaType=application/json"`
	Security    DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity
}

type DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse struct {
	ContentType                            string
	GoogleCloudDocumentaiV1ProcessResponse *shared.GoogleCloudDocumentaiV1ProcessResponse
	StatusCode                             int64
}
