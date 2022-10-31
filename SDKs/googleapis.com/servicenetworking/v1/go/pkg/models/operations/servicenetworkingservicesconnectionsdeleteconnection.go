package operations

import (
	"openapi/pkg/models/shared"
)

type ServicenetworkingServicesConnectionsDeleteConnectionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServicenetworkingServicesConnectionsDeleteConnectionQueryParams struct {
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

type ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServicenetworkingServicesConnectionsDeleteConnectionSecurity struct {
	Option1 *ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1 `security:"option"`
	Option2 *ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption2 `security:"option"`
}

type ServicenetworkingServicesConnectionsDeleteConnectionRequest struct {
	PathParams  ServicenetworkingServicesConnectionsDeleteConnectionPathParams
	QueryParams ServicenetworkingServicesConnectionsDeleteConnectionQueryParams
	Request     *shared.DeleteConnectionRequest `request:"mediaType=application/json"`
	Security    ServicenetworkingServicesConnectionsDeleteConnectionSecurity
}

type ServicenetworkingServicesConnectionsDeleteConnectionResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
