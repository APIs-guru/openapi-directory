package operations

import (
	"openapi/pkg/models/shared"
)

type CloudassetResourcesSearchAllPathParams struct {
	Scope string `pathParam:"style=simple,explode=false,name=scope"`
}

type CloudassetResourcesSearchAllQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AssetTypes     []string          `queryParam:"style=form,explode=true,name=assetTypes"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query          *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudassetResourcesSearchAllSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudassetResourcesSearchAllRequest struct {
	PathParams  CloudassetResourcesSearchAllPathParams
	QueryParams CloudassetResourcesSearchAllQueryParams
	Security    CloudassetResourcesSearchAllSecurity
}

type CloudassetResourcesSearchAllResponse struct {
	ContentType                string
	SearchAllResourcesResponse *shared.SearchAllResourcesResponse
	StatusCode                 int64
}
