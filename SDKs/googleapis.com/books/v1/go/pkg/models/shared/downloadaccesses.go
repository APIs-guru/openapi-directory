package shared

type DownloadAccesses struct {
	DownloadAccessList []DownloadAccessRestriction `json:"downloadAccessList"`
	Kind               *string                     `json:"kind"`
}
