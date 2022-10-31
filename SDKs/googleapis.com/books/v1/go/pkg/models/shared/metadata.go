package shared

type MetadataItems struct {
	DownloadURL  *string `json:"download_url,omitempty"`
	EncryptedKey *string `json:"encrypted_key,omitempty"`
	Language     *string `json:"language,omitempty"`
	Size         *string `json:"size,omitempty"`
	Version      *string `json:"version,omitempty"`
}

type Metadata struct {
	Items []MetadataItems `json:"items,omitempty"`
	Kind  *string         `json:"kind,omitempty"`
}
