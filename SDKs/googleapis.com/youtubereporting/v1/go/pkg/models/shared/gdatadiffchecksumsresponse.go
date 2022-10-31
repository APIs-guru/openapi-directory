package shared



type GdataDiffChecksumsResponse struct {
    ChecksumsLocation *GdataCompositeMedia `json:"checksumsLocation,omitempty"`
    ChunkSizeBytes *string `json:"chunkSizeBytes,omitempty"`
    ObjectLocation *GdataCompositeMedia `json:"objectLocation,omitempty"`
    ObjectSizeBytes *string `json:"objectSizeBytes,omitempty"`
    ObjectVersion *string `json:"objectVersion,omitempty"`
    
}

