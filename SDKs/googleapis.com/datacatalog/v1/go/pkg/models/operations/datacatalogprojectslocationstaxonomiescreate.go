package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsTaxonomiesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatacatalogProjectsLocationsTaxonomiesCreateQueryParams struct {
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

type DatacatalogProjectsLocationsTaxonomiesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsTaxonomiesCreateRequest struct {
	PathParams  DatacatalogProjectsLocationsTaxonomiesCreatePathParams
	QueryParams DatacatalogProjectsLocationsTaxonomiesCreateQueryParams
	Request     *shared.GoogleCloudDatacatalogV1Taxonomy `request:"mediaType=application/json"`
	Security    DatacatalogProjectsLocationsTaxonomiesCreateSecurity
}

type DatacatalogProjectsLocationsTaxonomiesCreateResponse struct {
	ContentType                      string
	GoogleCloudDatacatalogV1Taxonomy *shared.GoogleCloudDatacatalogV1Taxonomy
	StatusCode                       int64
}
