package shared

type GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse struct {
	AndroidDeliveryData []GoogleFirebaseFcmDataV1beta1AndroidDeliveryData `json:"androidDeliveryData"`
	NextPageToken       *string                                           `json:"nextPageToken"`
}
