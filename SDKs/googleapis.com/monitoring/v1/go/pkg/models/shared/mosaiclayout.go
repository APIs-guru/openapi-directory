package shared

type MosaicLayout struct {
	Columns *int32 `json:"columns"`
	Tiles   []Tile `json:"tiles"`
}
