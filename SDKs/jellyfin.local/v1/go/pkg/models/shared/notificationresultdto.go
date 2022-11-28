package shared

// NotificationResultDto
// A list of notifications with the total record count for pagination.
type NotificationResultDto struct {
	Notifications    []NotificationDto `json:"Notifications,omitempty"`
	TotalRecordCount *int32            `json:"TotalRecordCount,omitempty"`
}
