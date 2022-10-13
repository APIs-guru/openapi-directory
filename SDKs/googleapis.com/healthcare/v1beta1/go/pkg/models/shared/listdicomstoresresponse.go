package shared

type ListDicomStoresResponse struct {
	DicomStores   []DicomStore `json:"dicomStores"`
	NextPageToken *string      `json:"nextPageToken"`
}
