package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLkeNodePoolPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type DeleteLkeNodePoolSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteLkeNodePoolDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLkeNodePoolRequest struct {
	PathParams DeleteLkeNodePoolPathParams
	Security   DeleteLkeNodePoolSecurity
}

type DeleteLkeNodePoolResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	DeleteLkeNodePool200ApplicationJSONObject     map[string]interface{}
	DeleteLkeNodePoolDefaultApplicationJSONObject *DeleteLkeNodePoolDefaultApplicationJSON
}
