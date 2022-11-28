package shared

// ListDicomStoresResponse
// Lists the DICOM stores in the given dataset.
type ListDicomStoresResponse struct {
	DicomStores   []DicomStore `json:"dicomStores,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
