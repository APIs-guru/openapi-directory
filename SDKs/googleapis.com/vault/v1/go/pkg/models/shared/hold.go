package shared




type HoldCorpusEnum string

const (
    HoldCorpusEnumCorpusTypeUnspecified HoldCorpusEnum = "CORPUS_TYPE_UNSPECIFIED"
HoldCorpusEnumDrive HoldCorpusEnum = "DRIVE"
HoldCorpusEnumMail HoldCorpusEnum = "MAIL"
HoldCorpusEnumGroups HoldCorpusEnum = "GROUPS"
HoldCorpusEnumHangoutsChat HoldCorpusEnum = "HANGOUTS_CHAT"
HoldCorpusEnumVoice HoldCorpusEnum = "VOICE"
)


type Hold struct {
    Accounts []HeldAccount `json:"accounts,omitempty"`
    Corpus *HoldCorpusEnum `json:"corpus,omitempty"`
    HoldID *string `json:"holdId,omitempty"`
    Name *string `json:"name,omitempty"`
    OrgUnit *HeldOrgUnit `json:"orgUnit,omitempty"`
    Query *CorpusQuery `json:"query,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

