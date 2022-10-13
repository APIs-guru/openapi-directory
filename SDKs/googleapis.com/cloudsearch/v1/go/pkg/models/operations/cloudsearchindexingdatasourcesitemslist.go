package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchIndexingDatasourcesItemsListPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchIndexingDatasourcesItemsListQueryParams struct {
	DollarXgafv                 *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                 *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                         *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Brief                       *bool             `queryParam:"style=form,explode=true,name=brief"`
	Callback                    *string           `queryParam:"style=form,explode=true,name=callback"`
	ConnectorName               *string           `queryParam:"style=form,explode=true,name=connectorName"`
	DebugOptionsEnableDebugging *bool             `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
	Fields                      *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                         *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                    *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                   *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                 *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                  *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol              *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchIndexingDatasourcesItemsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsListSecurity struct {
	Option1 *CloudsearchIndexingDatasourcesItemsListSecurityOption1 `security:"option"`
	Option2 *CloudsearchIndexingDatasourcesItemsListSecurityOption2 `security:"option"`
}

type CloudsearchIndexingDatasourcesItemsListRequest struct {
	PathParams  CloudsearchIndexingDatasourcesItemsListPathParams
	QueryParams CloudsearchIndexingDatasourcesItemsListQueryParams
	Security    CloudsearchIndexingDatasourcesItemsListSecurity
}

type CloudsearchIndexingDatasourcesItemsListResponse struct {
	ContentType       string
	ListItemsResponse *shared.ListItemsResponse
	StatusCode        int64
}
