package operations

import (
	"openapi/pkg/models/shared"
)

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity struct {
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
}

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest struct {
	Request  shared.BatchInputCallbackCompletionBatchRequest `request:"mediaType=application/json"`
	Security PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity
}

type PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
