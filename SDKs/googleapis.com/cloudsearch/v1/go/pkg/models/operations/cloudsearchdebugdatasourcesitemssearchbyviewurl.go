package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchDebugDatasourcesItemsSearchByViewURLPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchDebugDatasourcesItemsSearchByViewURLQueryParams struct {
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

type CloudsearchDebugDatasourcesItemsSearchByViewURLSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchDebugDatasourcesItemsSearchByViewURLSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchDebugDatasourcesItemsSearchByViewURLSecurity struct {
	Option1 *CloudsearchDebugDatasourcesItemsSearchByViewURLSecurityOption1 `security:"option"`
	Option2 *CloudsearchDebugDatasourcesItemsSearchByViewURLSecurityOption2 `security:"option"`
}

type CloudsearchDebugDatasourcesItemsSearchByViewURLRequest struct {
	PathParams  CloudsearchDebugDatasourcesItemsSearchByViewURLPathParams
	QueryParams CloudsearchDebugDatasourcesItemsSearchByViewURLQueryParams
	Request     *shared.SearchItemsByViewURLRequest `request:"mediaType=application/json"`
	Security    CloudsearchDebugDatasourcesItemsSearchByViewURLSecurity
}

type CloudsearchDebugDatasourcesItemsSearchByViewURLResponse struct {
	ContentType                  string
	SearchItemsByViewURLResponse *shared.SearchItemsByViewURLResponse
	StatusCode                   int64
}
