package shared

type Location struct {
	CpeURI  *string  `json:"cpeUri"`
	Path    *string  `json:"path"`
	Version *Version `json:"version"`
}
