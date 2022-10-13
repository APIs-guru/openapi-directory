package operations

type GetNetworkCameraQualityRetentionProfilesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkCameraQualityRetentionProfilesRequest struct {
	PathParams GetNetworkCameraQualityRetentionProfilesPathParams
}

type GetNetworkCameraQualityRetentionProfilesResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	GetNetworkCameraQualityRetentionProfiles200ApplicationJSONObject map[string]interface{}
}
