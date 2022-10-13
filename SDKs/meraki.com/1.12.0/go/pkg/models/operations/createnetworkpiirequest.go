package operations

type CreateNetworkPiiRequestPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkPiiRequestRequestBodyTypeEnum string

const (
	CreateNetworkPiiRequestRequestBodyTypeEnumDelete             CreateNetworkPiiRequestRequestBodyTypeEnum = "delete"
	CreateNetworkPiiRequestRequestBodyTypeEnumRestrictProcessing CreateNetworkPiiRequestRequestBodyTypeEnum = "restrict processing"
)

type CreateNetworkPiiRequestRequestBody struct {
	Datasets   []string                                    `json:"datasets"`
	Email      *string                                     `json:"email"`
	Mac        *string                                     `json:"mac"`
	SmDeviceID *string                                     `json:"smDeviceId"`
	SmUserID   *string                                     `json:"smUserId"`
	Type       *CreateNetworkPiiRequestRequestBodyTypeEnum `json:"type"`
	Username   *string                                     `json:"username"`
}

type CreateNetworkPiiRequestRequest struct {
	PathParams CreateNetworkPiiRequestPathParams
	Request    *CreateNetworkPiiRequestRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkPiiRequestResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateNetworkPiiRequest201ApplicationJSONObject map[string]interface{}
}
