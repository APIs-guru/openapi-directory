package shared

// PosixFilesystem
// A POSIX filesystem resource.
type PosixFilesystem struct {
	RootDirectory *string `json:"rootDirectory,omitempty"`
}
