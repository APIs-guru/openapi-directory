package shared

// ListMeshesResponse
// Response returned by the ListMeshes method.
type ListMeshesResponse struct {
	Meshes        []Mesh  `json:"meshes,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
