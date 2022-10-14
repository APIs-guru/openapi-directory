package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLkeNodePoolPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
	PoolID    int64 `pathParam:"style=simple,explode=false,name=poolId"`
}

type DeleteLkeNodePoolSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteLkeNodePoolSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteLkeNodePoolSecurity struct {
	Option1 *DeleteLkeNodePoolSecurityOption1 `security:"option"`
	Option2 *DeleteLkeNodePoolSecurityOption2 `security:"option"`
}

type DeleteLkeNodePoolRequest struct {
	PathParams DeleteLkeNodePoolPathParams
	Security   DeleteLkeNodePoolSecurity
}

type DeleteLkeNodePoolDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteLkeNodePoolResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	DeleteLkeNodePool200ApplicationJSONObject     map[string]interface{}
	DeleteLkeNodePoolDefaultApplicationJSONObject *DeleteLkeNodePoolDefaultApplicationJSON
}
