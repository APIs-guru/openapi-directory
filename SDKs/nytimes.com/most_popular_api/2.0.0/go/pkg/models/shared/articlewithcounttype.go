package shared

type ArticleWithCountTypeMediaMediaMetadata struct {
	Format *string `json:"format"`
	Height *int64  `json:"height"`
	URL    *string `json:"url"`
	Width  *int64  `json:"width"`
}

type ArticleWithCountTypeMedia struct {
	Caption       *string                                 `json:"caption"`
	Copyright     *string                                 `json:"copyright"`
	MediaMetadata *ArticleWithCountTypeMediaMediaMetadata `json:"media-metadata"`
	Subtype       *string                                 `json:"subtype"`
	Type          *string                                 `json:"type"`
}

type ArticleWithCountType struct {
	Abstract      *string                     `json:"abstract"`
	Byline        *string                     `json:"byline"`
	Column        *string                     `json:"column"`
	CountType     *string                     `json:"count_type"`
	DesFacet      *interface{}                `json:"des_facet"`
	GeoFacet      *interface{}                `json:"geo_facet"`
	Media         []ArticleWithCountTypeMedia `json:"media"`
	OrgFacet      []interface{}               `json:"org_facet"`
	PerFacet      []interface{}               `json:"per_facet"`
	PublishedDate *string                     `json:"published_date"`
	Section       *string                     `json:"section"`
	Source        *string                     `json:"source"`
	Title         *string                     `json:"title"`
	URL           *string                     `json:"url"`
}
