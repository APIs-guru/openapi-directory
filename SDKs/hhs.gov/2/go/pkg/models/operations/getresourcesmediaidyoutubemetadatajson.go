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
	Callback *string                  `json:"callback,omitempty"`
	Meta     *shared.Meta             `json:"meta,omitempty"`
	Results  []map[string]interface{} `json:"results,omitempty"`
}

type GetResourcesMediaIDYoutubeMetaDataJSONResponse struct {
	ContentType                                                    string
	GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSONObject *GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON
	StatusCode                                                     int64
}
