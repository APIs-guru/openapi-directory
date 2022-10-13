package shared

type Notification struct {
	Body                           *string  `json:"body"`
	CrmExperimentIds               []string `json:"crmExperimentIds"`
	DocID                          *string  `json:"doc_id"`
	DocType                        *string  `json:"doc_type"`
	DontShowNotification           *bool    `json:"dont_show_notification"`
	IconURL                        *string  `json:"iconUrl"`
	IsDocumentMature               *bool    `json:"is_document_mature"`
	Kind                           *string  `json:"kind"`
	NotificationGroup              *string  `json:"notificationGroup"`
	NotificationType               *string  `json:"notification_type"`
	PcampaignID                    *string  `json:"pcampaign_id"`
	Reason                         *string  `json:"reason"`
	ShowNotificationSettingsAction *bool    `json:"show_notification_settings_action"`
	TargetURL                      *string  `json:"targetUrl"`
	TimeToExpireMs                 *string  `json:"timeToExpireMs"`
	Title                          *string  `json:"title"`
}
