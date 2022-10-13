package shared

type Source struct {
	CreateTime  *string              `json:"createTime"`
	Description *string              `json:"description"`
	Error       *Status              `json:"error"`
	Labels      map[string]string    `json:"labels"`
	Name        *string              `json:"name"`
	UpdateTime  *string              `json:"updateTime"`
	Vmware      *VmwareSourceDetails `json:"vmware"`
}
