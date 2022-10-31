package shared



type Disk struct {
    AutoDelete *bool `json:"autoDelete,omitempty"`
    Boot *bool `json:"boot,omitempty"`
    DeviceName *string `json:"deviceName,omitempty"`
    DiskSizeGb *string `json:"diskSizeGb,omitempty"`
    GuestOsFeatures []GuestOsFeature `json:"guestOsFeatures,omitempty"`
    Index *string `json:"index,omitempty"`
    Interface *string `json:"interface,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Licenses []string `json:"licenses,omitempty"`
    Mode *string `json:"mode,omitempty"`
    Source *string `json:"source,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

