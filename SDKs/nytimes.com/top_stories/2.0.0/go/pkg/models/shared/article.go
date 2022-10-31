package shared



type ArticleMultimedia struct {
    Caption *string `json:"caption,omitempty"`
    Copyright *string `json:"copyright,omitempty"`
    Format *string `json:"format,omitempty"`
    Height *int64 `json:"height,omitempty"`
    Subtype *string `json:"subtype,omitempty"`
    Type *string `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    Width *int64 `json:"width,omitempty"`
    
}

type ArticleRelatedUrls struct {
    SuggestedLinkText *string `json:"suggested_link_text,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type Article struct {
    Abstract *string `json:"abstract,omitempty"`
    Byline *string `json:"byline,omitempty"`
    CreatedDate *string `json:"created_date,omitempty"`
    DesFacet []string `json:"des_facet,omitempty"`
    GeoFacet []string `json:"geo_facet,omitempty"`
    ItemType *string `json:"item_type,omitempty"`
    Kicker *string `json:"kicker,omitempty"`
    MaterialTypeFacet *string `json:"material_type_facet,omitempty"`
    Multimedia []ArticleMultimedia `json:"multimedia,omitempty"`
    OrgFacet []string `json:"org_facet,omitempty"`
    PerFacet []string `json:"per_facet,omitempty"`
    PublishedDate *string `json:"published_date,omitempty"`
    RelatedUrls []ArticleRelatedUrls `json:"related_urls,omitempty"`
    Section *string `json:"section,omitempty"`
    ShortURL *string `json:"short_url,omitempty"`
    Subsection *string `json:"subsection,omitempty"`
    ThumbnailStandard *string `json:"thumbnail_standard,omitempty"`
    Title *string `json:"title,omitempty"`
    UpdatedDate *string `json:"updated_date,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

