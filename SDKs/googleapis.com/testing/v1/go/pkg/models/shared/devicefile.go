package shared



type DeviceFile struct {
    ObbFile *ObbFile `json:"obbFile,omitempty"`
    RegularFile *RegularFile `json:"regularFile,omitempty"`
    
}

