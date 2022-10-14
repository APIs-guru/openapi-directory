package operations

type PostNetworksIDActionsAddSubnetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsAddSubnetRequestBodyTypeEnum string

const (
	PostNetworksIDActionsAddSubnetRequestBodyTypeEnumCloud   PostNetworksIDActionsAddSubnetRequestBodyTypeEnum = "cloud"
	PostNetworksIDActionsAddSubnetRequestBodyTypeEnumServer  PostNetworksIDActionsAddSubnetRequestBodyTypeEnum = "server"
	PostNetworksIDActionsAddSubnetRequestBodyTypeEnumVswitch PostNetworksIDActionsAddSubnetRequestBodyTypeEnum = "vswitch"
)

type PostNetworksIDActionsAddSubnetRequestBodyAddSubnetRequest struct {
	IPRange     *string                                           `json:"ip_range,omitempty"`
	NetworkZone string                                            `json:"network_zone"`
	Type        PostNetworksIDActionsAddSubnetRequestBodyTypeEnum `json:"type"`
	VswitchID   *int64                                            `json:"vswitch_id,omitempty"`
}

type PostNetworksIDActionsAddSubnetRequest struct {
	PathParams PostNetworksIDActionsAddSubnetPathParams
	Request    *PostNetworksIDActionsAddSubnetRequestBodyAddSubnetRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsAddSubnet201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsAddSubnet201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum string

const (
	PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnumSuccess PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum = "success"
	PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnumRunning PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum = "running"
	PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnumError   PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum = "error"
)

type PostNetworksIDActionsAddSubnet201ApplicationJSONActionAction struct {
	Command   string                                                            `json:"command"`
	Error     PostNetworksIDActionsAddSubnet201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                            `json:"finished"`
	ID        int64                                                             `json:"id"`
	Progress  float64                                                           `json:"progress"`
	Resources []PostNetworksIDActionsAddSubnet201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                            `json:"started"`
	Status    PostNetworksIDActionsAddSubnet201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsAddSubnet201ApplicationJSONActionResponse struct {
	Action PostNetworksIDActionsAddSubnet201ApplicationJSONActionAction `json:"action"`
}

type PostNetworksIDActionsAddSubnetResponse struct {
	ActionResponse *PostNetworksIDActionsAddSubnet201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
