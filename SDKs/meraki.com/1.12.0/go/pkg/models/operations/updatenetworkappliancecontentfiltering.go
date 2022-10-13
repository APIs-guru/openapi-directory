package operations

type UpdateNetworkApplianceContentFilteringPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum string

const (
	UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnumTopSites UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum = "topSites"
	UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnumFullList UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum = "fullList"
)

type UpdateNetworkApplianceContentFilteringRequestBody struct {
	AllowedURLPatterns   []string                                                                  `json:"allowedUrlPatterns"`
	BlockedURLCategories []string                                                                  `json:"blockedUrlCategories"`
	BlockedURLPatterns   []string                                                                  `json:"blockedUrlPatterns"`
	URLCategoryListSize  *UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum `json:"urlCategoryListSize"`
}

type UpdateNetworkApplianceContentFilteringRequest struct {
	PathParams UpdateNetworkApplianceContentFilteringPathParams
	Request    *UpdateNetworkApplianceContentFilteringRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceContentFilteringResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	UpdateNetworkApplianceContentFiltering200ApplicationJSONObject map[string]interface{}
}
