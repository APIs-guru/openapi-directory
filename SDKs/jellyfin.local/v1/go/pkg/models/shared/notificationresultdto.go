package shared

type NotificationResultDto struct {
	Notifications    []NotificationDto `json:"Notifications"`
	TotalRecordCount *int32            `json:"TotalRecordCount"`
}
