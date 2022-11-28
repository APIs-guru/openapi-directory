package shared

type AnalyzeEntitiesRequestLicensedVocabulariesEnum string

const (
	AnalyzeEntitiesRequestLicensedVocabulariesEnumLicensedVocabularyUnspecified AnalyzeEntitiesRequestLicensedVocabulariesEnum = "LICENSED_VOCABULARY_UNSPECIFIED"
	AnalyzeEntitiesRequestLicensedVocabulariesEnumIcd10Cm                       AnalyzeEntitiesRequestLicensedVocabulariesEnum = "ICD10CM"
	AnalyzeEntitiesRequestLicensedVocabulariesEnumSnomedctUs                    AnalyzeEntitiesRequestLicensedVocabulariesEnum = "SNOMEDCT_US"
)

// AnalyzeEntitiesRequest
// The request to analyze healthcare entities in a document.
type AnalyzeEntitiesRequest struct {
	DocumentContent      *string                                          `json:"documentContent,omitempty"`
	LicensedVocabularies []AnalyzeEntitiesRequestLicensedVocabulariesEnum `json:"licensedVocabularies,omitempty"`
}
