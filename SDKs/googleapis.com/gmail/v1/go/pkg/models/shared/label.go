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

type Label struct {
	Color                 *LabelColor                     `json:"color"`
	ID                    *string                         `json:"id"`
	LabelListVisibility   *LabelLabelListVisibilityEnum   `json:"labelListVisibility"`
	MessageListVisibility *LabelMessageListVisibilityEnum `json:"messageListVisibility"`
	MessagesTotal         *int32                          `json:"messagesTotal"`
	MessagesUnread        *int32                          `json:"messagesUnread"`
	Name                  *string                         `json:"name"`
	ThreadsTotal          *int32                          `json:"threadsTotal"`
	ThreadsUnread         *int32                          `json:"threadsUnread"`
	Type                  *LabelTypeEnum                  `json:"type"`
}
