package shared

type RequestAccessData struct {
	ConcurrentAccess *ConcurrentAccessRestriction `json:"concurrentAccess"`
	DownloadAccess   *DownloadAccessRestriction   `json:"downloadAccess"`
	Kind             *string                      `json:"kind"`
}
