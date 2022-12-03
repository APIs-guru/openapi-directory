package operations

import (
	"openapi/pkg/models/shared"
)

type PutApplicationsApplicationIDPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type PutApplicationsApplicationID200ApplicationJSON struct {
	Application *shared.ApplicationReadV1 `json:"application,omitempty"`
}

type PutApplicationsApplicationIDRequest struct {
	PathParams PutApplicationsApplicationIDPathParams
	Request    *shared.ApplicationWriteV1 `request:"mediaType=application/json"`
}

type PutApplicationsApplicationIDResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	PutApplicationsApplicationID200ApplicationJSONObject *PutApplicationsApplicationID200ApplicationJSON
}
