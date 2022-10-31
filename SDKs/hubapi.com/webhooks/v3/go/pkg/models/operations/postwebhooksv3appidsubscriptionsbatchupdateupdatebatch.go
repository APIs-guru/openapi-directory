package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams struct {
	AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
}

type PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchRequest struct {
	PathParams PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchPathParams
	Request    shared.BatchInputSubscriptionBatchUpdateRequest `request:"mediaType=application/json"`
	Security   PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchSecurity
}

type PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchResponse struct {
	BatchResponseSubscriptionResponse           *shared.BatchResponseSubscriptionResponse
	BatchResponseSubscriptionResponseWithErrors *shared.BatchResponseSubscriptionResponseWithErrors
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
}
