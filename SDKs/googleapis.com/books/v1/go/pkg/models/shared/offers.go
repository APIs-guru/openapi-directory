package shared



type OffersItemsItems struct {
    Author *string `json:"author,omitempty"`
    CanonicalVolumeLink *string `json:"canonicalVolumeLink,omitempty"`
    CoverURL *string `json:"coverUrl,omitempty"`
    Description *string `json:"description,omitempty"`
    Title *string `json:"title,omitempty"`
    VolumeID *string `json:"volumeId,omitempty"`
    
}

type OffersItems struct {
    ArtURL *string `json:"artUrl,omitempty"`
    GservicesKey *string `json:"gservicesKey,omitempty"`
    ID *string `json:"id,omitempty"`
    Items []OffersItemsItems `json:"items,omitempty"`
    
}

type Offers struct {
    Items []OffersItems `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

