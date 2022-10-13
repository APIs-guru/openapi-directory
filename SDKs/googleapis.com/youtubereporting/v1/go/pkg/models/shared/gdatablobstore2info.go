package shared

type GdataBlobstore2Info struct {
	BlobGeneration          *string `json:"blobGeneration"`
	BlobID                  *string `json:"blobId"`
	DownloadReadHandle      *string `json:"downloadReadHandle"`
	ReadToken               *string `json:"readToken"`
	UploadMetadataContainer *string `json:"uploadMetadataContainer"`
}
