package operations

type NetworkFeatureConfigsListTypeEnum string

const (
	NetworkFeatureConfigsListTypeEnumRouteServer NetworkFeatureConfigsListTypeEnum = "route_server"
)

type NetworkFeatureConfigsListQueryParams struct {
	ConsumingAccount *string                            `queryParam:"style=form,explode=true,name=consuming_account"`
	ExternalRef      *string                            `queryParam:"style=form,explode=true,name=external_ref"`
	ID               []string                           `queryParam:"style=form,explode=false,name=id"`
	ManagingAccount  *string                            `queryParam:"style=form,explode=true,name=managing_account"`
	NetworkFeature   *string                            `queryParam:"style=form,explode=true,name=network_feature"`
	ServiceConfig    *string                            `queryParam:"style=form,explode=true,name=service_config"`
	State            *string                            `queryParam:"style=form,explode=true,name=state"`
	StateIsNot       *string                            `queryParam:"style=form,explode=true,name=state__is_not"`
	Type             *NetworkFeatureConfigsListTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type NetworkFeatureConfigsListRequest struct {
	QueryParams NetworkFeatureConfigsListQueryParams
}

type NetworkFeatureConfigsList400ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsList400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML NetworkFeatureConfigsList400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type NetworkFeatureConfigsList400ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     NetworkFeatureConfigsList400ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsList401ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeatureConfigsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeatureConfigsList401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeatureConfigsList401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeatureConfigsList401ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     NetworkFeatureConfigsList401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsList403ApplicationJSONTypeEnum string

const (
	NetworkFeatureConfigsList403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeatureConfigsList403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeatureConfigsList403ApplicationJSON struct {
	Detail   *string                                             `json:"detail,omitempty"`
	Instance *string                                             `json:"instance,omitempty"`
	Status   *interface{}                                        `json:"status,omitempty"`
	Title    *interface{}                                        `json:"title,omitempty"`
	Type     NetworkFeatureConfigsList403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeatureConfigsListResponse struct {
	ContentType                                       string
	NetworkFeatureConfigs                             []interface{}
	StatusCode                                        int64
	NetworkFeatureConfigsList400ApplicationJSONObject *NetworkFeatureConfigsList400ApplicationJSON
	NetworkFeatureConfigsList401ApplicationJSONObject *NetworkFeatureConfigsList401ApplicationJSON
	NetworkFeatureConfigsList403ApplicationJSONObject *NetworkFeatureConfigsList403ApplicationJSON
}
