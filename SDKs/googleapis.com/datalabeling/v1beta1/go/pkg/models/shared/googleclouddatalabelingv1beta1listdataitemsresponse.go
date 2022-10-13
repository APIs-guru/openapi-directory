package shared

type GoogleCloudDatalabelingV1beta1ListDataItemsResponse struct {
	DataItems     []GoogleCloudDatalabelingV1beta1DataItem `json:"dataItems"`
	NextPageToken *string                                  `json:"nextPageToken"`
}
