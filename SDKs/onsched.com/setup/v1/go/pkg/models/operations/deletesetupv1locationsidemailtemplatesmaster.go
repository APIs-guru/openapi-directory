package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1LocationsIDEmailTemplatesMasterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1LocationsIDEmailTemplatesMasterRequest struct {
	PathParams DeleteSetupV1LocationsIDEmailTemplatesMasterPathParams
}

type DeleteSetupV1LocationsIDEmailTemplatesMasterResponse struct {
	ContentType                          string
	MasterEmailTemplateSettingsViewModel *shared.MasterEmailTemplateSettingsViewModel
	StatusCode                           int64
}
