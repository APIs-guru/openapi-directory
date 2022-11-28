package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsEntryGroupsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatacatalogProjectsLocationsEntryGroupsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EntryGroupID   *string           `queryParam:"style=form,explode=true,name=entryGroupId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatacatalogProjectsLocationsEntryGroupsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsEntryGroupsCreateRequest struct {
	PathParams  DatacatalogProjectsLocationsEntryGroupsCreatePathParams
	QueryParams DatacatalogProjectsLocationsEntryGroupsCreateQueryParams
	Request     *shared.GoogleCloudDatacatalogV1EntryGroupInput `request:"mediaType=application/json"`
	Security    DatacatalogProjectsLocationsEntryGroupsCreateSecurity
}

type DatacatalogProjectsLocationsEntryGroupsCreateResponse struct {
	ContentType                        string
	GoogleCloudDatacatalogV1EntryGroup *shared.GoogleCloudDatacatalogV1EntryGroup
	StatusCode                         int64
}
