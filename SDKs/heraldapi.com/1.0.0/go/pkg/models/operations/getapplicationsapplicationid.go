package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationsApplicationIDPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetApplicationsApplicationID200ApplicationJSON struct {
	Application *shared.ApplicationReadV1 `json:"application,omitempty"`
}

type GetApplicationsApplicationIDRequest struct {
	PathParams GetApplicationsApplicationIDPathParams
}

type GetApplicationsApplicationIDResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetApplicationsApplicationID200ApplicationJSONObject *GetApplicationsApplicationID200ApplicationJSON
}
