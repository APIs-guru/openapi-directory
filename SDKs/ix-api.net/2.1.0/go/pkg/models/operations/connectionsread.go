package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsReadPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ConnectionsReadRequest struct {
	PathParams ConnectionsReadPathParams
}

type ConnectionsRead401ApplicationJSONTypeEnum string

const (
	ConnectionsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2AuthenticationErrorHTML ConnectionsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/authentication-error.html"
	ConnectionsRead401ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2SignatureExpiredHTML    ConnectionsRead401ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/signature-expired.html"
)

type ConnectionsRead401ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ConnectionsRead401ApplicationJSONTypeEnum `json:"type"`
}

type ConnectionsRead403ApplicationJSONTypeEnum string

const (
	ConnectionsRead403ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2PermissionDeniedHTML ConnectionsRead403ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/permission-denied.html"
)

type ConnectionsRead403ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ConnectionsRead403ApplicationJSONTypeEnum `json:"type"`
}

type ConnectionsRead404ApplicationJSONTypeEnum string

const (
	ConnectionsRead404ApplicationJSONTypeEnumHTTPSErrorsIxAPINetV2NotFoundHTML ConnectionsRead404ApplicationJSONTypeEnum = "https://errors.ix-api.net/v2/not-found.html"
)

type ConnectionsRead404ApplicationJSON struct {
	Detail   *string                                   `json:"detail,omitempty"`
	Instance *string                                   `json:"instance,omitempty"`
	Status   *interface{}                              `json:"status,omitempty"`
	Title    *interface{}                              `json:"title,omitempty"`
	Type     ConnectionsRead404ApplicationJSONTypeEnum `json:"type"`
}

type ConnectionsReadResponse struct {
	Connection                              *shared.Connection
	ContentType                             string
	StatusCode                              int64
	ConnectionsRead401ApplicationJSONObject *ConnectionsRead401ApplicationJSON
	ConnectionsRead403ApplicationJSONObject *ConnectionsRead403ApplicationJSON
	ConnectionsRead404ApplicationJSONObject *ConnectionsRead404ApplicationJSON
}
