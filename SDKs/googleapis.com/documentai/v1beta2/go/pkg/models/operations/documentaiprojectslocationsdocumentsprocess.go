package operations

import (
	"openapi/pkg/models/shared"
)

type DocumentaiProjectsLocationsDocumentsProcessPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DocumentaiProjectsLocationsDocumentsProcessQueryParams struct {
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

type DocumentaiProjectsLocationsDocumentsProcessSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DocumentaiProjectsLocationsDocumentsProcessRequest struct {
	PathParams  DocumentaiProjectsLocationsDocumentsProcessPathParams
	QueryParams DocumentaiProjectsLocationsDocumentsProcessQueryParams
	Request     *shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest `request:"mediaType=application/json"`
	Security    DocumentaiProjectsLocationsDocumentsProcessSecurity
}

type DocumentaiProjectsLocationsDocumentsProcessResponse struct {
	ContentType                          string
	GoogleCloudDocumentaiV1beta2Document *shared.GoogleCloudDocumentaiV1beta2Document
	StatusCode                           int64
}
