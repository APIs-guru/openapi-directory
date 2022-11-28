package shared

// Message
// A message in Google Chat.
type Message struct {
	ActionResponse          *ActionResponse `json:"actionResponse,omitempty"`
	Annotations             []Annotation    `json:"annotations,omitempty"`
	ArgumentText            *string         `json:"argumentText,omitempty"`
	Attachment              []Attachment    `json:"attachment,omitempty"`
	Cards                   []Card          `json:"cards,omitempty"`
	CardsV2                 []CardWithID    `json:"cardsV2,omitempty"`
	ClientAssignedMessageID *string         `json:"clientAssignedMessageId,omitempty"`
	CreateTime              *string         `json:"createTime,omitempty"`
	FallbackText            *string         `json:"fallbackText,omitempty"`
	LastUpdateTime          *string         `json:"lastUpdateTime,omitempty"`
	MatchedURL              *MatchedURL     `json:"matchedUrl,omitempty"`
	Name                    *string         `json:"name,omitempty"`
	Sender                  *User           `json:"sender,omitempty"`
	SlashCommand            *SlashCommand   `json:"slashCommand,omitempty"`
	Space                   *Space          `json:"space,omitempty"`
	Text                    *string         `json:"text,omitempty"`
	Thread                  *Thread         `json:"thread,omitempty"`
	ThreadReply             *bool           `json:"threadReply,omitempty"`
}

// MessageInput
// A message in Google Chat.
type MessageInput struct {
	ActionResponse          *ActionResponse   `json:"actionResponse,omitempty"`
	ArgumentText            *string           `json:"argumentText,omitempty"`
	Attachment              []AttachmentInput `json:"attachment,omitempty"`
	Cards                   []Card            `json:"cards,omitempty"`
	CardsV2                 []CardWithID      `json:"cardsV2,omitempty"`
	ClientAssignedMessageID *string           `json:"clientAssignedMessageId,omitempty"`
	FallbackText            *string           `json:"fallbackText,omitempty"`
	Name                    *string           `json:"name,omitempty"`
	Sender                  *UserInput        `json:"sender,omitempty"`
	SlashCommand            *SlashCommand     `json:"slashCommand,omitempty"`
	Space                   *SpaceInput       `json:"space,omitempty"`
	Text                    *string           `json:"text,omitempty"`
	Thread                  *Thread           `json:"thread,omitempty"`
}
