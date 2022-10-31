package operations

import (
	"openapi/pkg/models/shared"
)

type CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum string

const (
	CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnumGatewayTypeUnspecified CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum = "GATEWAY_TYPE_UNSPECIFIED"
	CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnumGateway                CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum = "GATEWAY"
	CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnumNonGateway             CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum = "NON_GATEWAY"
)

type CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams struct {
	DollarXgafv                             *shared.XgafvEnum                                                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                             *string                                                                                `queryParam:"style=form,explode=true,name=access_token"`
	Alt                                     *shared.AltEnum                                                                        `queryParam:"style=form,explode=true,name=alt"`
	Callback                                *string                                                                                `queryParam:"style=form,explode=true,name=callback"`
	DeviceIds                               []string                                                                               `queryParam:"style=form,explode=true,name=deviceIds"`
	DeviceNumIds                            []string                                                                               `queryParam:"style=form,explode=true,name=deviceNumIds"`
	FieldMask                               *string                                                                                `queryParam:"style=form,explode=true,name=fieldMask"`
	Fields                                  *string                                                                                `queryParam:"style=form,explode=true,name=fields"`
	GatewayListOptionsAssociationsDeviceID  *string                                                                                `queryParam:"style=form,explode=true,name=gatewayListOptions.associationsDeviceId"`
	GatewayListOptionsAssociationsGatewayID *string                                                                                `queryParam:"style=form,explode=true,name=gatewayListOptions.associationsGatewayId"`
	GatewayListOptionsGatewayType           *CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum `queryParam:"style=form,explode=true,name=gatewayListOptions.gatewayType"`
	Key                                     *string                                                                                `queryParam:"style=form,explode=true,name=key"`
	OauthToken                              *string                                                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                                *int64                                                                                 `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                               *string                                                                                `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                             *bool                                                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                               *string                                                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                              *string                                                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                          *string                                                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity struct {
	Option1 *CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption1 `security:"option"`
	Option2 *CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurityOption2 `security:"option"`
}

type CloudiotProjectsLocationsRegistriesGroupsDevicesListRequest struct {
	PathParams  CloudiotProjectsLocationsRegistriesGroupsDevicesListPathParams
	QueryParams CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams
	Security    CloudiotProjectsLocationsRegistriesGroupsDevicesListSecurity
}

type CloudiotProjectsLocationsRegistriesGroupsDevicesListResponse struct {
	ContentType         string
	ListDevicesResponse *shared.ListDevicesResponse
	StatusCode          int64
}
