package operations

type WellsFilesListPathParams struct {
	Tag string `pathParam:"style=simple,explode=false,name=tag"`
}

type WellsFilesListRequest struct {
	PathParams WellsFilesListPathParams
}

type WellsFilesList200ApplicationJSONPrivate struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type WellsFilesList200ApplicationJSONPublic struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type WellsFilesList200ApplicationJSON struct {
	Private []WellsFilesList200ApplicationJSONPrivate `json:"private,omitempty"`
	Public  []WellsFilesList200ApplicationJSONPublic  `json:"public,omitempty"`
}

type WellsFilesListResponse struct {
	ContentType                            string
	StatusCode                             int64
	WellsFilesList200ApplicationJSONObject *WellsFilesList200ApplicationJSON
}
