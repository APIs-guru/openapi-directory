package shared

type PublishRequest struct {
	Messages []PubsubMessage `json:"messages"`
}
