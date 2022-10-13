package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1LocationsIDEmailTemplatesMasterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1LocationsIDEmailTemplatesMasterRequest struct {
	PathParams GetSetupV1LocationsIDEmailTemplatesMasterPathParams
}

type GetSetupV1LocationsIDEmailTemplatesMasterResponse struct {
	ContentType                          string
	MasterEmailTemplateSettingsViewModel *shared.MasterEmailTemplateSettingsViewModel
	StatusCode                           int64
}
