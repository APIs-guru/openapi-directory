package shared

type LabelLabelListVisibilityEnum string

const (
	LabelLabelListVisibilityEnumLabelShow         LabelLabelListVisibilityEnum = "labelShow"
	LabelLabelListVisibilityEnumLabelShowIfUnread LabelLabelListVisibilityEnum = "labelShowIfUnread"
	LabelLabelListVisibilityEnumLabelHide         LabelLabelListVisibilityEnum = "labelHide"
)

type LabelMessageListVisibilityEnum string

const (
	LabelMessageListVisibilityEnumShow LabelMessageListVisibilityEnum = "show"
	LabelMessageListVisibilityEnumHide LabelMessageListVisibilityEnum = "hide"
)

type LabelTypeEnum string

const (
	LabelTypeEnumSystem LabelTypeEnum = "system"
	LabelTypeEnumUser   LabelTypeEnum = "user"
)

// Label
// Labels are used to categorize messages and threads within the user's mailbox. The maximum number of labels supported for a user's mailbox is 10,000.
type Label struct {
	Color                 *LabelColor                     `json:"color,omitempty"`
	ID                    *string                         `json:"id,omitempty"`
	LabelListVisibility   *LabelLabelListVisibilityEnum   `json:"labelListVisibility,omitempty"`
	MessageListVisibility *LabelMessageListVisibilityEnum `json:"messageListVisibility,omitempty"`
	MessagesTotal         *int32                          `json:"messagesTotal,omitempty"`
	MessagesUnread        *int32                          `json:"messagesUnread,omitempty"`
	Name                  *string                         `json:"name,omitempty"`
	ThreadsTotal          *int32                          `json:"threadsTotal,omitempty"`
	ThreadsUnread         *int32                          `json:"threadsUnread,omitempty"`
	Type                  *LabelTypeEnum                  `json:"type,omitempty"`
}
