package shared

type MosaicLayout struct {
	Columns *int32 `json:"columns,omitempty"`
	Tiles   []Tile `json:"tiles,omitempty"`
}
