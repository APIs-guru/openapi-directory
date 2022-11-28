package shared

// DiffChecksumsResponse
// # gdata.* are outside protos with mising documentation
type DiffChecksumsResponse struct {
	ChecksumsLocation *CompositeMedia `json:"checksumsLocation,omitempty"`
	ChunkSizeBytes    *string         `json:"chunkSizeBytes,omitempty"`
	ObjectLocation    *CompositeMedia `json:"objectLocation,omitempty"`
	ObjectSizeBytes   *string         `json:"objectSizeBytes,omitempty"`
	ObjectVersion     *string         `json:"objectVersion,omitempty"`
}
