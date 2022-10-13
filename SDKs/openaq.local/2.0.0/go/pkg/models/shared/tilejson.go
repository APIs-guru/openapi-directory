package shared

type TileJSON struct {
	Attribution *string   `json:"attribution"`
	Bounds      []float64 `json:"bounds"`
	Data        []string  `json:"data"`
	Description *string   `json:"description"`
	Grids       []string  `json:"grids"`
	Legend      *string   `json:"legend"`
	Maxzoom     *int64    `json:"maxzoom"`
	Minzoom     *int64    `json:"minzoom"`
	Name        *string   `json:"name"`
	Scheme      *string   `json:"scheme"`
	Template    *string   `json:"template"`
	Tilejson    *string   `json:"tilejson"`
	Tiles       []string  `json:"tiles"`
	Version     *string   `json:"version"`
}
