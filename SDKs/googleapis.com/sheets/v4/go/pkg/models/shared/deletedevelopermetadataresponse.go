package shared

// DeleteDeveloperMetadataResponse
// The response from deleting developer metadata.
type DeleteDeveloperMetadataResponse struct {
	DeletedDeveloperMetadata []DeveloperMetadata `json:"deletedDeveloperMetadata,omitempty"`
}
