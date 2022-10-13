package shared

type Session struct {
	ApproximateLastUseTime *string           `json:"approximateLastUseTime"`
	CreateTime             *string           `json:"createTime"`
	CreatorRole            *string           `json:"creatorRole"`
	Labels                 map[string]string `json:"labels"`
	Name                   *string           `json:"name"`
}
