package shared

type Notification struct {
	Body                           *string  `json:"body,omitempty"`
	CrmExperimentIds               []string `json:"crmExperimentIds,omitempty"`
	DocID                          *string  `json:"doc_id,omitempty"`
	DocType                        *string  `json:"doc_type,omitempty"`
	DontShowNotification           *bool    `json:"dont_show_notification,omitempty"`
	IconURL                        *string  `json:"iconUrl,omitempty"`
	IsDocumentMature               *bool    `json:"is_document_mature,omitempty"`
	Kind                           *string  `json:"kind,omitempty"`
	NotificationGroup              *string  `json:"notificationGroup,omitempty"`
	NotificationType               *string  `json:"notification_type,omitempty"`
	PcampaignID                    *string  `json:"pcampaign_id,omitempty"`
	Reason                         *string  `json:"reason,omitempty"`
	ShowNotificationSettingsAction *bool    `json:"show_notification_settings_action,omitempty"`
	TargetURL                      *string  `json:"targetUrl,omitempty"`
	TimeToExpireMs                 *string  `json:"timeToExpireMs,omitempty"`
	Title                          *string  `json:"title,omitempty"`
}
