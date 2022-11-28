package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterNodePathParams struct {
	ClusterID int64  `pathParam:"style=simple,explode=false,name=clusterId"`
	NodeID    string `pathParam:"style=simple,explode=false,name=nodeId"`
}

type GetLkeClusterNodeSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeClusterNode200ApplicationJSONDataStatusEnum string

const (
	GetLkeClusterNode200ApplicationJSONDataStatusEnumReady    GetLkeClusterNode200ApplicationJSONDataStatusEnum = "ready"
	GetLkeClusterNode200ApplicationJSONDataStatusEnumNotReady GetLkeClusterNode200ApplicationJSONDataStatusEnum = "not_ready"
)

// GetLkeClusterNode200ApplicationJSONData
// The selected node in the cluster.
type GetLkeClusterNode200ApplicationJSONData struct {
	ID         *string                                            `json:"id,omitempty"`
	InstanceID *int64                                             `json:"instance_id,omitempty"`
	Status     *GetLkeClusterNode200ApplicationJSONDataStatusEnum `json:"status,omitempty"`
}

type GetLkeClusterNode200ApplicationJSON struct {
	Data *GetLkeClusterNode200ApplicationJSONData `json:"data,omitempty"`
}

type GetLkeClusterNodeDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClusterNodeRequest struct {
	PathParams GetLkeClusterNodePathParams
	Security   GetLkeClusterNodeSecurity
}

type GetLkeClusterNodeResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetLkeClusterNode200ApplicationJSONObject     *GetLkeClusterNode200ApplicationJSON
	GetLkeClusterNodeDefaultApplicationJSONObject *GetLkeClusterNodeDefaultApplicationJSON
}
