package shared

type EkmConnection struct {
	CreateTime       *string           `json:"createTime"`
	Etag             *string           `json:"etag"`
	Name             *string           `json:"name"`
	ServiceResolvers []ServiceResolver `json:"serviceResolvers"`
}
