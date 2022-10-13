package shared

type DiscoveryclustersClustersBannerWithContentContainer struct {
	FillColorArgb  *string `json:"fillColorArgb"`
	ImageURL       *string `json:"imageUrl"`
	MaskColorArgb  *string `json:"maskColorArgb"`
	MoreButtonText *string `json:"moreButtonText"`
	MoreButtonURL  *string `json:"moreButtonUrl"`
	TextColorArgb  *string `json:"textColorArgb"`
}

type DiscoveryclustersClusters struct {
	BannerWithContentContainer *DiscoveryclustersClustersBannerWithContentContainer `json:"banner_with_content_container"`
	SubTitle                   *string                                              `json:"subTitle"`
	Title                      *string                                              `json:"title"`
	TotalVolumes               *int32                                               `json:"totalVolumes"`
	UID                        *string                                              `json:"uid"`
	Volumes                    []Volume                                             `json:"volumes"`
}

type Discoveryclusters struct {
	Clusters      []DiscoveryclustersClusters `json:"clusters"`
	Kind          *string                     `json:"kind"`
	TotalClusters *int32                      `json:"totalClusters"`
}
