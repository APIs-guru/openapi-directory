package operations

type DrillersFilesListPathParams struct {
	PersonGUID string `pathParam:"style=simple,explode=false,name=person_guid"`
}

type DrillersFilesListRequest struct {
	PathParams DrillersFilesListPathParams
}

type DrillersFilesList200ApplicationJSONPrivate struct {
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type DrillersFilesList200ApplicationJSONPublic struct {
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type DrillersFilesList200ApplicationJSON struct {
	Private []DrillersFilesList200ApplicationJSONPrivate `json:"private"`
	Public  []DrillersFilesList200ApplicationJSONPublic  `json:"public"`
}

type DrillersFilesListResponse struct {
	ContentType                               string
	StatusCode                                int64
	DrillersFilesList200ApplicationJSONObject *DrillersFilesList200ApplicationJSON
}
