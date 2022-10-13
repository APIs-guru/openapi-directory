package shared

type MetadataItems struct {
	DownloadURL  *string `json:"download_url"`
	EncryptedKey *string `json:"encrypted_key"`
	Language     *string `json:"language"`
	Size         *string `json:"size"`
	Version      *string `json:"version"`
}

type Metadata struct {
	Items []MetadataItems `json:"items"`
	Kind  *string         `json:"kind"`
}
