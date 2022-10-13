package shared

type ArticleMultimedia struct {
	Caption   *string `json:"caption"`
	Copyright *string `json:"copyright"`
	Format    *string `json:"format"`
	Height    *int64  `json:"height"`
	Subtype   *string `json:"subtype"`
	Type      *string `json:"type"`
	URL       *string `json:"url"`
	Width     *int64  `json:"width"`
}

type ArticleRelatedUrls struct {
	SuggestedLinkText *string `json:"suggested_link_text"`
	URL               *string `json:"url"`
}

type Article struct {
	Abstract          *string              `json:"abstract"`
	Byline            *string              `json:"byline"`
	CreatedDate       *string              `json:"created_date"`
	DesFacet          []string             `json:"des_facet"`
	GeoFacet          []string             `json:"geo_facet"`
	ItemType          *string              `json:"item_type"`
	Kicker            *string              `json:"kicker"`
	MaterialTypeFacet *string              `json:"material_type_facet"`
	Multimedia        []ArticleMultimedia  `json:"multimedia"`
	OrgFacet          []string             `json:"org_facet"`
	PerFacet          []string             `json:"per_facet"`
	PublishedDate     *string              `json:"published_date"`
	RelatedUrls       []ArticleRelatedUrls `json:"related_urls"`
	Section           *string              `json:"section"`
	ShortURL          *string              `json:"short_url"`
	Subsection        *string              `json:"subsection"`
	ThumbnailStandard *string              `json:"thumbnail_standard"`
	Title             *string              `json:"title"`
	UpdatedDate       *string              `json:"updated_date"`
	URL               *string              `json:"url"`
}
