package shared

type EnterpriseCrmEventbusProtoBuganizerNotification struct {
	AssigneeEmailAddress *string `json:"assigneeEmailAddress"`
	ComponentID          *string `json:"componentId"`
	TemplateID           *string `json:"templateId"`
	Title                *string `json:"title"`
}
