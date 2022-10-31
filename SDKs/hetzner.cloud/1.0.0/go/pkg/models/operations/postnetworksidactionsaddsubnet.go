package operations

type PostNetworksIDActionsAddSubnetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum string

const (
	PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnumCloud   PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum = "cloud"
	PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnumServer  PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum = "server"
	PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnumVswitch PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum = "vswitch"
)

type PostNetworksIDActionsAddSubnetAddSubnetRequest struct {
	IPRange     *string                                                `json:"ip_range,omitempty"`
	NetworkZone string                                                 `json:"network_zone"`
	Type        PostNetworksIDActionsAddSubnetAddSubnetRequestTypeEnum `json:"type"`
	VswitchID   *int64                                                 `json:"vswitch_id,omitempty"`
}

type PostNetworksIDActionsAddSubnetRequest struct {
	PathParams PostNetworksIDActionsAddSubnetPathParams
	Request    *PostNetworksIDActionsAddSubnetAddSubnetRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsAddSubnetActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsAddSubnetActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum string

const (
	PostNetworksIDActionsAddSubnetActionResponseActionStatusEnumSuccess PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum = "success"
	PostNetworksIDActionsAddSubnetActionResponseActionStatusEnumRunning PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum = "running"
	PostNetworksIDActionsAddSubnetActionResponseActionStatusEnumError   PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum = "error"
)

type PostNetworksIDActionsAddSubnetActionResponseAction struct {
	Command   string                                                        `json:"command"`
	Error     PostNetworksIDActionsAddSubnetActionResponseActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostNetworksIDActionsAddSubnetActionResponseActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostNetworksIDActionsAddSubnetActionResponseActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsAddSubnetActionResponse struct {
	Action PostNetworksIDActionsAddSubnetActionResponseAction `json:"action"`
}

type PostNetworksIDActionsAddSubnetResponse struct {
	ActionResponse *PostNetworksIDActionsAddSubnetActionResponse
	ContentType    string
	StatusCode     int64
}
