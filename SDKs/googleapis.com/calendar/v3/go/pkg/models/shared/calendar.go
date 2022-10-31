package shared



type Calendar struct {
    ConferenceProperties *ConferenceProperties `json:"conferenceProperties,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Location *string `json:"location,omitempty"`
    Summary *string `json:"summary,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    
}

