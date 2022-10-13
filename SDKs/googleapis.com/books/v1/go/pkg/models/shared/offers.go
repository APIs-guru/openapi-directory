package shared

type OffersItemsItems struct {
	Author              *string `json:"author"`
	CanonicalVolumeLink *string `json:"canonicalVolumeLink"`
	CoverURL            *string `json:"coverUrl"`
	Description         *string `json:"description"`
	Title               *string `json:"title"`
	VolumeID            *string `json:"volumeId"`
}

type OffersItems struct {
	ArtURL       *string            `json:"artUrl"`
	GservicesKey *string            `json:"gservicesKey"`
	ID           *string            `json:"id"`
	Items        []OffersItemsItems `json:"items"`
}

type Offers struct {
	Items []OffersItems `json:"items"`
	Kind  *string       `json:"kind"`
}
