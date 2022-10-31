package shared



type NotificationResultDto struct {
    Notifications []NotificationDto `json:"Notifications,omitempty"`
    TotalRecordCount *int32 `json:"TotalRecordCount,omitempty"`
    
}

