package shared

type EmailTemplate struct {
	Body            *string `json:"body,omitempty"`
	Format          *string `json:"format,omitempty"`
	From            *string `json:"from,omitempty"`
	FromDisplayName *string `json:"fromDisplayName,omitempty"`
	ReplyTo         *string `json:"replyTo,omitempty"`
	Subject         *string `json:"subject,omitempty"`
}
