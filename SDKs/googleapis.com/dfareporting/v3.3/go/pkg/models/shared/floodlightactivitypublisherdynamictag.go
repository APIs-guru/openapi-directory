package shared

type FloodlightActivityPublisherDynamicTag struct {
	ClickThrough         *bool                         `json:"clickThrough"`
	DirectorySiteID      *string                       `json:"directorySiteId"`
	DynamicTag           *FloodlightActivityDynamicTag `json:"dynamicTag"`
	SiteID               *string                       `json:"siteId"`
	SiteIDDimensionValue *DimensionValue               `json:"siteIdDimensionValue"`
	ViewThrough          *bool                         `json:"viewThrough"`
}
