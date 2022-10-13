package shared

type Resource struct {
	Annotations map[string]string `json:"annotations"`
	CreateTime  *string           `json:"createTime"`
	DeleteTime  *string           `json:"deleteTime"`
	DisplayName *string           `json:"displayName"`
	Etag        *string           `json:"etag"`
	Labels      map[string]string `json:"labels"`
	Location    *string           `json:"location"`
	Name        *string           `json:"name"`
	Service     *string           `json:"service"`
	Type        *string           `json:"type"`
	UID         *string           `json:"uid"`
	UpdateTime  *string           `json:"updateTime"`
}
