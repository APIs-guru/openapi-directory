package shared



type ContactInputModel struct {
    BusinessPhone *string `json:"businessPhone,omitempty"`
    BusinessPhoneExt *string `json:"businessPhoneExt,omitempty"`
    ConferenceInfo *string `json:"conferenceInfo,omitempty"`
    HomePhone *string `json:"homePhone,omitempty"`
    MobilePhone *string `json:"mobilePhone,omitempty"`
    PreferredPhoneType *string `json:"preferredPhoneType,omitempty"`
    SkypeUsername *string `json:"skypeUsername,omitempty"`
    
}

