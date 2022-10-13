package shared

type Article struct {
	Abstract      *string       `json:"abstract"`
	Byline        *string       `json:"byline"`
	Column        *string       `json:"column"`
	DesFacet      *interface{}  `json:"des_facet"`
	GeoFacet      *interface{}  `json:"geo_facet"`
	Media         *interface{}  `json:"media"`
	OrgFacet      []interface{} `json:"org_facet"`
	PerFacet      []interface{} `json:"per_facet"`
	PublishedDate *string       `json:"published_date"`
	Section       *string       `json:"section"`
	Source        *string       `json:"source"`
	Title         *string       `json:"title"`
	URL           *string       `json:"url"`
}
