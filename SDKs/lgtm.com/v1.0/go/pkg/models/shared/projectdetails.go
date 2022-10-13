package shared

type ProjectDetails struct {
	ID            *int64                 `json:"id"`
	Languages     []ProjectLanguageStats `json:"languages"`
	Name          *string                `json:"name"`
	URL           *string                `json:"url"`
	URLIdentifier *string                `json:"url-identifier"`
}
