package shared

type AnnotationTypeEnum string

const (
	AnnotationTypeEnumAnnotationTypeUnspecified AnnotationTypeEnum = "ANNOTATION_TYPE_UNSPECIFIED"
	AnnotationTypeEnumUserMention               AnnotationTypeEnum = "USER_MENTION"
	AnnotationTypeEnumSlashCommand              AnnotationTypeEnum = "SLASH_COMMAND"
)

type Annotation struct {
	Length       *int32                `json:"length,omitempty"`
	SlashCommand *SlashCommandMetadata `json:"slashCommand,omitempty"`
	StartIndex   *int32                `json:"startIndex,omitempty"`
	Type         *AnnotationTypeEnum   `json:"type,omitempty"`
	UserMention  *UserMentionMetadata  `json:"userMention,omitempty"`
}
