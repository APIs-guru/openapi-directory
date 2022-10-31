package shared

type HookFields struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Event     *string `json:"event,omitempty"`
	ID        *int32  `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	URL       *string `json:"url,omitempty"`
}
