package shared

// SlashCommand
// A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.
type SlashCommand struct {
	CommandID *string `json:"commandId,omitempty"`
}
