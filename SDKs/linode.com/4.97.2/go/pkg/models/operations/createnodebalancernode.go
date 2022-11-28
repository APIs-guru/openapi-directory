package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNodeBalancerNodePathParams struct {
	ConfigID       int64 `pathParam:"style=simple,explode=false,name=configId"`
	NodeBalancerID int64 `pathParam:"style=simple,explode=false,name=nodeBalancerId"`
}

type CreateNodeBalancerNodeRequestBodyModeEnum string

const (
	CreateNodeBalancerNodeRequestBodyModeEnumAccept CreateNodeBalancerNodeRequestBodyModeEnum = "accept"
	CreateNodeBalancerNodeRequestBodyModeEnumReject CreateNodeBalancerNodeRequestBodyModeEnum = "reject"
	CreateNodeBalancerNodeRequestBodyModeEnumDrain  CreateNodeBalancerNodeRequestBodyModeEnum = "drain"
	CreateNodeBalancerNodeRequestBodyModeEnumBackup CreateNodeBalancerNodeRequestBodyModeEnum = "backup"
)

type CreateNodeBalancerNodeRequestBodyInput struct {
	Address string                                     `json:"address"`
	Label   string                                     `json:"label"`
	Mode    *CreateNodeBalancerNodeRequestBodyModeEnum `json:"mode,omitempty"`
	Weight  *int64                                     `json:"weight,omitempty"`
}

type CreateNodeBalancerNodeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateNodeBalancerNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateNodeBalancerNodeRequest struct {
	PathParams CreateNodeBalancerNodePathParams
	Request    CreateNodeBalancerNodeRequestBodyInput `request:"mediaType=application/json"`
	Security   CreateNodeBalancerNodeSecurity
}

type CreateNodeBalancerNodeResponse struct {
	ContentType                                        string
	NodeBalancerNode                                   *shared.NodeBalancerNode
	StatusCode                                         int64
	CreateNodeBalancerNodeDefaultApplicationJSONObject *CreateNodeBalancerNodeDefaultApplicationJSON
}
