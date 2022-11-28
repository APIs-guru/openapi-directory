package shared

// Job
// A job creating reports of a specific type.
type Job struct {
	CreateTime    *string `json:"createTime,omitempty"`
	ExpireTime    *string `json:"expireTime,omitempty"`
	ID            *string `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	ReportTypeID  *string `json:"reportTypeId,omitempty"`
	SystemManaged *bool   `json:"systemManaged,omitempty"`
}
