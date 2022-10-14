package shared

type FloodlightActivityPublisherDynamicTag struct {
	ClickThrough         *bool                         `json:"clickThrough,omitempty"`
	DirectorySiteID      *string                       `json:"directorySiteId,omitempty"`
	DynamicTag           *FloodlightActivityDynamicTag `json:"dynamicTag,omitempty"`
	SiteID               *string                       `json:"siteId,omitempty"`
	SiteIDDimensionValue *DimensionValue               `json:"siteIdDimensionValue,omitempty"`
	ViewThrough          *bool                         `json:"viewThrough,omitempty"`
}
