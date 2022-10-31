package shared

type Report struct {
	CreateTime    *string `json:"createTime,omitempty"`
	DownloadURL   *string `json:"downloadUrl,omitempty"`
	EndTime       *string `json:"endTime,omitempty"`
	ID            *string `json:"id,omitempty"`
	JobExpireTime *string `json:"jobExpireTime,omitempty"`
	JobID         *string `json:"jobId,omitempty"`
	StartTime     *string `json:"startTime,omitempty"`
}
