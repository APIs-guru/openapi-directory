package shared

type Blobstore2Info struct {
	BlobGeneration          *string `json:"blobGeneration,omitempty"`
	BlobID                  *string `json:"blobId,omitempty"`
	DownloadReadHandle      *string `json:"downloadReadHandle,omitempty"`
	ReadToken               *string `json:"readToken,omitempty"`
	UploadMetadataContainer *string `json:"uploadMetadataContainer,omitempty"`
}
