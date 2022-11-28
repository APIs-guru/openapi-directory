package shared

// CustomClass
// A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
type CustomClass struct {
	CustomClassID *string     `json:"customClassId,omitempty"`
	Items         []ClassItem `json:"items,omitempty"`
	Name          *string     `json:"name,omitempty"`
}
