package shared

type ThumbnailDetails struct {
	High     *Thumbnail `json:"high"`
	Maxres   *Thumbnail `json:"maxres"`
	Medium   *Thumbnail `json:"medium"`
	Standard *Thumbnail `json:"standard"`
}
