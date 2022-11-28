package operations

import (
	"openapi/pkg/models/shared"
)

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams struct {
	CallbackID string `pathParam:"style=simple,explode=false,name=callbackId"`
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity struct {
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest struct {
	PathParams PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams
	Request    shared.CallbackCompletionRequest `request:"mediaType=application/json"`
	Security   PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity
}

type PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
