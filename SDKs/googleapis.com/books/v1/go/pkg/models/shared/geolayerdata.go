package shared

type GeolayerdataCommon struct {
	Lang            *string `json:"lang"`
	PreviewImageURL *string `json:"previewImageUrl"`
	Snippet         *string `json:"snippet"`
	SnippetURL      *string `json:"snippetUrl"`
	Title           *string `json:"title"`
}

type GeolayerdataGeoViewportHi struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type GeolayerdataGeoViewportLo struct {
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type GeolayerdataGeoViewport struct {
	Hi *GeolayerdataGeoViewportHi `json:"hi"`
	Lo *GeolayerdataGeoViewportLo `json:"lo"`
}

type GeolayerdataGeo struct {
	Boundary    []string                 `json:"boundary"`
	CachePolicy *string                  `json:"cachePolicy"`
	CountryCode *string                  `json:"countryCode"`
	Latitude    *float64                 `json:"latitude"`
	Longitude   *float64                 `json:"longitude"`
	MapType     *string                  `json:"mapType"`
	Viewport    *GeolayerdataGeoViewport `json:"viewport"`
	Zoom        *int32                   `json:"zoom"`
}

type Geolayerdata struct {
	Common *GeolayerdataCommon `json:"common"`
	Geo    *GeolayerdataGeo    `json:"geo"`
	Kind   *string             `json:"kind"`
}
