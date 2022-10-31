package shared



type ConferenceData struct {
    ConferenceID *string `json:"conferenceId,omitempty"`
    ConferenceSolution *ConferenceSolution `json:"conferenceSolution,omitempty"`
    CreateRequest *CreateConferenceRequest `json:"createRequest,omitempty"`
    EntryPoints []EntryPoint `json:"entryPoints,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Parameters *ConferenceParameters `json:"parameters,omitempty"`
    Signature *string `json:"signature,omitempty"`
    
}

