package operations

type NetworkFeaturesListTypeEnum string

const (
	NetworkFeaturesListTypeEnumRouteServer NetworkFeaturesListTypeEnum = "route_server"
)

type NetworkFeaturesListQueryParams struct {
	ID             []string                     `queryParam:"style=form,explode=false,name=id"`
	Name           *string                      `queryParam:"style=form,explode=true,name=name"`
	NetworkService *string                      `queryParam:"style=form,explode=true,name=network_service"`
	Required       *string                      `queryParam:"style=form,explode=true,name=required"`
	Type           *NetworkFeaturesListTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type NetworkFeaturesListRequest struct {
	QueryParams NetworkFeaturesListQueryParams
}

type NetworkFeaturesList400ApplicationJSONTypeEnum string

const (
	NetworkFeaturesList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkFeaturesList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkFeaturesList400ApplicationJSON struct {
	Detail   *string                                       `json:"detail,omitempty"`
	Instance *string                                       `json:"instance,omitempty"`
	Status   *interface{}                                  `json:"status,omitempty"`
	Title    *interface{}                                  `json:"title,omitempty"`
	Type     NetworkFeaturesList400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeaturesList401ApplicationJSONTypeEnum string

const (
	NetworkFeaturesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeaturesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeaturesList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeaturesList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeaturesList401ApplicationJSON struct {
	Detail   *string                                       `json:"detail,omitempty"`
	Instance *string                                       `json:"instance,omitempty"`
	Status   *interface{}                                  `json:"status,omitempty"`
	Title    *interface{}                                  `json:"title,omitempty"`
	Type     NetworkFeaturesList401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeaturesList403ApplicationJSONTypeEnum string

const (
	NetworkFeaturesList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeaturesList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeaturesList403ApplicationJSON struct {
	Detail   *string                                       `json:"detail,omitempty"`
	Instance *string                                       `json:"instance,omitempty"`
	Status   *interface{}                                  `json:"status,omitempty"`
	Title    *interface{}                                  `json:"title,omitempty"`
	Type     NetworkFeaturesList403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeaturesListResponse struct {
	ContentType                                 string
	NetworkFeatures                             []interface{}
	StatusCode                                  int64
	NetworkFeaturesList400ApplicationJSONObject *NetworkFeaturesList400ApplicationJSON
	NetworkFeaturesList401ApplicationJSONObject *NetworkFeaturesList401ApplicationJSON
	NetworkFeaturesList403ApplicationJSONObject *NetworkFeaturesList403ApplicationJSON
}
