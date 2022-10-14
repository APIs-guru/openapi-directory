package shared

type DiscoveryclustersClustersBannerWithContentContainer struct {
	FillColorArgb  *string `json:"fillColorArgb,omitempty"`
	ImageURL       *string `json:"imageUrl,omitempty"`
	MaskColorArgb  *string `json:"maskColorArgb,omitempty"`
	MoreButtonText *string `json:"moreButtonText,omitempty"`
	MoreButtonURL  *string `json:"moreButtonUrl,omitempty"`
	TextColorArgb  *string `json:"textColorArgb,omitempty"`
}

type DiscoveryclustersClusters struct {
	BannerWithContentContainer *DiscoveryclustersClustersBannerWithContentContainer `json:"banner_with_content_container,omitempty"`
	SubTitle                   *string                                              `json:"subTitle,omitempty"`
	Title                      *string                                              `json:"title,omitempty"`
	TotalVolumes               *int32                                               `json:"totalVolumes,omitempty"`
	UID                        *string                                              `json:"uid,omitempty"`
	Volumes                    []Volume                                             `json:"volumes,omitempty"`
}

type Discoveryclusters struct {
	Clusters      []DiscoveryclustersClusters `json:"clusters,omitempty"`
	Kind          *string                     `json:"kind,omitempty"`
	TotalClusters *int32                      `json:"totalClusters,omitempty"`
}
