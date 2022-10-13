package shared

type Lien struct {
	CreateTime   *string  `json:"createTime"`
	Name         *string  `json:"name"`
	Origin       *string  `json:"origin"`
	Parent       *string  `json:"parent"`
	Reason       *string  `json:"reason"`
	Restrictions []string `json:"restrictions"`
}
