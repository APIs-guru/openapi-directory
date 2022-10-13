package operations

type ProductOfferingsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ProductOfferingsReadRequest struct {
	PathParams ProductOfferingsReadPathParams
}

type ProductOfferingsRead401ApplicationJSONTypeEnum string

const (
	ProductOfferingsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ProductOfferingsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ProductOfferingsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ProductOfferingsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ProductOfferingsRead401ApplicationJSON struct {
	Detail   *string                                        `json:"detail"`
	Instance *string                                        `json:"instance"`
	Status   *interface{}                                   `json:"status"`
	Title    *interface{}                                   `json:"title"`
	Type     ProductOfferingsRead401ApplicationJSONTypeEnum `json:"type"`
}

type ProductOfferingsRead403ApplicationJSONTypeEnum string

const (
	ProductOfferingsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ProductOfferingsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ProductOfferingsRead403ApplicationJSON struct {
	Detail   *string                                        `json:"detail"`
	Instance *string                                        `json:"instance"`
	Status   *interface{}                                   `json:"status"`
	Title    *interface{}                                   `json:"title"`
	Type     ProductOfferingsRead403ApplicationJSONTypeEnum `json:"type"`
}

type ProductOfferingsRead404ApplicationJSONTypeEnum string

const (
	ProductOfferingsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML ProductOfferingsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type ProductOfferingsRead404ApplicationJSON struct {
	Detail   *string                                        `json:"detail"`
	Instance *string                                        `json:"instance"`
	Status   *interface{}                                   `json:"status"`
	Title    *interface{}                                   `json:"title"`
	Type     ProductOfferingsRead404ApplicationJSONTypeEnum `json:"type"`
}

type ProductOfferingsReadResponse struct {
	ContentType                                  string
	ProductOffering                              *interface{}
	StatusCode                                   int64
	ProductOfferingsRead401ApplicationJSONObject *ProductOfferingsRead401ApplicationJSON
	ProductOfferingsRead403ApplicationJSONObject *ProductOfferingsRead403ApplicationJSON
	ProductOfferingsRead404ApplicationJSONObject *ProductOfferingsRead404ApplicationJSON
}
