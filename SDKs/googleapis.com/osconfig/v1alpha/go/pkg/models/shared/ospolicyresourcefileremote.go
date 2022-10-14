package shared

type OsPolicyResourceFileRemote struct {
	Sha256Checksum *string `json:"sha256Checksum,omitempty"`
	URI            *string `json:"uri,omitempty"`
}
