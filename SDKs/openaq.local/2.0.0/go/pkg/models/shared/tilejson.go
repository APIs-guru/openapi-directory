package shared

// TileJSON
// TileJSON model.
// Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
type TileJSON struct {
	Attribution *string   `json:"attribution,omitempty"`
	Bounds      []float64 `json:"bounds,omitempty"`
	Data        []string  `json:"data,omitempty"`
	Description *string   `json:"description,omitempty"`
	Grids       []string  `json:"grids,omitempty"`
	Legend      *string   `json:"legend,omitempty"`
	Maxzoom     *int64    `json:"maxzoom,omitempty"`
	Minzoom     *int64    `json:"minzoom,omitempty"`
	Name        *string   `json:"name,omitempty"`
	Scheme      *string   `json:"scheme,omitempty"`
	Template    *string   `json:"template,omitempty"`
	Tilejson    *string   `json:"tilejson,omitempty"`
	Tiles       []string  `json:"tiles"`
	Version     *string   `json:"version,omitempty"`
}
