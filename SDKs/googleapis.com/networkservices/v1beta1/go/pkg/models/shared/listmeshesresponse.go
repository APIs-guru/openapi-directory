package shared



type ListMeshesResponse struct {
    Meshes []Mesh `json:"meshes,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

