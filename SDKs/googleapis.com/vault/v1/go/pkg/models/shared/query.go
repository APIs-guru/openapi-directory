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

// Query
// The query definition used for search and export.
type Query struct {
	AccountInfo         *AccountInfo           `json:"accountInfo,omitempty"`
	Corpus              *QueryCorpusEnum       `json:"corpus,omitempty"`
	DataScope           *QueryDataScopeEnum    `json:"dataScope,omitempty"`
	DriveOptions        *DriveOptions          `json:"driveOptions,omitempty"`
	EndTime             *string                `json:"endTime,omitempty"`
	HangoutsChatInfo    *HangoutsChatInfo      `json:"hangoutsChatInfo,omitempty"`
	HangoutsChatOptions *HangoutsChatOptions   `json:"hangoutsChatOptions,omitempty"`
	MailOptions         *MailOptions           `json:"mailOptions,omitempty"`
	Method              *QueryMethodEnum       `json:"method,omitempty"`
	OrgUnitInfo         *OrgUnitInfo           `json:"orgUnitInfo,omitempty"`
	SearchMethod        *QuerySearchMethodEnum `json:"searchMethod,omitempty"`
	SharedDriveInfo     *SharedDriveInfo       `json:"sharedDriveInfo,omitempty"`
	SitesURLInfo        *SitesURLInfo          `json:"sitesUrlInfo,omitempty"`
	StartTime           *string                `json:"startTime,omitempty"`
	TeamDriveInfo       *TeamDriveInfo         `json:"teamDriveInfo,omitempty"`
	Terms               *string                `json:"terms,omitempty"`
	TimeZone            *string                `json:"timeZone,omitempty"`
	VoiceOptions        *VoiceOptions          `json:"voiceOptions,omitempty"`
}
