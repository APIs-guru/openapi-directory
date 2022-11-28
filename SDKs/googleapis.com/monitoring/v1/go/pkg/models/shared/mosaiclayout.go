package shared

// MosaicLayout
// A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
type MosaicLayout struct {
	Columns *int32 `json:"columns,omitempty"`
	Tiles   []Tile `json:"tiles,omitempty"`
}
