package operations

type NetworkServicesListTypeEnum string

const (
	NetworkServicesListTypeEnumExchangeLan NetworkServicesListTypeEnum = "exchange_lan"
	NetworkServicesListTypeEnumP2pVc       NetworkServicesListTypeEnum = "p2p_vc"
	NetworkServicesListTypeEnumP2mpVc      NetworkServicesListTypeEnum = "p2mp_vc"
	NetworkServicesListTypeEnumMp2mpVc     NetworkServicesListTypeEnum = "mp2mp_vc"
	NetworkServicesListTypeEnumCloudVc     NetworkServicesListTypeEnum = "cloud_vc"
)

type NetworkServicesListQueryParams struct {
	ConsumingAccount *string                      `queryParam:"style=form,explode=true,name=consuming_account"`
	ExternalRef      *string                      `queryParam:"style=form,explode=true,name=external_ref"`
	ID               []string                     `queryParam:"style=form,explode=false,name=id"`
	ManagingAccount  *string                      `queryParam:"style=form,explode=true,name=managing_account"`
	Pop              *string                      `queryParam:"style=form,explode=true,name=pop"`
	ProductOffering  *string                      `queryParam:"style=form,explode=true,name=product_offering"`
	State            *string                      `queryParam:"style=form,explode=true,name=state"`
	StateIsNot       *string                      `queryParam:"style=form,explode=true,name=state__is_not"`
	Type             *NetworkServicesListTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type NetworkServicesListRequest struct {
	QueryParams NetworkServicesListQueryParams
}

type NetworkServicesList400ApplicationJSONTypeEnum string

const (
	NetworkServicesList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkServicesList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkServicesList400ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkServicesList400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesList401ApplicationJSONTypeEnum string

const (
	NetworkServicesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkServicesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkServicesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkServicesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkServicesList401ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkServicesList401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesList403ApplicationJSONTypeEnum string

const (
	NetworkServicesList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkServicesList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkServicesList403ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkServicesList403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkServicesListResponse struct {
	ContentType                                 string
	NetworkServices                             []interface{}
	StatusCode                                  int64
	NetworkServicesList400ApplicationJSONObject *NetworkServicesList400ApplicationJSON
	NetworkServicesList401ApplicationJSONObject *NetworkServicesList401ApplicationJSON
	NetworkServicesList403ApplicationJSONObject *NetworkServicesList403ApplicationJSON
}
