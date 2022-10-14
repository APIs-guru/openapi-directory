package shared

type UserMentionMetadataTypeEnum string

const (
	UserMentionMetadataTypeEnumTypeUnspecified UserMentionMetadataTypeEnum = "TYPE_UNSPECIFIED"
	UserMentionMetadataTypeEnumAdd             UserMentionMetadataTypeEnum = "ADD"
	UserMentionMetadataTypeEnumMention         UserMentionMetadataTypeEnum = "MENTION"
)

type UserMentionMetadata struct {
	Type *UserMentionMetadataTypeEnum `json:"type,omitempty"`
	User *User                        `json:"user,omitempty"`
}
