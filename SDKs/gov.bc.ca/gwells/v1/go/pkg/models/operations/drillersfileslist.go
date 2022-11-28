package operations

type DrillersFilesListPathParams struct {
	PersonGUID string `pathParam:"style=simple,explode=false,name=person_guid"`
}

type DrillersFilesList200ApplicationJSONPrivate struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type DrillersFilesList200ApplicationJSONPublic struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type DrillersFilesList200ApplicationJSON struct {
	Private []DrillersFilesList200ApplicationJSONPrivate `json:"private,omitempty"`
	Public  []DrillersFilesList200ApplicationJSONPublic  `json:"public,omitempty"`
}

type DrillersFilesListRequest struct {
	PathParams DrillersFilesListPathParams
}

type DrillersFilesListResponse struct {
	ContentType                               string
	StatusCode                                int64
	DrillersFilesList200ApplicationJSONObject *DrillersFilesList200ApplicationJSON
}
