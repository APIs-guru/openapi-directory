package shared

type CriticMultimediaResource struct {
	Credit *string `json:"credit"`
	Height *int64  `json:"height"`
	Src    *string `json:"src"`
	Type   *string `json:"type"`
	Width  *int64  `json:"width"`
}

type CriticMultimedia struct {
	Resource *CriticMultimediaResource `json:"resource"`
}

type Critic struct {
	Bio         *string           `json:"bio"`
	DisplayName *string           `json:"display_name"`
	Multimedia  *CriticMultimedia `json:"multimedia"`
	SeoName     *string           `json:"seo_name"`
	SortName    *string           `json:"sort_name"`
	Status      *string           `json:"status"`
}
