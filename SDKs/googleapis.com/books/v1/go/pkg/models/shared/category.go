package shared



type CategoryItems struct {
    BadgeURL *string `json:"badgeUrl,omitempty"`
    CategoryID *string `json:"categoryId,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type Category struct {
    Items []CategoryItems `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

