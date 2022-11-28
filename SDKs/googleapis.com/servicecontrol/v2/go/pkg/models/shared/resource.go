package shared

// Resource
// This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.
type Resource struct {
	Annotations map[string]string `json:"annotations,omitempty"`
	CreateTime  *string           `json:"createTime,omitempty"`
	DeleteTime  *string           `json:"deleteTime,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Etag        *string           `json:"etag,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Location    *string           `json:"location,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Service     *string           `json:"service,omitempty"`
	Type        *string           `json:"type,omitempty"`
	UID         *string           `json:"uid,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}
