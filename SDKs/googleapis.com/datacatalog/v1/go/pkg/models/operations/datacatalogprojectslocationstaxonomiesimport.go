package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsTaxonomiesImportPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatacatalogProjectsLocationsTaxonomiesImportQueryParams struct {
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

type DatacatalogProjectsLocationsTaxonomiesImportSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsTaxonomiesImportRequest struct {
	PathParams  DatacatalogProjectsLocationsTaxonomiesImportPathParams
	QueryParams DatacatalogProjectsLocationsTaxonomiesImportQueryParams
	Request     *shared.GoogleCloudDatacatalogV1ImportTaxonomiesRequest `request:"mediaType=application/json"`
	Security    DatacatalogProjectsLocationsTaxonomiesImportSecurity
}

type DatacatalogProjectsLocationsTaxonomiesImportResponse struct {
	ContentType                                      string
	GoogleCloudDatacatalogV1ImportTaxonomiesResponse *shared.GoogleCloudDatacatalogV1ImportTaxonomiesResponse
	StatusCode                                       int64
}
