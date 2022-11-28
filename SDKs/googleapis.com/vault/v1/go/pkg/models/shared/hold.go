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

// Hold
// A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
type Hold struct {
	Accounts   []HeldAccount   `json:"accounts,omitempty"`
	Corpus     *HoldCorpusEnum `json:"corpus,omitempty"`
	HoldID     *string         `json:"holdId,omitempty"`
	Name       *string         `json:"name,omitempty"`
	OrgUnit    *HeldOrgUnit    `json:"orgUnit,omitempty"`
	Query      *CorpusQuery    `json:"query,omitempty"`
	UpdateTime *string         `json:"updateTime,omitempty"`
}
