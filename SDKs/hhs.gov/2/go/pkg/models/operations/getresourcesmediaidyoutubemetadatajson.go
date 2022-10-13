package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesMediaIDYoutubeMetaDataJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesMediaIDYoutubeMetaDataJSONRequest struct {
	PathParams GetResourcesMediaIDYoutubeMetaDataJSONPathParams
}

type GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON struct {
	Callback *string                  `json:"callback"`
	Meta     *shared.Meta             `json:"meta"`
	Results  []map[string]interface{} `json:"results"`
}

type GetResourcesMediaIDYoutubeMetaDataJSONResponse struct {
	ContentType                                                    string
	GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSONObject *GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON
	StatusCode                                                     int64
}
