package shared

type Article struct {
	Abstract      *string       `json:"abstract,omitempty"`
	Byline        *string       `json:"byline,omitempty"`
	Column        *string       `json:"column,omitempty"`
	DesFacet      *interface{}  `json:"des_facet,omitempty"`
	GeoFacet      *interface{}  `json:"geo_facet,omitempty"`
	Media         *interface{}  `json:"media,omitempty"`
	OrgFacet      []interface{} `json:"org_facet,omitempty"`
	PerFacet      []interface{} `json:"per_facet,omitempty"`
	PublishedDate *string       `json:"published_date,omitempty"`
	Section       *string       `json:"section,omitempty"`
	Source        *string       `json:"source,omitempty"`
	Title         *string       `json:"title,omitempty"`
	URL           *string       `json:"url,omitempty"`
}
