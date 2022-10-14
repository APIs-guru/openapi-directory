package shared

type GeolayerdataCommon struct {
	Lang            *string `json:"lang,omitempty"`
	PreviewImageURL *string `json:"previewImageUrl,omitempty"`
	Snippet         *string `json:"snippet,omitempty"`
	SnippetURL      *string `json:"snippetUrl,omitempty"`
	Title           *string `json:"title,omitempty"`
}

type GeolayerdataGeoViewportHi struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type GeolayerdataGeoViewportLo struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type GeolayerdataGeoViewport struct {
	Hi *GeolayerdataGeoViewportHi `json:"hi,omitempty"`
	Lo *GeolayerdataGeoViewportLo `json:"lo,omitempty"`
}

type GeolayerdataGeo struct {
	Boundary    []string                 `json:"boundary,omitempty"`
	CachePolicy *string                  `json:"cachePolicy,omitempty"`
	CountryCode *string                  `json:"countryCode,omitempty"`
	Latitude    *float64                 `json:"latitude,omitempty"`
	Longitude   *float64                 `json:"longitude,omitempty"`
	MapType     *string                  `json:"mapType,omitempty"`
	Viewport    *GeolayerdataGeoViewport `json:"viewport,omitempty"`
	Zoom        *int32                   `json:"zoom,omitempty"`
}

type Geolayerdata struct {
	Common *GeolayerdataCommon `json:"common,omitempty"`
	Geo    *GeolayerdataGeo    `json:"geo,omitempty"`
	Kind   *string             `json:"kind,omitempty"`
}
