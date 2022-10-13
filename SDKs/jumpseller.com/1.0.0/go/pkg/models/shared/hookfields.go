package shared

type HookFields struct {
	CreatedAt *string `json:"created_at"`
	Event     *string `json:"event"`
	ID        *int32  `json:"id"`
	Name      *string `json:"name"`
	URL       *string `json:"url"`
}
