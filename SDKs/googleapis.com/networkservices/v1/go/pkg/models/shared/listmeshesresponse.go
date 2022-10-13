package shared

type ListMeshesResponse struct {
	Meshes        []Mesh  `json:"meshes"`
	NextPageToken *string `json:"nextPageToken"`
}
