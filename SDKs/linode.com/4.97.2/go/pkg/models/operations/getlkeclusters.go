package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClustersSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeClustersSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeClustersSecurity struct {
	Option1 *GetLkeClustersSecurityOption1 `security:"option"`
	Option2 *GetLkeClustersSecurityOption2 `security:"option"`
}

type GetLkeClustersRequest struct {
	Security GetLkeClustersSecurity
}

type GetLkeClusters200ApplicationJSON struct {
	Data    []shared.LkeCluster `json:"data"`
	Page    *int64              `json:"page"`
	Pages   *int64              `json:"pages"`
	Results *int64              `json:"results"`
}

type GetLkeClustersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLkeClustersResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLkeClusters200ApplicationJSONObject     *GetLkeClusters200ApplicationJSON
	GetLkeClustersDefaultApplicationJSONObject *GetLkeClustersDefaultApplicationJSON
}
