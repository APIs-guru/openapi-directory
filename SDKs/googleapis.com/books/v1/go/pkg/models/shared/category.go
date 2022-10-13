package shared

type CategoryItems struct {
	BadgeURL   *string `json:"badgeUrl"`
	CategoryID *string `json:"categoryId"`
	Name       *string `json:"name"`
}

type Category struct {
	Items []CategoryItems `json:"items"`
	Kind  *string         `json:"kind"`
}
