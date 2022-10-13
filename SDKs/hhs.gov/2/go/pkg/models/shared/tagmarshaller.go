package shared

type TagMarshaller struct {
	ID       *int64                 `json:"id"`
	Language *TagLanguageMarshaller `json:"language"`
	Name     *string                `json:"name"`
	Type     *TagTypeMarshaller     `json:"type"`
}
