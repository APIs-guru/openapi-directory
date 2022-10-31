package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1LocationsIDSettingsScopeSettingsScopePathParams struct {
	ID            string `pathParam:"style=simple,explode=false,name=id"`
	SettingsScope string `pathParam:"style=simple,explode=false,name=settingsScope"`
}

type PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest struct {
	PathParams PutSetupV1LocationsIDSettingsScopeSettingsScopePathParams
}

type PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse struct {
	ContentType       string
	LocationViewModel *shared.LocationViewModel
	StatusCode        int64
}
