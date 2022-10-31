package shared

type TagMarshaller struct {
	ID       *int64                 `json:"id,omitempty"`
	Language *TagLanguageMarshaller `json:"language,omitempty"`
	Name     *string                `json:"name,omitempty"`
	Type     *TagTypeMarshaller     `json:"type,omitempty"`
}
