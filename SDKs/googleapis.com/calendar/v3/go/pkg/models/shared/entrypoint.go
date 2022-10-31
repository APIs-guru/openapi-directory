package shared



type EntryPoint struct {
    AccessCode *string `json:"accessCode,omitempty"`
    EntryPointFeatures []string `json:"entryPointFeatures,omitempty"`
    EntryPointType *string `json:"entryPointType,omitempty"`
    Label *string `json:"label,omitempty"`
    MeetingCode *string `json:"meetingCode,omitempty"`
    Passcode *string `json:"passcode,omitempty"`
    Password *string `json:"password,omitempty"`
    Pin *string `json:"pin,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

