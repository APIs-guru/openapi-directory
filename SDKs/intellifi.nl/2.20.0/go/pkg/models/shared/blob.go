package shared

type Blob struct {
	BlobKey          *string `json:"blob_key,omitempty"`
	ContentType      *string `json:"content_type,omitempty"`
	DownloadURL      *string `json:"download_url,omitempty"`
	Filename         *string `json:"filename,omitempty"`
	Hash             *string `json:"hash,omitempty"`
	ID               *string `json:"id,omitempty"`
	TimeCreated      *string `json:"time_created,omitempty"`
	TimeLastAccessed *string `json:"time_last_accessed,omitempty"`
	TimeUpdated      *string `json:"time_updated,omitempty"`
	UploadURL        *string `json:"upload_url,omitempty"`
	URL              *string `json:"url,omitempty"`
}

type BlobInput struct {
	BlobKey     *string `json:"blob_key,omitempty"`
	ContentType *string `json:"content_type,omitempty"`
	Filename    *string `json:"filename,omitempty"`
}
