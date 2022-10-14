package shared

type ListDicomStoresResponse struct {
	DicomStores   []DicomStore `json:"dicomStores,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
