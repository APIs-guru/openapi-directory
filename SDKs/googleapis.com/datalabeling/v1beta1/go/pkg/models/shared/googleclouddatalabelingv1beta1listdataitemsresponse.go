package shared

// GoogleCloudDatalabelingV1beta1ListDataItemsResponse
// Results of listing data items in a dataset.
type GoogleCloudDatalabelingV1beta1ListDataItemsResponse struct {
	DataItems     []GoogleCloudDatalabelingV1beta1DataItem `json:"dataItems,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
