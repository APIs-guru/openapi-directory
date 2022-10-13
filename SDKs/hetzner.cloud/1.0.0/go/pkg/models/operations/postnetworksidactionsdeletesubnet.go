package operations

type PostNetworksIDActionsDeleteSubnetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostNetworksIDActionsDeleteSubnetRequestBodyDeleteSubnetRequest struct {
	IPRange string `json:"ip_range"`
}

type PostNetworksIDActionsDeleteSubnetRequest struct {
	PathParams PostNetworksIDActionsDeleteSubnetPathParams
	Request    *PostNetworksIDActionsDeleteSubnetRequestBodyDeleteSubnetRequest `request:"mediaType=application/json"`
}

type PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnum string

const (
	PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnumSuccess PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnum = "success"
	PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnumRunning PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnum = "running"
	PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnumError   PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnum = "error"
)

type PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionAction struct {
	Command   string                                                               `json:"command"`
	Error     PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                               `json:"finished"`
	ID        int64                                                                `json:"id"`
	Progress  float64                                                              `json:"progress"`
	Resources []PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                               `json:"started"`
	Status    PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionResponse struct {
	Action PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionAction `json:"action"`
}

type PostNetworksIDActionsDeleteSubnetResponse struct {
	ActionResponse *PostNetworksIDActionsDeleteSubnet201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
