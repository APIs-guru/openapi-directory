package shared

type CorpusQuery struct {
	DriveQuery        *HeldDriveQuery        `json:"driveQuery"`
	GroupsQuery       *HeldGroupsQuery       `json:"groupsQuery"`
	HangoutsChatQuery *HeldHangoutsChatQuery `json:"hangoutsChatQuery"`
	MailQuery         *HeldMailQuery         `json:"mailQuery"`
	VoiceQuery        *HeldVoiceQuery        `json:"voiceQuery"`
}
