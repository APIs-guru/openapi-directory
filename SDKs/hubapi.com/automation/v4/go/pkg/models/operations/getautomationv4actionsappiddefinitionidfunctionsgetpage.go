package operations

import (
	"openapi/pkg/models/shared"
)

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams struct {
	AppID        int32  `pathParam:"style=simple,explode=false,name=appId"`
	DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageRequest struct {
	PathParams GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPagePathParams
	Security   GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageSecurity
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsGetPageResponse struct {
	Body                                               []byte
	CollectionResponseActionFunctionIdentifierNoPaging *shared.CollectionResponseActionFunctionIdentifierNoPaging
	ContentType                                        string
	StatusCode                                         int64
}
