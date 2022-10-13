package shared

type DiffChecksumsResponse struct {
	ChecksumsLocation *CompositeMedia `json:"checksumsLocation"`
	ChunkSizeBytes    *string         `json:"chunkSizeBytes"`
	ObjectLocation    *CompositeMedia `json:"objectLocation"`
	ObjectSizeBytes   *string         `json:"objectSizeBytes"`
	ObjectVersion     *string         `json:"objectVersion"`
}
