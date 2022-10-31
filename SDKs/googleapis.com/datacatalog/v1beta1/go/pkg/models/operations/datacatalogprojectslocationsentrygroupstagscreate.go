package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams struct {
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

type DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest struct {
	PathParams  DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams
	QueryParams DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams
	Request     *shared.GoogleCloudDatacatalogV1beta1Tag `request:"mediaType=application/json"`
	Security    DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity
}

type DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse struct {
	ContentType                      string
	GoogleCloudDatacatalogV1beta1Tag *shared.GoogleCloudDatacatalogV1beta1Tag
	StatusCode                       int64
}
