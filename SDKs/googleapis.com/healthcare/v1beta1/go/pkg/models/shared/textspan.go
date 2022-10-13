package shared

type TextSpan struct {
	BeginOffset *int32  `json:"beginOffset"`
	Content     *string `json:"content"`
}
