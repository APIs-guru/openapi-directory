package operations

import (
	"openapi/pkg/models/shared"
)

type AuthTokenRefreshRequest struct {
	Request *shared.RefreshTokenRequest `request:"mediaType=application/json"`
}

type AuthTokenRefresh400ApplicationJSONTypeEnum string

const (
	AuthTokenRefresh400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML AuthTokenRefresh400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type AuthTokenRefresh400ApplicationJSON struct {
	Detail   *string                                    `json:"detail,omitempty"`
	Instance *string                                    `json:"instance,omitempty"`
	Status   *interface{}                               `json:"status,omitempty"`
	Title    *interface{}                               `json:"title,omitempty"`
	Type     AuthTokenRefresh400ApplicationJSONTypeEnum `json:"type"`
}

type AuthTokenRefresh401ApplicationJSONTypeEnum string

const (
	AuthTokenRefresh401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AuthTokenRefresh401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AuthTokenRefresh401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AuthTokenRefresh401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
	AuthTokenRefresh401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotAuthenticatedHTML    AuthTokenRefresh401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-authenticated.html"
)

type AuthTokenRefresh401ApplicationJSON struct {
	Detail   *string                                    `json:"detail,omitempty"`
	Instance *string                                    `json:"instance,omitempty"`
	Status   *interface{}                               `json:"status,omitempty"`
	Title    *interface{}                               `json:"title,omitempty"`
	Type     AuthTokenRefresh401ApplicationJSONTypeEnum `json:"type"`
}

type AuthTokenRefreshResponse struct {
	AuthToken                                *shared.AuthToken
	ContentType                              string
	StatusCode                               int64
	AuthTokenRefresh400ApplicationJSONObject *AuthTokenRefresh400ApplicationJSON
	AuthTokenRefresh401ApplicationJSONObject *AuthTokenRefresh401ApplicationJSON
}
