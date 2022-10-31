package shared

type GoogleCloudDatalabelingV1beta1ListDataItemsResponse struct {
	DataItems     []GoogleCloudDatalabelingV1beta1DataItem `json:"dataItems,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
