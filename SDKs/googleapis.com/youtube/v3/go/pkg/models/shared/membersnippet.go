package shared

type MemberSnippet struct {
	CreatorChannelID   *string                `json:"creatorChannelId"`
	MemberDetails      *ChannelProfileDetails `json:"memberDetails"`
	MembershipsDetails *MembershipsDetails    `json:"membershipsDetails"`
}
