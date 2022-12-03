package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstitutions200ApplicationJSON struct {
	Institutions []shared.InstitutionV1 `json:"institutions,omitempty"`
}

type GetInstitutionsResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetInstitutions200ApplicationJSONObject *GetInstitutions200ApplicationJSON
}
