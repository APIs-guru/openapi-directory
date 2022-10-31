package operations

type DeleteNetworkCameraQualityRetentionProfilePathParams struct {
	NetworkID                 string `pathParam:"style=simple,explode=false,name=networkId"`
	QualityRetentionProfileID string `pathParam:"style=simple,explode=false,name=qualityRetentionProfileId"`
}

type DeleteNetworkCameraQualityRetentionProfileRequest struct {
	PathParams DeleteNetworkCameraQualityRetentionProfilePathParams
}

type DeleteNetworkCameraQualityRetentionProfileResponse struct {
	ContentType string
	StatusCode  int64
}
