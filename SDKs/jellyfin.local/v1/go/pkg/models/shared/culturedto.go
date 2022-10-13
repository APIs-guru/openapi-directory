package shared

type CultureDto struct {
	DisplayName                 *string  `json:"DisplayName"`
	Name                        *string  `json:"Name"`
	ThreeLetterIsoLanguageName  *string  `json:"ThreeLetterISOLanguageName"`
	ThreeLetterIsoLanguageNames []string `json:"ThreeLetterISOLanguageNames"`
	TwoLetterIsoLanguageName    *string  `json:"TwoLetterISOLanguageName"`
}
