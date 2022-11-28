package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeClustersSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeClusters200ApplicationJSON struct {
	Data    []shared.LkeCluster `json:"data,omitempty"`
	Page    *int64              `json:"page,omitempty"`
	Pages   *int64              `json:"pages,omitempty"`
	Results *int64              `json:"results,omitempty"`
}

type GetLkeClustersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeClustersRequest struct {
	Security GetLkeClustersSecurity
}

type GetLkeClustersResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLkeClusters200ApplicationJSONObject     *GetLkeClusters200ApplicationJSON
	GetLkeClustersDefaultApplicationJSONObject *GetLkeClustersDefaultApplicationJSON
}
