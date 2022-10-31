package shared



type ReviewAuthor struct {
    DisplayName *string `json:"displayName,omitempty"`
    
}

type ReviewSource struct {
    Description *string `json:"description,omitempty"`
    ExtraDescription *string `json:"extraDescription,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type Review struct {
    Author *ReviewAuthor `json:"author,omitempty"`
    Content *string `json:"content,omitempty"`
    Date *string `json:"date,omitempty"`
    FullTextURL *string `json:"fullTextUrl,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Rating *string `json:"rating,omitempty"`
    Source *ReviewSource `json:"source,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    VolumeID *string `json:"volumeId,omitempty"`
    
}

