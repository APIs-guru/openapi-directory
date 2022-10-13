package operations

type NetworkServiceConfigsListTypeEnum string

const (
	NetworkServiceConfigsListTypeEnumExchangeLan NetworkServiceConfigsListTypeEnum = "exchange_lan"
	NetworkServiceConfigsListTypeEnumP2pVc       NetworkServiceConfigsListTypeEnum = "p2p_vc"
	NetworkServiceConfigsListTypeEnumP2mpVc      NetworkServiceConfigsListTypeEnum = "p2mp_vc"
	NetworkServiceConfigsListTypeEnumMp2mpVc     NetworkServiceConfigsListTypeEnum = "mp2mp_vc"
	NetworkServiceConfigsListTypeEnumCloudVc     NetworkServiceConfigsListTypeEnum = "cloud_vc"
)

type NetworkServiceConfigsListQueryParams struct {
	Capacity         *int64                             `queryParam:"style=form,explode=true,name=capacity"`
	Connection       *string                            `queryParam:"style=form,explode=true,name=connection"`
	ConsumingAccount *string                            `queryParam:"style=form,explode=true,name=consuming_account"`
	ExternalRef      *string                            `queryParam:"style=form,explode=true,name=external_ref"`
	ID               []string                           `queryParam:"style=form,explode=false,name=id"`
	InnerVlan        *int64                             `queryParam:"style=form,explode=true,name=inner_vlan"`
	ManagingAccount  *string                            `queryParam:"style=form,explode=true,name=managing_account"`
	NetworkService   *string                            `queryParam:"style=form,explode=true,name=network_service"`
	OuterVlan        *int64                             `queryParam:"style=form,explode=true,name=outer_vlan"`
	ProductOffering  *string                            `queryParam:"style=form,explode=true,name=product_offering"`
	State            *string                            `queryParam:"style=form,explode=true,name=state"`
	StateIsNot       *string                            `queryParam:"style=form,explode=true,name=state__is_not"`
	Type             *NetworkServiceConfigsListTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type NetworkServiceConfigsListRequest struct {
	QueryParams NetworkServiceConfigsListQueryParams
}

type NetworkServiceConfigsList400ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServiceConfigsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServiceConfigsList400ApplicationJSON struct {
	Detail   *string                                             `json:"detail"`
	Instance *string                                             `json:"instance"`
	Status   *interface{}                                        `json:"status"`
	Title    *interface{}                                        `json:"title"`
	Type     NetworkServiceConfigsList400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsList401ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServiceConfigsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServiceConfigsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServiceConfigsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServiceConfigsList401ApplicationJSON struct {
	Detail   *string                                             `json:"detail"`
	Instance *string                                             `json:"instance"`
	Status   *interface{}                                        `json:"status"`
	Title    *interface{}                                        `json:"title"`
	Type     NetworkServiceConfigsList401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsList403ApplicationJSONTypeEnum string

const (
	NetworkServiceConfigsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServiceConfigsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServiceConfigsList403ApplicationJSON struct {
	Detail   *string                                             `json:"detail"`
	Instance *string                                             `json:"instance"`
	Status   *interface{}                                        `json:"status"`
	Title    *interface{}                                        `json:"title"`
	Type     NetworkServiceConfigsList403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServiceConfigsListResponse struct {
	ContentType                                       string
	NetworkServiceConfigs                             []interface{}
	StatusCode                                        int64
	NetworkServiceConfigsList400ApplicationJSONObject *NetworkServiceConfigsList400ApplicationJSON
	NetworkServiceConfigsList401ApplicationJSONObject *NetworkServiceConfigsList401ApplicationJSON
	NetworkServiceConfigsList403ApplicationJSONObject *NetworkServiceConfigsList403ApplicationJSON
}
