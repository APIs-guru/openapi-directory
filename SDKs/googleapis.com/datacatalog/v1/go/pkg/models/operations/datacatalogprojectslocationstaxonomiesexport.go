package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsTaxonomiesExportPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatacatalogProjectsLocationsTaxonomiesExportQueryParams struct {
	DollarXgafv          *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken          *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                  *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback             *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields               *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                  *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken           *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SerializedTaxonomies *bool             `queryParam:"style=form,explode=true,name=serializedTaxonomies"`
	Taxonomies           []string          `queryParam:"style=form,explode=true,name=taxonomies"`
	UploadType           *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol       *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatacatalogProjectsLocationsTaxonomiesExportSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsTaxonomiesExportRequest struct {
	PathParams  DatacatalogProjectsLocationsTaxonomiesExportPathParams
	QueryParams DatacatalogProjectsLocationsTaxonomiesExportQueryParams
	Security    DatacatalogProjectsLocationsTaxonomiesExportSecurity
}

type DatacatalogProjectsLocationsTaxonomiesExportResponse struct {
	ContentType                                      string
	GoogleCloudDatacatalogV1ExportTaxonomiesResponse *shared.GoogleCloudDatacatalogV1ExportTaxonomiesResponse
	StatusCode                                       int64
}
