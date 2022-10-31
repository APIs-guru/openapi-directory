package shared



type RequestAccessData struct {
    ConcurrentAccess *ConcurrentAccessRestriction `json:"concurrentAccess,omitempty"`
    DownloadAccess *DownloadAccessRestriction `json:"downloadAccess,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

