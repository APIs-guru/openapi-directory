package shared

type Report struct {
	CreateTime    *string `json:"createTime"`
	DownloadURL   *string `json:"downloadUrl"`
	EndTime       *string `json:"endTime"`
	ID            *string `json:"id"`
	JobExpireTime *string `json:"jobExpireTime"`
	JobID         *string `json:"jobId"`
	StartTime     *string `json:"startTime"`
}
