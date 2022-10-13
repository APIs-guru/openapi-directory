package shared

type SuffixOptionEnum string

const (
	SuffixOptionEnumOptionUnspecified SuffixOptionEnum = "OPTION_UNSPECIFIED"
	SuffixOptionEnumUnguessable       SuffixOptionEnum = "UNGUESSABLE"
	SuffixOptionEnumShort             SuffixOptionEnum = "SHORT"
	SuffixOptionEnumCustom            SuffixOptionEnum = "CUSTOM"
)

type Suffix struct {
	CustomSuffix *string           `json:"customSuffix"`
	Option       *SuffixOptionEnum `json:"option"`
}
