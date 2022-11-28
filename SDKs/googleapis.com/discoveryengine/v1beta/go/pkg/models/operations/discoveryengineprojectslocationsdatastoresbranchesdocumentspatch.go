package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AllowMissing   *bool             `queryParam:"style=form,explode=true,name=allowMissing"`
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

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest struct {
	PathParams  DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams
	QueryParams DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams
	Request     *shared.GoogleCloudDiscoveryengineV1betaDocument `request:"mediaType=application/json"`
	Security    DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity
}

type DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse struct {
	ContentType                              string
	GoogleCloudDiscoveryengineV1betaDocument *shared.GoogleCloudDiscoveryengineV1betaDocument
	StatusCode                               int64
}
