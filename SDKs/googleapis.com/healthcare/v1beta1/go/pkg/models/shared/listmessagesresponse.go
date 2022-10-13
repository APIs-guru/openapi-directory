package shared

type ListMessagesResponse struct {
	Hl7V2Messages []Message `json:"hl7V2Messages"`
	NextPageToken *string   `json:"nextPageToken"`
}
