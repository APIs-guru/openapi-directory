package operations

type BindNetworkPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type BindNetworkRequestBody struct {
	AutoBind         *bool  `json:"autoBind"`
	ConfigTemplateID string `json:"configTemplateId"`
}

type BindNetworkRequest struct {
	PathParams BindNetworkPathParams
	Request    BindNetworkRequestBody `request:"mediaType=application/json"`
}

type BindNetworkResponse struct {
	ContentType                         string
	StatusCode                          int64
	BindNetwork200ApplicationJSONObject map[string]interface{}
}
