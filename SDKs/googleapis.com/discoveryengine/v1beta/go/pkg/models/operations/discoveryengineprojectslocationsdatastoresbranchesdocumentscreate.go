package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	DocumentID     *string           `queryParam:"style=form,explode=true,name=documentId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest struct {
	PathParams  DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams
	QueryParams DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams
	Request     *shared.GoogleCloudDiscoveryengineV1betaDocument `request:"mediaType=application/json"`
	Security    DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse struct {
	ContentType                              string
	GoogleCloudDiscoveryengineV1betaDocument *shared.GoogleCloudDiscoveryengineV1betaDocument
	StatusCode                               int64
}
