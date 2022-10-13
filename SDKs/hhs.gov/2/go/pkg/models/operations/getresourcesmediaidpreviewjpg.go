package operations

type GetResourcesMediaIDPreviewJpgPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesMediaIDPreviewJpgRequest struct {
	PathParams GetResourcesMediaIDPreviewJpgPathParams
}

type GetResourcesMediaIDPreviewJpgResponse struct {
	ContentType                                           string
	GetResourcesMediaIDPreviewJpg200ApplicationJSONObject map[string]interface{}
	StatusCode                                            int64
}
