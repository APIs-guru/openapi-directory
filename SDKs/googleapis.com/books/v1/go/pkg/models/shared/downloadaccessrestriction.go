package shared



type DownloadAccessRestriction struct {
    DeviceAllowed *bool `json:"deviceAllowed,omitempty"`
    DownloadsAcquired *int32 `json:"downloadsAcquired,omitempty"`
    JustAcquired *bool `json:"justAcquired,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MaxDownloadDevices *int32 `json:"maxDownloadDevices,omitempty"`
    Message *string `json:"message,omitempty"`
    Nonce *string `json:"nonce,omitempty"`
    ReasonCode *string `json:"reasonCode,omitempty"`
    Restricted *bool `json:"restricted,omitempty"`
    Signature *string `json:"signature,omitempty"`
    Source *string `json:"source,omitempty"`
    VolumeID *string `json:"volumeId,omitempty"`
    
}

