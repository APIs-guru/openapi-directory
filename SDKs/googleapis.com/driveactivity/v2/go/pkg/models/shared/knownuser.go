package shared

type KnownUser struct {
	IsCurrentUser *bool   `json:"isCurrentUser"`
	PersonName    *string `json:"personName"`
}
