package shared



type WindowsUpdate struct {
    Categories []Category `json:"categories,omitempty"`
    Description *string `json:"description,omitempty"`
    Identity *Identity `json:"identity,omitempty"`
    KbArticleIds []string `json:"kbArticleIds,omitempty"`
    LastPublishedTimestamp *string `json:"lastPublishedTimestamp,omitempty"`
    SupportURL *string `json:"supportUrl,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

