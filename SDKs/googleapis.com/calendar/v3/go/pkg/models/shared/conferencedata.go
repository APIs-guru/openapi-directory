package shared

type ConferenceData struct {
	ConferenceID       *string                  `json:"conferenceId"`
	ConferenceSolution *ConferenceSolution      `json:"conferenceSolution"`
	CreateRequest      *CreateConferenceRequest `json:"createRequest"`
	EntryPoints        []EntryPoint             `json:"entryPoints"`
	Notes              *string                  `json:"notes"`
	Parameters         *ConferenceParameters    `json:"parameters"`
	Signature          *string                  `json:"signature"`
}
