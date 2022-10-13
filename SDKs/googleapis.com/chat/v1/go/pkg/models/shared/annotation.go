package shared

type AnnotationTypeEnum string

const (
	AnnotationTypeEnumAnnotationTypeUnspecified AnnotationTypeEnum = "ANNOTATION_TYPE_UNSPECIFIED"
	AnnotationTypeEnumUserMention               AnnotationTypeEnum = "USER_MENTION"
	AnnotationTypeEnumSlashCommand              AnnotationTypeEnum = "SLASH_COMMAND"
)

type Annotation struct {
	Length       *int32                `json:"length"`
	SlashCommand *SlashCommandMetadata `json:"slashCommand"`
	StartIndex   *int32                `json:"startIndex"`
	Type         *AnnotationTypeEnum   `json:"type"`
	UserMention  *UserMentionMetadata  `json:"userMention"`
}
