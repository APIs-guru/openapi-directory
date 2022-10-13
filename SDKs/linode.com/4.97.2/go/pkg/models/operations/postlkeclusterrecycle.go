package operations

import (
	"openapi/pkg/models/shared"
)

type PostLkeClusterRecyclePathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type PostLkeClusterRecycleSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type PostLkeClusterRecycleSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type PostLkeClusterRecycleSecurity struct {
	Option1 *PostLkeClusterRecycleSecurityOption1 `security:"option"`
	Option2 *PostLkeClusterRecycleSecurityOption2 `security:"option"`
}

type PostLkeClusterRecycleRequest struct {
	PathParams PostLkeClusterRecyclePathParams
	Security   PostLkeClusterRecycleSecurity
}

type PostLkeClusterRecycleDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type PostLkeClusterRecycleResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PostLkeClusterRecycle200ApplicationJSONObject     map[string]interface{}
	PostLkeClusterRecycleDefaultApplicationJSONObject *PostLkeClusterRecycleDefaultApplicationJSON
}
