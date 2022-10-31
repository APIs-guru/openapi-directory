package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchDebugDatasourcesItemsCheckAccessPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchDebugDatasourcesItemsCheckAccessQueryParams struct {
	DollarXgafv                 *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                 *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                         *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                    *string           `queryParam:"style=form,explode=true,name=callback"`
	DebugOptionsEnableDebugging *bool             `queryParam:"style=form,explode=true,name=debugOptions.enableDebugging"`
	Fields                      *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                         *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                 *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                  *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol              *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchDebugDatasourcesItemsCheckAccessSecurity struct {
	Option1 *CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1 `security:"option"`
	Option2 *CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2 `security:"option"`
}

type CloudsearchDebugDatasourcesItemsCheckAccessRequest struct {
	PathParams  CloudsearchDebugDatasourcesItemsCheckAccessPathParams
	QueryParams CloudsearchDebugDatasourcesItemsCheckAccessQueryParams
	Request     *shared.Principal `request:"mediaType=application/json"`
	Security    CloudsearchDebugDatasourcesItemsCheckAccessSecurity
}

type CloudsearchDebugDatasourcesItemsCheckAccessResponse struct {
	CheckAccessResponse *shared.CheckAccessResponse
	ContentType         string
	StatusCode          int64
}
