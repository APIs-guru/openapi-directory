package shared

type EnterpriseCrmEventbusProtoBuganizerNotification struct {
	AssigneeEmailAddress *string `json:"assigneeEmailAddress,omitempty"`
	ComponentID          *string `json:"componentId,omitempty"`
	TemplateID           *string `json:"templateId,omitempty"`
	Title                *string `json:"title,omitempty"`
}
