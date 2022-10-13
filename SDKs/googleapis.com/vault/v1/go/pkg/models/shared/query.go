package shared

type QueryCorpusEnum string

const (
	QueryCorpusEnumCorpusTypeUnspecified QueryCorpusEnum = "CORPUS_TYPE_UNSPECIFIED"
	QueryCorpusEnumDrive                 QueryCorpusEnum = "DRIVE"
	QueryCorpusEnumMail                  QueryCorpusEnum = "MAIL"
	QueryCorpusEnumGroups                QueryCorpusEnum = "GROUPS"
	QueryCorpusEnumHangoutsChat          QueryCorpusEnum = "HANGOUTS_CHAT"
	QueryCorpusEnumVoice                 QueryCorpusEnum = "VOICE"
)

type QueryDataScopeEnum string

const (
	QueryDataScopeEnumDataScopeUnspecified QueryDataScopeEnum = "DATA_SCOPE_UNSPECIFIED"
	QueryDataScopeEnumAllData              QueryDataScopeEnum = "ALL_DATA"
	QueryDataScopeEnumHeldData             QueryDataScopeEnum = "HELD_DATA"
	QueryDataScopeEnumUnprocessedData      QueryDataScopeEnum = "UNPROCESSED_DATA"
)

type QueryMethodEnum string

const (
	QueryMethodEnumSearchMethodUnspecified QueryMethodEnum = "SEARCH_METHOD_UNSPECIFIED"
	QueryMethodEnumAccount                 QueryMethodEnum = "ACCOUNT"
	QueryMethodEnumOrgUnit                 QueryMethodEnum = "ORG_UNIT"
	QueryMethodEnumTeamDrive               QueryMethodEnum = "TEAM_DRIVE"
	QueryMethodEnumEntireOrg               QueryMethodEnum = "ENTIRE_ORG"
	QueryMethodEnumRoom                    QueryMethodEnum = "ROOM"
	QueryMethodEnumSitesURL                QueryMethodEnum = "SITES_URL"
	QueryMethodEnumSharedDrive             QueryMethodEnum = "SHARED_DRIVE"
)

type QuerySearchMethodEnum string

const (
	QuerySearchMethodEnumSearchMethodUnspecified QuerySearchMethodEnum = "SEARCH_METHOD_UNSPECIFIED"
	QuerySearchMethodEnumAccount                 QuerySearchMethodEnum = "ACCOUNT"
	QuerySearchMethodEnumOrgUnit                 QuerySearchMethodEnum = "ORG_UNIT"
	QuerySearchMethodEnumTeamDrive               QuerySearchMethodEnum = "TEAM_DRIVE"
	QuerySearchMethodEnumEntireOrg               QuerySearchMethodEnum = "ENTIRE_ORG"
	QuerySearchMethodEnumRoom                    QuerySearchMethodEnum = "ROOM"
	QuerySearchMethodEnumSitesURL                QuerySearchMethodEnum = "SITES_URL"
	QuerySearchMethodEnumSharedDrive             QuerySearchMethodEnum = "SHARED_DRIVE"
)

type Query struct {
	AccountInfo         *AccountInfo           `json:"accountInfo"`
	Corpus              *QueryCorpusEnum       `json:"corpus"`
	DataScope           *QueryDataScopeEnum    `json:"dataScope"`
	DriveOptions        *DriveOptions          `json:"driveOptions"`
	EndTime             *string                `json:"endTime"`
	HangoutsChatInfo    *HangoutsChatInfo      `json:"hangoutsChatInfo"`
	HangoutsChatOptions *HangoutsChatOptions   `json:"hangoutsChatOptions"`
	MailOptions         *MailOptions           `json:"mailOptions"`
	Method              *QueryMethodEnum       `json:"method"`
	OrgUnitInfo         *OrgUnitInfo           `json:"orgUnitInfo"`
	SearchMethod        *QuerySearchMethodEnum `json:"searchMethod"`
	SharedDriveInfo     *SharedDriveInfo       `json:"sharedDriveInfo"`
	SitesURLInfo        *SitesURLInfo          `json:"sitesUrlInfo"`
	StartTime           *string                `json:"startTime"`
	TeamDriveInfo       *TeamDriveInfo         `json:"teamDriveInfo"`
	Terms               *string                `json:"terms"`
	TimeZone            *string                `json:"timeZone"`
	VoiceOptions        *VoiceOptions          `json:"voiceOptions"`
}
