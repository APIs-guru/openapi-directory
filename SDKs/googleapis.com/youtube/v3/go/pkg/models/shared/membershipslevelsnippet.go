package shared

type MembershipsLevelSnippet struct {
	CreatorChannelID *string       `json:"creatorChannelId"`
	LevelDetails     *LevelDetails `json:"levelDetails"`
}
