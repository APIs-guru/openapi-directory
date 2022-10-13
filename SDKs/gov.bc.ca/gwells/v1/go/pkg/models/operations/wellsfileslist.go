package operations

type WellsFilesListPathParams struct {
	Tag string `pathParam:"style=simple,explode=false,name=tag"`
}

type WellsFilesListRequest struct {
	PathParams WellsFilesListPathParams
}

type WellsFilesList200ApplicationJSONPrivate struct {
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type WellsFilesList200ApplicationJSONPublic struct {
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type WellsFilesList200ApplicationJSON struct {
	Private []WellsFilesList200ApplicationJSONPrivate `json:"private"`
	Public  []WellsFilesList200ApplicationJSONPublic  `json:"public"`
}

type WellsFilesListResponse struct {
	ContentType                            string
	StatusCode                             int64
	WellsFilesList200ApplicationJSONObject *WellsFilesList200ApplicationJSON
}
