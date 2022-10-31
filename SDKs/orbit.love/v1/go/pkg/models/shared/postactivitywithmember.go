package shared

type PostActivityWithMemberActivityTypeEnum string

const (
	PostActivityWithMemberActivityTypeEnumContent PostActivityWithMemberActivityTypeEnum = "content"
)

type PostActivityWithMember struct {
	ActivityType PostActivityWithMemberActivityTypeEnum `json:"activity_type"`
	Member       *Member                                `json:"member,omitempty"`
	OccurredAt   *string                                `json:"occurred_at,omitempty"`
	URL          string                                 `json:"url"`
}
