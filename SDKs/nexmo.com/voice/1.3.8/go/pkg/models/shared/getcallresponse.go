package shared

type GetCallResponseLinksSelf struct {
	Href *string `json:"href"`
}

type GetCallResponseLinks struct {
	Self *GetCallResponseLinksSelf `json:"self"`
}

type GetCallResponse struct {
	Links            *GetCallResponseLinks `json:"_links"`
	ConversationUUID *string               `json:"conversation_uuid"`
	Direction        *DirectionEnum        `json:"direction"`
	Duration         *string               `json:"duration"`
	EndTime          *string               `json:"end_time"`
	From             *From                 `json:"from"`
	Network          *string               `json:"network"`
	Price            *string               `json:"price"`
	Rate             *string               `json:"rate"`
	StartTime        *string               `json:"start_time"`
	Status           *string               `json:"status"`
	To               *To                   `json:"to"`
	UUID             *string               `json:"uuid"`
}
