package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClusterKubeconfigPathParams struct {
	ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetLkeClusterKubeconfigSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeClusterKubeconfig200ApplicationJSON struct {
	Kubeconfig *string `json:"kubeconfig,omitempty"`
}

type GetLkeClusterKubeconfigDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClusterKubeconfigRequest struct {
	PathParams GetLkeClusterKubeconfigPathParams
	Security   GetLkeClusterKubeconfigSecurity
}

type GetLkeClusterKubeconfigResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetLkeClusterKubeconfig200ApplicationJSONObject     *GetLkeClusterKubeconfig200ApplicationJSON
	GetLkeClusterKubeconfigDefaultApplicationJSONObject *GetLkeClusterKubeconfigDefaultApplicationJSON
}
