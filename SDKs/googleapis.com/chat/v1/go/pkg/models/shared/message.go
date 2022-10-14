package shared

type Message struct {
	ActionResponse *ActionResponse `json:"actionResponse,omitempty"`
	Annotations    []Annotation    `json:"annotations,omitempty"`
	ArgumentText   *string         `json:"argumentText,omitempty"`
	Attachment     []Attachment    `json:"attachment,omitempty"`
	Cards          []Card          `json:"cards,omitempty"`
	CardsV2        []CardWithID    `json:"cardsV2,omitempty"`
	CreateTime     *string         `json:"createTime,omitempty"`
	FallbackText   *string         `json:"fallbackText,omitempty"`
	LastUpdateTime *string         `json:"lastUpdateTime,omitempty"`
	MatchedURL     *MatchedURL     `json:"matchedUrl,omitempty"`
	Name           *string         `json:"name,omitempty"`
	Sender         *User           `json:"sender,omitempty"`
	SlashCommand   *SlashCommand   `json:"slashCommand,omitempty"`
	Space          *Space          `json:"space,omitempty"`
	Text           *string         `json:"text,omitempty"`
	Thread         *Thread         `json:"thread,omitempty"`
}
