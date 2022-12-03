package operations

import (
	"openapi/pkg/models/shared"
)

type PostApplications200ApplicationJSON struct {
	Application *shared.ApplicationReadV1 `json:"application,omitempty"`
}

type PostApplicationsRequest struct {
	Request *shared.ApplicationWriteV1 `request:"mediaType=application/json"`
}

type PostApplicationsResponse struct {
	ContentType                              string
	StatusCode                               int64
	PostApplications200ApplicationJSONObject *PostApplications200ApplicationJSON
}
