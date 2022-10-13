package operations

import (
	"openapi/pkg/models/shared"
)

type PostAutomationV4ActionsAppIDCreatePathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type PostAutomationV4ActionsAppIDCreateSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostAutomationV4ActionsAppIDCreateRequest struct {
	PathParams PostAutomationV4ActionsAppIDCreatePathParams
	Request    shared.ExtensionActionDefinitionInput `request:"mediaType=application/json"`
	Security   PostAutomationV4ActionsAppIDCreateSecurity
}

type PostAutomationV4ActionsAppIDCreateResponse struct {
	Body                      []byte
	ContentType               string
	ExtensionActionDefinition *shared.ExtensionActionDefinition
	StatusCode                int64
}
