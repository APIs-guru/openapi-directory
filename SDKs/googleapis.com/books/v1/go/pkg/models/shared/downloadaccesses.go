package shared

type DownloadAccesses struct {
	DownloadAccessList []DownloadAccessRestriction `json:"downloadAccessList,omitempty"`
	Kind               *string                     `json:"kind,omitempty"`
}
