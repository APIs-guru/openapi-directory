package shared

type GdataDiffChecksumsResponse struct {
	ChecksumsLocation *GdataCompositeMedia `json:"checksumsLocation"`
	ChunkSizeBytes    *string              `json:"chunkSizeBytes"`
	ObjectLocation    *GdataCompositeMedia `json:"objectLocation"`
	ObjectSizeBytes   *string              `json:"objectSizeBytes"`
	ObjectVersion     *string              `json:"objectVersion"`
}
