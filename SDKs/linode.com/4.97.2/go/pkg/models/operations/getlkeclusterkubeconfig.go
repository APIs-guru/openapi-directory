package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterKubeconfigPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterKubeconfigSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeClusterKubeconfigSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeClusterKubeconfigSecurity struct {
	Option1 *GetLkeClusterKubeconfigSecurityOption1 `security:"option"`
	Option2 *GetLkeClusterKubeconfigSecurityOption2 `security:"option"`
}

type GetLkeClusterKubeconfigRequest struct {
	PathParams GetLkeClusterKubeconfigPathParams
	Security   GetLkeClusterKubeconfigSecurity
}

type GetLkeClusterKubeconfig200ApplicationJSON struct {
	Kubeconfig *string `json:"kubeconfig"`
}

type GetLkeClusterKubeconfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLkeClusterKubeconfigResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetLkeClusterKubeconfig200ApplicationJSONObject     *GetLkeClusterKubeconfig200ApplicationJSON
	GetLkeClusterKubeconfigDefaultApplicationJSONObject *GetLkeClusterKubeconfigDefaultApplicationJSON
}
