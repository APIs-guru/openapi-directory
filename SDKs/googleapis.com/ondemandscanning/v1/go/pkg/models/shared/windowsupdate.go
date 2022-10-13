package shared

type WindowsUpdate struct {
	Categories             []Category `json:"categories"`
	Description            *string    `json:"description"`
	Identity               *Identity  `json:"identity"`
	KbArticleIds           []string   `json:"kbArticleIds"`
	LastPublishedTimestamp *string    `json:"lastPublishedTimestamp"`
	SupportURL             *string    `json:"supportUrl"`
	Title                  *string    `json:"title"`
}
