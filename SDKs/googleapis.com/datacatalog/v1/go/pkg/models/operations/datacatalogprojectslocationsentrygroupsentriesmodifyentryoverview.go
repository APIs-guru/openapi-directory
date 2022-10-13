package operations

import (
	"openapi/pkg/models/shared"
)

type DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewQueryParams struct {
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

type DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest struct {
	PathParams  DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewPathParams
	QueryParams DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewQueryParams
	Request     *shared.GoogleCloudDatacatalogV1ModifyEntryOverviewRequest `request:"mediaType=application/json"`
	Security    DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity
}

type DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse struct {
	ContentType                           string
	GoogleCloudDatacatalogV1EntryOverview *shared.GoogleCloudDatacatalogV1EntryOverview
	StatusCode                            int64
}
