package operations

import (
	"openapi/pkg/models/shared"
)

type OsconfigProjectsLocationsInstancesInventoriesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type OsconfigProjectsLocationsInstancesInventoriesListViewEnum string

const (
	OsconfigProjectsLocationsInstancesInventoriesListViewEnumInventoryViewUnspecified OsconfigProjectsLocationsInstancesInventoriesListViewEnum = "INVENTORY_VIEW_UNSPECIFIED"
	OsconfigProjectsLocationsInstancesInventoriesListViewEnumBasic                    OsconfigProjectsLocationsInstancesInventoriesListViewEnum = "BASIC"
	OsconfigProjectsLocationsInstancesInventoriesListViewEnumFull                     OsconfigProjectsLocationsInstancesInventoriesListViewEnum = "FULL"
)

type OsconfigProjectsLocationsInstancesInventoriesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                    `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                                    `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                     `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                    `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *OsconfigProjectsLocationsInstancesInventoriesListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type OsconfigProjectsLocationsInstancesInventoriesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsconfigProjectsLocationsInstancesInventoriesListRequest struct {
	PathParams  OsconfigProjectsLocationsInstancesInventoriesListPathParams
	QueryParams OsconfigProjectsLocationsInstancesInventoriesListQueryParams
	Security    OsconfigProjectsLocationsInstancesInventoriesListSecurity
}

type OsconfigProjectsLocationsInstancesInventoriesListResponse struct {
	ContentType             string
	ListInventoriesResponse *shared.ListInventoriesResponse
	StatusCode              int64
}
