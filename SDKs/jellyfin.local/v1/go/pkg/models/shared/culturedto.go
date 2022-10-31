package shared

type CultureDto struct {
	DisplayName                 *string  `json:"DisplayName,omitempty"`
	Name                        *string  `json:"Name,omitempty"`
	ThreeLetterIsoLanguageName  *string  `json:"ThreeLetterISOLanguageName,omitempty"`
	ThreeLetterIsoLanguageNames []string `json:"ThreeLetterISOLanguageNames,omitempty"`
	TwoLetterIsoLanguageName    *string  `json:"TwoLetterISOLanguageName,omitempty"`
}
