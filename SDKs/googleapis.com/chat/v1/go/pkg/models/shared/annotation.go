package shared

type AnnotationTypeEnum string

const (
	AnnotationTypeEnumAnnotationTypeUnspecified AnnotationTypeEnum = "ANNOTATION_TYPE_UNSPECIFIED"
	AnnotationTypeEnumUserMention               AnnotationTypeEnum = "USER_MENTION"
	AnnotationTypeEnumSlashCommand              AnnotationTypeEnum = "SLASH_COMMAND"
)

// Annotation
// Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
type Annotation struct {
	Length       *int32                `json:"length,omitempty"`
	SlashCommand *SlashCommandMetadata `json:"slashCommand,omitempty"`
	StartIndex   *int32                `json:"startIndex,omitempty"`
	Type         *AnnotationTypeEnum   `json:"type,omitempty"`
	UserMention  *UserMentionMetadata  `json:"userMention,omitempty"`
}
