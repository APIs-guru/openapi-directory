package shared

type CorpusQuery struct {
	DriveQuery        *HeldDriveQuery        `json:"driveQuery,omitempty"`
	GroupsQuery       *HeldGroupsQuery       `json:"groupsQuery,omitempty"`
	HangoutsChatQuery *HeldHangoutsChatQuery `json:"hangoutsChatQuery,omitempty"`
	MailQuery         *HeldMailQuery         `json:"mailQuery,omitempty"`
	VoiceQuery        *HeldVoiceQuery        `json:"voiceQuery,omitempty"`
}
