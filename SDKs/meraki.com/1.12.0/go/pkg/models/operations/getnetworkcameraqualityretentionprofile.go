package operations



type GetNetworkCameraQualityRetentionProfilePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    QualityRetentionProfileID string `pathParam:"style=simple,explode=false,name=qualityRetentionProfileId"`
    
}

type GetNetworkCameraQualityRetentionProfileRequest struct {
    PathParams GetNetworkCameraQualityRetentionProfilePathParams 
    
}

type GetNetworkCameraQualityRetentionProfileResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkCameraQualityRetentionProfile200ApplicationJSONObject map[string]interface{} 
    
}

