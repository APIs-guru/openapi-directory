package shared

type Channel struct {
	CreateTime           *string           `json:"createTime,omitempty"`
	ExpireTime           *string           `json:"expireTime,omitempty"`
	Labels               map[string]string `json:"labels,omitempty"`
	Name                 *string           `json:"name,omitempty"`
	Release              *Release          `json:"release,omitempty"`
	RetainedReleaseCount *int32            `json:"retainedReleaseCount,omitempty"`
	TTL                  *string           `json:"ttl,omitempty"`
	UpdateTime           *string           `json:"updateTime,omitempty"`
	URL                  *string           `json:"url,omitempty"`
}
