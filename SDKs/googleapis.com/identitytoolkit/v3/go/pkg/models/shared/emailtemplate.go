package shared

type EmailTemplate struct {
	Body            *string `json:"body"`
	Format          *string `json:"format"`
	From            *string `json:"from"`
	FromDisplayName *string `json:"fromDisplayName"`
	ReplyTo         *string `json:"replyTo"`
	Subject         *string `json:"subject"`
}
