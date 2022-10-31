package shared

type RetrievalImportanceImportanceEnum string

const (
	RetrievalImportanceImportanceEnumDefault RetrievalImportanceImportanceEnum = "DEFAULT"
	RetrievalImportanceImportanceEnumHighest RetrievalImportanceImportanceEnum = "HIGHEST"
	RetrievalImportanceImportanceEnumHigh    RetrievalImportanceImportanceEnum = "HIGH"
	RetrievalImportanceImportanceEnumLow     RetrievalImportanceImportanceEnum = "LOW"
	RetrievalImportanceImportanceEnumNone    RetrievalImportanceImportanceEnum = "NONE"
)

type RetrievalImportance struct {
	Importance *RetrievalImportanceImportanceEnum `json:"importance,omitempty"`
}
