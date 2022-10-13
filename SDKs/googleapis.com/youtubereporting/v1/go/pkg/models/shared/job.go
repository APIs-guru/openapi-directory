package shared

type Job struct {
	CreateTime    *string `json:"createTime"`
	ExpireTime    *string `json:"expireTime"`
	ID            *string `json:"id"`
	Name          *string `json:"name"`
	ReportTypeID  *string `json:"reportTypeId"`
	SystemManaged *bool   `json:"systemManaged"`
}
