package shared

// FileHashes
// Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
type FileHashes struct {
	FileHash []Hash `json:"fileHash,omitempty"`
}
