package operations

import (
	"openapi/pkg/models/shared"
)

type AuthTokenCreateRequest struct {
	Request *shared.AuthTokenRequest `request:"mediaType=application/json"`
}

type AuthTokenCreate400ApplicationJSONTypeEnum string

const (
	AuthTokenCreate400ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2ValidationErrorHTML AuthTokenCreate400ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/validation-error.html"
)

type AuthTokenCreate400ApplicationJSON struct {
	Detail   *string                                   `json:"detail"`
	Instance *string                                   `json:"instance"`
	Status   *interface{}                              `json:"status"`
	Title    *interface{}                              `json:"title"`
	Type     AuthTokenCreate400ApplicationJSONTypeEnum `json:"type"`
}

type AuthTokenCreate401ApplicationJSONTypeEnum string

const (
	AuthTokenCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML AuthTokenCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	AuthTokenCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    AuthTokenCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
	AuthTokenCreate401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotAuthenticatedHTML    AuthTokenCreate401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-authenticated.html"
)

type AuthTokenCreate401ApplicationJSON struct {
	Detail   *string                                   `json:"detail"`
	Instance *string                                   `json:"instance"`
	Status   *interface{}                              `json:"status"`
	Title    *interface{}                              `json:"title"`
	Type     AuthTokenCreate401ApplicationJSONTypeEnum `json:"type"`
}

type AuthTokenCreateResponse struct {
	AuthToken                               *shared.AuthToken
	ContentType                             string
	StatusCode                              int64
	AuthTokenCreate400ApplicationJSONObject *AuthTokenCreate400ApplicationJSON
	AuthTokenCreate401ApplicationJSONObject *AuthTokenCreate401ApplicationJSON
}
