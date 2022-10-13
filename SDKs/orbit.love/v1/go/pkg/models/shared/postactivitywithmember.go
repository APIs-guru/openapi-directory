package shared

type PostActivityWithMemberActivityTypeEnum string

const (
	PostActivityWithMemberActivityTypeEnumContent PostActivityWithMemberActivityTypeEnum = "content"
)

type PostActivityWithMember struct {
	ActivityType PostActivityWithMemberActivityTypeEnum `json:"activity_type"`
	Member       *Member                                `json:"member"`
	OccurredAt   *string                                `json:"occurred_at"`
	URL          string                                 `json:"url"`
}
