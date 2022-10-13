package operations

type NetworkFeaturesReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type NetworkFeaturesReadRequest struct {
	PathParams NetworkFeaturesReadPathParams
}

type NetworkFeaturesRead401ApplicationJSONTypeEnum string

const (
	NetworkFeaturesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML NetworkFeaturesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	NetworkFeaturesRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    NetworkFeaturesRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type NetworkFeaturesRead401ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkFeaturesRead401ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeaturesRead403ApplicationJSONTypeEnum string

const (
	NetworkFeaturesRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML NetworkFeaturesRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type NetworkFeaturesRead403ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkFeaturesRead403ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeaturesRead404ApplicationJSONTypeEnum string

const (
	NetworkFeaturesRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML NetworkFeaturesRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type NetworkFeaturesRead404ApplicationJSON struct {
	Detail   *string                                       `json:"detail"`
	Instance *string                                       `json:"instance"`
	Status   *interface{}                                  `json:"status"`
	Title    *interface{}                                  `json:"title"`
	Type     NetworkFeaturesRead404ApplicationJSONTypeEnum `json:"type"`
}

type NetworkFeaturesReadResponse struct {
	ContentType                                 string
	NetworkFeature                              *interface{}
	StatusCode                                  int64
	NetworkFeaturesRead401ApplicationJSONObject *NetworkFeaturesRead401ApplicationJSON
	NetworkFeaturesRead403ApplicationJSONObject *NetworkFeaturesRead403ApplicationJSON
	NetworkFeaturesRead404ApplicationJSONObject *NetworkFeaturesRead404ApplicationJSON
}
