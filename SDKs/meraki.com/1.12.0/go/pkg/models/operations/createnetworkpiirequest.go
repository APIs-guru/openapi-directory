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
	Datasets   []string                                    `json:"datasets,omitempty"`
	Email      *string                                     `json:"email,omitempty"`
	Mac        *string                                     `json:"mac,omitempty"`
	SmDeviceID *string                                     `json:"smDeviceId,omitempty"`
	SmUserID   *string                                     `json:"smUserId,omitempty"`
	Type       *CreateNetworkPiiRequestRequestBodyTypeEnum `json:"type,omitempty"`
	Username   *string                                     `json:"username,omitempty"`
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
