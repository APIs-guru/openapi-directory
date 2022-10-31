package shared

type ArticleWithCountTypeMediaMediaMetadata struct {
	Format *string `json:"format,omitempty"`
	Height *int64  `json:"height,omitempty"`
	URL    *string `json:"url,omitempty"`
	Width  *int64  `json:"width,omitempty"`
}

type ArticleWithCountTypeMedia struct {
	Caption       *string                                 `json:"caption,omitempty"`
	Copyright     *string                                 `json:"copyright,omitempty"`
	MediaMetadata *ArticleWithCountTypeMediaMediaMetadata `json:"media-metadata,omitempty"`
	Subtype       *string                                 `json:"subtype,omitempty"`
	Type          *string                                 `json:"type,omitempty"`
}

type ArticleWithCountType struct {
	Abstract      *string                     `json:"abstract,omitempty"`
	Byline        *string                     `json:"byline,omitempty"`
	Column        *string                     `json:"column,omitempty"`
	CountType     *string                     `json:"count_type,omitempty"`
	DesFacet      *interface{}                `json:"des_facet,omitempty"`
	GeoFacet      *interface{}                `json:"geo_facet,omitempty"`
	Media         []ArticleWithCountTypeMedia `json:"media,omitempty"`
	OrgFacet      []interface{}               `json:"org_facet,omitempty"`
	PerFacet      []interface{}               `json:"per_facet,omitempty"`
	PublishedDate *string                     `json:"published_date,omitempty"`
	Section       *string                     `json:"section,omitempty"`
	Source        *string                     `json:"source,omitempty"`
	Title         *string                     `json:"title,omitempty"`
	URL           *string                     `json:"url,omitempty"`
}
