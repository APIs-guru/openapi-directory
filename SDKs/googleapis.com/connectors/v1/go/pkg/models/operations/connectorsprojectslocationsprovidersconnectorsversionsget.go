package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum string

const (
	ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnumConnectorVersionViewUnspecified ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum = "CONNECTOR_VERSION_VIEW_UNSPECIFIED"
	ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnumConnectorVersionViewBasic       ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum = "CONNECTOR_VERSION_VIEW_BASIC"
	ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnumConnectorVersionViewFull        ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum = "CONNECTOR_VERSION_VIEW_FULL"
)

type ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                            `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest struct {
	PathParams  ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams
	QueryParams ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams
	Security    ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity
}

type ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse struct {
	ConnectorVersion *shared.ConnectorVersion
	ContentType      string
	StatusCode       int64
}
