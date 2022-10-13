package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrgResponse struct {
	ContentType string
	Error       *shared.Error
	OrgResponse *shared.OrgResponse
	StatusCode  int64
}
