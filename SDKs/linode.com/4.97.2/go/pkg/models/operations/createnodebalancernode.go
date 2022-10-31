package operations

import (
"openapi/pkg/models/shared")

type CreateNodeBalancerNodePathParams struct {
    ConfigID int64 `pathParam:"style=simple,explode=false,name=configId"`
    NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
    
}


type CreateNodeBalancerNodeRequestBodyModeEnum string

const (
    CreateNodeBalancerNodeRequestBodyModeEnumAccept CreateNodeBalancerNodeRequestBodyModeEnum = "accept"
CreateNodeBalancerNodeRequestBodyModeEnumReject CreateNodeBalancerNodeRequestBodyModeEnum = "reject"
CreateNodeBalancerNodeRequestBodyModeEnumDrain CreateNodeBalancerNodeRequestBodyModeEnum = "drain"
CreateNodeBalancerNodeRequestBodyModeEnumBackup CreateNodeBalancerNodeRequestBodyModeEnum = "backup"
)



type CreateNodeBalancerNodeRequestBodyStatusEnum string

const (
    CreateNodeBalancerNodeRequestBodyStatusEnumUnknown CreateNodeBalancerNodeRequestBodyStatusEnum = "unknown"
CreateNodeBalancerNodeRequestBodyStatusEnumUp CreateNodeBalancerNodeRequestBodyStatusEnum = "UP"
CreateNodeBalancerNodeRequestBodyStatusEnumDown CreateNodeBalancerNodeRequestBodyStatusEnum = "DOWN"
)


type CreateNodeBalancerNodeRequestBody struct {
    Address string `json:"address"`
    ConfigID *int64 `json:"config_id,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Label string `json:"label"`
    Mode *CreateNodeBalancerNodeRequestBodyModeEnum `json:"mode,omitempty"`
    NodebalancerID *int64 `json:"nodebalancer_id,omitempty"`
    Status *CreateNodeBalancerNodeRequestBodyStatusEnum `json:"status,omitempty"`
    Weight *int64 `json:"weight,omitempty"`
    
}

type CreateNodeBalancerNodeSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateNodeBalancerNodeSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateNodeBalancerNodeSecurity struct {
    Option1 *CreateNodeBalancerNodeSecurityOption1 `security:"option"`
    Option2 *CreateNodeBalancerNodeSecurityOption2 `security:"option"`
    
}

type CreateNodeBalancerNodeRequest struct {
    PathParams CreateNodeBalancerNodePathParams 
    Request CreateNodeBalancerNodeRequestBody `request:"mediaType=application/json"`
    Security CreateNodeBalancerNodeSecurity 
    
}

type CreateNodeBalancerNodeDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateNodeBalancerNodeResponse struct {
    ContentType string 
    NodeBalancerNode *shared.NodeBalancerNode 
    StatusCode int64 
    CreateNodeBalancerNodeDefaultApplicationJSONObject *CreateNodeBalancerNodeDefaultApplicationJSON 
    
}

