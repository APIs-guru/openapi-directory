package operations

type CreateNetworkSmBypassActivationLockAttemptPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkSmBypassActivationLockAttemptRequestBody struct {
	Ids []string `json:"ids"`
}

type CreateNetworkSmBypassActivationLockAttemptRequest struct {
	PathParams CreateNetworkSmBypassActivationLockAttemptPathParams
	Request    CreateNetworkSmBypassActivationLockAttemptRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSmBypassActivationLockAttemptResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	CreateNetworkSmBypassActivationLockAttempt201ApplicationJSONObject map[string]interface{}
}
