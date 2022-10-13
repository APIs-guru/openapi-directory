package shared

type HoldCorpusEnum string

const (
	HoldCorpusEnumCorpusTypeUnspecified HoldCorpusEnum = "CORPUS_TYPE_UNSPECIFIED"
	HoldCorpusEnumDrive                 HoldCorpusEnum = "DRIVE"
	HoldCorpusEnumMail                  HoldCorpusEnum = "MAIL"
	HoldCorpusEnumGroups                HoldCorpusEnum = "GROUPS"
	HoldCorpusEnumHangoutsChat          HoldCorpusEnum = "HANGOUTS_CHAT"
	HoldCorpusEnumVoice                 HoldCorpusEnum = "VOICE"
)

type Hold struct {
	Accounts   []HeldAccount   `json:"accounts"`
	Corpus     *HoldCorpusEnum `json:"corpus"`
	HoldID     *string         `json:"holdId"`
	Name       *string         `json:"name"`
	OrgUnit    *HeldOrgUnit    `json:"orgUnit"`
	Query      *CorpusQuery    `json:"query"`
	UpdateTime *string         `json:"updateTime"`
}
