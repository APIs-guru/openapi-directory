package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterNodePathParams struct {
	ClusterID int64  `pathParam:"style=simple,explode=false,name=clusterId"`
	NodeID    string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type GetLkeClusterNodeSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeClusterNodeSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeClusterNodeSecurity struct {
	Option1 *GetLkeClusterNodeSecurityOption1 `security:"option"`
	Option2 *GetLkeClusterNodeSecurityOption2 `security:"option"`
}

type GetLkeClusterNodeRequest struct {
	PathParams GetLkeClusterNodePathParams
	Security   GetLkeClusterNodeSecurity
}

type GetLkeClusterNode200ApplicationJSONDataStatusEnum string

const (
	GetLkeClusterNode200ApplicationJSONDataStatusEnumReady    GetLkeClusterNode200ApplicationJSONDataStatusEnum = "ready"
	GetLkeClusterNode200ApplicationJSONDataStatusEnumNotReady GetLkeClusterNode200ApplicationJSONDataStatusEnum = "not_ready"
)

type GetLkeClusterNode200ApplicationJSONData struct {
	ID         *string                                            `json:"id"`
	InstanceID *int64                                             `json:"instance_id"`
	Status     *GetLkeClusterNode200ApplicationJSONDataStatusEnum `json:"status"`
}

type GetLkeClusterNode200ApplicationJSON struct {
	Data *GetLkeClusterNode200ApplicationJSONData `json:"data"`
}

type GetLkeClusterNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLkeClusterNodeResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetLkeClusterNode200ApplicationJSONObject     *GetLkeClusterNode200ApplicationJSON
	GetLkeClusterNodeDefaultApplicationJSONObject *GetLkeClusterNodeDefaultApplicationJSON
}
