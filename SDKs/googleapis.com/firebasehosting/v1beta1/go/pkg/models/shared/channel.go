package shared

type Channel struct {
	CreateTime           *string           `json:"createTime"`
	ExpireTime           *string           `json:"expireTime"`
	Labels               map[string]string `json:"labels"`
	Name                 *string           `json:"name"`
	Release              *Release          `json:"release"`
	RetainedReleaseCount *int32            `json:"retainedReleaseCount"`
	TTL                  *string           `json:"ttl"`
	UpdateTime           *string           `json:"updateTime"`
	URL                  *string           `json:"url"`
}
