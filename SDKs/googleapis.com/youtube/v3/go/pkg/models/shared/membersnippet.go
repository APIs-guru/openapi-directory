package shared

type MemberSnippet struct {
	CreatorChannelID   *string                `json:"creatorChannelId,omitempty"`
	MemberDetails      *ChannelProfileDetails `json:"memberDetails,omitempty"`
	MembershipsDetails *MembershipsDetails    `json:"membershipsDetails,omitempty"`
}
