package operations

type AquifersFilesListPathParams struct {
	AquiferID string `pathParam:"style=simple,explode=false,name=aquifer_id"`
}

type AquifersFilesListRequest struct {
	PathParams AquifersFilesListPathParams
}

type AquifersFilesList200ApplicationJSONPrivate struct {
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type AquifersFilesList200ApplicationJSONPublic struct {
	Name *string `json:"name"`
	URL  *string `json:"url"`
}

type AquifersFilesList200ApplicationJSON struct {
	Private []AquifersFilesList200ApplicationJSONPrivate `json:"private"`
	Public  []AquifersFilesList200ApplicationJSONPublic  `json:"public"`
}

type AquifersFilesListResponse struct {
	ContentType                               string
	StatusCode                                int64
	AquifersFilesList200ApplicationJSONObject *AquifersFilesList200ApplicationJSON
}
