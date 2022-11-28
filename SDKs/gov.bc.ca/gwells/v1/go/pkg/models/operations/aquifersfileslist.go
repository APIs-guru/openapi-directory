package operations

type AquifersFilesListPathParams struct {
	AquiferID string `pathParam:"style=simple,explode=false,name=aquifer_id"`
}

type AquifersFilesList200ApplicationJSONPrivate struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type AquifersFilesList200ApplicationJSONPublic struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type AquifersFilesList200ApplicationJSON struct {
	Private []AquifersFilesList200ApplicationJSONPrivate `json:"private,omitempty"`
	Public  []AquifersFilesList200ApplicationJSONPublic  `json:"public,omitempty"`
}

type AquifersFilesListRequest struct {
	PathParams AquifersFilesListPathParams
}

type AquifersFilesListResponse struct {
	ContentType                               string
	StatusCode                                int64
	AquifersFilesList200ApplicationJSONObject *AquifersFilesList200ApplicationJSON
}
