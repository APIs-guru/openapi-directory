package shared

// GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
// Response message for ListAndroidDeliveryData.
type GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse struct {
	AndroidDeliveryData []GoogleFirebaseFcmDataV1beta1AndroidDeliveryData `json:"androidDeliveryData,omitempty"`
	NextPageToken       *string                                           `json:"nextPageToken,omitempty"`
}
