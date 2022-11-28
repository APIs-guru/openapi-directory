package shared

// SearchResourcesRequest
// Request to search the resources in the specified FHIR store.
type SearchResourcesRequest struct {
	ResourceType *string `json:"resourceType,omitempty"`
}
