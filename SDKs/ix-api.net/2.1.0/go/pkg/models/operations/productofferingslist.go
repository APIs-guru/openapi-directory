package operations

type ProductOfferingsListDeliveryMethodEnum string

const (
	ProductOfferingsListDeliveryMethodEnumDedicated ProductOfferingsListDeliveryMethodEnum = "dedicated"
	ProductOfferingsListDeliveryMethodEnumShared    ProductOfferingsListDeliveryMethodEnum = "shared"
)

type ProductOfferingsListDowngradeAllowedEnum string

const (
	ProductOfferingsListDowngradeAllowedEnumTrue ProductOfferingsListDowngradeAllowedEnum = "true"
)

type ProductOfferingsListTypeEnum string

const (
	ProductOfferingsListTypeEnumExchangeLan ProductOfferingsListTypeEnum = "exchange_lan"
	ProductOfferingsListTypeEnumP2pVc       ProductOfferingsListTypeEnum = "p2p_vc"
	ProductOfferingsListTypeEnumMp2mpVc     ProductOfferingsListTypeEnum = "mp2mp_vc"
	ProductOfferingsListTypeEnumP2mpVc      ProductOfferingsListTypeEnum = "p2mp_vc"
	ProductOfferingsListTypeEnumCloudVc     ProductOfferingsListTypeEnum = "cloud_vc"
)

type ProductOfferingsListUpgradeAllowedEnum string

const (
	ProductOfferingsListUpgradeAllowedEnumTrue  ProductOfferingsListUpgradeAllowedEnum = "true"
	ProductOfferingsListUpgradeAllowedEnumFalse ProductOfferingsListUpgradeAllowedEnum = "false"
)

type ProductOfferingsListQueryParams struct {
	Bandwidth                *int64                                    `queryParam:"style=form,explode=true,name=bandwidth"`
	CloudKey                 *string                                   `queryParam:"style=form,explode=true,name=cloud_key"`
	DeliveryMethod           *ProductOfferingsListDeliveryMethodEnum   `queryParam:"style=form,explode=true,name=delivery_method"`
	DowngradeAllowed         *ProductOfferingsListDowngradeAllowedEnum `queryParam:"style=form,explode=true,name=downgrade_allowed"`
	Fields                   *string                                   `queryParam:"style=form,explode=true,name=fields"`
	HandoverMetroArea        *string                                   `queryParam:"style=form,explode=true,name=handover_metro_area"`
	HandoverMetroAreaNetwork *string                                   `queryParam:"style=form,explode=true,name=handover_metro_area_network"`
	ID                       []string                                  `queryParam:"style=form,explode=false,name=id"`
	Name                     *string                                   `queryParam:"style=form,explode=true,name=name"`
	PhysicalPortSpeed        *int64                                    `queryParam:"style=form,explode=true,name=physical_port_speed"`
	ServiceMetroArea         *string                                   `queryParam:"style=form,explode=true,name=service_metro_area"`
	ServiceMetroAreaNetwork  *string                                   `queryParam:"style=form,explode=true,name=service_metro_area_network"`
	ServiceProvider          *string                                   `queryParam:"style=form,explode=true,name=service_provider"`
	ServiceProviderPop       *string                                   `queryParam:"style=form,explode=true,name=service_provider_pop"`
	ServiceProviderRegion    *string                                   `queryParam:"style=form,explode=true,name=service_provider_region"`
	Type                     *ProductOfferingsListTypeEnum             `queryParam:"style=form,explode=true,name=type"`
	UpgradeAllowed           *ProductOfferingsListUpgradeAllowedEnum   `queryParam:"style=form,explode=true,name=upgrade_allowed"`
}

type ProductOfferingsListRequest struct {
	QueryParams ProductOfferingsListQueryParams
}

type ProductOfferingsList400ApplicationJSONTypeEnum string

const (
	ProductOfferingsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML ProductOfferingsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type ProductOfferingsList400ApplicationJSON struct {
	Detail   *string                                        `json:"detail,omitempty"`
	Instance *string                                        `json:"instance,omitempty"`
	Status   *interface{}                                   `json:"status,omitempty"`
	Title    *interface{}                                   `json:"title,omitempty"`
	Type     ProductOfferingsList400ApplicationJSONTypeEnum `json:"type"`
}

type ProductOfferingsList401ApplicationJSONTypeEnum string

const (
	ProductOfferingsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ProductOfferingsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ProductOfferingsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ProductOfferingsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ProductOfferingsList401ApplicationJSON struct {
	Detail   *string                                        `json:"detail,omitempty"`
	Instance *string                                        `json:"instance,omitempty"`
	Status   *interface{}                                   `json:"status,omitempty"`
	Title    *interface{}                                   `json:"title,omitempty"`
	Type     ProductOfferingsList401ApplicationJSONTypeEnum `json:"type"`
}

type ProductOfferingsList403ApplicationJSONTypeEnum string

const (
	ProductOfferingsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ProductOfferingsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ProductOfferingsList403ApplicationJSON struct {
	Detail   *string                                        `json:"detail,omitempty"`
	Instance *string                                        `json:"instance,omitempty"`
	Status   *interface{}                                   `json:"status,omitempty"`
	Title    *interface{}                                   `json:"title,omitempty"`
	Type     ProductOfferingsList403ApplicationJSONTypeEnum `json:"type"`
}

type ProductOfferingsListResponse struct {
	ContentType                                  string
	ProductOfferingPartials                      []interface{}
	StatusCode                                   int64
	ProductOfferingsList400ApplicationJSONObject *ProductOfferingsList400ApplicationJSON
	ProductOfferingsList401ApplicationJSONObject *ProductOfferingsList401ApplicationJSON
	ProductOfferingsList403ApplicationJSONObject *ProductOfferingsList403ApplicationJSON
}
