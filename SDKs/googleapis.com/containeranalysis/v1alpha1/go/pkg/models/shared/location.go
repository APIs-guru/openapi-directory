package shared

// Location
// An occurrence of a particular package installation found within a system's filesystem. e.g. glibc was found in /var/lib/dpkg/status
type Location struct {
	CpeURI  *string  `json:"cpeUri,omitempty"`
	Path    *string  `json:"path,omitempty"`
	Version *Version `json:"version,omitempty"`
}
