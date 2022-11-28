package shared

type UserMentionMetadataTypeEnum string

const (
	UserMentionMetadataTypeEnumTypeUnspecified UserMentionMetadataTypeEnum = "TYPE_UNSPECIFIED"
	UserMentionMetadataTypeEnumAdd             UserMentionMetadataTypeEnum = "ADD"
	UserMentionMetadataTypeEnumMention         UserMentionMetadataTypeEnum = "MENTION"
)

// UserMentionMetadata
// Annotation metadata for user mentions (@).
type UserMentionMetadata struct {
	Type *UserMentionMetadataTypeEnum `json:"type,omitempty"`
	User *User                        `json:"user,omitempty"`
}
