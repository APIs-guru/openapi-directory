package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Conditions     *string           `queryParam:"style=form,explode=true,name=conditions"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SortBy         []string          `queryParam:"style=form,explode=true,name=sortBy"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest struct {
	PathParams  ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListPathParams
	QueryParams ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListQueryParams
	Security    ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListSecurity
}

type ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse struct {
	ContentType          string
	ListEntitiesResponse *shared.ListEntitiesResponse
	StatusCode           int64
}
