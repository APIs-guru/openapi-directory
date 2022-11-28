package shared

type SuffixOptionEnum string

const (
	SuffixOptionEnumOptionUnspecified SuffixOptionEnum = "OPTION_UNSPECIFIED"
	SuffixOptionEnumUnguessable       SuffixOptionEnum = "UNGUESSABLE"
	SuffixOptionEnumShort             SuffixOptionEnum = "SHORT"
	SuffixOptionEnumCustom            SuffixOptionEnum = "CUSTOM"
)

// Suffix
// Short Dynamic Link suffix.
type Suffix struct {
	CustomSuffix *string           `json:"customSuffix,omitempty"`
	Option       *SuffixOptionEnum `json:"option,omitempty"`
}
