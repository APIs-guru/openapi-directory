package shared

type CriticMultimediaResource struct {
	Credit *string `json:"credit,omitempty"`
	Height *int64  `json:"height,omitempty"`
	Src    *string `json:"src,omitempty"`
	Type   *string `json:"type,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

type CriticMultimedia struct {
	Resource *CriticMultimediaResource `json:"resource,omitempty"`
}

type Critic struct {
	Bio         *string           `json:"bio,omitempty"`
	DisplayName *string           `json:"display_name,omitempty"`
	Multimedia  *CriticMultimedia `json:"multimedia,omitempty"`
	SeoName     *string           `json:"seo_name,omitempty"`
	SortName    *string           `json:"sort_name,omitempty"`
	Status      *string           `json:"status,omitempty"`
}
