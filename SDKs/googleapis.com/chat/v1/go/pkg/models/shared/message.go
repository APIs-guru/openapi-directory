package shared

type Message struct {
	ActionResponse *ActionResponse `json:"actionResponse"`
	Annotations    []Annotation    `json:"annotations"`
	ArgumentText   *string         `json:"argumentText"`
	Attachment     []Attachment    `json:"attachment"`
	Cards          []Card          `json:"cards"`
	CardsV2        []CardWithID    `json:"cardsV2"`
	CreateTime     *string         `json:"createTime"`
	FallbackText   *string         `json:"fallbackText"`
	LastUpdateTime *string         `json:"lastUpdateTime"`
	MatchedURL     *MatchedURL     `json:"matchedUrl"`
	Name           *string         `json:"name"`
	Sender         *User           `json:"sender"`
	SlashCommand   *SlashCommand   `json:"slashCommand"`
	Space          *Space          `json:"space"`
	Text           *string         `json:"text"`
	Thread         *Thread         `json:"thread"`
}
