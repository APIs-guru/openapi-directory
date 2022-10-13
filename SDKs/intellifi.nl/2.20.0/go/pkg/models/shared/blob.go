package shared

type Blob struct {
	BlobKey          *string `json:"blob_key"`
	ContentType      *string `json:"content_type"`
	DownloadURL      *string `json:"download_url"`
	Filename         *string `json:"filename"`
	Hash             *string `json:"hash"`
	ID               *string `json:"id"`
	TimeCreated      *string `json:"time_created"`
	TimeLastAccessed *string `json:"time_last_accessed"`
	TimeUpdated      *string `json:"time_updated"`
	UploadURL        *string `json:"upload_url"`
	URL              *string `json:"url"`
}
